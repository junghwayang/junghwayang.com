import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

const UsesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {category: {eq: "uses"}}) {
        frontmatter {
          title
        }
        html
      }
    }
  `);

  return (
    <Layout
      title='Things I use'
      page='base'
      headerTitle={data.markdownRemark.frontmatter.title}
    >
      <div className='markdown'>
        <div
          className='md-html'
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </Layout>
  );
}

export default UsesPage;