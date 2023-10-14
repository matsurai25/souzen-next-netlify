import { media } from '@/util/const'
import { styled } from 'styled-components'

export const PcBr = styled.br`
  display: block;

  ${media.mobile} {
    display: none;
  }
`

export const SpBr = styled.br`
  display: none;

  ${media.mobile} {
    display: block;
  }
`
