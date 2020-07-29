import React from 'react';

import { useSiteMetadata } from '../hooks/use-site-metadata';

import email from '../../static/icons/email.svg';
import github from '../../static/icons/github.png';
import linkedin from '../../static/icons/linkedin.svg';
import twitter from '../../static/icons/twitter.svg';
import heart from '../../static/icons/heart.png';
import gatsby from '../../static/icons/gatsby.png';
import netlify from '../../static/icons/netlify.svg';

const Footer = props => {
  const { author } = useSiteMetadata();

  let divider;

  if (props.page === 'index') {
    divider = <svg className='footer-wave-divider' xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 150"><path fill="#fff" fillOpacity="1" d="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,133.3C1120,149,1280,139,1360,133.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
  } else {
    divider = <div className='footer-scallop-divider'></div>
  }

  return (
    <footer className={props.page === 'index' ? 'index-footer' : 'page-footer'}>
      {divider}

      <div className='footer-text-box'>
        <h3 className='footer-quote'>" You can't change the direction of the wind, but you can adjust your sails to always reach your destination."</h3>

        <div className='footer-icons'>
          <a href='mailto:rosie.junghwa@gmail.com'>
            <img src={email} alt='Email' title='Email' />
          </a>
          <a href='https://github.com/junghwayang' target='__blank'>
            <img src={github} alt='GitHub' title='GitHub' />
          </a>
          <a href='https://linkedin.com/in/junghwayang' target='__blank'>
            <img src={linkedin} alt='LinkedIn' title='LinkedIn' />
          </a>
          <a href='https://twitter.com/rosie_junghwa' target='__blank'>
            <img src={twitter} alt='Twitter' title='Twitter' />
          </a>
        </div>

        <div className='footer-info'>
          <p>Coded & Designed with <img src={heart} alt='❤️' />.</p>
          <p>Built with <img src={gatsby} />Gatsby.</p>
          <p>Hosted on <img src={netlify} />Netlify.</p>
        </div>
        <p>© <b>{author}</b> 2020</p>
      </div>
    </footer>
  );
}

export default Footer;