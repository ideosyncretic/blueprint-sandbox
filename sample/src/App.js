import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
// import Overlay from './Overlay.js'
import Breadcrumbs from './components/Breadcrumbs'
import Login from './components/Login'
import Popover from './components/Popover'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <Nav />
        </div>
        <div className='App-body'>
          <Breadcrumbs />
          <Login />
          <Popover />
        </div>
      </div>
    );
  }
}


export default App;
