import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import OverlayExample from './components/Overlay.js'
import Breadcrumbs from './components/Breadcrumbs'
import Login from './components/Login'
import PopoverExample from './components/Popover'
import TreeExample from './components/Tree'

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
          <PopoverExample />
          <OverlayExample />
          <TreeExample />
        </div>
      </div>
    );
  }
}


export default App;
