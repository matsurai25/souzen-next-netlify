export interface IFPostDetail {
  contentHtml: string
  id: string
  title: string
  date: string
  image?: string
  tags?: string[]
}

export type Post = Omit<IFPostDetail, 'contentHtml'>
