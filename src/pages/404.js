import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export default () => {
  return (
    <Layout
      title='Page Not Found'
      headerTitle='Four-Oh-Four! 🤯'
    >
      <div className='text-box'>
        <div className='text-paragraph'>
          <p>Oops! Page not found.</p>
          <p>Please navigate pages through menu bar.</p>
          <Link to='/'><span className='emphasized'>Go home</span></Link>
        </div>
      </div>
    </Layout>
  );
}