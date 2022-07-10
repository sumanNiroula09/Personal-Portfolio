import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>

      <h5>Get in Touch</h5>
      <h2>Get in Touch</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__item-icon'/>
            <h4>Email</h4>
            <h5>suman.niraula00@gmail.com</h5>
            <a href="mailto:suman.niraula00@gmail.com">Send a messege</a>
          </article>

          <article className="contact__option">
            <BsMessenger className='contact__item-icon'/>
            <h4>Messenger</h4>
            <h5>Suman Niroula</h5>
            <a href="https://m.me/suman.niroula.735/">Send a messege</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__item-icon'/>
            <h4>WhatsApp</h4>
            <h5>suman.niraula00@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone=9817933293">Send a messege</a>
          </article>

         
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email"  name='enail' placeholder='Your Email' required/>
          <textarea name="messege"  rows="7" placeholder='Your messege'></textarea>

          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact