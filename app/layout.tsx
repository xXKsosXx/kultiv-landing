import type { Metadata } from 'next'
import { Fraunces, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kultivar.app'),
  title: "Kultivar — L'agronomie tient dans votre poche",
  description:
    "Conseils IA contextuels, journal vocal, alertes phyto, planning des récoltes. L'application française qui transforme la complexité agronomique en plan d'action quotidien.",
  keywords: [
    'maraîchage bio',
    'agriculture',
    'microferme',
    'gestion exploitation',
    'France',
    'application maraîcher',
    'agronomie',
    'ITK',
  ],
  openGraph: {
    title: "Kultivar — L'agronomie tient dans votre poche",
    description:
      "L'application française qui transforme la complexité agronomique en plan d'action quotidien.",
    url: 'https://kultivar.app',
    siteName: 'Kultivar',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/landing/og-image-placeholder.svg',
        width: 1200,
        height: 630,
        alt: "Kultivar — L'agronomie en poche",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kultivar — L'agronomie tient dans votre poche",
    description:
      "L'application française qui transforme la complexité agronomique en plan d'action quotidien.",
    images: ['/images/landing/og-image-placeholder.svg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
