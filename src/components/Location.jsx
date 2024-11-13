import React from 'react'
import map from '../images/map.svg'
import mappin from '../images/map-pin.svg'
import phonecall from '../images/phonecall.svg'
import time from '../images/time.svg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import youtube from '../images/youtube.svg'

const Location = () => {
  return (
    <section className="contact-page2">

        <div className="container">
            <img id="map" src={map} alt="Picture of Map"/>
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
                        <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
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

    </section>
  )
}

export default Location
