import styled from 'styled-components'
import { Col } from 'react-grid-system'

export const ContentVariation = {
  DARK: 'dark',
  LIGHT: 'light',
}

export const SectionContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.gray100};
  padding: 4rem 0rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 6rem 0rem;
  }
`
export const ContentCol = styled(Col)`
  p {
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 2rem;
    letter-spacing: 0.01rem;

    @media ${({ theme }) => theme.breakpoints.md} {
      column-count: 2;
      column-gap: 2rem;
      text-align: justify;
    }
  }

  h6 {
    font-weight: 700;
    font-size: 1.3rem;
    margin: 0;
    margin-bottom: 1rem;
  }

  h5 {
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 1rem;
  }

  h4 {
    font-weight: 700;
    font-size: 1.7rem;
    margin: 0;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    padding: 1rem 0;
    height: 500px;

    @media ${({ theme }) => theme.breakpoints.md} {
      padding: 2rem 0;
    }
  }
`
