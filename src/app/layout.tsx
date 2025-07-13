import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DentalCare - Your Smile, Our Priority',
  description: 'Experience exceptional dental care in a comfortable, modern environment. Our team of experienced professionals is dedicated to your oral health and beautiful smile.',
  keywords: 'dentist, dental care, orthodontics, cosmetic dentistry, dental implants, emergency dental care',
  authors: [{ name: 'DentalCare Team' }],
  openGraph: {
    title: 'DentalCare - Your Smile, Our Priority',
    description: 'Experience exceptional dental care in a comfortable, modern environment.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 