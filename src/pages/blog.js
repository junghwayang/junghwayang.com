import React from 'react'

import Layout from '../components/Layout'

const BlogPage = () => {
  return (
    <Layout
      title='Blog'
      page='base'
      headerTitle='Blog'
    >
      <div className='text-box'>
        <p>Blogs</p>
      </div>
    </Layout>
  )
}

export default BlogPage