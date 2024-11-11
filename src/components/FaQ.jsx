import React from 'react'
import phonecall from '../images/phonecall.svg'
import message from '../images/message.svg'
import FaqList from './FaqList'
import Newsletter from './Newsletter'

const FaQ = () => {
  
  
  
    return (
    <section className="page5">

        <section className="faq">
            <div className="contact">
                <h2>Any questions? Check out the FAQs</h2>
                <p>Still have unanswered questions and need to get in touch?</p>
            </div>

            <FaqList/>

                    
            <div className="contact-mobile">
                <a id="contact" href="#" className="btn-primary">
                    <span>Contact us now</span>
                </a>
            </div>
            <div className="contact-us">
                <div className="phone">
                    <img id="phonecall" src={phonecall} alt="Phone Icon"/>
                    <p>Still have  questions?</p>
                    <a id="contact-us" href="#">
                        <span>Contact us</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
                <div className="message">
                    <img id="message" src={message} alt="Message Icon"/>
                    <p>Don't like phone calls?</p>
                    <a id="contact-us" href="#">
                        <span>Contact us</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>

        <Newsletter/>
            
    </section>
  )
}

export default FaQ
