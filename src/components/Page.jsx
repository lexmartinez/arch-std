import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import NavBar from './NavBar'

export const Content = styled.div`
  padding-top: 2.5rem;
`

const Page = (props) => {
  return (
    <>
      <NavBar />
      <Content>{props.children}</Content>
      <Footer />
    </>
  )
}

export default Page
