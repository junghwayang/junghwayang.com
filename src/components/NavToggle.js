import React, { useState } from 'react';
import styled from 'styled-components';

import NavbarList from './NavbarList';

const Hamburger = styled.div`
  display: none;
  width: 2rem;
  height: 1.5rem;
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 30;
  cursor: pointer;

  div {
    width: 100%;
    height: 4px;
    background-color: ${({ open }) => open ? '#fff' : '#ca8585'};
    border-radius: 3rem;
    transform-origin: 2px;
    transition: all 300ms linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (max-width: 550px) {
    top: 25px;
    right: 20px;
  }
`

const NavbarToggle = styled.ul`
  display: none;

  @media screen and (max-width: 800px) {
    width: 100vw;
    min-height: 50vh;
    background-color: rgba(202, 133, 133, .97);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100vh)'};
    transition: transform 300ms ease-in-out;

    li {
      margin: 1rem 0;
    }

    li>a {
      color: #fff;
      font-family: 'Montserrat';
      font-weight: 500;
      font-size: 1.5rem;
    }
  }
`

const NavToggle = () => {
  const [open, setOpen] = useState(0);

  return (
    <div>
      <Hamburger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Hamburger>

      <NavbarToggle open={open}>
        <NavbarList to='/'>Home</NavbarList>
        <NavbarList to='/about'>About</NavbarList>
        <NavbarList to='/projects'>Projects</NavbarList>
        <NavbarList to='/blog'>Blog</NavbarList>
        <NavbarList to='/learn'>Learn In Public</NavbarList>
        <NavbarList to='/resources'>Resources</NavbarList>
        <NavbarList to='/uses'>Things I Use</NavbarList>
      </NavbarToggle>
    </div>
  );
}

export default NavToggle;