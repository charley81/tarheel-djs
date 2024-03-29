import Image from 'next/image'
import { DjListProps } from '@/utils/types'
import DjCard from './dj-card'

export default function DjList({ djs }: DjListProps) {
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-8 justify-center">
      {djs.map((dj) => (
        <DjCard key={dj.id} dj={dj} />
      ))}
    </section>
  )
}
