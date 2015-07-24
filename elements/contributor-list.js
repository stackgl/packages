const React  = require('react')

module.exports = class ContributorList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul className="list">
        {this.props.contributors.slice(0, 20).sort(shuffle).map(c => {
          return (
            <li key={`contrib:${c.name}`}>
              <a target='_blank' title={c.name} href={`https://github.com/${c.name}`}>
                <img src={c.image} />
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
}

function shuffle() {
  return Math.random() - 0.5
}
