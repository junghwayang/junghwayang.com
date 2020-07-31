import React from 'react';

import LearnCard from '../components/LearnCard';

const LearnCategory = props => {
  return (
    <div className='note-category'>
      <h1>{props.title}</h1>
      <ul>
        {props.edges.filter(({ node }) => {
          return node.fields.slug.startsWith(`/learn/${props.slug}/`);
        }).map(({ node }) => {
          return (
            <LearnCard to={node.fields.slug} title={node.frontmatter.title} />
          );
        })}
      </ul>
    </div>
  );
}

export default LearnCategory;