import { media } from '@/util/const'
import type { AppProps } from 'next/app'
import 'reset-css'
import { createGlobalStyle } from 'styled-components'

export default function App({
  Component,
  pageProps
}: AppProps) {
  return <Component {...pageProps} />
}

const GlobalStyles = createGlobalStyle`
  html,
  body {
    background-color: #FFF;
    opacity: 1;
    font-family: 'Noto Serif JP', serif;

    font-size: calc(100vw / 1440 * 10);
    /* font-size: max(min(calc(100vw / 1440 * 10), 10px), calc(100vw / 1920 * 10)); */

    ${media.mobile} {
      font-size: calc(100vw / 375 * 10);
    }
  }
`
