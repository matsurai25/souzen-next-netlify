import PostDetail from '@/components/PostDetail'
import { BLOG_POST_DIRECTORY } from '@/config'
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

export default function BlogDetail({ post }: Props) {
  return (
    <>
      <Head>
        <title>{`${post.title} / blog / 株式会社souzen`}</title>
        <title>{`${post.title} / blog / 株式会社souzen`}</title>
        <meta
          property='og:title'
          content={`${post.title} / blog / 株式会社souzen`}
        />
        {/* <meta name='description' content={description} />
        <meta
          property='og:description'
          content={description}
        /> */}
        <meta property='og:image' content={post.image} />
      </Head>
      <PostDetail post={post} />
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
    BLOG_POST_DIRECTORY,
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
  const paths = await getAllPostPaths(BLOG_POST_DIRECTORY)

  return {
    paths,
    fallback: false
  }
}
