import React, {Component} from 'react'
import * as Blueprint from '@blueprintjs/core'
import Menu from './Menu.js'
const { Button, Popover, Position, PopoverInteractionKind } = Blueprint

class Nav extends Component {
  render () {
    return (
      <nav className="pt-navbar" style={{backgroundColor: '#F5F8FA'}}>
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading logo"><img src='https://cdn.frontify.com/api/screen/thumbnail/_QrmSF3nImkgDDNl6RTGS-dzV43I1RYnsIg0PyJuikJFKbIqrSq1BfNPt0QqNiLI6dDJXJ2oKJdRXAsyujCkNw/471' style={{width: '110px'}} alt='finaxar-logo'/></div>
        </div>
        <div className="pt-navbar-group pt-align-right">
          <div className='pt-input-group'>
            <span className='pt-icon pt-icon-search'></span>
            <input className="pt-input" placeholder="Search invoices..." type="text" />
          </div>
          <Button className="pt-button pt-minimal pt-icon-document">Invoices</Button>
          <span className="pt-navbar-divider"></span>

          <Popover content={<Menu>...</Menu>} position={Position.BOTTOM_RIGHT} interactionKind={PopoverInteractionKind.HOVER}>
          <Button className="pt-button pt-minimal pt-icon-user"></Button></Popover>
          <Button className="pt-button pt-minimal pt-icon-notifications"></Button>

          <Popover content={<Menu>...</Menu>} position={Position.BOTTOM_RIGHT} interactionKind={PopoverInteractionKind.HOVER}>
            <Button className="pt-button pt-minimal pt-icon-cog"></Button>
          </Popover>

        </div>
      </nav>
    )
  }
}

export default Nav
