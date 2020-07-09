import React from 'react'

import Header from './Header'
import Container from './Container'
import Footer from './Footer'

import '../styles/style.scss'
import 'typeface-open-sans'
import 'typeface-yanone-kaffeesatz'

const Layout = props => {
  return (
    <>
      <span className='border-frame' />
      <Header />
      <main>
        <Container>
          {props.children}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Layout