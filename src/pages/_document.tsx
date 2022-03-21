import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { MonogramLogo } from "../components/Branding";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <title>HACK SVIT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="" rel="shortcut icon" />
        <Head />
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
