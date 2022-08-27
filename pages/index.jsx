import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Visible } from 'react-grid-system'
import { HomeHero, ContentSection, Page, ProjectList } from '~/components'
import { cachedFetch } from '~/lib/fetch'
import line from '~/lib/line'

const Home = (props) => {
  const layer1X = useMotionValue(0)
  const input = [0, 450, 30000]
  const output = [0, 1, 100]
  const translateLayer1X = useTransform(layer1X, input, output)

  useEffect(() => {
    const options = { passive: true } // options must match add/remove event
    const scroll = (event) => {
      const scrollValue = event.target.scrollingElement.scrollTop
      layer1X.set(scrollValue / 10.5)
    }
    document.addEventListener('scroll', scroll, options)
    return () => document.removeEventListener('scroll', scroll, options)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Page>
      <Visible md lg xl xxl xxxl>
        <svg className="progress-icon" viewBox="0 0 180 500">
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke="#181819"
            strokeDasharray="0 1"
            d={line}
            style={{
              pathLength: translateLayer1X,
            }}
          />
        </svg>
      </Visible>
      <HomeHero />
      <ContentSection data={props?.data} smallBottomPadding={true} />
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
