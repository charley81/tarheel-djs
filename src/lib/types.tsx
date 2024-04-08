import { Dj } from '@prisma/client'

export type DjProps = {
  params: {
    city: string
  }
}

export type DjByCityProps = DjProps & {
  searchParams: { [key: string]: string | string[] | undefined }
}

export type ChildrenProps = {
  children: React.ReactNode
}

export type TitleComponentProps = ChildrenProps & {
  className?: string
}

export type DjListProps = {
  city: string
  page: number
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

export type PaginationControlsProps = {
  previousPath: string
  nextPath: string
}
