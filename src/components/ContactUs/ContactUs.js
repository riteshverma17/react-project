import React from 'react'
import './ContactUs.css'
import { FaEnvelopeOpenText, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className='contact'>
        <div className='container contact__container'>
            <div className='contact__wrapper'>
                <a href='riteshjii.04@gmail.com' target='_blank' rel='noreferrer noopener'><FaEnvelopeOpenText></FaEnvelopeOpenText></a>
                <a href='http://m.me/' target='_blank' rel='noreferrer noopener'><FaFacebookMessenger></FaFacebookMessenger></a>
                <a href='http://wa.me/+918168793254' target='_blank' rel='noreferrer noopener'><FaWhatsapp></FaWhatsapp></a>
            </div>
        </div>
    </section>
  )
}

export default ContactUs