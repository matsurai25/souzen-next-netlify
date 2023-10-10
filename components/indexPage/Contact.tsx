import { media } from '@/util/const'
import styled from 'styled-components'
import { Inner6, Side } from '@/components/Layout'

export default function Contact() {
  return (
    <Wrapper style={{ viewTransitionName: 'contact' }}>
      <Side src={'/contact/side.svg'} />
      <Heading>お問い合わせ</Heading>
      <Body>以下のフォームよりお問い合わせ下さい。</Body>
      <Button
        target='_blank'
        href='https://docs.google.com/forms/d/e/1FAIpQLSeEBAUQVUaErWUUiRpA1_Cv9Waz7mB3PV9HMg7cK8xLM6Hf4w/viewform'
      >
        Googleフォーム
      </Button>
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
const Body = styled.p`
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 4rem;
`

const Button = styled.a`
  display: inline-flex;
  padding: 2rem 10rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 18rem;
  background: #000;
  color: #fff;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;

  &:hover {
    background: #333;
  }
`
