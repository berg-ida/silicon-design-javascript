import React from 'react'
import logo from '../images/logo.svg'
import darkmodelogo from '../images/darkmode-logo.svg'


const Header = () => {
  return (
    <header>
            <div className="container">
    
                <a id="logo" href="index.html"><img src={logo} alt="Silicon Design Logotype"/></a>
                <a id="darkmode-logo" href="index.html"><img src={darkmodelogo} alt="Silicon Design Logotype"/></a>
                <nav id="main-menu" className="navbar">
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="contact.html">Contact</a>
                </nav>
    
                <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                    <span className="label">Dark mode</span>
                    <label for="darkmode-switch" aria-label="darkmode switch" className="toggle-switch">
                        <input id="darkmode-switch" type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
    
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
