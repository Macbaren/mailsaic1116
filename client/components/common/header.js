import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { Link } from 'react-scroll'

const Header = () => {
  const [pos, setPos] = useState(0)
  useEffect(
    () => {
      const intervalId = setInterval(() => { setPos(window.scrollY) }, 50)
      return () => { clearInterval(intervalId) }
    }, [pos]
  )
  let headerClass = 'fixed-header'
  if (window.scrollY !== 0) {
    headerClass = 'fixed-header scroll'
  }

  // toggler for menu btn. baklaev
  const [usedClass, changeUsedClass] = useState('main-menu')
  const toggleClass = () => {
    if (usedClass === 'main-menu') {
      changeUsedClass('main-menu show')
    } else {
      changeUsedClass('main-menu')
    }
  }

  // get active link. baklaev
  const linkSetActive = (to) => {
    if (to !== 'home') {
      window.history.pushState('', 'title', `/${to}`)
      const activeLink = to[0].toUpperCase() + to.slice(1)
      document.title = `Mailsaic - ${activeLink}`
    } else {
      window.history.pushState('', 'title', '/')
      document.title = 'Mailsaic - Home'
    }
  }

  return (
    // <div className="fixed-header">
    <div className={headerClass}>
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" onClick={toggleClass}>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          {/* Logo added. Pepe */}
          <div className="logo">
            <object type="image/svg+xml" data="/images/logo.svg">
              <img src="/images/logo.png" alt="logo" />
            </object>
          </div>
          <a className="navbar-brand" href="#">Mailsaic</a>
        </div>
        <nav className={usedClass}>
          <ul>
            {/* Change span-tag to button for close menu after click. Pepe */}
            <li><Link activeClass="active" spy="true" smooth="true" duration={400} offset={-60} to="home" onSetActive={linkSetActive}><button className="nav-menu" type="button" onClick={toggleClass}>Home</button></Link></li>
            <li><Link activeClass="active" spy="true" smooth="true" duration={400} offset={-60} to="services" onSetActive={linkSetActive}><button className="nav-menu" type="button" onClick={toggleClass}>Services</button></Link></li>
            <li><Link activeClass="active" spy="true" smooth="true" duration={400} offset={-60} to="clients" onSetActive={linkSetActive}><button className="nav-menu" type="button" onClick={toggleClass}>Clients</button></Link></li>
            {/* <li><a className="external" href="#" ><button className="nav-menu" type="button" onClick={toggleClass}>External</button></a></li> */}
            <li><Link activeClass="active" spy="true" smooth="true" duration={400} offset={-60} to="externals" onSetActive={linkSetActive}><button className="nav-menu" type="button" onClick={toggleClass}>External</button></Link></li>
            <li><Link activeClass="active" spy="true" smooth="true" duration={400} offset={-60} to="contact" onSetActive={linkSetActive}><button className="nav-menu" type="button" onClick={toggleClass}>Contact</button></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

Header.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
