import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import React, { useState } from 'react'
import emailConfig from '../constants/emailjs.json'
import routes from '../constants/routes.json'
import { usePathScrollToView } from '../hooks/usePathScrollToView'

enum Status {
  None,
  Submitting,
  Error
}

const ContactUs = () => {
  const myRef = usePathScrollToView(routes.ContactUs)

  const [state, setState] = useState({
    status: Status.None,
    statusMessage: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const { status, statusMessage, firstName, lastName, email, phone, message } = state

  const handleSendEmail = async () => {
    try {
      setState({ ...state, status: Status.Submitting })

      const isValidEmail = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      if (!isValidEmail) {
        setState({ ...state, status: Status.Error, statusMessage: 'Please enter a valid email.' })
        return
      } else if (firstName.length < 3) {
        setState({ ...state, status: Status.Error, statusMessage: 'First Name should be atleast 3 characters.' })
        return
      } else if (lastName.length < 3) {
        setState({ ...state, status: Status.Error, statusMessage: 'Last Name should be atleast 3 characters.' })
        return
      } else if (phone.length < 7) {
        setState({ ...state, status: Status.Error, statusMessage: 'Phone should be atleast 7 characters.' })
        return
      } else if (message.length < 10) {
        setState({ ...state, status: Status.Error, statusMessage: 'Message should be atleast 10 characters.' })
        return
      }

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        { firstName, lastName, email, phone, message },
        {
          publicKey: emailConfig.publicKey
        }
      )

      setState({ ...state, status: Status.None, statusMessage: 'Message sent!' })
      console.log('SUCCESS!')

      setTimeout(() => {
        setState({ ...state, firstName: '', lastName: '', email: '', phone: '', message: '', statusMessage: '' })
      }, 5000) // hide message after 5 seconds
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', err)
      }

      setState({ ...state, status: Status.Error, statusMessage: 'Something went wrong, please try again later' })

      console.log('ERROR', err)
    }
  }

  return (
    <div ref={myRef}>
      <div className="container mx-auto flex w-full flex-col gap-4 px-4 pb-12 pt-24 text-center text-xl lg:w-1/2 xl:w-1/3">
        <h1>Contact Us</h1>

        <h5>Thank you for your interest! How can we help?</h5>

        <div className="mt-10 grid grid-cols-2 gap-4">
          <input
            type="text"
            disabled={status === Status.Submitting}
            placeholder="First Name"
            className="input w-full bg-[#E4E4E4]"
            onChange={(e) => setState({ ...state, status: Status.None, statusMessage: '', firstName: e.target.value })}
          />
          <input
            type="text"
            disabled={status === Status.Submitting}
            placeholder="Last Name"
            className="input w-full bg-[#E4E4E4]"
            onChange={(e) => setState({ ...state, status: Status.None, statusMessage: '', lastName: e.target.value })}
          />
          <input
            type="text"
            disabled={status === Status.Submitting}
            placeholder="Email"
            className="input w-full bg-[#E4E4E4]"
            onChange={(e) => setState({ ...state, status: Status.None, statusMessage: '', email: e.target.value })}
          />
          <input
            type="text"
            disabled={status === Status.Submitting}
            placeholder="Phone Number"
            className="input w-full bg-[#E4E4E4]"
            onChange={(e) => setState({ ...state, status: Status.None, statusMessage: '', phone: e.target.value })}
          />
        </div>

        <textarea
          disabled={status === Status.Submitting}
          placeholder="Message"
          className="textarea textarea-lg bg-[#E4E4E4]"
          onChange={(e) => setState({ ...state, status: Status.None, statusMessage: '', message: e.target.value })}
        />

        {status === Status.Submitting && <p>Sending...</p>}
        {statusMessage && <p style={{ color: status === Status.Error ? 'orangered' : 'limegreen' }}>{statusMessage}</p>}

        <button
          className="btn btn-primary mx-auto mt-6"
          disabled={status === Status.Submitting}
          onClick={handleSendEmail}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ContactUs
