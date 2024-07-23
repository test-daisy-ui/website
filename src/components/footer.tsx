import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaMeta } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import routes from '../constants/routes.json'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className="px-4 lg:px-14">
      <hr className="mb-10 mt-0 border-[#DBDBDB]" />

      <div className="grid grid-cols-1 items-end gap-1 md:grid-cols-3 md:gap-20	">
        <a
          className="btn btn-ghost block h-auto"
          onClick={() => {
            navigate('/')
            globalThis.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }}
        >
          <img style={{ height: '80px' }} src={logo} alt="Business Solution Consulting" />
        </a>
        <div>
          <div className="flex gap-2">
            <button
              className="btn btn-circle btn-primary"
              style={{ minWidth: 'auto' }}
              onClick={() => {
                window.open('https://www.linkedin.com/company/business-solutions-consulting-uae/', '_blank')?.focus()
              }}
            >
              <FaLinkedinIn color="white" />
            </button>
            <button className="btn btn-circle btn-primary" style={{ minWidth: 'auto' }}>
              <FaMeta color="white" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 items-center gap-1 md:grid-cols-3 md:gap-20	">
        <p className="p-0 text-base text-[#9C9C9C]">
          Business Solution Consulting is a boutique consultancy firm focusing on corporate banking services.
        </p>

        <a className="text-lg no-underline" href="mailto:info@businesssolutionconsulting.com">
          info@businesssolutionconsulting.com
        </a>
        <div className="text-lg">Dubai, United Arab Emirates</div>
      </div>

      <hr className="my-5 border-[#DBDBDB]" />

      <div className="mb-6 grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-20">
        <div className="text-[#818181]">
          <a
            className="link no-underline"
            onClick={() => {
              navigate(routes.Terms)
              globalThis.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }}
          >
            Terms & Conditions
          </a>
        </div>
        <div className="text-lg">{new Date().getFullYear()} businesssolutionconsulting. All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer
