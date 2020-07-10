import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  let divider

  if (props.page == 'index') {
    divider = <svg className='footer-wave-divider' xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 170"><path fill="white" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,133.3C1120,149,1280,139,1360,133.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
  } else {
    divider = <div className='footer-scallop-divider'></div>
  }

  return (
    <footer className={`${props.page}-footer`}>
      {divider}

      <div className='footer-text-box'>
        <h3>" You can't change the direction of the wind, but you can adjust your sails to always reach your destination. "</h3>
        <p>© {data.site.siteMetadata.author} 2020</p>
      </div>
    </footer>
    
  )
}

export default Footer