import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.svg'
import darkmodelogo from '../images/darkmode-logo.svg'
import DarkModeSwitch from './DarkModeSwitch'


const Header = () => {
  return (
    <header>
        <div className="container">

            <Link id="logo" to="/">
                <img src={logo} alt="Silicon Design Logotype" />
            </Link>
            <a id="darkmode-logo" href="index.html"><img src={darkmodelogo} alt="Silicon Design Logotype"/></a>
            <nav id="main-menu" className="navbar">
                <a className="nav-link" href="#">Features</a>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </nav>
    
            <DarkModeSwitch/>
    
            <a id="auth-signin" href="#" className="btn-primary">
                <i className="fa-regular fa-user"></i>
                <span>Sign in / up</span>
            </a>
    
            <button className="btn-mobile">
                <i className="fa-solid fa-bars"></i>
            </button>
    
         </div>
    </header>
  )
}

export default Header
