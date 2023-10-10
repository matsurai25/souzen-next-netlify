import { media } from '@/util/const'
import styled from 'styled-components'
import { Inner6, Side } from '@/components/Layout'

export default function About() {
  return (
    <Wrapper style={{ viewTransitionName: 'about' }}>
      <Side src={'/about/side.svg'} />
      <Heading>
        頼まれたものを作るのではなく、
        <br />
        「こうしたい」を実現させるだけでもなく、
        <br />
        本当の課題を解決するために、できることを全部やります。
      </Heading>
      <Body>
        souzenは、WEBサイト、映像コンテンツ、デザインの制作から、マーケティングやコンサルティングなどを含め、幅広く「事業を実現する」手伝いを行う会社です。
        <br />
        <br />
        souzenは、課題に対する解決策の質を重視しています。
        <br />
        ただの業務委託先に留まらず、なぜその解に至ったのか、
        <br />
        前提となる戦略や今後の展望を伺い、最適な解決策を一緒に模索させていただきます。
        <br />
        「これをやりたい」と思ったときに、とりあえず話しかけてみる。
        <br />
        そんな会社でありたいと思っています。
      </Body>
    </Wrapper>
  )
}

const Wrapper = styled(Inner6)`
  padding: 8rem 0;
  display: grid;
  align-items: center;

  ${media.mobile} {
  }
`

const Heading = styled.h2`
  color: #000;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  margin-bottom: 3.2rem;
`

const Body = styled.p`
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 2.88rem */
`
