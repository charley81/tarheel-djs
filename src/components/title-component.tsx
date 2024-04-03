import { twMerge } from 'tailwind-merge'
import { TitleComponentProps } from '@/lib/types'
import { cn } from '@/lib/helpers'

export default function TitleComponent({
  children,
  className
}: TitleComponentProps) {
  return (
    <h1
      className={cn(
        'text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl',
        className
      )}
    >
      {children}
    </h1>
  )
}
