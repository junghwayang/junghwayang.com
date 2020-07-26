import React from 'react';

import Head from './Head';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

import '../styles/global.scss';
import '../styles/layout.scss';
import '../styles/page.scss';
import '../styles/card.scss';
import '../styles/markdown.scss';

import 'typeface-montserrat';
import 'typeface-montserrat-alternates';
import 'typeface-poppins';
import 'typeface-open-sans';
import 'typeface-yanone-kaffeesatz';
import 'typeface-parisienne';

const Layout = props => {
  return (
    <div>
      <Head pageTitle={props.title} />
      <div className='border-frame' />
      <Nav />
      <Header page={props.page} headerTitle={props.headerTitle} />
      <main>
        {props.children}
      </main>
      <Footer page={props.page} />
    </div>
  );
}

export default Layout;