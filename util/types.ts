export interface IFPostDetail {
  contentHtml: string
  id: string
  title: string
  date: string
  private?: boolean
  image?: string
  tags?: string[]
}

export type Post = Omit<IFPostDetail, 'contentHtml'>
