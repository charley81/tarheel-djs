import Logo from './logo'
import Link from 'next/link'
import { navlinks } from '@/utils/links'

export default function Header() {
  return (
    <header className="flex justify-between items-baseline px-4 py-4 border-b border-white/10 md:py-8">
      <Logo />
      <nav className="text-slate-400">
        <ul className="text-sm flex gap-4">
          {navlinks.map((link) => (
            <li key={link.href} className="hover:text-sky-300 transition">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
