import React, { useState } from 'react'
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
  NavItemsContainer,
  NavItem,
  CloseIcon,
} from './styles'

const variants = {
  open: { opacity: 1, y: '0%', transition: { duration: 0.5 } },
  close: {
    opacity: 0,
    y: '-100%',
    transition: { duration: 0.5 },
  },
}

const items = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const NavItems = () => (
    <NavItemsContainer>
      {items.map(({ label, href }, index) => (
        <Link href={href} key={index}>
          <NavItem>{label}</NavItem>
        </Link>
      ))}
    </NavItemsContainer>
  )

  return (
    <>
      <Visible xs sm>
        <MenuContainer
          variants={variants}
          animate={menuOpen ? 'open' : 'close'}
          initial={'close'}
          id={'menu'}
        >
          <CloseButton onClick={toggleMenu}>
            <CloseIcon src={'/close.svg'} />
          </CloseButton>
          <NavItems />
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
                <NavItems />
              </Visible>
            </NavCol>
          </NavRow>
        </GridContainer>
      </NavContainer>
    </>
  )
}

export default NavBar
