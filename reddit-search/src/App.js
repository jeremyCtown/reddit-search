import './App.css'
import React, { Component } from 'react'
import RedditSearch from './SearchForm/searchForm'
import RedditData from './SearchResultList/searchResultList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: undefined,
    }
  }

  render() {
    return (
      <div className="App">
        <RedditSearch setAppState={this.setState.bind(this)}/>

        { this.state.results ?
          <RedditData results={this.state.results} />
          :
          undefined
        }

      </div>
    )
  }
}

export default App
