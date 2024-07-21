import React from 'react'
import routes from '../constants/routes.json'
import { usePathScrollToView } from '../hooks/usePathScrollToView'

const AboutUs = () => {
  const myRef = usePathScrollToView(routes.AboutUs)

  return (
    <div ref={myRef} className="bg-[#282828]">
      <div className="container mx-auto px-20 py-24 text-center text-xl">
        <h1 className="text-white">About Us</h1>
        <h5>BS Consulting is a boutique consultancy firm. We provide corporate banking consultancy services.</h5>
        <h5>
          We cater to a broad spectrum of clientele that includes large-scale corporations, Small and Medium Enterprises
          (SMEs), as well as individual entrepreneurs.
        </h5>
        <h5>
          We focus in tailoring corporate and financial structures with our network of trusted partners and professional
          expertise, to ensure consistently exceptional services to our clients.
        </h5>
      </div>
    </div>
  )
}

export default AboutUs
