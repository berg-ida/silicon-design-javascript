import React from 'react'
import appstore from '../images/appstore.svg'
import googleplay from '../images/googleplay.svg'
import darkmodeappstore from '../images/darkmode-appstore.svg'
import darkmodegoogleplay from '../images/darkmode-googleplay.svg'
import imageback from '../images/phone-back.svg'
import imagefront from '../images/phone-front.svg'

const Hero = () => {
  return (
    <section className="page1">

        <div className="container">
            <div className="headline">
                <h1>Manage All Your Money in One App</h1>
            </div>

            <div className="content">
                <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                <div className="buttons">
                    <a className="btn-store" href="#"><img src={appstore} alt="Appstore Button"/></a>
                    <a className="btn-store" href="#"><img src={googleplay} alt="Googleplay Button"/></a>
                    <a className="btn-darkmode-store" href="#"><img src={darkmodeappstore} alt="Appstore Button"/></a>
                    <a className="btn-darkmode-store" href="#"><img src={darkmodegoogleplay} alt="Googleplay Button"/></a>
                </div>
                <a className="discovermore" href="#">
                    <span className="btn-circle">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span>Discover more</span>
                </a>
            </div>

            <div className="images">
                <img className="image-back" src={imageback} alt="Iphone Example"/>
                <img className="image-front" src={imagefront} alt="Iphone Example"/>
            </div>
        </div>

    </section>
  )
}

export default Hero
