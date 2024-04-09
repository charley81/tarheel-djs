import { Suspense } from 'react'
import TitleComponent from '@/components/title-component'
import { DjByCityProps } from '@/lib/types'
import DjList from '@/components/dj-list'
import Loading from './loading'
import { capitalize } from '@/lib/helpers'
import { Metadata } from 'next'
import z from 'zod'

export function generateMetadata({
  params,
  searchParams
}: DjByCityProps): Metadata {
  const city = params.city

  return {
    title: city === 'all' ? "All DJ's" : `DJ's in ${city}`,
    description: `Find the best DJ's ${
      city === 'all' ? 'anywhere' : `in ${capitalize(city)}`
    }`
  }
}

const pageNumberSchema = z.coerce.number().int().positive().optional()

export default async function DjByCity({
  params,
  searchParams
}: DjByCityProps) {
  const city = params.city
  const parsedPage = pageNumberSchema.safeParse(searchParams.page)
  if (!parsedPage.success) {
    throw new Error('Invalid page number')
  }

  return (
    <main className="flex flex-col items-center pt-36 p-4 min-h-[110vh]">
      <TitleComponent className="mb-24">
        {city === 'all' && "All DJ's"}
        {city !== 'all' && `DJ's in ${capitalize(city)}`}
      </TitleComponent>

      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <DjList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  )
}
