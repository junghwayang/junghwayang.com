import React from 'react';

import Layout from '../components/Layout';

export default () => {
  return (
    <Layout
      headerTitle='Four Oh Four!'
    >
      <div className='text-box'>
        <p>Oops! Page not found.</p>
        <p>Please navigate pages through menu bar.</p>
      </div>
    </Layout>
  );
}