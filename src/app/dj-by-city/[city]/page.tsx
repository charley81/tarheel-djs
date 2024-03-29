import TitleComponent from '@/components/title-component'
import { DjByCityProps } from '@/utils/types'
import { DjEvent } from '@/utils/types'
import DjList from '@/components/dj-list'

export default async function DjByCity({ params }: DjByCityProps) {
  const city = params.city

  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=austin`
  )
  const data: DjEvent[] = await res.json()

  return (
    <main className="flex flex-col items-center pt-36 p-4 min-h-[110vh]">
      <TitleComponent className="mb-24">
        {city === 'all' && "All DJ's"}
        {city !== 'all' &&
          `DJ's in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </TitleComponent>

      <DjList djs={data} />
    </main>
  )
}
