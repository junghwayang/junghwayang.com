import React from 'react';
import { Link } from 'gatsby';

import NavbarList from './NavbarList';
import NavToggle from './NavToggle';

import { useSiteMetadata } from '../hooks/use-site-metadata';

const Nav = () => {
  const { logo } = useSiteMetadata();

  return (
    <nav>
      <div>
        <Link to='/'>
          <img src={logo} alt='JUNGHWA' className='logo' />
        </Link>
      </div>

      <ul className='nav-bar'>
        <NavbarList to='/'>Home</NavbarList>
        <NavbarList to='/about'>About</NavbarList>
        <NavbarList to='/projects'>Projects</NavbarList>
        <NavbarList to='/blog'>Blog</NavbarList>
        <NavbarList to='/learn'>Learn In Public</NavbarList>
        <NavbarList to='/resources'>Resources</NavbarList>
        <NavbarList to='/uses'>Things I Use</NavbarList>
      </ul>

      <NavToggle />
    </nav>
  );
}

export default Nav;