import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Main } from '@/components/Layout'
import { media } from '@/util/const'
import { useTransitionRouterPush } from '@/util/hooks'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import 'reset-css'
import { createGlobalStyle } from 'styled-components'

export default function App({
  Component,
  pageProps
}: AppProps) {
  const { routerPushWithTransition } =
    useTransitionRouterPush()
  const router = useRouter()

  // ブラウザバック時にトランジションをつける
  useEffect(() => {
    router.beforePopState(({ as }) => {
      routerPushWithTransition(as)
      return false
    })
  }, [router, routerPushWithTransition])

  return (
    <>
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
        <meta
          property='og:site_name'
          content={'株式会社souzen'}
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
      <GlobalStyles />
      <Main>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Main>
    </>
  )
}

const GlobalStyles = createGlobalStyle`
  html,
  body {
    background-color: #FFF;
    opacity: 1;
    font-family: 'Noto Sans JP', serif;
    font-size: max(min(calc(100vw / 1440 * 10), 10px), calc(100vw / 1920 * 10));
    transition: opacity 1s ease-out;

    ${media.mobile} {
      font-size: calc(100vw / 375 * 10);
    }
  }
`
