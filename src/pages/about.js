import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {category: {eq: "about"}}) {
        frontmatter {
          title
        }
        html
      }
    }
  `);

  return (
    <Layout
      title='About'
      headerTitle={data.markdownRemark.frontmatter.title}
    >
      <div className='markdown'>
        <div
          className='page-md-html'
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </Layout>
  );
}

export default AboutPage;