import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout'

const UsesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {category: {eq: "uses"}}) {
        html
      }
    }
  `);

  return (
    <Layout
      title='Uses'
      page='base'
      headerTitle='Things I use'
    >
      <div className='markdown'>
        <div
          className='md-html'
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </Layout>
  )
}

export default UsesPage