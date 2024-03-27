import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Find electronic DJ&apos;s from North Carolina</h1>
      <p>Jungle, Drum & Bass, House, Breaks, Dubstep...</p>

      <form>
        <input
          type="text"
          placeholder="Search DJ's in any city"
          spellCheck={false}
        />
      </form>

      <section>
        <p>Popular:</p>
        <Link href="/dj-by-city/charlotte">Charlotte</Link>
        <Link href="/dj-by-city/charlotte">Raleigh</Link>
      </section>
    </main>
  )
}
