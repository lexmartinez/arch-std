import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Visible } from 'react-grid-system'
import {
  NavContainer,
  GridContainer,
  NavRow,
  NavCol,
  LogoNav,
  NavIcon,
  IconButton,
  CloseButton,
  MenuContainer,
} from './styles'

const variants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
  close: { opacity: 0, y: -2000, transition: { duration: 0.5 } },
}

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset'
  }, [menuOpen])

  return (
    <>
      <Visible xs sm>
        <MenuContainer
          variants={variants}
          animate={menuOpen ? 'open' : 'close'}
          id="menu"
        >
          <CloseButton onClick={toggleMenu}>
            <NavIcon src={'/menu.svg'} />
          </CloseButton>
        </MenuContainer>
      </Visible>
      <NavContainer>
        <GridContainer>
          <NavRow>
            <NavCol>
              <LogoNav>
                <Link href={'/'} as={'p'}>
                  <>
                    NL<span>N</span>L<span>.</span>
                  </>
                </Link>
              </LogoNav>
            </NavCol>
            <NavCol align={'flex-end'}>
              <Visible xs sm>
                <IconButton onClick={toggleMenu}>
                  <NavIcon src={'/menu.svg'} />
                </IconButton>
              </Visible>
              <Visible md lg xl xxl xxxl>
                H
              </Visible>
            </NavCol>
          </NavRow>
        </GridContainer>
      </NavContainer>
    </>
  )
}

export default NavBar
