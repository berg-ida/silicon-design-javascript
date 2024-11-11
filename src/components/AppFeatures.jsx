import React from 'react'
import boximage from '../images/payments.svg.svg'
import security from '../images/security.svg.svg'
import statistics from '../images/statistics.svg.svg'
import support from '../images/support.svg.svg'
import cashback from '../images/cashback.svg fill.svg'
import happy from '../images/happy.svg.svg'
import phone2 from '../images/phone-2.svg'

const AppFeatures = () => {
  return (
    <section className="page2">

        <div className="container">
            <h2>App Features</h2>
            <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin volutpat mollis egestas.
                Nam luctus facilisis ultrices. Pellentesque
                volutpat ligula est. Mattis fermentum, at nec
                lacus.</p>
                       
            <div className="boxes">
                <section className="box1">
                    <img id="box-image" src={boximage} alt="Payments Design"/>
                    <h3>Easy Payments</h3>
                    <p>Id mollis consectetur congue egestas
                        egestas suspendisse blandit justo.</p>
                </section>
                <section className="box2">
                    <img src={security} alt="Security Design"/>
                    <h3>Data Security</h3>
                    <p>Augue pulvinar justo, fermentum
                        fames aliquam accumsan vestibulum
                        non.</p>
                </section>
                <section className="box3">
                    <img src={statistics} alt="Statistics Design"/>
                    <h3>Cost Statistics</h3>
                    <p>Mattis urna ultricies non amet, purus
                        in auctor non. Odio vulputate ac nibh.</p>
                </section>
                <section className="box4">
                    <img src={support} alt="Support Design"/>
                    <h3>Support 24/7</h3>
                    <p>A elementum, imperdiet enim, pretium
                        etiam facilisi in aenean quam mauris.</p>
                </section>
                <section className="box5">
                    <img src={cashback} alt="Cashback Design"/>
                    <h3>Regular Cashback</h3>
                    <p>Sit facilisis dolor arcu, fermentum
                        vestibulum arcu elementum imperdiet
                        eleifend.</p>
                </section>
                <section className="box6">
                    <img src={happy} alt="Happy Design"/>
                    <h3>Top Standards</h3>
                    <p>Faucibus cursus maecenas lorem
                        cursus nibh. Sociis sit risus id. Sit
                        facilisis dolor arcu.</p>
                </section>
            </div>

            <div className="image">
                <img src={phone2} alt="Iphone Example"/>
            </div>
        </div>
        
    </section>
  )
}

export default AppFeatures
