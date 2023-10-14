import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Main } from '@/components/Layout'
import { media } from '@/util/const'
import { useTransitionRouterPush } from '@/util/hooks'
import type { AppProps } from 'next/app'
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
