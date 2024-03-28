'use client'

import Logo from './logo'
import Link from 'next/link'
import { navlinks } from '@/utils/links'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function Header() {
  const activePath = usePathname()

  return (
    <header className="flex justify-between items-baseline px-4 py-4 border-b border-white/10 md:py-8 h-16 md:h-24 lg:h-24">
      <Logo />

      <nav className="h-full">
        <ul className="text-sm flex gap-x-4 h-full">
          {navlinks.map((link) => (
            <li
              key={link.href}
              className={clsx(
                'hover:text-accent transition flex items-center relative',
                {
                  'text-slate-50': activePath === link.href,
                  'text-slate-400': activePath !== link.href
                }
              )}
            >
              <Link href={link.href}>{link.label}</Link>

              {activePath === link.href && (
                <motion.div
                  className="bg-accent absolute h-1 w-full bottom-0"
                  layoutId="header-active-id"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
