require('node-jsx').install()

const make      = require('./build').make
const highlight = require('./highlight')
const marked    = require('marked')
const path      = require('path')
const fs        = require('fs')

const intro = fs.readFileSync(path.join(__dirname, 'intro.md'), 'utf8')
const file  = fs.readFileSync(path.join(__dirname, 'packages.md'), 'utf8')

make(file, {}, function(err) {
  if (err) throw err

  marked(intro, {
    highlight: highlight
  }, function(err, html) {
    if (err) throw err

    fs.writeFileSync(path.join(__dirname, 'dist', 'intro.html'), html)
  })
})
