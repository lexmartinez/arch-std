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
    font-size: 4.5rem;
    line-height: 4.5rem;
    position: absolute;
    mix-blend-mode: overlay;
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
    letter-spacing: -1rem;

    @media ${({ theme }) => theme.breakpoints.lg} {
      font-size: 8rem;
      line-height: 8rem;
      white-space: nowrap;
      writing-mode: unset;
      text-orientation: unset;

    }

    @media ${({ theme }) => theme.breakpoints.lg} {
      font-size: 12rem;
      line-height: 12rem;
      letter-spacing: 1rem;
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

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin-top: 25rem;
    align-self: center;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
    transition: 1s ease;
  }
`
