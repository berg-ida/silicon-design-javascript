import React from 'react'
import email from '../images/email.svg'
import careers from '../images/careers.svg'
import map from '../images/map.svg'
import mappin from '../images/map-pin.svg'
import phonecall from '../images/phonecall.svg'
import time from '../images/time.svg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import youtube from '../images/youtube.svg'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
<div className="wrapper">

<main>

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

            <div className="consultation">
                <h2>Get Online Consultation</h2>
                <form id="consultationForm" className="consultation-form">
                    
                    <div className="input-group">
                        <label for="fullName" className="form-label">Full name</label>
                        <input type="text" id="fullName" className="form-input"/>
                    </div>

                    <div className="input-group">
                        <label for="email" className="form-label">Email adress</label>
                        <input type="text" id="email" className="form-input"/>
                    </div>

                    <div className="input-group">
                        <label for="specialist" className="form-label">Specialist</label>
                        <input type="text" id="specialist" className="form-input"/>
                    </div>

                    <button id="submit-button" type="submit" className="btn">Make an appointment</button>

                </form>
            
            </div>
            
        </div>

    </section>

    <section className="contact-page2">
        <div className="container">
            <img src={map} alt="Picture of Map"/>
            <div className="text">
                <div className="medical1">
                    <h2>Medical Center 1</h2>
                    <div className="map-pin">
                        <img id="map-pin" src={mappin} alt="Map pin icon"/>
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                    </div>
                    <div className="phonecall">
                        <img id="phonecall" src={phonecall} alt="Phonecall icon"/>
                        <p>(406) 555-0120</p>
                    </div>
                    <div className="time">
                        <img id="time" src={time} alt="Clock icon"/>
                        <p id="text-1"><strong>Mon – Fri:</strong> 9:00 am – 22:00 am</p>
                        <p id="text-2"><strong>Sat – Sun:</strong> 9:00 am – 20:00 am</p>
                    </div>
                </div>
                <div className="medical2">
                    <h2>Medical Center 2</h2>
                    <div className="map-pin">
                        <img id="map-pin" src={mappin} alt="Map pin icon"/>
                        <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
                    </div>
                    <div className="phonecall">
                        <img id="phonecall" src={phonecall} alt="Phonecall icon"/>
                        <p>(406) 544-0123</p>
                    </div>
                    <div className="time">
                        <img id="time" src={time} alt="Clock icon"/>
                        <p id="text-1"><strong>Mon – Fri:</strong> 9:00 am – 22:00 am</p>
                        <p id="text-2"><strong>Sat – Sun:</strong> 9:00 am – 20:00 am</p>
                    </div>
                </div>
                <div className="social-media">
                    <a id="facebook" href="#">
                        <img src={facebook} alt="Facebook Icon"/>
                    </a>
                    <a id="instagram" href="#">
                        <img src={instagram} alt="Instagram Icon"/>
                    </a>
                    <a id="twitter" href="#">
                        <img src={twitter} alt="Twitter Icon"/>
                    </a>
                    <a id="youtube" href="#">
                        <img src={youtube} alt="Youtube Icon"/>
                    </a>
                </div>
            </div>
            
            
        </div>

    </section>

</main>

<Footer/>

</div>
    </>
  )
}

export default Contact
