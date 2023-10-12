import { media } from '@/util/const'
import styled from 'styled-components'

export const Main = styled.main`
  background-color: #fff;
  display: grid;
`

const Inner = styled.div`
  width: 96rem;
  margin: 0 auto;
  position: relative;

  ${media.mobile} {
    width: 100%;
  }
`

export const Inner11 = styled(Inner)`
  width: calc(12rem * 11);
`

export const Inner10 = styled(Inner)`
  width: calc(12rem * 10);
`

export const Inner8 = styled(Inner)`
  width: calc(12rem * 8);
`

export const Inner6 = styled(Inner)`
  width: calc(12rem * 6);
`

export const Section = styled.section`
  padding: 8rem 0;
`

export const Side = styled.img`
  top: 50%;
  left: -12rem;
  transform: translate(-50%, -50%);
  position: absolute;

  ${media.mobile} {
  }
`
