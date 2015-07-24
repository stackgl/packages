const ContributorList = require('./contributor-list')
const React           = require('react')
const path            = require('path')
const fs              = require('fs')

module.exports = class ReadmePanel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <article className="panel">
        <div ref="readme" className="panelInner stackgl-readme"/>
      </article>
    )
  }

  componentDidUpdate() { this.fillReadme(this.props.readme || '') }
  componentDidMount()  { this.fillReadme(this.props.readme || '') }

  fillReadme(readme) {
    const repo = this.props.repo
    const el   = React.findDOMNode(this.refs.readme)
    const node = el.querySelector('.title .contrib')

    if (node) React.unmountComponentAtNode(node)

    el.innerHTML = readme

    if (!repo) return

    React.render(
      <ContributorList contributors={repo.contrib}/>
    , el.querySelector('.title .contrib'))
  }
}
