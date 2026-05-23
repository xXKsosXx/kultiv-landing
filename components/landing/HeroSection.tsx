import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { RevealOnScroll } from './RevealOnScroll'
import { PhoneMockupHero } from './PhoneMockupHero'

const HERO_MOTIF_SVG = (
  <svg viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="#A8C5A0" strokeWidth="1.2" strokeLinecap="round">
      <path d="M20 60 Q 40 30, 60 60 T 100 60 T 140 60 T 180 60 T 220 60 T 260 60" />
      <path d="M30 68 Q 50 50, 70 68" />
      <path d="M120 68 Q 140 50, 160 68" />
      <path d="M210 68 Q 230 50, 250 68" />
    </g>
    <g fill="#154212" opacity="0.5">
      <circle cx="60" cy="20" r="2" />
      <circle cx="140" cy="14" r="2" />
      <circle cx="220" cy="22" r="2" />
    </g>
  </svg>
)

export function HeroSection() {
  return (
    <section className="lp-hero">
      <div className="lp-topo" aria-hidden />
      <div className="lp-wrap lp-hero-grid">
        <div className="lp-hero-text">
          <RevealOnScroll className="lp-hero-eyebrow">
            <span className="lp-dot" />
            L&apos;agronomie en poche
          </RevealOnScroll>

          <RevealOnScroll>
            <h1 className="lp-display">
              Pilotez votre exploitation <strong>depuis le terrain</strong>.
              <br />
              Pas depuis un <em>bureau</em>.
            </h1>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="lp-lede lp-hero-sub">
              Conseils IA contextuels, journal vocal, alertes phyto, planning des
              récoltes. L&apos;application qui transforme la complexité
              agronomique en plan d&apos;action quotidien — directement sur votre
              téléphone, en plein champ.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="lp-hero-ctas">
            <a href="https://kultivar.app" className="lp-btn lp-btn-primary">
              Essayer gratuitement 14 jours
            </a>
            <a href="#demo" className="lp-btn-text">
              Voir la démo <ArrowRight size={16} />
            </a>
          </RevealOnScroll>

          <RevealOnScroll className="lp-hero-trust lp-meta">
            Sans engagement
            <span className="lp-dot" />
            Résiliation en 1 clic
            <span className="lp-dot" />
            Données stockées en Europe
          </RevealOnScroll>
        </div>

        <div className="lp-hero-visual">
          <RevealOnScroll className="lp-phone-stage">
            <div className="lp-phone-glow" aria-hidden />
            <PhoneMockupHero />
            <div className="lp-motif" aria-hidden>
              {HERO_MOTIF_SVG}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
