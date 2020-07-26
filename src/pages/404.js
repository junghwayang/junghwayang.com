import React from 'react';

import Layout from '../components/Layout';

export default () => {
  return (
    <Layout
      headerTitle='Four-Oh-Four! 🤯'
    >
      <div className='text-box'>
        <div className='text-404'>
          <p>Oops! Page not found.</p>
          <p>Please navigate pages through menu bar.</p>
        </div>
      </div>
    </Layout>
  );
}