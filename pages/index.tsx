import About from '@/components/indexPage/About'
import Works from '@/components/indexPage/Works'
import Company from '@/components/indexPage/Company'
import Contact from '@/components/indexPage/Contact'
import Head from 'next/head'
import Profile from '@/components/indexPage/Profile'
import { GetServerSideProps } from 'next/types'
import { Post } from '@/util/types'
import { WORK_POST_DIRECTORY } from '@/config'
import { getAllPosts } from '@/lib/post'

export default function Home({ works }: Props) {
  return (
    <>
      <Head>
        <title>株式会社souzen</title>
        <meta name='description' content='test' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
      </Head>
      <Works works={works} />
      <About />
      <Profile />
      <Company />
      <Contact />
    </>
  )
}

interface Props {
  works: Post[]
}

export const getStaticProps: GetServerSideProps<
  Props
> = async ({}) => {
  const works = await getAllPosts(WORK_POST_DIRECTORY)

  const props: Props = {
    works
  }
  return {
    props
  }
}
