import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import sliderBackground from '../assets/slider-1.jpg'
import routes from '../constants/routes.json'
import { useForceNavigate } from '../hooks/useForceNavigate'

const Slider = () => {
  const navigate = useForceNavigate()

  return (
    <div className="relative">
      <div className="absolute flex h-full w-full flex-col justify-center px-4 lg:px-16">
        <p className="text-sm text-[#A1A1A1] lg:text-xl">#1 Business Solution Consulting</p>
        <ScrollAnimation animateIn="animate__bounceInRight">
          <h1 className="m-0 mb-5">
            Trust. <span className="text-[#AB883F]">Security.</span> Transparency.
          </h1>
        </ScrollAnimation>
        <div>
          <button className="btn btn-primary" onClick={() => navigate(routes.ContactUs)}>
            Contact Us
          </button>
        </div>
      </div>
      <img className="min-h-72" src={sliderBackground} alt="Business Solution Consulting" />
    </div>
  )
}

export default Slider
