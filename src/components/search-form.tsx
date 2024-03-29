'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchForm({}) {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!searchTerm) return

    router.push(`/dj-by-city/${searchTerm}`)
  }

  return (
    <form className="w-full sm:w-[580px]" onSubmit={handleSubmit}>
      <input
        className="w-full h-16 rounded-md bg-slate-50/[8%] px-6 outline-none ring-accent transition focus:ring-2"
        type="text"
        placeholder="Search DJ's in any city"
        spellCheck={false}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  )
}
