import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

import '../styles/blog-post.scss';

const BlogTemplate = props => {
  const post = props.data.markdownRemark;

  return (
    <Layout
      title='Blog'
      page='base'
    >
      <div>
        <h1 className='post-title'>{post.frontmatter.title}</h1>
        <p className='post-date'>Published : {post.frontmatter.date}</p>

        <ul className='post-tags'>
          <p>Tags : </p>
          {post.frontmatter.tags.map(tag => {
            return (
              <li>{tag}</li>
            )
          })}
        </ul>
        

        <div
          className='blog-post'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
}

export default BlogTemplate;

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