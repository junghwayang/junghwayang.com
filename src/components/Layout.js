import React from 'react'
import Header from './Header'
import Footer from './Footer'

import '../styles/layout.scss'

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout