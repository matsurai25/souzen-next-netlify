import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1.0'
        />
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
        <script
          async
          src='https://platform.twitter.com/widgets.js'
        ></script>
        <meta name='robots' content='noindex,follow' />
        <meta
          property='og:site_name'
          content={'souzen Inc.'}
        />
        <meta
          property='og:url'
          content={'https://souzen.io'}
        />
        <meta property='og:type' content='website' />
        <link
          rel='shortcut icon'
          href='https://souzen.io/favicon.ico'
        />
        <meta name='theme-color' content='#0000FF' />
        <meta name='twitter:card' content='summary' />
        <meta
          property='og:image'
          content={'https://souzen.io/ogp.webp'}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
