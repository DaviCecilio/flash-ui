import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="antialiased bg-mirage-50 mirage-950">{children}</body>
    </html>
  )
}
