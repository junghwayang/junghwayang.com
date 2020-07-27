import React from 'react';

const ProjectCard = props => {
  return (
    <div className='project-item'>
      <div className='project-preview'>
        <img src={props.img} alt={props.title} />
      </div>

      <div className='project-info'>
        <h1>{props.title}</h1>
        <h4>{props.skills.join(', ')}</h4>
        <p>{props.description}</p>
        <div className='source-icons'>
          <a href={props.demo} target='__blank'>View Demo <img src='icons/link.svg' /></a>
          <a href={props.code} target='__blank'>Source Code <img src='icons/github.png' /></a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;