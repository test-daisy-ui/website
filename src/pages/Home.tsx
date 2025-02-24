import React from 'react'
import AboutUs from '../components/about-us'
import ContactUs from '../components/contact-us'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Partnerships from '../components/partnerships'
import Philosophy from '../components/philosophy'
import Services from '../components/services'
import Slider from '../components/slider'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <AboutUs />
      <Philosophy />
      <Services />
      <Partnerships />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
