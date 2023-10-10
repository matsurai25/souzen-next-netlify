import { media } from '@/util/const'
import { Inner8 } from '@/components/Layout'
import styled from 'styled-components'

export default function Profile() {
  return (
    <Wrapper style={{ viewTransitionName: 'profile' }}>
      <Panel>
        <Head>代表取締役 / CEO</Head>
        <Icon src='/icon.png' />
        <Name>松元 蒼太 / matsurai</Name>
        <Role>
          エンジニア・デザイナー・プロダクトマネージャー・映像クリエイター
        </Role>
        <Detail>
          <History>
            <div>2017年</div>
            <div>
              早稲田大学文化構想学部を卒業し、ピクシブ株式会社にエンジニアとして入社。後にpixivFANBOXのプロダクトマネージャーとして、サービスの機能開発やマーケティング施策の実施などを担当。後に全社的なマーケティングを行う部署に異動し、定量・定性調査の実施やサービスのブランディング施策などを企画。
            </div>
            <div>2022年</div>
            <div>
              独立してフリーランスとなり、アニメ公式サイトのデザインと実装、Vtuberのライブの背景映像の制作、事業会社のコンサルティング業務などを行う。
            </div>
            <div>2023年</div>
            <div>株式会社souzenを設立。</div>
          </History>
          <Border />
          <Skills>
            <div>得意なこと</div>
            <ul>
              <li>WEBサイトのディレクション・実装</li>
              <li>業務効率化</li>
            </ul>
            <div>業務経験多め</div>
            <ul>
              <li>WordPress</li>
              <li>Shopify</li>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>styled-components</li>
              <li>lottie</li>
              <li>AfterEffects</li>
              <li>Figma</li>
              <li>Illustrator</li>
              <li>GoogleAnalytics</li>
              <li>Notion</li>
              <li>企画</li>
              <li>クリエイティブディレクション</li>
              <li>映像制作</li>
              <li>写真撮影</li>
            </ul>
            <div>業務経験あり</div>
            <ul>
              <li>Rails</li>
              <li>Laravel</li>
              <li>AdobeExtendScripts</li>
              <li>Blender</li>
              <li>glsl</li>
              <li>vue.js</li>
              <li>BigQuery</li>
              <li>Looker</li>
              <li>定量調査(調査票、レポーティング)</li>
              <li>定性調査(デプスインタビュー)</li>
            </ul>
            <div>興味あり</div>
            <ul>
              <li>アニメ公式サイト等エンタメ系のWEB制作</li>
              <li>AfterEffectsのスクリプト開発・自動化</li>
              <li>
                クリエイター向けサービスの立ち上げ・運営
              </li>
            </ul>
          </Skills>
        </Detail>
      </Panel>
    </Wrapper>
  )
}

const Wrapper = styled(Inner8)``

const Panel = styled.div`
  border-radius: 2.4rem;
  background: #fff;
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.15);
  padding: 4rem;
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 2rem 4rem;
`

const Head = styled.div`
  color: #000;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 3.84rem */
  grid-column: 1 / 4;
`
const Icon = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 66rem;
  grid-row: 2 / 4;
`
const Name = styled.div`
  color: #000;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 2.88rem */
  grid-column: 2 / 3;
`
const Role = styled.div`
  color: #000;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 1.92rem */
  grid-column: 3 / 4;
  display: grid;
  align-content: center;
`
const Detail = styled.div`
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 2.16rem */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem 0.8rem;
  grid-column: 2 / 4;

  ul {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 0 0.8rem;
    flex-wrap: wrap;

    li {
      &::after {
        content: '/';
        display: inline-block;
        padding-left: 0.8rem;
        opacity: 0.5;
      }
      &:last-child::after {
        display: none;
      }
    }
  }
`
const History = styled.div`
  display: grid;
  grid-template-columns: 12rem 1fr;
  row-gap: 1.2rem;
`
const Skills = styled.div`
  display: grid;
  font-size: 1.2rem;
  grid-template-columns: 12rem 1fr;
  row-gap: 1.2rem;
`
const Border = styled.div`
  border-bottom: 1px solid #ddd;
  width: 100%;
  margin: 1rem 0;
`
