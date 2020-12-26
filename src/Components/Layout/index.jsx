import React from 'react'
import Nav from './Nav/Nav.js'

const Layout = ({children}) => {
  
  return(
    <>
      <Nav />
      {children}
    </>
  )
}

export default Layout
