const read       = require('ecosystem-docs/read')
const sync       = require('ecosystem-docs/sync')
const highlight  = require('./highlight')
const map        = require('map-limit')
const cheerio    = require('cheerio')
const marked     = require('marked')
const mkdirp     = require('mkdirp')
const ghauth     = require('ghauth')
const mdast      = require('mdast')
const path       = require('path')
const cpr        = require('cpr')
const fs         = require('fs')

const dataLocation = path.join(__dirname, '.data')

exports.sync = function(packageMarkdown, done) {
  const repos = categoriesToRepos(parseCategories(packageMarkdown))

  ghauth({
    configName: 'ecosystem-docs',
    userAgent: 'ecosystem-docs',
    scopes: ['user']
  }, function(err, auth) {
    if (err) return done(err)

    sync(repos, {
      data: dataLocation,
      token: auth.token
    }, done)
  })
}

exports.make = function(packageMarkdown, options, done) {
  options = options || {}

  const categories = parseCategories(packageMarkdown)
  const repoList   = categoriesToRepos(categories)

  options.output = options.output || path.join(__dirname, 'dist')

  read(repoList, {
    data: dataLocation
  }, function(err, repos) {
    if (err) return done(err)

    const contribs = indexContributors(repos)

    reattachCategories(repos, categories)
    map(repos, 20, function(repo, next) {
      writeRepoJSON(repo, options, function(err) {
        if (err) return next(err)

        next(null, {
          user: repo.user,
          name: repo.name,
          stars: repo.stars,
          issues: repo.issues,
          contrib: repo.contributors,
          version: repo.package && repo.package.version || false,
          npmName: repo.package && repo.package.name || false,
          category: repo.category
        })
      })
    }, function(err, repos) {
      if (err) return done(err)

      const index = {
        repos: reposToCategories(repos),
        contributors: contribs
      }

      fs.writeFile(
        path.join(options.output, 'index.json'),
        JSON.stringify(index),
        copyAssets
      )
    })
  })

  function copyAssets(err) {
    if (err) return done(err)

    cpr(path.join(__dirname, 'static'), options.output, function(err) {
      return done(err)
    })
  }
}

function writeRepoJSON(repo, options, done) {
  const dest = path.join(options.output, repo.user, repo.name) + '.json'
  const data = {}

  mkdirp(path.dirname(dest), function(err) {
    if (err) return done(err)

    convertReadme(repo, function(err, readme) {
      if (err) return done(err)
      data.readme = readme
      fs.writeFile(dest, JSON.stringify(data), done)
    })
  })
}

function convertReadme(repo, done) {
  const ast = mdast.parse(repo.readme)

  // Remove all content before the first heading
  for (var i = 0; i < ast.children.length; i++) {
    var child = ast.children[i]
    if (child.type === 'heading') break
    ast.children.splice(i--, 1)
  }

  // Ensure there's only one <h1> in the document,
  // and that <h1/h2>'s that are code-only are at least <h3>
  for (; i < ast.children.length; i++) {
    var child = ast.children[i]
    if (child.type !== 'heading') continue
    if (child.depth === 1) child.depth = 2
    if (child.depth === 2) {
      if (child.children.length !== 1) continue
      if (child.children[0].type !== 'inlineCode') continue
      child.depth = 3
    }
  }

  marked(mdast.stringify(ast), {
    highlight: highlight
  }, function(err, html) {
    if (err) return done(err)

    var $ = cheerio.load(html)

    // Remove badges
    $('img[src*="://img.shields.io"]').remove()
    $('img[src*="://badges.github.io"]').remove()
    $('img[src*="://nodei.co"]').remove()
    $('img[src*="://david-dm.org"]').remove()
    $('img[src*="://badge.fury.io"]').remove()
    $('img[src*="://travis-ci.org"]').remove()
    $('img[src*="://secure.travis-ci.org"]').remove()

    $('h1 img').remove()

    // Resolve relative URLs in READMEs for images and anchors
    $('a:not([href^=http]):not([href^=#])').each(function(i,el) {
      var $a = $(el)
      $a.attr('href', 'http://github.com/' + repo.user + '/' + repo.name + '/blob/master/' + $a.attr('href'))
    })

    $('img:not([src^=http])').each(function(i,el) {
      var $img = $(el)
      $img.attr('src', 'https://raw.githubusercontent.com/' + repo.user + '/' + repo.name + '/master/' + $img.attr('src'))
    })

    // Guarantee that the first heading is an <h1>,
    // and wrap it up in an <a> link to the repository.
    var headings = $('h1, h2, h3, h4, h5, h6')
    if (headings && headings[0] && repo.path) {
      $(headings[0]).replaceWith($(
          '<h1 class="title">'
        + '<a target="_blank" href="https://github.com/'+repo.path+'">'
        + $(headings[0]).text()
        + '</a>'
        + '<div class="contrib"></div>'
        + '</h1>'
      ))
    }

    if (!repo.page) return done(null, $.html())

    var $iframe   = $('<iframe scrolling ="no" seamless ="seamless" src ="'+repo.page+'"></iframe>')
    var $img      = $('img')
    var replaced  = false
    var headCount = 0

    // Try and replace the first image in the first section
    // with a gh-pages iframe if present.
    $('h1, h2, h3, h4, h5, h6, img').each(function(i, el) {
      if (headCount++ !== 1 || el.name !== 'img') return
      var $el = $(el)
      if ($el.parent()[0].name === 'a') $el = $el.parent()
      $el.replaceWith($iframe)
      replaced = true
    })

    if (!replaced) {
      if (headings[1]) {
        // Insert before the second heading
        $(headings[1]).before($iframe)
      } else {
        // Or insert after the first, if there's only one
        $(headings[0]).after($iframe)
      }
    }

    done(null, $.html())
  })
}

function indexContributors(repos) {
  const contribs = []
  const avatars  = []

  repos.forEach(function(repo) {
    repo.contributors = repo.contributors.map(function(user) {
      var name = user.login
      var idx  = contribs.indexOf(name)
      if (idx !== -1) return idx
      contribs.push(name)
      avatars.push(user.avatar_url)
      return contribs.length - 1
    })
  })

  return contribs.map(function(d, i) {
    return { name: d, image: avatars[i] }
  })
}

function parseCategories(packageMarkdown) {
  const tree  = mdast.parse(String(packageMarkdown))
  const repos = {}

  var category = null

  tree.children.forEach(function(node) {
    const type = node.type

    if (type === 'heading') {
      return category = mdast
        .stringify(node)
        .replace(/^\#+/g, '')
        .trim()
    } else
    if (type !== 'list' || category === null) {
      return
    }

    repos[category] = node.children.map(function(child) {
      return mdast.stringify(child)
    })
  })

  return repos
}

function categoriesToRepos(categories) {
  return Object.keys(categories).reduce(function(memo, key) {
    const repos = categories[key]

    repos.forEach(function(repo) {
      repo.category = key
    })

    return memo.concat(repos)
  }, [])
}

function reposToCategories(repos) {
  return repos.reduce(function(categories, repo) {
    var key = repo.category
    delete repo.category
    categories[key] = categories[key] || []
    categories[key].push(repo)
    return categories
  }, {})
}

function reattachCategories(repos, categories) {
  const keys = Object.keys(categories)

  repos.forEach(function(repo) {
    keys.forEach(function(key) {
      const idx = categories[key].indexOf(repo.path)
      if (idx !== -1) repo.category = key
    })
  })

  return repos
}
