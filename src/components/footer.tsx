import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className="px-4 lg:px-14">
      <hr className="mb-10 mt-0 border-[#DBDBDB]" />

      <a
        className="btn btn-ghost h-auto"
        onClick={() => {
          navigate('/')
          globalThis.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }}
      >
        <img src={logo} alt="Business Solutions Consulting" />
      </a>

      <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-20">
        <p className="p-0 text-base text-[#9C9C9C]">
          We cater to a broad spectrum of clientele that includes large-scale corporations, Small and Medium Enterprises
          (SMEs), as well as individual entrepreneurs
        </p>
        <div>
          <h3 className="text-xl font-normal">Office address:</h3>
          <p>Dubai, United Arab Emirates</p>
        </div>
        <h3 className="text-xl font-normal">
          <a className="no-underline" href="mailto:support@bsconsulting.com">
            support@bsconsulting.com
          </a>
        </h3>
      </div>

      <hr className="my-5 border-[#DBDBDB]" />

      <div className="mb-6 grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-20">
        <div className="text-[#818181]">
          <a className="link no-underline">Terms & Conditions</a>
          <span> / </span>
          <a className="link no-underline">Privacy Policy</a>
        </div>
        <div>{new Date().getFullYear()} bsconsulting. All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer
