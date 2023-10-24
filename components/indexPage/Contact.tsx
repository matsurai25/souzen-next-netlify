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
        href='https://docs.google.com/forms/d/e/1FAIpQLSfJGTw8ahXonxsnwC7jcce6PTRnJbU5Li_xdZKTjUaTGwyTQA/viewform'
      >
        Googleフォーム
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled(Inner6)`
  padding: 2rem 0 4rem;

  ${media.mobile} {
    width: calc(100% - 6.4rem);
  }
`
const Heading = styled.div`
  color: #000;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 6rem;

  ${media.mobile} {
    font-size: 2.4rem;
    margin-bottom: 2.4rem;
  }
`
const Body = styled.p`
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 4rem;

  ${media.mobile} {
    font-size: 1.4rem;
    margin-bottom: 3.2rem;
  }
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

  ${media.mobile} {
    display: grid;
    padding: 1rem 4rem;
    font-size: 1.6rem;
    margin: 0 auto;
  }

  &:hover {
    background: #333;
  }
`
