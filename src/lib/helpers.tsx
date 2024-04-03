import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { DjEvent } from './types'

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export async function getDjs(city: string) {
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      next: {
        revalidate: 300
      }
    }
  )
  const data: DjEvent[] = await res.json()
  return data
}

export async function getDj(slug: string) {
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  )
  const data = await res.json()
  return data
}
