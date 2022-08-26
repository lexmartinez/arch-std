import React from 'react'
import { HomeHero, ContentSection, Page } from '~/components'
import { cachedFetch } from '~/lib/fetch'

const ContentPage = (props) => {
  return (
    <Page>
      <ContentSection data={props?.data || []} />
    </Page>
  )
}

export async function getServerSideProps(context) {
  const hostname = context.req.headers.host
  const page = context?.query?.page
  const data = await cachedFetch(
    `${process.env.API_BASE_PROTOCOL}${hostname}/api/pages/${page}`,
    context.query.force
  )
  return {
    props: {
      data: data || [],
    },
  }
}

export default ContentPage
