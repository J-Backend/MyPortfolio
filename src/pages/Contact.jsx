
import { useState, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import axios from 'axios'

import '../styles/Contact.css'


const USER_REGEX = /^[A-Za-zÁÉÍÓÚáéíóúÜü\s,'.-]{3,30}$/
const MSG_REGEX = /^.{3,200}$/
const EMAIL_REGEX = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/

export const Contact = () => {

  const { translation } = useLanguage()

  //Capture inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  //Valid inputs state
  const [validEmail, setValidEmail] = useState(false)
  const [validMessage, setValidMessage] = useState(false)
  const [validName, setValidName] = useState(false)

  //Tracking of inputs that have been touched
  const [touchedName, setTouchedName] = useState(false)
  const [touchedEmail, setTouchedEmail] = useState(false)
  const [touchedMessage, setTouchedMessage] = useState(false)

  //Update inputs changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  //Event that allows you to know when inputs have been touched
  const handleNameBlur = () => {
    setTouchedName(true)
  }

  const handleEmailBlur = () => {
    setTouchedEmail(true)
  }
  const handleMessageBlur = () => {
    setTouchedMessage(true)
  }

  //Continuous validation after any input change
  useEffect(() => {
    setValidName(USER_REGEX.test(formData.name))

  }, [formData.name])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(formData.email))

  }, [formData.email])

  useEffect(() => {
    setValidMessage(MSG_REGEX.test(formData.message))

  }, [formData.message])

  //Value that allows you to know when the form is valid
  const canSave = [validName, validEmail, validMessage].every(Boolean)



  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)

    setFormData({
      name: '',
      email: '',
      message: ''
    })
    setTouchedName(false)
    setTouchedEmail(false)
    setTouchedMessage(false)
    try {
      const response = await axios.post('https://formspree.io/f/xqkokzbg', formData)
      console.log(response.data)

    } catch (error) {
      console.error(error)

    }

    window.location.href = '/'
  }

  const stateFormClass = canSave ? 'valid' : 'invalid'
  return (
    <div className='boxContact'>
      <h2 className='titleContact'>{translation.contact.title}.</h2>
      <form onSubmit={handleSubmit} className='form '>
        <div className="group">
          <div className='boxAlert'>
            {
              touchedName && !validName && (
                <span >{translation.contact.alerts.name}</span>
              )
            }
          </div>
          <input
            className='input'
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleNameBlur}
            required
            placeholder={translation.contact.name}
            name="name"
            autoComplete='off'
          />
        </div>
        <div className="group">
          <div className='boxAlert'>
            {
              touchedEmail && !validEmail && (
                <span >{translation.contact.alerts.email}</span>
              )
            }
          </div>
          <input
            className='input'
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
            required
            placeholder={translation.contact.email}
            name="email"
            autoComplete='off'
          />
        </div>
        <div className="group groupMessage">
          <div className='boxAlert'>
            {
              touchedMessage && !validMessage && (
                <span >{translation.contact.alerts.message}</span>
              )
            }
          </div>
          <textarea
            className='input'
            id='message'
            value={formData.message}
            onChange={handleChange}
            onBlur={handleMessageBlur}
            required
            placeholder={translation.contact.message}
            name="message"
            autoComplete='off'
          />
        </div>
        <div className='boxButton'>
          <button className={stateFormClass} disabled={!canSave} type="submit">
            {translation.contact.action}
          </button>
        </div>
      </form>
    </div>
  )
}
