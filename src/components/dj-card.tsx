'use client'

import { DjCardProps } from '@/lib/types'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRef } from 'react'

const MotionLink = motion(Link)

export default function DjCard({ dj }: DjCardProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.5 1']
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1])

  return (
    <MotionLink
      href={`/dj/${dj.slug}`}
      ref={ref}
      style={{
        // @ts-ignore
        scale: scaleProgress,
        // @ts-ignore
        opacity: opacityProgress
      }}
      initial={{ scale: 0.8, opacity: 0 }}
    >
      <section className="flex flex-col  bg-slate-50/[4%] rounded-xl overflow-hidden cursor-pointer state-effects">
        <Image
          src={dj.imageUrl}
          alt={dj.name}
          height={280}
          width={500}
          className="h-[60%] object-fit"
        />
        <div className="flex flex-col justify-center flex-1 p-4 ">
          <h2 className="text-2xl font-semibold">{dj.name}</h2>
          <p className="italic text-slate-400">{dj.genre}</p>
          <p className="text-sm mt-4 text-slate-400">{dj.city}</p>
        </div>
      </section>
    </MotionLink>
  )
}
