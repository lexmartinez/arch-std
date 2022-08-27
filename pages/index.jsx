import React from 'react'
import { HomeHero, ContentSection, Page, ProjectList } from '~/components'
import { cachedFetch } from '~/lib/fetch'

const Home = (props) => {
  return (
    <Page>
      <HomeHero />
      <ContentSection data={props?.data} />
      <ProjectList data={props?.projects} />
    </Page>
  )
}

export async function getServerSideProps(context) {
  const hostname = context.req.headers.host
  const data = await cachedFetch(
    `${process.env.API_BASE_PROTOCOL}${hostname}/api/pages/home`,
    context.query.force
  )
  const projects = await cachedFetch(
    `${process.env.API_BASE_PROTOCOL}${hostname}/api/projects`,
    context.query.force
  )
  return {
    props: {
      data: data || {},
      projects: (projects || []).filter(({ featured }) => featured),
    },
  }
}

export default Home
