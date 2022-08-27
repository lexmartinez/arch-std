import React from 'react'
import { useRouter } from 'next/router'
import { Container, Row, Col } from 'react-grid-system'
import {
  SectionContainer,
  ProjectGrid,
  ProjectCard,
  ProjectSubtitle,
  ProjectTitle,
} from './styles'

const ProjectList = (props) => {
  const { data } = props
  const router = useRouter()
  return (
    <SectionContainer>
      <Container>
        <Row>
          <Col>
            <ProjectGrid>
              {(data || []).map((project, index) => (
                <ProjectCard
                  key={index}
                  image={project?.image}
                  onClick={() => router.push(`/projects/${project?.slug}`)}
                >
                  <ProjectSubtitle>{project?.location}</ProjectSubtitle>
                  <ProjectTitle>{project?.title}</ProjectTitle>
                </ProjectCard>
              ))}
            </ProjectGrid>
          </Col>
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default ProjectList
