import React from 'react'
import { Container, Row } from 'react-grid-system'
import { SectionContainer, ContentCol, Image } from './styles'

const ContentSection = (props) => {
  const { data, smallBottomPadding } = props
  return (
    <SectionContainer smallBottomPadding={smallBottomPadding}>
      <Container>
        <Row>
          <ContentCol xs={12}>
            {data?.map((block, index) => {
              const { type } = block
              const plainText = block?.content?.rich_text?.map(
                ({ plain_text }) => plain_text
              )
              switch (type) {
                case 'heading_1':
                  return <h1 key={index}>{plainText}</h1>
                case 'heading_2':
                  return <h2 key={index}>{plainText}</h2>
                case 'heading_3':
                  return <h3 key={index}>{plainText}</h3>
                case 'paragraph':
                  return (
                    <p key={index}>
                      {block?.content?.rich_text?.map(
                        ({ plain_text, annotations }, innerIndex) =>
                          annotations.bold ? (
                            <strong key={`${index}_${innerIndex}`}>
                              {plain_text}
                            </strong>
                          ) : (
                            <span key={`${index}_${innerIndex}`}>
                              {plain_text}
                            </span>
                          )
                      )}
                    </p>
                  )
                case 'image':
                  const image =
                    block?.content?.external?.url || block?.content?.file?.url
                  return <Image src={image} alt={'image'} key={index} />
                default:
                  return <></>
              }
            })}
          </ContentCol>
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default ContentSection
