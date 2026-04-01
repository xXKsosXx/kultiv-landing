import type { Metadata } from 'next'
import { Manrope, Work_Sans } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kultiv — Votre exploitation, pilotée avec intelligence',
  description:
    'Journal de terrain, météo agronomique, ITK personnalisés et alertes en temps réel — tout ce dont un agriculteur a besoin, sur une seule app.',
  openGraph: {
    title: 'Kultiv — Votre exploitation, pilotée avec intelligence',
    description:
      'La première app agronomique intelligente pour les agriculteurs français.',
    url: 'https://kultiv.app',
    siteName: 'Kultiv',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kultiv',
    description: 'Météo agronomique, ITK, journal de terrain — sur une seule app.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${manrope.variable} ${workSans.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
