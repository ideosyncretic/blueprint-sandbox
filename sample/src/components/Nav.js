import React, {Component} from 'react'

class Nav extends Component {
  render () {
    return (
      <nav className="pt-navbar .pt-fixed-top" style={{backgroundColor: '#F5F8FA'}}>
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading logo"><img src='https://cdn.frontify.com/api/screen/thumbnail/_QrmSF3nImkgDDNl6RTGS-dzV43I1RYnsIg0PyJuikJFKbIqrSq1BfNPt0QqNiLI6dDJXJ2oKJdRXAsyujCkNw/471' style={{width: '110px'}}/></div>
        </div>
        <div className="pt-navbar-group pt-align-right">
          <div className='pt-input-group'>
            <span className='pt-icon pt-icon-search'></span>
            <input className="pt-input" placeholder="Search files..." type="text" />
          </div>
          <button className="pt-button pt-minimal pt-icon-home">Home</button>
          <button className="pt-button pt-minimal pt-icon-document">Files</button>
          <span className="pt-navbar-divider"></span>
          <button className="pt-button pt-minimal pt-icon-user"></button>
          <button className="pt-button pt-minimal pt-icon-notifications"></button>
          <button className="pt-button pt-minimal pt-icon-cog"></button>
        </div>
      </nav>
    )
  }
}

export default Nav
