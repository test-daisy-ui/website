import React from 'react'
import philosophyBackground from '../assets/philosophy-bg.jpg'

const Philosophy = () => {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgb(25 25 25 / 85%), rgb(25 25 25 / 85%)), url('${philosophyBackground}')`,
        backgroundColor: 'lightgray',
        backgroundBlendMode: 'luminosity',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-20 py-24 text-center text-xl">
        <h1 className="text-white">Philosophy</h1>

        <h2 className="txt-primary mx-auto mt-4 w-max">Vision</h2>
        <h5>
          To become an industry leader by delivering real results through innovative solutions and unparalleled
          expertise, empowering our clients to thrive in an ever-evolving landscape.
        </h5>

        <h2 className="txt-primary mx-auto mt-8 w-max">Values</h2>
        <h5>
          We are committed to delivering unparalleled expertise and personalized guidance in corporate advisory,
          fostering long-term partnerships built on trust, integrity, and excellence.
        </h5>
      </div>
    </div>
  )
}

export default Philosophy
