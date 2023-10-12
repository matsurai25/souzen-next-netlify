import Head from 'next/head'
import { GetServerSideProps } from 'next/types'
import { Post } from '@/util/types'
import { WORK_POST_DIRECTORY } from '@/config'
import { getAllPosts } from '@/lib/post'
import { Inner11, Inner8 } from '@/components/Layout'
import PostList from '@/components/PostList'
import { styled } from 'styled-components'
import { media } from '@/util/const'

export default function Page({ posts }: Props) {
  return (
    <>
      <Head>
        <title>works /souzen</title>
        <meta name='description' content='' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Wrapper>
        <Inner11>
          <PostList posts={posts} />
        </Inner11>
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
  const posts = await getAllPosts(WORK_POST_DIRECTORY)

  const props: Props = {
    posts
  }
  return {
    props
  }
}
