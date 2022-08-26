import styled from 'styled-components'
import { Col } from 'react-grid-system'

export const SectionContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray50};
  padding: 4rem 0rem;
`
export const ContentCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: row;
    justify-content: center;
  }
`

export const LogoFooter = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  span {
    color: ${({ theme }) => theme.colors.gray50};
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    margin-right: 2rem;
  }
`

export const FooterOptions = styled.div`
  padding: 0rem 2rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
    justify-content: center;
    border-left: 0.5px solid ${({ theme }) => theme.colors.gray50};
  }
`

export const Copyright = styled.p`
  margin: 0;
  font-size: 0.85rem;
  text-align: center;
  @media ${({ theme }) => theme.breakpoints.md} {
    text-align: left;
  }
`

export const NavItemsContainer = styled.ul`
  list-style: none;
  padding: 0rem;
  margin-bottom: 0.7rem;
`

export const NavItem = styled.li`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray50};

  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 400;
  display: inline;
  margin-right: 2rem;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.colors.gray20};
  }
`

export const ContactOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
    justify-content: center;
    align-itemms: center;
  }
`

export const ContactTitle = styled.p`
  margin: 0;
  font-size: 0.85rem;
  text-align: center;
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.gray70};
  margin-right: 0.5rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    text-align: right;
    margin-right: 0;
  }
`

export const ContactMail = styled.a`
  margin: 0;
  font-size: 0.85rem;
  text-align: center;
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.gray50};

  @media ${({ theme }) => theme.breakpoints.md} {
    text-align: right;
    text-decoration: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gray20};
  }
`
