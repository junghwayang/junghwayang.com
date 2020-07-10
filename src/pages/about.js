import React from 'react'

import Layout from '../components/Layout'

const AboutPage = () => {
  return (
    <Layout
      title='About'
      page='base'
      headerTitle='About Me'
    >
      <div className='text-box'>
        <p>About me</p>
      </div>
    </Layout>
  )
}

export default AboutPage