import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import MapChart from '../Map/MapChart'
import './Contacts.scss'

const Contacts = () => {
  const ref = useRef();
  const[success,setSuccess]=useState(null)
  
  const[email,setEmail]=useState("")
  const[error,setError]=useState('')

  const handleSubmit=e=>{
    e.preventDefault()
    emailjs.sendForm('service_pkr910s', 'template_52s6psw', ref.current, '-FTVBM3AgvVYHw3aN')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });
      if (validateEmail(email)){
        setError('')
        return;
      }
      setError('Email is not valid' )
      return false;
  }
  return (
    <div className="contact" id='contact'>
        <div className="container">
          <div className="left">
            <form ref={ref} onSubmit={handleSubmit}>
              <h1>Contact Me</h1>
              <input type="text" placeholder='Name' name='name' required/>
              <input type="Email" placeholder='Email' name='email'  value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
              <textarea required placeholder='Write your message'rows={10} name='message'/>
              <button type='submit'>Send</button>
              {success && "Thank you for message. I will get back to you soon :)"}
            </form>
          </div>
          <div className="right">
            <MapChart/>
          </div>
        </div>
    </div>
  )
}
export const validateEmail=(email)=>{
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (regex.test(email)){
    return true;
  }
  return false;
};

export default Contacts