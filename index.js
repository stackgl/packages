require('insert-css')(require('stackgl-readme-css'))

var findup    = require('findup-element')
var minstache = require('minstache')
var xhr       = require('xhr')
var fs        = require('fs')

var template = minstache.compile(fs.readFileSync(__dirname + '/list.html', 'utf8'))
var main     = require('./build/main.json').content
var repos    = require('./build/repos.json')

var readme = document.getElementById('package-readme')
var list   = document.getElementById('package-list')
var title  = list.querySelector('h1')

var categories = Object.keys(repos).map(function(k) {
  return { name: k, repos: repos[k] }
})

readme.innerHTML = main

list.innerHTML = template({ categories: categories })
list.addEventListener('click', function(e) {
  var el = findup(e.target, function(el) {
    return el.hasAttribute('data-user')
  })

  if (!el) return

  var user = el.getAttribute('data-user')
  var name = el.getAttribute('data-name')
  var uri  = ['build', user, name].join('/') + '.html'

  xhr({ uri: uri }, function(err, res, body) {
    if (err) throw err
    window.scrollTo(0, 0)
    readme.innerHTML = body
  })

  e.preventDefault()
  e.stopPropagation()
  return false
}, false)
