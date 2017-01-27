import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import OverlayExample from './components/Overlay.js'
import Breadcrumbs from './components/Breadcrumbs'
import Login from './components/Login'
import PopoverExample from './components/Popover'
import TreeExample from './components/Tree'
import TableExample from './components/Table'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <Nav />
        </div>
        <div className='App-body'>
          <div className='sample'><Breadcrumbs /></div>
          <div className='sample'><Login /></div>
          <div className='sample'><PopoverExample /></div>
          <div className='sample'><OverlayExample /></div>
          <div className='sample'><TreeExample /></div>
          <div className='sample'><TableExample /></div>
        </div>
      </div>
    );
  }
}


export default App;
