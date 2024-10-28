import React from 'react'
import phonecall from '../images/phonecall.svg'
import message from '../images/message.svg'
import notif from '../images/notification.svg'

const FaQ = () => {
  return (
    <section className="page5">
                <section className="faq">
                    <div className="contact">
                        <h2>Any questions? Check out the FAQs</h2>
                        <p>Still have unanswered questions and need to get in touch?</p>
                        
                    </div>
                    <div className="questions">
                        <div className="faq-card">
                            <div className="question" id="question1">
                            <h4>Is any of my personal information stored in the App?</h4>
                                <button className="btn-circle">
                                    <i className="fa-solid fa-chevron-down"></i>
                                </button>
                            </div>
                                <div className="answer" id="text1">
                                    <p>Nunc duis id aenean gravida tincidunt eu, tempor
                                    ullamcorper. Viverra aliquam arcu, viverra et,
                                    cursus. Aliquet pretium cursus adipiscing gravida
                                    et consequat lobortis arcu velit. Nibh pharetra
                                    fermentum duis accumsan lectus non. Massa
                                    cursus molestie lorem scelerisque pellentesque.
                                    Nisi, enim, arcu purus gravida adipiscing euismod
                                    montes, duis egestas. Vehicula eu etiam quam
                                    tristique tincidunt suspendisse ut consequat.</p>
                                    <p>Ornare senectus fusce dignissim ut. Integer
                                    consequat in eu tortor, faucibus et lacinia
                                    posuere. Turpis sit viverra lorem suspendisse
                                    lacus aliquam auctor vulputate. Quis egestas
                                    aliquam nunc purus lacus, elit leo elit facilisi.
                                    Dignissim amet adipiscing massa integer.</p>
                            </div> 
                        </div>
                        <div className="question" id="question2">
                            <h4>What formats can I download my transaction history in?</h4>
                            <a className="discovermore" href="#">
                                <span className="btn-circle">
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                            </a>
                        </div>
                        <div className="question" id="question3">
                            <h4>Can I schedule future transfers?</h4>
                            <a className="discovermore" href="#">
                                <span className="btn-circle">
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                            </a>
                        </div>
                        <div className="text3">
                            <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                        </div>
                        <div className="question" id="question4">
                            <h4>When can I use Banking App services?</h4>
                            <a className="discovermore" href="#">
                                <span className="btn-circle">
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                            </a>
                        </div> 
                        <div className="question" id="question5">
                            <h4>Can I create my own password that is easy for me to remember?</h4>
                            <a className="discovermore" href="#">
                                <span className="btn-circle">
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                            </a>
                        </div>
                        <div className="question" id="question6">
                            <h4>What happens if I forget or lose my password?</h4>
                            <a className="discovermore" href="#">
                                <span className="btn-circle">
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                            </a>
                        </div>
                    </div>
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
                <section className="newsletter">
                    <div className="notification">
                        <img id="notif" src={notif} alt="Notification Logo"/>
                        <h3 className="mobile-text">Subscribe to our newsletter</h3>
                        <h3 className="desktop-text">Subscribe to our newsletter to stay informed about latest updates</h3>
                    </div>
                    <div className="input-box">
                        <i className="fa-regular fa-envelope icon"></i>
                        <input id="form-input" className="form-input email" type="email" placeholder="Your Email"/>
                        <button className="btn">Subscribe</button>
                    </div>
                </section>
            </section>
  )
}

export default FaQ
