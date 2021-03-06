import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fields: {slug: {regex: "/blog/"}}}, sort: {order: DESC, fields: frontmatter___date}) {
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
      headerTitle='Blog'
    >
      <div className='text-box' style={{textAlign: 'center'}}>
        <p>Sometimes I write personal essays about myself, thoughts, and lifestyle.</p>
      </div>

      <ul className='blog-list'>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <li>
              <Link to={node.fields.slug}>
                <BlogCard
                  title={node.frontmatter.title}
                  tags={node.frontmatter.tags}
                  date={node.frontmatter.date}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export default BlogPage;
