import React from 'react'

import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout
      title='Home'
      page='index'
      headerTitle='Hello'
    >
      <div className='text-box'>
        <h1>Welcome!</h1>
      </div>
    </Layout>
  )
}

export default IndexPage