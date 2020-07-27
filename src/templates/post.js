import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const PostTemplate = props => {
  const post = props.data.markdownRemark;

  return (
    <Layout title='Blog'>
      <div className='markdown'>
        <h1 className='md-title'>{post.frontmatter.title}</h1>
        <p className='md-date'>Published : {post.frontmatter.date}</p>

        <ul className='md-tags'>
          <p>Tags : </p>
          {post.frontmatter.tags.map(tag => {
            return (
              <li>{tag}</li>
            );
          })}
        </ul>
        
        <div
          className='md-html'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
}

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
      html
    }
  }
`