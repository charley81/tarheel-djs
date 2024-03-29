import TitleComponent from '@/components/title-component'
import { DjByCityProps } from '@/utils/types'
import { Event } from '@/utils/types'

export default async function DjByCity({ params }: DjByCityProps) {
  const city = params.city

  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=austin`
  )
  const data = await res.json()
  console.log(data)

  return (
    <main className="flex flex-col items-center pt-36 p-4 min-h-[110vh]">
      <TitleComponent>
        {city === 'all' && "All DJ's"}
        {city !== 'all' &&
          `DJ's in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </TitleComponent>

      {data.map((dj: Event) => (
        <section key={dj.id}>{dj.name}</section>
      ))}
    </main>
  )
}
