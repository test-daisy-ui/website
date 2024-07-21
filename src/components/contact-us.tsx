import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import React, { useState } from 'react'
import emailConfig from '../constants/emailjs.json'
import routes from '../constants/routes.json'
import { usePathScrollToView } from '../hooks/usePathScrollToView'

const ContactUs = () => {
  const myRef = usePathScrollToView(routes.ContactUs)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSendEmail = async () => {
    try {
      setIsSubmitting(true)

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        { firstName, lastName, email, phone, message },
        {
          publicKey: emailConfig.publicKey
        }
      )

      setStateMessage('Message sent!')
      console.log('SUCCESS!')
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        setStateMessage('Something went wrong, please try again later')
        console.log('EMAILJS FAILED...', err)
        return
      }

      console.log('ERROR', err)
    }

    setTimeout(() => {
      setStateMessage('')
    }, 5000) // hide message after 5 seconds
    setIsSubmitting(false)
  }

  return (
    <div ref={myRef}>
      <div className="container mx-auto flex w-full flex-col gap-4 px-4 pb-12 pt-24 text-center text-xl lg:w-1/2 xl:w-1/3">
        <h1>Contact Us</h1>

        <h5>Thank you for your interest! How can we help?</h5>

        <div className="mt-10 grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="input w-full bg-[#E4E4E4]"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input w-full bg-[#E4E4E4]"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="input w-full bg-[#E4E4E4]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input w-full bg-[#E4E4E4]"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <textarea
          className="textarea textarea-lg bg-[#E4E4E4]"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />

        {isSubmitting && <p>Sending...</p>}
        {stateMessage && <p>{stateMessage}</p>}

        <button className="btn btn-primary mx-auto mt-6" onClick={handleSendEmail}>
          Send
        </button>
      </div>
    </div>
  )
}

export default ContactUs
