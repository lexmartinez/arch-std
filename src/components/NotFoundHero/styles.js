import styled, { css } from 'styled-components'
import { Container, Col, Row } from 'react-grid-system'

const h100 = css`
  height: 100%;
`

export const HeroContainer = styled.div`
  width: 100% !important;
  background-color: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  height: 100vh;
  padding-top: 2rem;


  @media ${({ theme }) => theme.breakpoints.lg} {
    padding-top: 0rem;
  }

  h1 {
    font-weight: 600;
    font-size: 16vw;
    line-height: 1;
    position: absolute;
    mix-blend-mode: overlay;
    color: ${({ theme }) => theme.colors.white};
    margin: 0;

    @media ${({ theme }) => theme.breakpoints.lg} {
      font-size: 12vw;
    }

  }
  
  }
`

export const GridContainer = styled(Container)`
  ${h100}
`

export const HeroRow = styled(Row)`
  ${h100}
`

export const HeroContent = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${h100}
`

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  background: transparent;
  color: ${({ theme }) => theme.colors.gray50};
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1.3rem;
  font-weight: 400;
  padding: 1rem 2rem;
  width: fit-content;
  margin-top: 12rem;
  margin-left: 0.5rem;
  z-index: 9999;

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin-top: 20rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
    transition: 1s ease;
  }
`
