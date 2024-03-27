import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'tarhealDJs',
  description: 'Find the best DJs in the North Carolina'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-950 text-slate-50 max-w-5xl mx-auto`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
