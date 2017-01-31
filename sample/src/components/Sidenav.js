import React, {Component} from 'react'
import * as Blueprint from '@blueprintjs/core'
import './Sidenav.css'

const { Menu, MenuItem, MenuDivider } = Blueprint;

class Sidenav extends Component {
     render() {
        return (
            <Menu className='pt-menu pt-elevation-1 pt-large sidenav' style={{backgroundColor: '#F5F8FA'}}>
                <MenuItem
                    iconName='pt-icon-dashboard'
                    onClick={this.handleClick}
                    text='Dashboard' />
                  <MenuDivider />
                <MenuItem
                    iconName='pt-icon-document'
                    onClick={this.handleClick}
                    text='Invoices' />
                <MenuItem
                    iconName='pt-icon-draw'
                    onClick={this.handleClick}
                    text='Debtors' />
                <MenuItem
                  iconName='pt-icon-timeline-bar-chart'
                  onClick={this.handleClick}
                  text='Reports' />
                <MenuDivider />
                <MenuItem iconName='dollar' text='Instant Financing'/>
                <MenuItem iconName='pt-icon-geosearch' text='Credit Search'/>
            </Menu>
        );
    }

     handleClick(e) {
        console.log(`clicked ${e.target.text}`)
    }
}

export default Sidenav
