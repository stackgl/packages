require('insert-css')(require('stackgl-readme-css'))

var findup    = require('findup-element')
var minstache = require('minstache')
var xhr       = require('xhr')
var fs        = require('fs')

var template = minstache.compile(fs.readFileSync(__dirname + '/list.html', 'utf8'))
var contemp  = minstache.compile(fs.readFileSync(__dirname + '/contributors.html', 'utf8'))
var authors  = require('./build/contributors.json')
var main     = require('./build/main.json').content
var repos    = require('./build/repos.json')

var readme = document.getElementById('package-readme')
var list   = document.getElementById('package-list')
var title  = list.querySelector('h1')

var repoIndex  = {}
var categories = Object.keys(repos).map(function(k) {
  return { name: k, repos: repos[k] }
})

categories.forEach(function(category) {
  category.repos.forEach(function(repo) {
    repoIndex[repo.user] = repoIndex[repo.user] || {}
    repoIndex[repo.user][repo.name] = repo
    repo.contrib = repo.contrib.map(function(d) {
      return authors[d]
    })
  })
})

updateBody()
window.addEventListener('hashchange', updateBody, false)

list.innerHTML = template({ categories: categories })
list.addEventListener('click', function(e) {
  var el = findup(e.target, function(el) {
    return el.hasAttribute('data-user')
  })

  if (!el) return

  var user = el.getAttribute('data-user')
  var name = el.getAttribute('data-name')

  window.location = '#' + [user, name].join('/')

  e.preventDefault()
  e.stopPropagation()
  return false
}, false)

function updateBody() {
  var location = String(window.location.hash).replace('#', '')
  if (!location) return readme.innerHTML = main

  var arr = location.split('/')
  var user = arr[0]
  var name = arr[1]
  var uri = ['build', user, name].join('/') + '.html'
  var repo = repoIndex[user][name]

  xhr({ uri: uri }, function(err, res, body) {
    if (err) throw err

    [user, name].join('/')

    window.scrollTo(0, 0)
    readme.innerHTML = body
    addContributors(readme, repo.contrib)
  })
}

function addContributors(readme, contributors) {
  var h1 = readme.querySelector('h1, h2, h3, h4, h5, h6')
  h1.innerHTML = '<span class="title-inner">' + h1.innerHTML + '</span>'

  var credits = h1.appendChild(document.createElement('div'))

  credits.setAttribute('class', 'credits')
  contributors.sort(function(a, b) {
    return Math.random() - 0.5
  })

  contributors = contributors.slice(0, 20)
  contributors.forEach(function(contrib) {
    var uri = 'https://github.com/' + contrib.name
    var a   = document.createElement('a')

    a.setAttribute('style', 'background-image:url('+contrib.img+')')
    a.setAttribute('class', 'credit-image')
    a.setAttribute('target', '_blank')
    a.setAttribute('title', contrib.name)
    a.setAttribute('href', uri)

    credits.appendChild(a)
  })
}
