import styled, { css } from 'styled-components'
import { Container, Col, Row } from 'react-grid-system'

const h100 = css`
  height: 100%;
`

export const HeroContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  height: 100vh;
  padding-top: 2rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding-top: 0rem;
  }

  h1 {
    font-weight: 600;
    font-size: 7rem;
    line-height: 7rem;
    position: absolute;
    mix-blend-mode: overlay;
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
    writing-mode: vertical-rl;
    text-orientation: mixed;

    @media ${({ theme }) => theme.breakpoints.md} {
      font-size: 8rem;
      line-height: 8rem;
      white-space: nowrap;
      writing-mode: unset;
      text-orientation: unset;
      letter-spacing: -1rem;
    }

    @media ${({ theme }) => theme.breakpoints.lg} {
      font-size: 12rem;
      line-height: 12rem;
      letter-spacing: 1rem;
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
