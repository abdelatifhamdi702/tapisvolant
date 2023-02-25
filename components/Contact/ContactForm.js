import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'
import { useTranslation } from 'react-i18next'
const alertContent = () => {
  MySwal.fire({
    title: 'Congratulations!',
    text: 'Your message was successfully send and will back to you soon',
    icon: 'success',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  })
}

// Form initial state
const INITIAL_STATE = {
  name: '',
  email: '',
  number: '',
  subject: '',
  text: '',
}

const ContactForm = () => {
  const { t } = useTranslation()
  const [contact, setContact] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { name, value } = e.target
    setContact((prevState) => ({ ...prevState, [name]: value }))
    // console.log(contact)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = `${baseUrl}/api/contact`
      const { name, email, number, subject, text } = contact
      const payload = { name, email, number, subject, text }
      const response = await axios.post(url, payload)
      console.log(response)
      setContact(INITIAL_STATE)
      alertContent()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="row pb-100">
      <div className="col-lg-12">
        <div className="contact-form">
          <div className="section-title style1 text-center mb-30">
            <span>{t('navbar:contactUs')}</span>
            <h2>{t('contactus:getintouch')}</h2>
          </div>

          {/*<form className="form-wrap" onSubmit={handleSubmit}>*/}
          <form
            action="https://formsubmit.co/info@tapis-volant.fr"
            method="POST"
            role="form"
            className="form-wrap"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:input1')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={contact.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:input2')}
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    value={contact.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:input3')}
                  </label>
                  <input
                    type="text"
                    name="number"
                    className="form-control"
                    value={contact.number}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:input4')}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    value={contact.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:input5')}
                  </label>
                  <textarea
                    name="text"
                    cols="30"
                    rows="6"
                    className="form-control"
                    value={contact.text}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                <button type="submit" className="btn v5">
                  {t('contactus:btn')}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
