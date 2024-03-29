import Link from 'next/link'
import SearchForm from '@/components/search-form'
import TitleComponent from '@/components/title-component'
import MainSection from '@/components/main-section'

export default function Home() {
  return (
    <MainSection>
      <TitleComponent>
        Find
        <span className="text-accent font-bold italic underline">
          DJ&apos;s
        </span>
        in NC
      </TitleComponent>

      <p className="mb-12 mt-4 text-lg text-slate-400 md:text-1xl lg:text-2xl">
        dnb, house, techno, and more
      </p>

      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-sm text-slate-400">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/dj-by-city/charlotte">Charlotte</Link>
          <Link href="/dj-by-city/charlotte">Raleigh</Link>
        </div>
      </section>
    </MainSection>
  )
}
