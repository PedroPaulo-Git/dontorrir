import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dontorrir Odontologia Integrada - Presente em seu sorriso!',
  description: 'Sua clínica em Belo Jardim especializada em odontologia geral. Cuidamos do seu sorriso com carinho e tecnologia avançada. Agende sua consulta!',
  keywords: 'odontologia, dentista, Belo Jardim, clínica dental, sorriso saudável, ortodontia, estética dental, implantes, endodontia',
  authors: [{ name: 'Dontorrir Odontologia Integrada' }],
  openGraph: {
    title: 'Dontorrir Odontologia Integrada - Presente em seu sorriso!',
    description: 'Sua clínica em Belo Jardim especializada em odontologia geral. Cuidamos do seu sorriso com carinho e tecnologia avançada.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 