const Highlights = require('highlights')
const cheerio    = require('cheerio')
const languages  = {
  javascript: require.resolve('language-javascript/package.json'),
  bash: require.resolve('language-shellscript/package.json'),
  json: require.resolve('language-json/package.json'),
  glsl: require.resolve('language-glsl/package.json'),
  html: require.resolve('language-html/package.json'),
  css: require.resolve('language-css/package.json')
}

module.exports = highlight

const highlighter = new Highlights
Object.keys(languages).forEach(function (name) {
  return highlighter.requireGrammarsSync({
    modulePath: languages[name]
  })
})

function highlight (code, lang, done) {
  if (!lang) return done(null, code)
  if (lang === 'bash') lang = 'shell'
  if (lang === 'sh') lang = 'shell'
  if (lang === 'javascript') lang = 'js'

  var result = highlighter.highlightSync({
    fileContents: code.replace(/\n$/g, ''),
    scopeName: 'source.' + lang
  })

  result = cheerio.load(result)('.editor').html()

  done(null, result.trim())
}
