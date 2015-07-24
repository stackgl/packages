const React  = require('react')

module.exports = class RepoListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const repo = this.props.repo
    const name = <span key={`${repo.path}.name`} className='name'>{repo.name}</span>
    const vers = <span key={`${repo.path}.vers`} className='version'>{repo.version}</span>

    var classes = 'repoListItem'
    if (this.props.selected) classes += ' ' + 'itemSelected'

    return (
      <li className={classes}>
        <a className='link' href='#' onClick={e => this.handleClick(e)}>
          {repo.version ? [name, vers] : name}
        </a>
      </li>
    )
  }

  handleClick(e) {
    e.preventDefault()
    e.stopPropagation()
    window.location.hash = this.props.repo.path
  }
}
