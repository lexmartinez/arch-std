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
  LogoMenu,
  CloseIcon,
} from './styles'

const variants = {
  open: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.3 },
  },
  close: {
    opacity: 0,
    y: '-100%',
    transition: { duration: 0.5 },
  },
}

const items = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/projects' },
  { label: 'Nosotros', href: '/us' },
  { label: 'Contacto', href: '/contact' },
]

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const NavItems = () => (
    <NavItemsContainer>
      {items.map(({ label, href }, index) => (
        <Link href={href} key={index}>
          <NavItem
            whileHover={{
              opacity: 0.65,
              scale: 1,
              transition: { duration: 0.75 },
            }}
            whileTap={{ opacity: 0.9, scale: 0.9 }}
          >
            {label}
          </NavItem>
        </Link>
      ))}
    </NavItemsContainer>
  )

  return (
    <>
      <Visible xs sm>
        <MenuContainer
          variants={variants}
          layout
          animate={menuOpen ? 'open' : 'close'}
          initial={'close'}
          id={'menu'}
        >
          <CloseButton onClick={toggleMenu}>
            <CloseIcon src={'/close.svg'} />
          </CloseButton>
          <NavItems />
          <LogoMenu>
            NL<span>N</span>L<span>.</span>
          </LogoMenu>
        </MenuContainer>
      </Visible>
      <NavContainer>
        <GridContainer>
          <NavRow>
            <NavCol>
              <Link href={'/'}>
                <LogoNav>
                  NL<span>N</span>L<span>.</span>
                </LogoNav>
              </Link>
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
