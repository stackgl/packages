const meta  = require('./dist/index.json')
const React = require('react')
const xhr   = require('xhr')
const path  = require('path')
const fs    = require('fs')

const ReadmePanel = require('./elements/readme-panel')
const RepoList    = require('./elements/repo-list')

const intro = fs.readFileSync(
  path.join(__dirname, 'dist', 'intro.html')
, 'utf8')

require('insert-css')(require('stackgl-readme-css'))

determineTotalCount(meta)
unindexContributors(meta)
flattenRepoList(meta)
render()
window.addEventListener('hashchange', render)

function render () {
  const repo     = String(window.location.hash).slice(1)
  const uri      = repo + '.json'
  const json     = true
  const repoData = lookupRepo(meta.flat, repo)

  if (uri.length <= 5) return ready(intro)

  xhr({ uri, json }, function (err, res, body) {
    if (err) throw err
    ready(body.readme)
  })

  function ready (readme) {
    React.render(
      <main className='main'>
        <RepoList selected={repo} total={meta.count} repos={meta.repos}/>
        <ReadmePanel repo={repoData} readme={readme}/>
      </main>
    , document.body)
    window.scrollTo(0, 0)
  }
}

function unindexContributors (meta) {
  Object.keys(meta.repos).forEach(function (key) {
    meta.repos[key].forEach(function (repo) {
      repo.path = [repo.user, repo.name].join('/')
      repo.contrib = repo.contrib.map(function (i) {
        return meta.contributors[i]
      })
    })
  })
}

function flattenRepoList (meta) {
  meta.flat = Object.keys(meta.repos).reduce(function(memo, key) {
    return memo.concat(meta.repos[key])
  }, [])
}

function determineTotalCount (meta) {
  meta.count = Object.keys(meta.repos).reduce(function (memo, key) {
    return memo + meta.repos[key].length
  }, 0)
}

function lookupRepo (list, path) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].path === path) {
      return list[i]
    }
  }
}
