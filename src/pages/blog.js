import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout
      title='Blog'
      page='base'
      headerTitle='Blog'
    >
      <ol>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <li>
              <Link to={`/blog${node.fields.slug}`}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.date}</p>
                {/* <p>{node.frontmatter.description}</p> */}
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
}

export default BlogPage;