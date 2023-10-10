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
        favicon: result.favicon
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
  let faviconWithDomain: string | null
  if (!favicon) {
    faviconWithDomain = null
  } else if (favicon.startsWith('http')) {
    faviconWithDomain = favicon
  } else {
    faviconWithDomain = u.origin + favicon
  }
  return `
  <a class="webcard" href="${href}">
    ${
      imagePath &&
      imagePath.length > 0 &&
      `<img class="webcard-image" src="${imagePath[0].url}" />`
    }
    <div class="webcard-text">
      <div class="webcard-title" >${title}</div>
      <div class="webcard-description">${description}</div>
      <div class="webcard-siteurl">
        <img class="webcard-favicon" src="${faviconWithDomain}" />
        ${u.origin}
      </div>
    </div>
  </a>
  `
}
