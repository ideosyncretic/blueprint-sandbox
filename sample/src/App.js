import React, { Component } from 'react';
import './App.css';
import * as Blueprint from '@blueprintjs/core'

import Nav from './components/Nav'
import Sidenav from './components/Sidenav'
import OverlayExample from './components/Overlay.js'
import Breadcrumbs from './components/Breadcrumbs'
import Login from './components/Login'
import PopoverExample from './components/Popover'
import TreeExample from './components/Tree'
// import TableExample from './components/Table'
import TableCSS from './components/TableCSS'
import MenuExample from './components/Menu'
import PopoverMenu from './components/PopoverMenu'
// import DatePickerExample from './components/DatePickerExample'
import ToasterExample from './components/Toaster'
import TagExample from './components/Tag'
import RemovableTag from './components/TagRemovable'

class App extends Component {
  render () {
    return (
      <div className="App">

        <div className="App-header">
          <Nav className='nav' />
        </div>

        <div className='App-body'>

          <div className='sidenav'><Sidenav /></div>

          <div className='page'>
            {this.props.children}
          </div>

        </div>

      </div>
    );
  }
}


export default App;
