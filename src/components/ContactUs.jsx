import React from 'react'
import Consultation from './Consultation'
import email from '../images/email.svg'
import careers from '../images/careers.svg'


const ContactUs = () => {
  return (
    <section className="contact-page1">

        <div className="container">
            <nav id="main-menu" className="navbar">
                <i className="fa-solid fa-house"></i>
                <a className="nav-link-hp" href="index.html">Homepage</a>
                <i className="fa-solid fa-chevron-right"></i>
                <a className="nav-link-c" href="contact.html">Contact</a>
            </nav>
        </div>

        <div id="cont" className="container">
            <h1>Contact Us</h1>
            <div className="email">
                <img src={email} alt="Email Icon"/>
                <h2>Email Us</h2>
                <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                <a id="message" href="#">
                    <span>Leave a message</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div className="careers">
                <img src={careers} alt="Add group Icon"/>
                <h2>Careers</h2>
                <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                <a id="message" href="#">
                    <span>Send an application</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>

           <Consultation/>
            
        </div>

    </section>
  )
}

export default ContactUs
