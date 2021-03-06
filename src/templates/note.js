import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const NoteTemplate = props => {
  const note = props.data.markdownRemark;

  return (
    <Layout title='Note'>
      <div className='markdown'>
        <h1 className='md-title'>{note.frontmatter.title}</h1>
        <p className='md-date'>Created : {note.frontmatter.date}</p>

        <div
          className='md-html'
          dangerouslySetInnerHTML={{ __html: note.html }}
        />
      </div>
    </Layout>
  );
}

export default NoteTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`