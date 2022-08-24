import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useTheme } from 'styled-components'
import { HeroContainer, GridContainer, HeroRow, HeroContent } from './styles'

const HomeHero = (props) => {
  const theme = useTheme()
  const cianY = useMotionValue(0)
  const magentaY = useMotionValue(0)
  const input = [-100, 0, 100]
  const output = [0.4, 1, 0.4]
  const translateCianY = useTransform(cianY, input, output)
  const translateMagentaY = useTransform(magentaY, input, output)

  useEffect(() => {
    console.log('AAA')
    const options = { passive: true } // options must match add/remove event
    const scroll = (event) => {
      console.log(event)
      const scrollValue = event.target.scrollingElement.scrollTop
      cianY.set(scrollValue / 75)
      magentaY.set(scrollValue / -90)
    }

    document.addEventListener('scroll', scroll, options)
    // remove event on unmount to prevent a memory leak
    return () => document.removeEventListener('scroll', scroll, options)
  }, [])

  return (
    <HeroContainer>
      <GridContainer>
        <HeroRow>
          <HeroContent>
            <motion.h1
              drag="cianY"
              style={{
                x: cianY,
                translateX: translateCianY,
                position: 'absolute',
                zIndex: 8,
                color: theme.colors.gray30,
              }}
            >
              NOLINEAL.
            </motion.h1>
            <motion.h1
              drag="magentaY"
              style={{
                x: magentaY,
                translateX: translateMagentaY,
                zIndex: 7,
                color: theme.colors.white,
              }}
            >
              NOLINEAL.
            </motion.h1>
          </HeroContent>
        </HeroRow>
      </GridContainer>
    </HeroContainer>
  )
}

export default HomeHero
