import { createGlobalStyle } from 'styled-components'

export const FontStyles = createGlobalStyle`
body,html {
  font-family: 'Titillium Web'
}
`

export const breakpoints = {
  xs: `(min-width: 0px)`,
  sm: `(min-width: 576px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 992px)`,
  xl: `(min-width: 1200px)`,
  xxl: `(min-width: 1600px)`,
  xxxl: `(min-width: 1920px)`,
}

const colors = {
  gray100: '#181819',
  gray80: '#282829',
  gray70: '#6d6c6c',
  gray50: '#a2a2a2',
  gray20: '#ebebeb',
  white: '#ffffff',
  black_50: 'rgba(0,0,0,0.5)',
  gray_50: 'rgba(80,80,80,0.5)',
  gray_20: 'rgba(120,120,120,0.2)',
}

const theme = { colors, breakpoints }

export default theme
