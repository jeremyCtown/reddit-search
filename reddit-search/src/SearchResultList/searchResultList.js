import React, { Component } from 'react'

 export default class RedditData extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="results">
        <h2>{this.props.results.title}</h2>
        <a href={this.props.results.url} alt=""><p>{this.props.results.ups}</p></a>
      </div>
    )
  }
}

// export default RedditData