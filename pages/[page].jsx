import React from 'react'
import { ContentSection, Page, NotFoundHero } from '~/components'
import { cachedFetch } from '~/lib/fetch'

const ContentPage = (props) => {
  const hasContent = (props?.data || []).length > 0
  return (
    <Page>
      {hasContent ? (
        <ContentSection data={props?.data || []} />
      ) : (
        <NotFoundHero />
      )}
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
