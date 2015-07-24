const React = require('react')

// URL to download the wiki packages list from
exports.wiki = 'https://raw.githubusercontent.com/wiki/stackgl/packages/Packages.md'

// JSX for logo, to be placed at the top of the sidebar
exports.logo = function () {
  return <h1>#stack<span className="light">gl</span></h1>
}
