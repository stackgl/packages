const fuzz         = require('fuzzaldrin').filter
const RepoListItem = require('./repo-list-item')
const config       = require('../config')
const React        = require('react')

module.exports = class RepoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { search: '' }
  }

  render() {
    var repos = this.props.repos
    if (this.state.search) {
      var filtered = fuzz(flat(repos), this.state.search, { key: 'path' })
      var content  = (
        <ul className='itemList'>
          {filtered.map(repo => {
            var selected = this.props.selected === repo.path
            return <RepoListItem selected={selected} repo={repo} key={repo.path}/>
          })}
        </ul>
      )
    } else {
      var content = (
        <ul className='categoryList'>
          {Object.keys(repos).map(category => {
            return <section key={category}>
              <h1 className='heading'>{category}</h1>
              <ul className='itemList'>
                {repos[category].map(repo => {
                  var selected = this.props.selected === repo.path
                  return <RepoListItem selected={selected} repo={repo} key={repo.path}/>
                })}
              </ul>
            </section>
          })}
        </ul>
      )
    }

    return (
      <nav className='repoList'>
        <a className='logo' href={config.home} target='_blank'>
          {config.logo()}
        </a>
        <input
          type='search'
          placeholder={`Search ${this.props.total} Packages...`}
          value={this.state.search}
          className='repoListInput'
          onChange={e => this.handleChange(e)}
        />

        {content}
      </nav>
    )
  }

  handleChange(e) {
    this.setState({ search: e.target.value || '' })
  }
}

function flat(categories) {
  return Object.keys(categories).reduce(function(memo, key) {
    return memo.concat(categories[key])
  }, [])
}
