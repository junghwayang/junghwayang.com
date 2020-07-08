import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const NavList = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => {
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
    <header>
      <h3>
        <Link to='/'>
          {data.site.siteMetadata.title}
        </Link>
      </h3>
      
      <nav>
        <ul className='a'>
          <NavList to='/'>Home</NavList>
          <NavList to='/about'>About</NavList>
          <NavList to='/projects'>Projects</NavList>
          <NavList to='/blog'>Blog</NavList>
          <NavList to='/note'>Note</NavList>
          <NavList to='/contact'>Contact</NavList>
        </ul>
      </nav>
    </header>
  )
}

export default Header