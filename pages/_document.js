import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Simplify" key="title"/>
        <meta property="og:description" content="Understand Complex Content with a single click" key="description"/>
        <meta
          property="og:image"
          content=
          '../assets/simplify.png'
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

