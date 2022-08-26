import React from 'react'
import { Container, Row } from 'react-grid-system'
import { SectionContainer, ContentCol } from './styles'

const ContentSection = (props) => {
  return (
    <SectionContainer>
      <Container>
        <Row>
          <ContentCol xs={12}>{props.children}</ContentCol>
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default ContentSection
