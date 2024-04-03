import { cn } from '@/lib/helpers'
import { SkeletonProps } from '@/lib/types'

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse h-4 w-[550px] rounded-md bg-slate-50/5',
        className
      )}
    />
  )
}
