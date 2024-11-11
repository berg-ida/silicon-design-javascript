import React from 'react'
import examplelogo1 from '../images/example logo1.svg'
import examplelogo2 from '../images/example logo2.svg'
import examplelogo3 from '../images/example logo3.svg'
import examplelogo4 from '../images/example logo4.svg'
import examplelogo5 from '../images/example logo5.svg'
import examplelogo6 from '../images/example logo6.svg'

const Brands = () => {
  return (
    <section id="brands">
        <div className="container">
            <div id="brand-1" className="brand-box">
                <img src={examplelogo1} alt="Brand 1"/>
            </div>
            <div id="brand-2" className="brand-box">
                <img src={examplelogo2} alt="Brand 2"/>
            </div>
            <div id="brand-3" className="brand-box">
                <img src={examplelogo3} alt="Brand 3"/>
            </div>
            <div id="brand-4" className="brand-box">
                <img src={examplelogo4} alt="Brand 4"/>
            </div>
            <div id="brand-5" className="brand-box">
                <img src={examplelogo5} alt="Brand 5"/>
            </div>
            <div id="brand-6" className="brand-box">
                <img src={examplelogo6} alt="Brand 6"/>
            </div>
        </div>
    </section>
  )
}

export default Brands
