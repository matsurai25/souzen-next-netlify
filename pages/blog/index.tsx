import Head from 'next/head'
import { GetServerSideProps } from 'next/types'
import { Post } from '@/util/types'
import { BLOG_POST_DIRECTORY } from '@/config'
import { getAllPosts } from '@/lib/post'
import { media } from '@/util/const'
import styled from 'styled-components'
import { Inner8 } from '@/components/Layout'
import PostList from '@/components/PostList'

export default function Page({ posts }: Props) {
  return (
    <>
      <Head>
        <title>blog / 株式会社souzen</title>
      </Head>
      <Wrapper>
        <Inner8>
          <PostList posts={posts} type='blog' />
        </Inner8>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0 4rem;

  ${media.mobile} {
  }
`

interface Props {
  posts: Post[]
}

export const getStaticProps: GetServerSideProps<
  Props
> = async ({}) => {
  const posts = await getAllPosts(BLOG_POST_DIRECTORY)

  const props: Props = {
    posts
  }
  return {
    props
  }
}
