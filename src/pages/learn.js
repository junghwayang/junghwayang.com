import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import LearnCard from '../components/LearnCard';

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

  return (
    <Layout
      title='Learn'
      headerTitle='Learn In Public'
    >
      <div className='text-box'>
        <p>A collection of short notes about what I learn day to day across a variety of technologies. Notes are usually taken while learning and summarized in my words. I look up these notes whenever I need them.</p>
      </div>
      
      {/* To manually order each note */}
      <div className='note-grid'>
        <div className='note-category'>
          <h1>JavaScript</h1>
          <ul>
            {data.allMarkdownRemark.edges.filter(({ node }) => {
              return node.fields.slug.startsWith('/learn/javascript/');
            }).map(({ node }) => {
              return (
                <LearnCard to={node.fields.slug} title={node.frontmatter.title} />
              );
            })}
          </ul>
        </div>

        <div className='note-category'>
          <h1>Back-End</h1>
          <ul>
            {data.allMarkdownRemark.edges.filter(({ node }) => {
              return node.fields.slug.startsWith('/learn/backend/');
            }).map(({ node }) => {
              return (
                <LearnCard to={node.fields.slug} title={node.frontmatter.title} />
              );
            })}
          </ul>
        </div>

        <div className='note-category'>
          <h1>AWS</h1>
          <ul>
            {data.allMarkdownRemark.edges.filter(({ node }) => {
              return node.fields.slug.startsWith('/learn/aws/');
            }).map(({ node }) => {
              return (
                <LearnCard to={node.fields.slug} title={node.frontmatter.title} />
              );
            })}
          </ul>
        </div>

        <div className='note-category'>
          <h1>General</h1>
          <ul>
            {data.allMarkdownRemark.edges.filter(({ node }) => {
              return node.fields.slug.startsWith('/learn/general/');
            }).map(({ node }) => {
              return (
                <LearnCard to={node.fields.slug} title={node.frontmatter.title} />
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default LearnPage;