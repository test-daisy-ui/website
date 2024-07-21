import React from 'react'
import { useNavigate } from 'react-router-dom'
import sliderBackground from '../assets/slider-1.jpg'
import routes from '../constants/routes.json'

const Slider = () => {
  const navigate = useNavigate()

  return (
    <div className="relative">
      <div className="absolute flex h-full w-full flex-col justify-center px-4 lg:px-16">
        <p className="text-sm text-[#A1A1A1] lg:text-xl">#1 Business Solutions Consulting</p>
        <h1 className="m-0 mb-5">Trust. Security. Transparency.</h1>
        <div>
          <button className="btn btn-primary" onClick={() => navigate(routes.ContactUs)}>
            Contact Us
          </button>
        </div>
      </div>
      <img className="min-h-72" src={sliderBackground} alt="Business Solutions Consulting" />
    </div>
  )
}

export default Slider
