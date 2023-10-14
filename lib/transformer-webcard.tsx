import type { Transformer } from '@remark-embedder/core'
import ogs from 'open-graph-scraper'
import { ImageObject } from 'open-graph-scraper/dist/lib/types'

const transformer: Transformer = {
  getHTML: async (url) => {
    const options = { url }

    try {
      const { result } = await ogs(options)

      return WebCard({
        href: url,
        imagePath: result.ogImage,
        title: result.ogTitle,
        description: result.ogDescription,
        favicon: getFaviconUrl(result.favicon, url)
      })
    } catch (error) {
      return url
    }
  },
  name: 'webcard-transformaer',
  shouldTransform: (url) => {
    const u = new URL(url)

    if (
      // IDN判定された日本語の文章が来る場合がある
      u.host.startsWith('xn--') ||
      // ドメインとして正しくない
      !u.host.includes('.')
    ) {
      return false
    }
    return true
  }
}

export default transformer

function WebCard({
  href,
  imagePath,
  title,
  description,
  favicon
}: {
  href: string
  imagePath?: ImageObject[]
  title?: string
  description?: string
  favicon?: string
}) {
  const u = new URL(href)
  return `
  <a class="webcard" href="${href}" target="_blank" rel="noopener noreferrer">
    ${
      imagePath &&
      imagePath.length > 0 &&
      `<img class="webcard-image" src="${imagePath[0].url}" />`
    }
    <div class="webcard-text">
      <div class="webcard-title" >${title}</div>
      <div class="webcard-description">${
        description || ''
      }</div>
      <div class="webcard-siteurl">
        <div class="webcard-favicon" style="background-image:url(${favicon})" ></div>
        ${u.origin}
      </div>
    </div>
  </a>
  `
}

/**
 * アクセス可能なfaviconのURLを取得する
 * faviconPathには絶対パス、相対パスどちらも来る可能性がある
 *
 * @param faviconPath
 * @param url
 * @returns
 */
function getFaviconUrl(
  faviconPath: string | undefined,
  url: string
): string {
  const u = new URL(url)
  // そもそも存在していないならデフォルトのfaviconを探す
  if (!faviconPath) {
    return u.origin + '/favicon.ico'
  }

  // 完全なURLが指定されているならそれを使う
  if (faviconPath.startsWith('http')) {
    return faviconPath
  }

  return new URL(faviconPath, url).toString()
}
