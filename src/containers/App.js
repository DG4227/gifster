import React, { Component } from 'react';
import GifsTemp from '../components/GifsTemp'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../'
// import './App.css';
// import SearchBar from './components/searchBar.js'
// import GifList from './components/gifList.js'
// import request from 'superagent';

class App extends Component {
  render() {
    return ( 
      <div> 
        <GifsTemp gifs={ this.props.gifs } />
      </div>
      )
    } 
  }


  function mapStateToProps(state) {
    return {
      gifs: state.gifs
    }
  }


export default connect(mapStateToProps)(App)


