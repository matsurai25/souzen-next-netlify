import PostDetail from '@/components/PostDetail'
import About from '@/components/indexPage/About'
import Company from '@/components/indexPage/Company'
import Contact from '@/components/indexPage/Contact'
import Profile from '@/components/indexPage/Profile'
import { WORK_POST_DIRECTORY } from '@/config'
import { getAllPostPaths, getPost } from '@/lib/post'
import { IFPostDetail } from '@/util/types'
import Head from 'next/head'
import {
  GetServerSideProps,
  GetStaticPaths
} from 'next/types'
import { ParsedUrlQuery } from 'querystring'

interface Props {
  post: IFPostDetail
}

export default function WorksDetail({ post }: Props) {
  return (
    <>
      <Head>
        <title>{`${post.title} / works / 株式会社souzen`}</title>
        <meta name='description' content='test' />
      </Head>
      <PostDetail post={post} />
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
  const props: Props = {
    post
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
