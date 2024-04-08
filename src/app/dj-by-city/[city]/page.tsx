import { Suspense } from 'react'
import TitleComponent from '@/components/title-component'
import { DjByCityProps } from '@/lib/types'
import DjList from '@/components/dj-list'
import Loading from './loading'
import { capitalize } from '@/lib/helpers'
import { Metadata } from 'next'

export function generateMetadata({
  params,
  searchParams
}: DjByCityProps): Metadata {
  const city = params.city
  const page = searchParams.page ?? 1
  return {
    title: city === 'all' ? "All DJ's" : `DJ's in ${city}`,
    description: `Find the best DJ's ${
      city === 'all' ? 'anywhere' : `in ${capitalize(city)}`
    }`
  }
}

export default async function DjByCity({
  params,
  searchParams
}: DjByCityProps) {
  const city = params.city
  const page = parseInt(searchParams.page as string) || 1

  return (
    <main className="flex flex-col items-center pt-36 p-4 min-h-[110vh]">
      <TitleComponent className="mb-24">
        {city === 'all' && "All DJ's"}
        {city !== 'all' && `DJ's in ${capitalize(city)}`}
      </TitleComponent>

      <Suspense key={city + page} fallback={<Loading />}>
        <DjList city={city} page={page} />
      </Suspense>
    </main>
  )
}
