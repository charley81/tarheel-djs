import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import prisma from './db'
import { notFound } from 'next/navigation'

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export async function getDjs(city: string, page = 1) {
  const data = await prisma.dj.findMany({
    where: {
      city: city === 'all' ? undefined : capitalize(city)
    },
    take: 6,
    skip: (page - 1) * 6
  })

  let totalCount
  if (city === 'all') {
    totalCount = await prisma.dj.count()
  } else {
    totalCount = await prisma.dj.count({
      where: {
        city: capitalize(city)
      }
    })
  }

  return {
    data,
    totalCount
  }
}

export async function getDj(slug: string) {
  const dj = await prisma.dj.findUnique({
    where: {
      slug
    }
  })

  if (!dj) {
    return notFound()
  }
  return dj
}
