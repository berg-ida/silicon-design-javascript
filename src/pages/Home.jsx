import React from 'react'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import AppFeatures from '../components/AppFeatures'
import Work from '../components/Work'
import Payments from '../components/Payments'
import Testimonial from '../components/Testimonial'
import FaQ from '../components/FaQ'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    <main>
      <Hero/>
      <Brands/>
      <AppFeatures/>
      <Work/>
      <Payments/>
      <Testimonial/>
      <FaQ/>
    </main>
    <Footer/>
    </>
  )
}

export default Home
