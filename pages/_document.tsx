import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=K2D:wght@300&family=Noto+Sans+JP:wght@400;700&display=swap'
          rel='stylesheet'
        ></link>
        <style>
          {`html {background:#FFF} body {opacity:0}`}
        </style>
        {/* <script
          async
          src='https://platform.twitter.com/widgets.js'
        ></script> */}
        <meta name='robots' content='noindex,follow' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
