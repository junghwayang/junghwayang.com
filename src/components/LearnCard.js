import React from 'react';
import { Link } from 'gatsby';

const LearnCard = props => {
  return (
    <li>
      <Link to={props.to}>{props.title}</Link>
    </li>
  );
}

export default LearnCard;