import { styled } from 'styled-components'
import { IFPostDetail } from '@/util/types'
import { Inner8 } from '@/components/Layout'
import dayjs from 'dayjs'

interface Props {
  post: IFPostDetail
}
export default function PostDetail({ post }: Props) {
  return (
    <Wrppaer>
      <Article
        style={{ viewTransitionName: `${post.id}-wrapper` }}
      >
        {post.image && (
          <CoverImage
            src={post.image}
            style={{ viewTransitionName: post.id }}
          />
        )}
        <Padding>
          <Title>{post.title}</Title>
          <Published>
            {dayjs(post.date).format('YYYY.MM.DD')}
          </Published>
          <Body
            dangerouslySetInnerHTML={{
              __html: post.contentHtml
            }}
          />
          <script
            async
            src='https://platform.twitter.com/widgets.js'
          ></script>
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
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 2;
  position: relative;
`

const Padding = styled.div`
  padding: 6rem 12rem;
`

const Title = styled.h1`
  line-height: 1.2;
  font-size: 2.4rem;
  font-weight: bold;
`

const Published = styled.h6`
  line-height: 1;
  font-size: 12px;
  color: #999;
`

const CoverImage = styled.img`
  width: 100%;
  border-radius: 2.4rem 2.4rem 0 0;
`

const Body = styled.div`
  h2 {
    color: #00f;
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 24px;
  }

  h6 {
    color: #000;
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0 12px;
  }

  blockquote {
    margin: 16px 0;
    padding: 12px 0 12px 24px;
    border-left: 2px solid #ddd;
    color: #999;
  }

  a {
    color: #00f;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 16px 0;
  }

  .twitter-tweet {
    margin-right: auto;
    margin-left: auto;
  }

  ul,
  ol {
    padding: 12px 0 12px 40px;
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
    border: 1px solid #ddd;
    border-radius: 0.8rem;
    overflow: hidden;

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
`
