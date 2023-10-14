import { media } from '@/util/const'
import styled from 'styled-components'

export default function Footer() {
  return <Wrapper>Copyright © 2023- Souzen Inc.</Wrapper>
}

const Wrapper = styled.footer`
  width: 100%;
  color: #000;
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 8rem 0;

  ${media.mobile} {
    padding: 4rem 0;
    font-size: 1.2rem;
  }
`
