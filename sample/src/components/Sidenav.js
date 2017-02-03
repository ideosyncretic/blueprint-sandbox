import React, {Component} from 'react'
import { Link } from 'react-router'
import * as Blueprint from '@blueprintjs/core'
import './Sidenav.css'

const { Menu, MenuItem, MenuDivider } = Blueprint;

class Sidenav extends Component {
     render() {
        return (
            <Menu className='pt-menu pt-large sidenav'>

                <MenuItem
                  iconName='pt-icon-dashboard'
                  text='Dashboard'
                  href="/#/dashboard" />
                <MenuDivider />

                <MenuItem
                    iconName='pt-icon-document'
                    text='Invoices'
                    href="/#/draft" />
                <MenuItem
                    iconName='pt-icon-draw'
                    text='Debtors' />
                <MenuItem
                  iconName='pt-icon-timeline-bar-chart'
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
