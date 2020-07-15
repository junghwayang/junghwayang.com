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

import 'typeface-yanone-kaffeesatz';
import 'typeface-parisienne';
import 'typeface-montserrat';
import 'typeface-montserrat-alternates';
import 'typeface-poppins';

const Layout = props => {
  return (
    <body>
      <Head pageTitle={props.title} />
      <span className='border-frame' />
      <Nav />
      <Header page={props.page} headerTitle={props.headerTitle} />
      <main className='container'>
        {props.children}
      </main>
      <Footer page={props.page} />
    </body>
  );
}

export default Layout;