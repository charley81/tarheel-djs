import { DjListProps } from '@/lib/types'
import DjCard from './dj-card'
import { getDjs } from '@/lib/helpers'

export default async function DjList({ city }: DjListProps) {
  const data = await getDjs(city)

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((dj) => (
        <DjCard key={dj.id} dj={dj} />
      ))}
    </section>
  )
}
