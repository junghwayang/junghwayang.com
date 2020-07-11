import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const NavList = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Nav = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    // <header>
      <nav>
        <div className='logo'>
          <Link to='/'>{data.site.siteMetadata.title}</Link>
        </div>

        <ul className='nav-bar'>
          <NavList to='/about'>About</NavList>
          <NavList to='/projects'>Projects</NavList>
          <NavList to='/blog'>Blog</NavList>
          <NavList to='/learn'>Learn In Public</NavList>
          <NavList to='/resources'>Resources</NavList>
        </ul>
      </nav>
    // </header>
  )
}

export default Nav