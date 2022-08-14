import { createGlobalStyle } from 'styled-components'

export const FontStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap');
body,html {
  font-family: Arial, 'Montserrat'
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
  gray100: '#363636',
  gray70: '#6d6c6c',
  gray50: '#a2a2a2',
  gray20: '#ebebeb',
  white: '#ffffff',
  gray_30: 'rgba(10,10,10,0.3)',
}

const theme = { fonts, colors, breakpoints }

export default theme
