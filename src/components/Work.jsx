import React from 'react'
import phoneleft from '../images/phone-left.svg'
import phonemiddle from '../images/phone-middle.svg'
import phoneright from '../images/phone-right.svg'
import phoneleftmobile from '../images/phone-left-mobile.svg'
import phonemiddlemobile from '../images/phone-middle-mobile.svg'
import phonerightmobile from '../images/phone-right-mobile.svg'

const Work = () => {
  return (
    <section className="page3">
        
        <h2>How Does It Work?</h2>

        <div className="container-desktop">
            <img id="phone-left" src={phoneleft} alt="Iphone Example"/>
            <img id="phone-middle" src={phonemiddle} alt="Iphone Example"/>
            <img id="phone-right" src={phoneright} alt="Iphone Example"/>
        </div>

        <div className="container-mobile">
            <img id="phone-left-mobile" src={phoneleftmobile} alt="Iphone Example"/>
            <img id="phone-middle-mobile" src={phonemiddlemobile} alt="Iphone Example"/>
            <img id="phone-right-mobile" src={phonerightmobile} alt="Iphone Example"/>
        </div>

        <div className="text-desktop">
            <h3>Latest transaction history</h3>
            <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
                Arcu sociis tristique quisque hac in consectetur condimentum. </p>
        </div>

        <div className="text-tablet">
            <div className="h3"><h3>Transfers to people from your contact list</h3></div>
            <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
                Pellentesque volutpat ligula est. Mattis fermentum, at nec
                lacus.</p>
        </div>

    </section>
  )
}

export default Work
