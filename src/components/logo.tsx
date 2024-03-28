import Link from 'next/link'

export default function Logo() {
  return (
    <h3 className="text-xl sm:text-2xl md:text-4xl font-bold">
      <Link href="/">
        tarheel<span className="text-accent">DJs</span>
      </Link>
    </h3>
  )
}
