import styled from 'styled-components'
import { TransitionLink } from '@/components/TransitionLink'
import { Post } from '@/util/types'

interface Props {
  posts: Post[]
  type?: string
}

export default function PostList({
  posts,
  type = 'works'
}: Props) {
  return (
    <Wrapper>
      <Items>
        {posts.map((post) => (
          <Item key={post.id} post={post} type={type} />
        ))}
      </Items>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  container-type: inline-size;
`

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem 6rem;
  align-items: start;

  @container (max-width: calc(12rem * 11)) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem 2rem;
  }

  @container (max-width: calc(12rem * 10)) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @container (max-width: calc(12rem * 8)) {
    grid-template-columns: 1fr 1fr;
  }

  @container (max-width: calc(420px)) {
    grid-template-columns: 1fr;
  }
`

function Item({
  post,
  type
}: {
  post: Post
  type: string
}) {
  return (
    <ItemWrapper
      href={`/${type}/${post.id}`}
      style={{ viewTransitionName: `wrapper-${post.id}` }}
    >
      <ItemImage
        src={post.image}
        style={{ viewTransitionName: `image-${post.id}` }}
      />
      <ItemText>
        <Tags>
          {post.tags &&
            post.tags.map((tag) => (
              <Tag
                style={{
                  viewTransitionName: `tag-${post.id}-${tag}`
                }}
                key={tag}
              >
                {tag}
              </Tag>
            ))}
        </Tags>
        <ItemTitle>{post.title}</ItemTitle>
        {/* <ItemTitleSub>
          {dayjs(post.date).format('YYYY.MM.DD')}
        </ItemTitleSub> */}
      </ItemText>
    </ItemWrapper>
  )
}

const ItemWrapper = styled(TransitionLink)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  color: #000;
  box-shadow: 0 0 2.4rem 0 rgba(0, 0, 0, 0.15);
  border-radius: 1.6rem;
  overflow: hidden;
  transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;
  position: relative;
  height: 100%;

  &:hover {
    box-shadow: 0 0.6rem 2.8rem 0 rgba(0, 0, 0, 0.25);
    transform: scale(1.02);
  }
`

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 1.2rem 1.6rem 1.6rem;
`

const ItemImage = styled.img`
  width: 100%;
  aspect-ratio: 1200/630;
  border-radius: 1.6rem 1.6rem 0 0;
  object-fit: cover;
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

const ItemTitle = styled.div`
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 2.52rem */
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`
const ItemTitleSub = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 100%; /* 1rem */
`
