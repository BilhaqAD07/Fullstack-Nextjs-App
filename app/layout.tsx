import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import BaseLayout from '@/components/baseLayout/Layout'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'BAD Portofolio',
  description: 'Enjoy my portofolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <BaseLayout>
            {children}
          </BaseLayout>
      </body>
    </html>
  )
}
