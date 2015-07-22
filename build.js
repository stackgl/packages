var debug      = require('debug')('stackgl:packages:log')
var warn       = require('debug')('stackgl:packages:warn')
var pygmentize = require('pygmentize-bundled')
var cheerio    = require('cheerio')
var map        = require('map-limit')
var request    = require('request')
var ghauth     = require('ghauth')
var marked     = require('marked')
var mkdirp     = require('mkdirp')
var path       = require('path')
var fs         = require('fs')

var src = 'https://raw.githubusercontent.com/wiki/stackgl/packages/Packages.md'
var builddir = path.join(__dirname, 'build')
var avatars = {}
var authors = []
var token

ghauth({
  configName: 'stackgl-packages'
}, function(err, auth) {
  if (err) throw err
  token = auth.token

  request.get(src, function(err, res, data) {
    if (err) throw err

    map(getRepos(data), 4, function(repo, next) {
      checkRepo(repo, function(err) {
        if (err) return next(err)
        getReadme(repo, function(err) {
          if (err) return next(err)
          debug('repo', [repo.user, repo.name].join('/'))
          next(null, repo)
        })
      })
    }, function(err, repos) {
      if (err) throw err

      mkdirp.sync(builddir)
      fs.writeFileSync(
          path.join(builddir, 'repos.json')
        , JSON.stringify(categorize(repos))
      )

      fs.writeFileSync(
          path.join(builddir, 'contributors.json')
        , JSON.stringify(authors.map(function(name) {
          return { name: name, img: avatars[name] }
        }))
      )

      var readme = fs.readFileSync(
        path.join(__dirname, 'README.md')
      , 'utf8')

      formatReadme(readme, false, false, function(err, html) {
        if (err) throw err

        fs.writeFileSync(
            path.join(builddir, 'main.json')
          , JSON.stringify({ content: html })
        )
      })
    })
  })
})


function getRepos(str) {
  var tokens   = marked.Lexer.lex(str)
  var inList   = false
  var repos    = []
  var category = null

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]
    if (token.type === 'heading') {
      category = token.text
    } else
    if (token.type === 'list_item_start') {
      inList = true
    } else
    if (token.type === 'list_item_end') {
      inList = false
    } else
    if (inList) {
      repos.push({
          user: null
        , name: token.text
        , category: category
      })
    }
  }

  return repos.filter(function(repo) {
    return /^[^\/]+\/[^\/]+$/.test(repo.name)
  }).map(function(repo) {
    var split = repo.name.split('/')

    repo.user = split[0]
    repo.name = split[1]

    return repo
  })
}

function checkRepo(target, next) {
  var page = 'http://' + target.user + '.github.io/' + target.name
  var repo = 'http://github.com/' + target.user + '/' + target.name

  debug('HEAD', page)
  target.repo = repo

  request.head(page, function(err, res) {
    target.uri = !err && res.statusCode !== 404
      ? res.request.href
      : null

    var uri = [
        'https://api.github.com/repos'
      , target.user
      , target.name
      , 'stats/contributors'
    ].join('/')

    request.get(uri, {
        json: true
      , headers: {
          'User-Agent': 'stack.gl packages aggregator'
        , 'Authorization': 'token ' + token
      }
    }, function(err, res, contributors) {
      if (err) return next(err)

      if (!Array.isArray(contributors)) {
        target.contrib = []
        warn('MISSING CONTRIBUTOR STATS: %s', repo)
        return next(null, target)
      }

      target.contrib = contributors.sort(function(a, b) {
        return b.total - a.total
      }).map(function(a) {
        // store avatar URLs for later
        avatars[a.author.login] = a.author.avatar_url

        // indexed author list for smaller payload
        var user = a.author.login
        var idx  = authors.indexOf(user)
        if (idx !== -1) return idx
        authors.push(user)
        return authors.length - 1
      })

      next(null, target)
    })
  })
}

