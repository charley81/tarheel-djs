import React from 'react'
import Image from 'next/image'
import { DjPageProps } from '@/lib/types'
import { Metadata } from 'next'
import { getDj } from '@/lib/helpers'

export async function generateMetadata({
  params
}: DjPageProps): Promise<Metadata> {
  const { slug } = params

  const dj = await getDj(slug)

  return {
    title: dj?.name
  }
}

export default async function Dj({ params }: DjPageProps) {
  const { slug } = params

  const dj = await getDj(slug)
  console.log(dj)

  return (
    // <main className="">
    //   <section className="relative overflow-hidden flex items-center justify-center py-14 md:py-20">
    //     <Image
    //       src={dj?.imageUrl}
    //       className="object-cover blur-3xl z-0"
    //       alt={dj?.name}
    //       fill
    //       quality={1}
    //       sizes="(max-width: 1280px) 100vw, 1280px"
    //     />

    //     <div className="z-1 flex flex-col gap-4 lg:gap-8  lg:flex-row  relative">
    //       <Image
    //         src={dj.imageUrl}
    //         alt={dj.name}
    //         width={300}
    //         height={201}
    //         className="rounded-xl border-2 object-cover w-full"
    //       />
    //       <div className="flex flex-col items-center justify-center">
    //         <small className="uppercase">
    //           {new Date(dj.date).toLocaleDateString('en-US', {
    //             weekday: 'long',
    //             month: 'long',
    //             day: 'numeric'
    //           })}
    //         </small>

    //         <h1 className="mt-1 mb-2 text-2xl lg:text-5xl whitespace-nowrap font-bold">
    //           {dj.name}
    //         </h1>
    //         <small className="whitespace-nowrap text-gray-400">
    //           Organized by <span className="italic">{dj.organizerName}</span>
    //         </small>

    //         <button className="bg-gray-400/20 text-lg capitalize bg-blur mt-8 lg:mt-auto w-[95vw] rounded-md border-slate-50/10 hover:border-accent hover:text-accent border-2 sm:w-full py-2 state-effects">
    //           listen
    //         </button>
    //       </div>
    //     </div>
    //   </section>

    //   <div className="p-4">
    //     <Section>
    //       <SectionHeader>About {dj.name}</SectionHeader>
    //       <SectionSubheading>{dj.location}</SectionSubheading>
    //       <SectionContent>{dj.description}</SectionContent>
    //     </Section>
    //   </div>
    // </main>
    <h1>test</h1>
  )
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-16">{children}</section>
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl lg:text-5xl font-bold mt-16 mb-2">{children}</h2>
  )
}

function SectionSubheading({ children }: { children: React.ReactNode }) {
  return <small className="uppercase block">{children}</small>
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-gray-400 mt-8 leading-8 tracking-tighter">{children}</p>
  )
}
