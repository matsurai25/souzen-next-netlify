import { styled } from 'styled-components'
import { IFPostDetail } from '@/util/types'
import { Inner8 } from '@/components/Layout'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

interface Props {
  post: IFPostDetail
}
export default function PostDetail({ post }: Props) {
  const { asPath } = useRouter()

  // useEffect(() => {
  //   ;(window as any).twttr.widgets.load()
  // }, [asPath])

  return (
    <Wrppaer>
      <Article
        style={{ viewTransitionName: `wrapper-${post.id}` }}
      >
        {post.image && (
          <CoverImage
            src={post.image}
            style={{
              viewTransitionName: `image-${post.id}`
            }}
          />
        )}
        <Padding>
          <HiddenTags>
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
          </HiddenTags>
          {post.private && (
            <PrivateCallout>
              この記事はURLを知っている人のみが閲覧可能です
            </PrivateCallout>
          )}
          <Title>{post.title}</Title>
          <Published>
            {dayjs(post.date).format(
              'YYYY年MM月DD日'
            )}
          </Published>
          <Body
            dangerouslySetInnerHTML={{
              __html: post.contentHtml
            }}
          />
          <Tags>
            {post.tags &&
              post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
          </Tags>
        </Padding>
      </Article>
    </Wrppaer>
  )
}

const Wrppaer = styled(Inner8)`
  padding: 8rem 0;
`

const Article = styled.article`
  font-size: 1.6rem;
  line-height: 1.8;
  border-radius: 2.4rem;
  background: #fff;
  box-shadow: 0 0 2.4rem 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 2;
  position: relative;
`

const Padding = styled.div`
  padding: 6rem 12rem;
`

const Tags = styled.div`
  display: flex;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-top: 2.4rem;
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
const HiddenTags = styled(Tags)`
  opacity: 0;
  height: 0;
  margin: 0;
`

const PrivateCallout = styled.div`
  padding: 1.6rem 2.4rem;
  font-size: 1.4rem;
  background-color: #ffbaba;
  margin: 2.4rem 0;
  display: flex;
  gap: 0.8rem;
  align-items: center;

  &::before {
    content: '!';
    display: flex;
    background-color: #f33;
    border-radius: 1.6rem;
    width: 2rem;
    height: 2rem;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
  }
`

const Title = styled.h1`
  line-height: 1.4;
  font-size: 2.8rem;
  font-weight: bold;
`

const Published = styled.h6`
  line-height: 1;
  font-size: 1.2rem;
  color: #999;
  margin-top: 1.2rem;
`

const CoverImage = styled.img`
  width: 100%;
  border-radius: 2.4rem 2.4rem 0 0;
`

const Body = styled.div`
  --default-margin: 2.4rem;
  h2 {
    color: #000;
    font-size: 2.4rem;
    font-weight: bold;
    margin: calc(var(--default-margin) + 1.6rem) 0
      var(--default-margin);
  }
  h3 {
    color: #000;
    font-size: 1.6rem;
    font-weight: bold;
    margin: var(--default-margin) 0 0.4rem;
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    align-items: center;
    gap: 1.6rem;

    &::after {
      content: '';
      display: block;
      border-bottom: 1px solid #ddd;
      width: 100%;
    }

    & + p {
      margin-top: 0.4rem;
      font-size: 1.2rem;
    }
  }

  h6 {
    color: #000;
    font-size: 1.6rem;
    font-weight: bold;
    margin: var(--default-margin) 0;
  }

  blockquote {
    margin: var(--default-margin) 0;
    padding: 1.2rem 0 1.2rem 2.4rem;
    border-left: 0.2rem solid #ddd;
    color: #999;
  }

  code {
    display: block;
    margin: var(--default-margin) 0;
    padding: 1.6rem 3.2rem;
    background-color: #f0f0f0;
    font-size: 1.4rem;
    font-family: K2D;
  }

  a {
    color: #00f;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: var(--default-margin) 0;
  }

  .twitter-tweet {
    margin-right: auto;
    margin-left: auto;
  }

  ul,
  ol {
    padding: 1.2rem 0 1.2rem 4rem;
  }

  ul li {
    list-style: disc;
  }

  strong {
    font-weight: bold;
  }

  a.webcard {
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    color: #000;
    text-decoration: none;
    border: 0.1rem solid #ddd;
    border-radius: 0.8rem;
    overflow: hidden;
    margin: var(--default-margin) 0;

    &:hover {
      text-decoration: none;
      background-color: #ecfaff;
      transition: all 0.3s ease-out;
    }
  }
  .webcard-image {
    width: 30rem;
  }
  .webcard-text {
    padding: 0 4rem;
    display: grid;
    gap: 0.8rem;
    align-items: center;
    align-content: center;
  }
  .webcard-title {
    font-size: 1.6rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: bold;
  }
  .webcard-description {
    font-size: 1.2rem;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .webcard-favicon {
    width: 1.6rem;
  }
  .webcard-siteurl {
    font-size: 1.1rem;
    color: #999;
    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 0.8rem;
  }

  iframe[src*='youtube'] {
    width: 100%;
    height: 100%;
    aspect-ratio: 16/9;
    margin: var(--default-margin) 0;
  }
`
