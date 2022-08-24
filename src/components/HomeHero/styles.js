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
  padding: 10rem 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0;
  }

  h1 {
    font-weight: 600;
    font-size: 10rem;
    line-height: 10rem;
    position: absolute;
    mix-blend-mode: overlay;
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    @media ${({ theme }) => theme.breakpoints.md} {
      font-size: 12rem;
      line-height: 12rem;
      letter-spacing: 1rem;
      white-space: nowrap;
      writing-mode: unset;
      text-orientation: unset;
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
  align-items: center;
  ${h100}

  @media ${({ theme }) => theme.breakpoints.md} {
    align-items: flex-start;
  }
`

export const Title = styled.h1``
