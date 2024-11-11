import React from 'react'
import card1 from '../images/card1.svg'
import card2 from '../images/card2.svg'
import payments from '../images/payments.svg.svg'
import cashback from '../images/cashback.svg fill.svg'

const Payments = () => {
  return (
    <section className="page4">

        <div className="upper-container">
            <div className="text">
                <h2>Make your money transfer simple and clear</h2>
                <ul>
                    <li>Banking transactions are free for you</li>
                    <li>No monthly cash commission</li>
                    <li>Manage payments and transactions online</li>
                </ul>
                <a id="learn-more" href="#" className="btn-primary">
                    <span>Learn more</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div className="image">
                <img src={card1} alt="Economy Example"/>
            </div>
        </div>

        <div className="lower-container">
            <div className="image">
                <img src={card2} alt="Contact Example"/>
            </div>
            <div className="text">
                <h2>Recieve payment from international bank details</h2>
                <div className="boxes">
                    <section className="box-1">
                        <img src={payments} alt="Payments Design"/>
                        <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                    </section>
                    <section className="box-2">
                        <img src={cashback} alt="Cashback Design"/>
                        <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                    </section>
                </div>
                <a id="learn-more" href="#" className="btn-primary">
                    <span>Learn more</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
        
    </section>
  )
}

export default Payments
