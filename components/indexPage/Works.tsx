import { media } from '@/util/const'
import styled from 'styled-components'
import { Inner10 } from '@/components/Layout'
import PostList from '@/components/PostList'
import { Post } from '@/util/types'

interface Props {
  works: Post[]
}

export default function Works({ works }: Props) {
  return (
    <Wrapper>
      <Inner10>
        <PostList posts={works} />
      </Inner10>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0 4rem;

  ${media.mobile} {
  }
`
