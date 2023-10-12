import { Inner8 } from '@/components/Layout'
import PostDetail from '@/components/PostDetail'
import PostList from '@/components/PostList'
import About from '@/components/indexPage/About'
import Company from '@/components/indexPage/Company'
import Contact from '@/components/indexPage/Contact'
import Profile from '@/components/indexPage/Profile'
import Works from '@/components/indexPage/Works'
import { WORK_POST_DIRECTORY } from '@/config'
import {
  getAllPostPaths,
  getAllPosts,
  getPost
} from '@/lib/post'
import { IFPostDetail, Post } from '@/util/types'
import Head from 'next/head'
import {
  GetServerSideProps,
  GetStaticPaths
} from 'next/types'
import { ParsedUrlQuery } from 'querystring'

interface Props {
  post: IFPostDetail
  posts: Post[]
}

export default function WorksDetail({
  post,
  posts
}: Props) {
  return (
    <>
      <Head>
        <title>{`${post.title} / works / 株式会社souzen`}</title>
        <meta name='description' content='test' />
      </Head>
      <PostDetail post={post} />
      <Inner8>
        <PostList posts={posts} />
      </Inner8>
      <About />
      <Profile />
      <Company />
      <Contact />
    </>
  )
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetServerSideProps<
  Props,
  Params
> = async ({ params }) => {
  const post = await getPost(
    WORK_POST_DIRECTORY,
    params!.id
  )
  const posts = (
    await getAllPosts(WORK_POST_DIRECTORY)
  ).filter((p) => p.id !== post.id)

  const props: Props = {
    post,
    posts
  }
  return {
    props
  }
}

export const getStaticPaths: GetStaticPaths<
  Params
> = async () => {
  const paths = await getAllPostPaths(WORK_POST_DIRECTORY)

  return {
    paths,
    fallback: false
  }
}
