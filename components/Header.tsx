import { media } from '@/util/const'
import styled from 'styled-components'
import { TransitionLink } from './TransitionLink'

export default function Header() {
  return (
    <Wrapper>
      <TransitionLink href='/'>
        <Logo src='/logo.svg' alt='souzen' />
      </TransitionLink>
      <Links
        style={{ viewTransitionName: `headedr-links` }}
      >
        {/* <TransitionLink href='/'>Top</TransitionLink> */}
        <TransitionLink href='/works'>WORKS</TransitionLink>
        <TransitionLink href='/blog'>BLOG</TransitionLink>
        <a
          href='https://twitter.com/matsurai25'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IconTwitter src={'/icon-x.svg'} />
        </a>
      </Links>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  padding: 0 4rem;
  height: 8rem;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  justify-content: space-between;

  ${media.mobile} {
    padding: 0 2.4rem;
    height: 6.4rem;
  }
`

const Logo = styled.img`
  height: 3rem;

  ${media.mobile} {
    height: 2.4rem;
  }
  &:hover {
    opacity: 0.8;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  gap: 1.6rem;

  ${media.mobile} {
    font-size: 1.4rem;
    gap: 1.6rem;
  }

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: #00f;
    }
  }
`

const IconTwitter = styled.img`
  width: 3.6rem;
  height: 3.6rem;

  &:hover {
    opacity: 0.8;
  }
`
