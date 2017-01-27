import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'
// import Overlay from './Overlay.js'
import Breadcrumbs from './Breadcrumbs'
import Login from './Login'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <Nav />
          <Breadcrumbs />
          <Login />
        </div>
      </div>
    );
  }
}


export default App;
