import { media } from '@/util/const'
import styled from 'styled-components'
import { TransitionLink } from './TransitionLink'

export default function Header() {
  return (
    <Wrapper>
      <TransitionLink href='/'>
        <Logo src='/logo.svg' alt='souzen' />
      </TransitionLink>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  padding: 0 4rem;
  height: 8rem;
  display: grid;
  align-items: center;

  ${media.mobile} {
  }
`

const Logo = styled.img`
  height: 4rem;
`
