import { Dj } from '@prisma/client'

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

export type DjListProps = {
  city: string
}

export type DjCardProps = {
  dj: Dj
}

export type SkeletonProps = {
  className?: string
}

export type DjPageProps = {
  params: {
    slug: string
  }
}
