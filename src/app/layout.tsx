import type {Metadata} from 'next'
import {Manrope} from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  weight: ['400', '500', '600'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chronos AI',
  description: 'Ultra-realistic chat game based on Giga Chat',
}

import YandexMetrika from '#/Global/Analytics'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={manrope.className}>{children}</body>

      {process.env.NODE_ENV === 'production' && <YandexMetrika />}
    </html>
  )
}
