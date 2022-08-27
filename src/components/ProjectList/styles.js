import styled from 'styled-components'

export const SectionContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.gray100};
  padding: 0rem;
  padding-bottom: 4rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0rem;
    padding-bottom: 6rem;
  }
`

export const ProjectGrid = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: 100%;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 50% 50%;
  }

  @media ${({ theme }) => theme.breakpoints.xxl} {
    grid-template-columns: 33% 33% 33%;
  }
`

export const ProjectCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  height: 300px;
  display: block;
  background-color: ${({ theme }) => theme.colors.gray100};
  background-image: linear-gradient(
      to bottom,
      transparent,
      rgba(28, 28, 29, 0.6)
    ),
    url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  cursor: pointer;
  border-radius: 0.2rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:hover,
  &:focus {
    filter: unset;
    transition: 1s;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    background-size: 100%;
    height: 500px;
    background-attachment: fixed;
    filter: grayscale(100%);
  }
`

export const ProjectTitle = styled.h1`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.white};
  margin: 2rem 1.5rem;
  margin-top: 0;
  filter: drop-shadow(1px 1px 1px ${({ theme }) => theme.colors.gray70});

  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 3rem 2rem;
    margin-top: 0;
  }
`

export const ProjectSubtitle = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  filter: drop-shadow(1px 1px 1px ${({ theme }) => theme.colors.gray70});
  margin: 0 1.5rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 0 2rem;
  }
`
