import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme, { FontStyles } from '~/lib/theme'
import '~styles/globals.css'

function SiteApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          NoLineal | Diseño Arquitectónico, Interiorismo & Modelado 3D
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FontStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default SiteApp
