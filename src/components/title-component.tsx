import { ChildrenProps } from '@/utils/types'

export default function TitleComponent({ children }: ChildrenProps) {
  return (
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
      {children}
    </h1>
  )
}
