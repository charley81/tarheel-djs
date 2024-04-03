export type DjByCityProps = {
  params: {
    city: string
  }
}

export type ChildrenProps = {
  children: React.ReactNode
}

export type TitleComponentProps = ChildrenProps & {
  className?: string
}

export type DjEvent = {
  id: number
  name: string
  slug: string
  city: string
  location: string
  date: Date
  organizerName: string
  imageUrl: string
  description: string
}

export type DjListProps = {
  city: string
}

export type DjCardProps = {
  dj: DjEvent
}

export type SkeletonProps = {
  className?: string
}

export type DjPageProps = {
  params: {
    slug: string
  }
}
