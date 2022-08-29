import styled from 'styled-components'

export const Heading = styled.p`
  background-color: ${({ theme }) => theme.colors.black_50};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  line-height: 110%;
  padding: 0rem 1rem;
  display: inline;
  margin-bottom: 7rem;
  white-space: pre-line;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  font-weight: 300;
  position: absolute;
  z-index: 9997;
  top: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 8rem;
  padding-left: 2rem;

  span {
    position: relative;
  }

  span.content {
    font-size: 1rem;
    line-height: 1rem;

    a {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 2rem;
    line-height: 110%;
    padding-left: 4rem;
    padding-top: 14rem;
    width: 30vw;

    span.content {
      font-size: 1.2rem;
      line-height: 1rem;
    }
  }
`