function getReadme(target, next) {
  var dst = path.resolve(__dirname, 'build', target.user, target.name + '.html')
  var readme = [
      'https://api.github.com/repos'
    , target.user
    , target.name
    , 'readme'
  ].join('/')

  request.get(readme, {
      json: true
    , headers: {
        'User-Agent': 'stack.gl packages aggregator'
      , 'Authorization': 'token ' + token
    }
  }, function(err, res, body) {
    var remaining = res.headers['x-ratelimit-remaining']

    debug('GET %s %s', res.statusCode, readme)
    debug('requests remaining: %s', remaining || 0)

    if (err) return next(err)
    if (res.statusCode === 403 || !body.content) {
      return next(new Error('['+target.user+'/'+target.name+'] ' + body.message))
    }

    body = new Buffer(body.content, 'base64').toString()

    formatReadme(body, target.uri, target, function(err, content) {
      if (err) return next(err)

      mkdirp(path.dirname(dst), function(err) {
        if (err) return next(err)

        fs.writeFile(dst, content, next)
      })
    })
  })
}

function formatReadme(body, uri, target, done) {
  marked(body, {
    highlight: function(code, lang, done) {
      if (!lang) return done(null, code)
      pygmentize({ lang: lang, format: 'html' }, code, function(err, result) {
        result = String(result)
        result = cheerio.load(result)('.highlight > pre').html() || ''
        result = result.trim()
        done(err, result)
      })
    }
  }, function(err, content) {
    if (err) return done(err)

    var replaced = false

    content = content.replace(/<\!--\s+?iframe\:(.*)\s+?-->/g, function(_, uri) {
      replaced = true
      return '<iframe scrolling="no" seamless="seamless" src="'+uri.trim()+'"></iframe>'
    })

    var $ = cheerio.load(content)

    // Remove badges
    $('img[src*="://img.shields.io"]').remove()
    $('img[src*="://badges.github.io"]').remove()
    $('img[src*="://nodei.co"]').remove()
    $('img[src*="://david-dm.org"]').remove()
    $('img[src*="://badge.fury.io"]').remove()
    $('img[src*="://travis-ci.org"]').remove()
    $('img[src*="://secure.travis-ci.org"]').remove()
    $('h1 img').remove()

    $('a:not([href^=http]):not([href^=#])').each(function(i,el) {
      var $a = $(el)
      $a.attr( 'href', 'http://github.com/'+target.user+'/'+target.name+'/blob/master/'+$a.attr('href') )
    })

    $('img:not([src^=http])').each(function(i,el) {
      var $img = $(el)
      $img.attr( 'src', 'https://raw.githubusercontent.com/' + target.user + '/' + target.name + '/master/' + $img.attr('src') )
    })

    var headings = $('h1, h2, h3, h4, h5, h6')

    if (target && headings && headings[0]) {
      var $h = $(headings[0])
      $h.html('<a target="_blank" href="http://github.com/'+target.user+'/'+target.name+'">'+$h.html()+'</a>')
    }

    if (!replaced && uri) {
      var iframe = $('<iframe scrolling="no" seamless="seamless" src="'+uri+'"></iframe>')
      var img = $('img')
      var headingCount = 0

      // Replace the first image between the first and
      // second headers with the iframe, if possible
      $('h1, h2, h3, h4, h5, h6, img').each(function(i, el) {
        if (headingCount++ === 1 && el.name === 'img') {
          var $el = $(el)
          if ($el.parent()[0].name === 'a') $el = $el.parent()
          $el.replaceWith(iframe)
          replaced = true
        }
      })

      if (!replaced) {
        if (headings[1]) {
          // Insert before the second heading
          $(headings[1]).before(iframe)
        } else {
          // Insert or after the first, if there's only one
          $(headings[0]).after(iframe)
        }
      }
    }

    done(null, $.html())
  })
}

function categorize(repos) {
  return repos.reduce(function(repos, repo) {
    var cat = repo.category; delete repo.category
    repos[cat] = repos[cat] || []
    repos[cat].push(repo)
    return repos
  }, {})
}
