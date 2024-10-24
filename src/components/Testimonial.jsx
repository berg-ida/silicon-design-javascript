import React from 'react'
import testimonial1 from '../images/testimonial1.svg'
import testimonial2 from '../images/testimonial2.svg'
import darkmodetestimonial1 from '../images/darkmode-testimonial1.svg'
import darkmodetestimonial2 from '../images/darkmode-testimonial2.svg'

const Testimonial = () => {
  return (
    <section className="testimonial">
    <h2>Clients are Loving Our App</h2>
    
    <div className="images">
        <img id="testimonial1" src={testimonial1} alt="Testimonial Example"/>
        <img id="testimonial2" src={testimonial2} alt="Testimonial Example"/>
        <img id="darkmode-testimonial1" src={darkmodetestimonial1} alt="Testimonial Example"/>
        <img id="darkmode-testimonial2" src={darkmodetestimonial2} alt="Testimonial Example"/>
    </div>
</section>
  )
}

export default Testimonial
