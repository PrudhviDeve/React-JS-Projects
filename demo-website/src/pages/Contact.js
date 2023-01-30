import React from 'react'
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${PizzaLeft})`}}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id="contact-form" method='POST'>
          <label htmlFor='name'> FullName </label>
          <input type='text' name='name' placeholder='Enter full name ...' />
          <label htmlFor='email'> Email </label>
          <input type='text' name='email' placeholder='Enter your email ...' />
          <label htmlFor='message'>Message</label>
          <textarea 
                 rows='6'
                 placeholder="Enter your message ...."
                 name='message'
                 required
                 > 
          </textarea>
          <button type='submit'>send message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact