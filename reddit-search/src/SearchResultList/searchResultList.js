import React, { Component } from 'react'

 export default class RedditData extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="results">
        <h2>{this.props.results.name}</h2>
        <img src={this.props.results.description} alt=""/>
      </div>
    )
  }
}

// export default RedditData