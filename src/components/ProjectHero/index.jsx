import React from 'react'
import {
  HeroContainer,
  GridContainer,
  HeroRow,
  HeroContent,
  ProjectTitle,
  ProjectSubtitle,
} from './styles'

const ProjectHero = (props) => {
  const { backgroundImage, title, subtitle } = props
  return (
    <HeroContainer backgroundImage={backgroundImage}>
      <GridContainer>
        <HeroRow>
          <HeroContent>
            <ProjectSubtitle>{subtitle}</ProjectSubtitle>
            <ProjectTitle>{title}</ProjectTitle>
          </HeroContent>
        </HeroRow>
      </GridContainer>
    </HeroContainer>
  )
}

export default ProjectHero
