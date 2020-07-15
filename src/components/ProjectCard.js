import React from 'react';

const ProjectCard = props => {
  return (
    <div className='project-item'>
      <div className='project-preview'>
        <img src={props.img} alt={props.title} />
      </div>

      <div className='project-info'>
        <h1>{props.title}</h1>
        <h4>SKILLS : {props.skills.join(', ')}</h4>
        <p>{props.description}</p>
        <a href={props.demo} target='__blank'>View Demo</a>
        <a href={props.code} target='__blank'>Source Code</a>
      </div>
    </div>
  );
}

export default ProjectCard;