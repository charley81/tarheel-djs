import Image from 'next/image'
import { DjListProps } from '@/utils/types'
import DjCard from './dj-card'

export default function DjList({ djs }: DjListProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {djs.map((dj) => (
        <DjCard key={dj.id} dj={dj} />
      ))}
    </section>
  )
}
