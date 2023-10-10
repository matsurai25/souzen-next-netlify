import { media } from '@/util/const'
import styled from 'styled-components'
import { TransitionLink } from '@/components/TransitionLink'
import { Inner10 } from '@/components/Layout'
import { Post } from '@/util/types'
import Link from 'next/link'
import dayjs from 'dayjs'

interface Props {
  works: Post[]
}

export default function Works({ works }: Props) {
  return (
    <Wrapper>
      <Inner10>
        <Items>
          {works.map((post) => (
            <WorkItem key={post.id} post={post} />
          ))}
        </Items>
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

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem 6rem;
  align-items: start;
`

function WorkItem({ post }: { post: Post }) {
  return (
    <WorkItemWrapper
      href={`/works/${post.id}`}
      style={{ viewTransitionName: `${post.id}-wrapper` }}
    >
      <WorkItemImage
        src={post.image}
        style={{ viewTransitionName: post.id }}
      />
      <WorkItemText>
        <Tags>
          {post.tags &&
            post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
        </Tags>
        <WorkItemTitle>{post.title}</WorkItemTitle>
        <WorkItemTitleSub>
          {dayjs(post.date).format('YYYY-MM-DD HH:mm:ss')}
        </WorkItemTitleSub>
      </WorkItemText>
    </WorkItemWrapper>
  )
}

const WorkItemWrapper = styled(TransitionLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8rem;
  text-decoration: none;
  color: #000;
  box-shadow: 0px 0px 2.4rem 0px rgba(0, 0, 0, 0.15);
  border-radius: 1.6rem;
  overflow: hidden;
  transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;
  position: relative;

  &:hover {
    box-shadow: 0px 0.6rem 2.8rem 0px rgba(0, 0, 0, 0.25);
  }
`

const WorkItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 1.6rem;
`

const WorkItemImage = styled.img`
  width: 36rem;
  aspect-ratio: 16/9;
  border-radius: 1.6rem 1.6rem 0 0;
`
const Tags = styled.div`
  display: flex;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
`
const Tag = styled.div`
  display: flex;
  padding: 0.2rem 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 0.1rem solid #000;
  color: #000;
  font-family: K2D;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`

const WorkItemTitle = styled.div`
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 2.52rem */
`
const WorkItemTitleSub = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-family: Noto Sans JP;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 100%; /* 1rem */
`
