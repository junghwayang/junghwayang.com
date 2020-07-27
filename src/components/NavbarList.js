import React from 'react';
import { Link } from 'gatsby';

const NavbarList = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default NavbarList;