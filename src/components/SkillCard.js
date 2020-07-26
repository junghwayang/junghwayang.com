import React from 'react';

const SkillCard = props => {
  return (
    <div className='skill-card'>
      <div className='img-wrapper'>
        <img src={props.img} alt={props.name} />
      </div>
      <p>{props.name}</p>
    </div>
  );
}

export default SkillCard;