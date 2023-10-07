export enum PostStatus {
  PUBLISH = 'publish',
  DRAFT = 'draft'
}

export interface NewsContent {
  id: string
  date: string
  title: string
  body: string
  thumbnail: string
  status: PostStatus
}

export interface MovieItem {
  id: number
  name: string
  video_id: string
  is_featured: boolean
}

export interface BookItem {
  id: number
  image: string
  name: string
  url: string
}

export interface StoryItem {
  episode: string
  title_with_episode: string
  title: string
  images: {
    id: number
    image_path: string
  }[]
  description: string
  video_id?: string
}

export interface GoodsItem {
  id: string
  name: string
  link: string
  release: string
  price: string
  images: {
    id: number
    image_path: string
  }[]
  description: string
  details_html: string
  attention: string
}

export interface ApplicationState {
  news: NewsContent[]
  movies: MovieItem[]
  onair: {
    broadcast: BroadcastItem[]
    streaming: {
      advanced: StreamingItem[]
      unlimited: StreamingItem[]
      pay_per_view: StreamingItem[]
    }
  }
  books: {
    novels: BookItem[]
    comics: BookItem[]
  }
  stories: StoryItem[]
  goods: GoodsItem[]
  isLoadScreenEnded: boolean
}

export interface CharacterData {
  id: string
  description: string | JSX.Element
  cv: string
  name: string
  name_en: string
}

export interface StaffData {
  id: string
  role: string
  role_short?: string
  name: string
  hasComment: boolean
  comment?: JSX.Element
}

export interface BookData {
  id: string
  title: string
  url: string
}

export interface BroadcastItem {
  id: number
  name: string
  start_date: string
  start_time: string
}
export interface StreamingItem {
  id: number
  name: string
  url: string
  streaming_start_date: string
}
