import { Post, IFPostDetail } from '@/util/types'
import { readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeRaw from 'rehype-raw'
import rehypeExternalLinks from 'rehype-external-links'
import remarkEmbedder from '@remark-embedder/core'
import type { Config as TransformerOembedConfig } from '@remark-embedder/transformer-oembed'
import oembedTransformer from '@remark-embedder/transformer-oembed'
import webcardTransformer from './transformer-webcard'

export async function getAllPostPaths(postDir: string) {
  const fileNames = readdirSync(postDir)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

/**
 *
 * @param postDir 一覧取得用関数
 * @returns
 */
export async function getAllPosts(
  postDir: string
): Promise<Post[]> {
  const fileNames = readdirSync(postDir)

  const result = []

  for (const fileName of fileNames) {
    const fullPath = path.join(postDir, fileName)
    const fileContents = readFileSync(fullPath, 'utf8')

    // mdファイルのparamsを読み込めるようになる
    const matterResult = matter(fileContents)

    // privateがtrueの場合は表示しない
    if (matterResult.data.private) {
      continue
    }

    result.push({
      id: fileName.replace(/\.md$/, ''),
      title: matterResult.data.title,
      date: matterResult.data.date,
      image: matterResult.data.image || '',
      tags: matterResult.data.tags || []
    })
  }

  console.log(result)

  return result
}

export async function getPost(
  postDir: string,
  id: string
): Promise<IFPostDetail> {
  const fullPath = path.join(postDir, `${id}.md`)
  const fileContents = readFileSync(fullPath, 'utf8')

  // mdファイルのparamsを読み込めるようになる
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .use(remarkParse) // markdown -> mdast の変換
    .use(remarkEmbedder as any, {
      transformers: [
        [
          oembedTransformer,
          {
            params: {
              maxwidth: 550,
              omit_script: true,
              lang: 'ja',
              dnt: true
            }
          } as TransformerOembedConfig
        ],
        [webcardTransformer]
      ]
    })
    .use(remarkRehype, { allowDangerousHtml: true }) // mdast -> hast の変換
    .use(rehypeRaw)
    .use(rehypeExternalLinks)
    .use(rehypeStringify) // hast -> html の変換
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    title: '',
    date: '',
    tags: [],
    contentHtml,
    ...matterResult.data
  }
}
