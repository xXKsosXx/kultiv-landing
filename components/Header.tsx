'use client'

import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#features', label: 'Fonctionnalités' },
    { href: '#how', label: 'Comment ça marche' },
    { href: '#tarifs', label: 'Tarifs' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-shadow duration-300
        bg-white/85 backdrop-blur-md border-b border-outline-variant/20
        ${scrolled ? 'shadow-soil-sm' : ''}`}
    >
      <div className="flex justify-between items-center px-5 py-3.5 max-w-6xl mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-organic-gradient rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[18px]">potted_plant</span>
          </div>
          <span className="text-xl font-extrabold text-primary font-headline tracking-tight">
            Kultiv
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-7">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#beta"
          className="hidden md:inline-flex bg-organic-gradient text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-soil-sm hover:opacity-90 active:scale-95 transition-all"
        >
          Essayer gratuitement
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          aria-label="Menu"
        >
          <span className="material-symbols-outlined text-on-surface">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-5 bg-white/95 backdrop-blur-md border-t border-outline-variant/20">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-on-surface-variant hover:text-primary"
              >
                {label}
              </a>
            ))}
            <a
              href="#beta"
              onClick={() => setMenuOpen(false)}
              className="bg-organic-gradient text-white px-5 py-2.5 rounded-full text-sm font-bold text-center shadow-soil-sm"
            >
              Essayer gratuitement
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
