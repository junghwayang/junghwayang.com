import React from 'react';

const BlogCard = props => {
  return (
    <div className='blog-item'>
      <div className='blog-item-title'>
        <img src={`icons/${props.tags[0]}.png`} alt={props.tags[0]} />
        <h3>{props.title}</h3>
      </div>

      <p>{props.date}</p>
    </div>
  );
}

export default BlogCard;