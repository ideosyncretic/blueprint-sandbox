import React, { Component } from 'react';
import OverlayExample from '../components/Overlay.js'

class Dashboard extends Component {
  render () {
    return (
      <div className="dashboard">
            <div className='sample-component'><OverlayExample /></div>
      </div>
    );
  }
}


export default Dashboard;
