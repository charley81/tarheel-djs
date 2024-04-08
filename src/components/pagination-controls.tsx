import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { PaginationControlsProps } from '@/lib/types'

const btnStyles =
  'text-slate-50 px-4 py-4 bg-slate-50/10 flex items-center gap-2 rounded-md opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out'

export default function PaginationControls({
  previousPath,
  nextPath
}: PaginationControlsProps) {
  return (
    <section className="flex justify-end gap-2 w-screen px-8">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon /> Prev
        </Link>
      ) : (
        <div />
      )}
      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          Next <ArrowRightIcon />
        </Link>
      )}
    </section>
  )
}
