import React from 'react'

import Layout from '../components/Layout'

const TILPage = () => {
  return (
    <Layout
      title='TIL'
      page='base'
      headerTitle='TIL : Today I Learned'
    >
      <div className='text-box'>
        <p>TIL</p>
      </div>
    </Layout>
  )
}

export default TILPage