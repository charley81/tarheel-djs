import Skeleton from '@/components/skeleton'
import SkeletonCard from '@/components/skeleton-card'

export default function Loading() {
  return (
    <div className="flex flex-wrap justify-center gap-20 max-w-[1100px] mx-auto px-[20px] py-24">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}
