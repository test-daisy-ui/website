import React from 'react'
import bankLogo from '../assets/bank.svg'
import partnershipBackground from '../assets/partnership-bg.jpg'
import sealBackground from '../assets/seal.png'
import routes from '../constants/routes.json'
import { usePathScrollToView } from '../hooks/usePathScrollToView'

const Partnerships = () => {
  const myRef = usePathScrollToView(routes.Partnerships)

  return (
    <div
      ref={myRef}
      className="bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgb(25 25 25 / 85%), rgb(25 25 25 / 85%)), url('${partnershipBackground}')`,
        backgroundColor: 'lightgray',
        backgroundBlendMode: 'luminosity',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-20 py-24 text-center text-xl">
        <h1 className="text-white">Partnerships</h1>

        <h5>We partner with exclusively licensed and regulated banking institutions and payment service providers.</h5>

        <div
          className="mx-auto mt-10 flex h-44 w-44 items-center justify-center bg-contain"
          style={{
            backgroundImage: `url('${sealBackground}')`
          }}
        >
          <img className="h-16" src={bankLogo} />
        </div>
      </div>
    </div>
  )
}

export default Partnerships
