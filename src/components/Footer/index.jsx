import React from 'react'
import Link from 'next/link'
import { Container, Row, Visible } from 'react-grid-system'
import {
  SectionContainer,
  ContentCol,
  LogoFooter,
  FooterOptions,
  Copyright,
  NavItemsContainer,
  NavItem,
  ContactOptions,
  ContactTitle,
  ContactMail,
} from './styles'

const items = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/projects' },
  { label: 'Nosotros', href: '/us' },
  { label: 'Contacto', href: '/contact' },
]

const FooterSection = (props) => {
  return (
    <SectionContainer>
      <Container>
        <Row>
          <ContentCol xs={12}>
            <LogoFooter>
              NL<span>N</span>L<span>.</span>
            </LogoFooter>
            <FooterOptions>
              <Visible md lg xl xxl xxxl>
                <NavItemsContainer>
                  {items.map(({ label, href }, index) => (
                    <Link href={href} key={index}>
                      <NavItem>{label}</NavItem>
                    </Link>
                  ))}
                </NavItemsContainer>
              </Visible>
              <Copyright>
                &copy; 2022 - Arq. Marcela Cisneros - Todos los derechos
                reservados
              </Copyright>
            </FooterOptions>
            <ContactOptions>
              <ContactTitle>Escr&iacute;benos</ContactTitle>
              <ContactMail href={'mailto:contacto@nolineal.co'}>
                contacto@nolineal.co
              </ContactMail>
            </ContactOptions>
          </ContentCol>
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default FooterSection
