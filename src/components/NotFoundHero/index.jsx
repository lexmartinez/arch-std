import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useTheme } from 'styled-components'
import {
  HeroContainer,
  GridContainer,
  HeroRow,
  HeroContent,
  Button,
} from './styles'
import { useRouter } from 'next/router'

const HomeHero = () => {
  const router = useRouter()
  const theme = useTheme()
  const layer1X = useMotionValue(0)
  const layer2X = useMotionValue(0)
  const input = [-100, 0, 100]
  const output = [0.4, 1, 0.4]
  const translateLayer1X = useTransform(layer1X, input, output)
  const translateLayer2X = useTransform(layer2X, input, output)

  useEffect(() => {
    const options = { passive: true } // options must match add/remove event
    const scroll = (event) => {
      const scrollValue = event.target.scrollingElement.scrollTop
      layer1X.set(scrollValue / 75)
      layer2X.set(scrollValue / -90)
    }

    document.addEventListener('scroll', scroll, options)
    // remove event on unmount to prevent a memory leak
    return () => document.removeEventListener('scroll', scroll, options)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <HeroContainer>
      <GridContainer>
        <HeroRow>
          <HeroContent>
            <motion.h1
              drag="layer1X"
              style={{
                x: layer1X,
                translateX: translateLayer1X,
                position: 'absolute',
                zIndex: 8,
                color: theme.colors.gray30,
              }}
            >
              NOTFOUND.
            </motion.h1>
            <motion.h1
              drag="layer2X"
              style={{
                x: layer2X,
                translateX: translateLayer2X,
                zIndex: 7,
                color: theme.colors.white,
              }}
            >
              NOTFOUND.
            </motion.h1>
            <Button onClick={() => router.replace('/')}>
              Volver al Inicio
            </Button>
          </HeroContent>
        </HeroRow>
      </GridContainer>
    </HeroContainer>
  )
}

export default HomeHero
