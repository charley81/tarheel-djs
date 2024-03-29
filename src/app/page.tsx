import Link from 'next/link'
import SearchForm from '@/components/search-form'

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 p-4">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        Find{' '}
        <span className="text-accent font-bold italic underline">
          DJ&apos;s
        </span>{' '}
        in NC
      </h1>
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
    </main>
  )
}
