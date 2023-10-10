import { media } from '@/util/const'
import styled from 'styled-components'
import { Inner6, Side } from '@/components/Layout'

export default function Company() {
  return (
    <Wrapper style={{ viewTransitionName: 'company' }}>
      <Side src={'/company/side.svg'} />
      <Heading>会社概要</Heading>
      <Items>
        <ItemName>社名</ItemName>
        <ItemBody>株式会社souzen</ItemBody>
        <ItemName>設立</ItemName>
        <ItemBody>2023年9月21日</ItemBody>
        <ItemName>代表取締役</ItemName>
        <ItemBody>松元 蒼太</ItemBody>
        <ItemName>事業内容</ItemName>
        <ItemBody>
          アーティスト・クリエイター・エンタメ事業における、WEBサイトの制作・運営、ECサイトの制作・運営、マーケティング企画の制作・運営、映像コンテンツの制作、WEBサービスのプロダクトマネジメント・事業コンサルティング業務
        </ItemBody>
        <ItemName>所在地</ItemName>
        <ItemBody>
          東京都渋谷区道玄坂１丁目１０番８号渋谷道玄坂東急ビル２Ｆ－Ｃ
        </ItemBody>
      </Items>
    </Wrapper>
  )
}

const Wrapper = styled(Inner6)`
  padding: 8rem 0;

  ${media.mobile} {
  }
`

const Heading = styled.div`
  color: #000;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 6rem;
`
const Items = styled.div`
  display: grid;
  grid-template-columns: 9.6rem 60rem;
  gap: 3.2rem 2.4rem;
`
const ItemName = styled.div`
  color: #878787;
  text-align: right;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const ItemBody = styled.div`
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
