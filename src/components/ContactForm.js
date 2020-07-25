import React from 'react';

const ContactForm = () => {
  return (
    <form className='contact-form' method='POST' action="javascript:alert(`Thanks for reaching out 🙏 I'll get back to you soon 🥰`);" data-netlify='true'>
      <input type='text' name='name' placeholder='Name' required />
      <input type='email' name='email' placeholder='Email' required />
      <textarea name='message' placeholder='Message...' />
      <button type='submit'>Let's talk</button>
    </form>
  );
}

export default ContactForm;