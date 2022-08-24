import styled, { css } from 'styled-components'
import { Container, Col, Row } from 'react-grid-system'

const h100 = css`
  height: 100%;
`

export const HeroContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray100};
  background-image: linear-gradient(
      to bottom,
      transparent,
      rgba(28, 28, 29, 0.8)
    ),
    url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 60vh;
  height: 60vh;
  padding: 4rem 0rem;
  filter: grayscale(100%);
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
  justify-content: flex-end;
  ${h100}
`

export const ProjectTitle = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  filter: drop-shadow(3px 3px 2px ${({ theme }) => theme.colors.gray100});
`

export const ProjectSubtitle = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  filter: drop-shadow(3px 3px 2px ${({ theme }) => theme.colors.gray100});
`
