import { DjCardProps } from '@/utils/types'
import Image from 'next/image'

export default function DjCard({ dj }: DjCardProps) {
  return (
    <section className="flex flex-col flex-1 basis-80 h-[380px] max-w-[500px] bg-slate-50/[4%] rounded-xl overflow-hidden">
      <Image
        src={dj.imageUrl}
        alt={dj.name}
        height={280}
        width={500}
        className="h-[60%] object-fit"
      />
      <div className="flex flex-col justify-center items-center flex-1">
        <h2 className="text-2xl font-semibold">{dj.name}</h2>
        <p className="italic text-slate-400">By {dj.organizerName}</p>
        <p className="text-sm mt-4 text-slate-400">{dj.location}</p>
      </div>
    </section>
  )
}
