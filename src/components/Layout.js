import React from 'react'

import Head from './Head'
import Nav from './Nav'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'

import '../styles/base.scss'
import '../styles/layout.scss'
import '../styles/page.scss'
import 'typeface-open-sans'
import 'typeface-yanone-kaffeesatz'

const Layout = props => {
  return (
    <body>
      <Head title={props.title} />
      <span className='border-frame' />
      <Nav />
      <Header page={props.page} headerTitle={props.headerTitle} />
      <main>
        <Container>
          {props.children}
        </Container>
      </main>
      <Footer page={props.page} />
    </body>
  )
}

export default Layout