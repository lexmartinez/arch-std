import styled, { css } from 'styled-components'
import { Container, Col, Row } from 'react-grid-system'
import { motion } from 'framer-motion'

const h100 = css`
  height: 100%;
`

export const NavContainer = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 4rem;
  height: 4rem;
  filter: drop-shadow(1px 1px 1px ${({ theme }) => theme.colors.gray_50});
  position: fixed;
  z-index: 9999;

  @media ${({ theme }) => theme.breakpoints.md} {
    min-height: 4.5rem;
    height: 4.5rem;
  }
`

export const GridContainer = styled(Container)`
  ${h100}
`

export const NavRow = styled(Row)`
  ${h100}
`

export const NavCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align};
  ${h100};
`

export const LogoNav = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray100};
  span {
    color: ${({ theme }) => theme.colors.gray70};
  }
`

export const LogoMenu = styled(LogoNav)`
  position: absolute;
  bottom: 1rem;
  left: 2rem;
`

export const IconButton = styled.div`
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_20};
  }
`

export const CloseButton = styled(IconButton)`
  position: absolute;
  right: 1rem;
  top: 2rem;
`

export const NavIcon = styled.img`
  width: 3rem;
  height: 1.8rem;
`

export const CloseIcon = styled.img`
  width: 3.8rem;
  height: 3.8rem;
`

export const MenuContainer = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
`

export const NavItemsContainer = styled.ul`
  list-style: none;
  padding: 6rem 2rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0rem;
  }
`

export const NavItem = styled(motion.li)`
  cursor: pointer;
  text-align: right;
  font-weight: 600;
  font-size: 2.3rem;
  line-height: 4.3rem;
  color: ${({ theme }) => theme.colors.gray100};

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 0.9rem;
    line-height: 1.3rem;
    font-weight: 600;
    display: inline;
    margin-left: 2rem;
    text-transform: uppercase;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gray70};
  }
`
