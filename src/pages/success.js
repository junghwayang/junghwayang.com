import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export default () => {
  return (
    <Layout
      title='Message Sent'
      headerTitle='Thank you 🙏'
    >
      <div className='text-box'>
        <div className='text-paragraph'>
          <p>Your message has been sent successfully! 🎉</p>
          <p>Thanks for reaching out to me.</p>
          <p>I'll get back to you soon 🥰</p>
          <Link to='/'><span className='emphasized'>Go home</span></Link>
        </div>
      </div>
    </Layout>
  );
}