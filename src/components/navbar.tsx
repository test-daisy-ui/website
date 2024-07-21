import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import routes from '../constants/routes.json'

const Navbar = () => {
  const navigate = useNavigate()

  const navLinks = [
    {
      title: 'About Us',
      route: routes.AboutUs
    },
    {
      title: 'Services',
      route: routes.Services
    },
    {
      title: 'Partnerships',
      route: routes.Partnerships
    }
  ]

  return (
    <div className="navbar sticky top-0 z-50 h-24 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <a onClick={() => navigate(navLink.route)}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <a
          className="btn btn-ghost h-auto"
          onClick={() => {
            navigate('/')
            globalThis.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }}
        >
          <img src={logo} alt="Business Solutions Consulting" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-20 px-1">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <a onClick={() => navigate(navLink.route)}>{navLink.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary" onClick={() => navigate(routes.ContactUs)}>
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default Navbar
