import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import LearnCategory from '../components/LearnCategory';

const LearnPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fields: {slug: {regex: "/learn/"}}}, sort: {order: ASC, fields: frontmatter___date}) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  function Category(title) {
    this.title = title;
    this.slug = title.toLowerCase().replace(/\ /g, '-');
    this.edges = data.allMarkdownRemark.edges;
  }

  const categories = ['JavaScript', 'Data Structures', 'Algorithms', 'AWS', 'Back-End', 'Front-End', 'GraphQL', 'Database', 'Data Science', 'General'];

  return (
    <Layout
      title='Learn'
      headerTitle='Learn In Public'
    >
      <div className='text-box'>
        <p>A collection of short notes about what I learn day to day across a variety of technologies. Notes are usually taken while learning and summarized in my words. I look up these notes whenever I need them.</p>
      </div>

      <div className='note-grid'>
        {categories
          .map(title => new Category(title))
          .map(({ title, slug, edges }) => <LearnCategory title={title} slug={slug} edges={edges} />)}
      </div>
    </Layout>
  );
}

export default LearnPage;
