require('node-jsx').install()

const sync    = require('./build').sync
const config  = require('./config')
const request = require('request')
const path    = require('path')
const fs      = require('fs')

request.get(config.wiki, function(err, res, body) {
  if (err) throw err

  fs.writeFileSync(path.join(__dirname, 'packages.md'), body)

  sync(body, function(err, repos) {
    if (err) throw err
    console.log(repos.length + ' repos updated')
  })
})
