import React from 'react';

const ContactForm = () => {
  return (
    <form className='contact-form' name='contact' method='POST' action="javascript:alert(`Thanks for reaching out to me 🙏 I'll get back to you soon 🥰`);" netlify>
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