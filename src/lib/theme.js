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

const fonts = {
  light: 'Louis George Cafe Light',
  regular: 'Louis George Cafe',
  bold: 'Louis George Cafe Bold',
}

const colors = {
  gray100: '#282829',
  gray70: '#6d6c6c',
  gray50: '#a2a2a2',
  gray20: '#ebebeb',
  white: '#ffffff',
  black_30: 'rgba(0,0,0,0.5)',
  red: 'red',
  blue: 'blue',
}

const theme = { fonts, colors, breakpoints }

export default theme
