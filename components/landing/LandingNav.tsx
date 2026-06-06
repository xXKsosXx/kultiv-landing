'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { KultivarLogo } from './KultivarLogo'

export function LandingNav() {
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setCompact(document.documentElement.scrollTop > 20)
    }
    document.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`lp-nav ${compact ? 'lp-nav--compact' : ''}`}
      aria-label="Navigation principale"
    >
      <a href="#top" className="lp-nav-logo" aria-label="Kultivar accueil">
        <KultivarLogo />
        <Image
          src="/images/logo-mot-kultivar.png"
          alt="Kultivar"
          width={148}
          height={53}
          priority
          className="lp-nav-wordmark"
        />
      </a>
      <div className="lp-nav-links">
        <a href="#fonctions">Fonctionnalités</a>
        <a href="#histoire">Notre histoire</a>
        <a href="#tarifs">Tarifs</a>
        <a href="#faq">FAQ</a>
        <a href="https://kultivar.app" className="lp-nav-cta">
          Essayer gratuitement
        </a>
      </div>
    </nav>
  )
}
