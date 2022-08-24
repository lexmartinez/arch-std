/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { renderPage } = ctx
    const initialProps = await Document.getInitialProps(ctx)
    const sheet = new ServerStyleSheet()
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...initialProps, ...page, styleTags }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="NoLineal | Diseño Arquitectónico, Interiorismo & Modelado 3D"
          />
          <meta name="msapplication-TileColor" content="#282829" />
          <meta name="theme-color" content="#282829" />
          <meta property="og:title" content="NoLineal" />
          <meta
            property="og:description"
            content="NoLineal | Diseño Arquitectónico, Interiorismo & Modelado 3D"
          />
          <meta property="og:image" content="/share.png" />
          <meta property="og:url" content="https://nolineal.co" />
          <meta name="twitter:card" content="summary_large_image" />

          <meta property="og:site_name" content="NoLineal" />
          <meta name="twitter:image:alt" content="NoLineal" />

          <meta name="twitter:site" content="@nolineal" />
          <link rel="canonical" href="https://nolineal.co" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={'true'}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap"
            rel="stylesheet"
          ></link>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
