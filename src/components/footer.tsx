import { footerRoutes } from '@/utils/links'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-col items-center gap-y-4 sm:flex-row sm:justify-between p-4 text-slate-400">
      <small>
        &copy; tarheelDJ&apos;s {new Date().getFullYear()} All rights reserved
      </small>
      <ul className="flex gap-x-4 text-sm">
        {footerRoutes.map((route) => (
          <li key={route.path} className="hover:text-sky-300">
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
