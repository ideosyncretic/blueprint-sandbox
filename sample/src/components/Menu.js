import React, {Component} from 'react'
import * as Blueprint from '@blueprintjs/core'
import './Menu.css'

const { Menu, MenuItem, MenuDivider } = Blueprint;

class MenuExample extends Component {
     render() {
        return (
            <Menu className='pt-menu pt-elevation-1 menu'>
                <MenuItem
                    iconName='people'
                    onClick={this.handleClick}
                    text='Share' />
                <MenuItem
                    iconName='circle-arrow-right'
                    onClick={this.handleClick}
                    text='Move' />
                <MenuItem
                    iconName='edit'
                    onClick={this.handleClick}
                    text='Rename' />
                <MenuDivider />
                <MenuItem text='Delete' iconName='trash' className='pt-intent-danger' />
            </Menu>
        );
    }

     handleClick(e) {
        console.log(`clicked ${e.target.text}`)
    }
}

export default MenuExample
