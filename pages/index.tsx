import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Head>
        <title>souzen test</title>
        <meta name='description' content='test' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main>asd</Main>
    </>
  )
}

const Main = styled.div`
  background-color: aqua;
`
