import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Page = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  )
}

export default Page
