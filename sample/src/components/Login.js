import React, {Component} from 'react'
import './Login.css'
import * as Blueprint from '@blueprintjs/core'

class Login extends Component {
  render () {
    return (
      <div className='pt-control-group pt-vertical login'>
        <div className='pt-input-group pt-large'>
          <span className='pt-icon pt-icon-person'></span>
          <input type='text' className='pt-input' placeholder='Email' />
        </div>
        <div className='pt-input-group pt-large'>
          <span className='pt-icon pt-icon-lock'></span>
          <input type='password' className='pt-input' placeholder='Password' />
        </div>
        <Blueprint.Button className='pt-button pt-large pt-intent-primary'>Login</Blueprint.Button>
      </div>
    )
  }
}

export default Login
