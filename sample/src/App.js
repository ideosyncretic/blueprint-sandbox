import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import OverlayExample from './components/Overlay.js'
import Breadcrumbs from './components/Breadcrumbs'
import Login from './components/Login'
import PopoverExample from './components/Popover'
import TreeExample from './components/Tree'
// import TableExample from './components/Table'
import MenuExample from './components/Menu'
import PopoverMenu from './components/PopoverMenu'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <Nav />
        </div>
        <div className='App-body'>
          <div className='sidebar'><TreeExample /></div>
        </div>
        <div className='contents'>
          <div className='sample-component'><Breadcrumbs /></div>
          <div className='sample-component'><Login /></div>
          <div className='sample-component'><PopoverExample /></div>
          <div className='sample-component'><OverlayExample /></div>
          <div className='sample-component'><MenuExample /></div>
          <div className='sample-component'><PopoverMenu /></div>
        </div>
      </div>
    );
  }
}


export default App;
