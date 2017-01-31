import React, {Component} from 'react'
import * as Blueprint from '@blueprintjs/core'
import Menu from './Menu.js'
import './Menu.css'

const { Popover, Button, Position, PopoverInteractionKind } = Blueprint;

class PopoverMenu extends Component {
     render() {
        return (
          <Popover content={<Menu>...</Menu>} position={Position.RIGHT_TOP} interactionKind={PopoverInteractionKind.CLICK}>
            <Button iconName="more" text="Click for Object Actions" />
          </Popover>
        );
    }

     handleClick(e) {
        console.log(`clicked ${e.target.text}`)
    }
}

export default PopoverMenu
