import './globals.css'
import type { Metadata } from 'next'
import { Inter,DM_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const font = DM_Sans({ subsets: ['latin'] ,weight: ["400", "500", "700"]})
export const metadata: Metadata = {
  title: 'space.repeat',
  description: 'a game changer for your flashcards game.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
