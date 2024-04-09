import { DjListProps } from '@/lib/types'
import DjCard from './dj-card'
import { getDjs } from '@/lib/helpers'
import PaginationControls from './pagination-controls'

export default async function DjList({ city, page = 1 }: DjListProps) {
  const { data, totalCount } = await getDjs(city, page)

  const previousPath = page > 1 ? `/dj-by-city/${city}?page=${page - 1}` : ''
  const nextPath =
    totalCount > 6 * page ? `/dj-by-city/${city}?page=${page + 1}` : ''

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((dj) => (
        <DjCard key={dj.id} dj={dj} />
      ))}
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  )
}
