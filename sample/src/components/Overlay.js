import React, {Component} from 'react'
import * as Blueprint from "@blueprintjs/core";

class Overlay extends Component {
  constructor (props) {
    super (props);

    this.state = {
      isOpen: false
    }
  }
  render () {
    return (
      <div>
        <Blueprint.Button text="Show overlay" onClick={this.toggleOverlay} />
        <Blueprint.Overlay isOpen={this.state.isOpen} onClose={this.toggleOverlay}>
            Overlaid contents...
        </Blueprint.Overlay>
      </div>
    )
  }
}

export default Overlay
