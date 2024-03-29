export type DjByCityProps = {
  params: {
    city: string
  }
}

export type ChildrenProps = {
  children: React.ReactNode
}

export type Event = {
  id: number
  name: string
  slug: string
  city: string
  location: string
  date: string
  organizerName: string
  imageUrl: string
  description: string
}
