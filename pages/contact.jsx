import React from 'react'
import dynamic from 'next/dynamic'
import { Page } from '~/components'

const MapWithNoSSR = dynamic(() => import('~/components/Map'), {
  ssr: false,
})

const NotFound = () => {
  return (
    <Page>
      <MapWithNoSSR />
    </Page>
  )
}

export default NotFound
