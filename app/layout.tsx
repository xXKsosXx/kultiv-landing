import type { Metadata, Viewport } from 'next'
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
    "Conseils IA contextuels, journal vocal, alertes phyto, planning des récoltes. L'application qui transforme la complexité agronomique en plan d'action quotidien.",
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
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "Kultivar — L'agronomie tient dans votre poche",
    description:
      "L'application qui transforme la complexité agronomique en plan d'action quotidien.",
    url: 'https://kultivar.app',
    siteName: 'Kultivar',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
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
      "L'application qui transforme la complexité agronomique en plan d'action quotidien.",
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#154212',
  width: 'device-width',
  initialScale: 1,
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
