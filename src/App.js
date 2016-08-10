import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar.js'
import GifList from './components/gifList.js'
import request from 'superagent';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: []
    }

  this.handleTermChange = this.handleTermChange.bind(this);

  }


  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar onTermChange={this.handleTermChange}/>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;


