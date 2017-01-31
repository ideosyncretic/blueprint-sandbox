import React, {Component} from 'react'
import * as Blueprint from "@blueprintjs/core";
import './Overlay.css'

const { Button, Overlay } = Blueprint

class OverlayExample extends Component {
  constructor (props) {
    super (props);

    this.state = {
      isOpen: false
    }
    this.toggleOverlay = this.toggleOverlay.bind(this)
  }

  toggleOverlay () {
    let previous = this.state.isOpen
    this.setState ({
      isOpen: !previous
    })
  }

  render () {
    return (
      <div>
        <Button text="Show session timeout overlay" onClick={this.toggleOverlay} />
        <Overlay isOpen={this.state.isOpen} onClose={this.toggleOverlay} canEscapeKeyClose={true} canOutsideClickClose={false}>

          <div className="pt-dialog pt-elevation-4 docs-overlay-example-transition pt-overlay-content">

            <div className="pt-dialog-header">
              <h5>Hey Hitendra, are you still there?</h5>
            </div>

            <div className="pt-dialog-body">
              <div className='pt-control-group pt-vertical login'>
                <div className='pt-input-group pt-large'>
                  <span className='pt-icon pt-icon-lock'></span>
                  <input type='password' className='pt-input' placeholder='Password' />
                </div>
                <Blueprint.Button className='pt-button pt-large pt-intent-primary' onClick={this.toggleOverlay}>Login</Blueprint.Button>
              </div>
            </div>

          </div>

        </Overlay>
      </div>
    )
  }
}

export default OverlayExample
