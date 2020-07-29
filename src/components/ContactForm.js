import React from 'react';

const ContactForm = () => {
  return (
    <form className='contact-form' name='contact' method='POST' data-netlify='true'>
      <div className='form-input'>
        <input type='text' name='name' placeholder='Name' required />
        <input type='email' name='email' placeholder='Email' required />
        <textarea name='message' placeholder='Message...' />
      </div>
      <button type='submit'>Let's talk</button>
    </form>
  );
}

export default ContactForm;