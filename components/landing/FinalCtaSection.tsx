import { RevealOnScroll } from './RevealOnScroll'

const FINAL_MOTIF = (
  <svg viewBox="0 0 340 120" xmlns="http://www.w3.org/2000/svg">
    <line
      x1="0"
      y1="90"
      x2="340"
      y2="90"
      stroke="#A8C5A0"
      strokeWidth="0.6"
      opacity="0.5"
    />
    <g fill="none" stroke="#F4EDE0" strokeWidth="1.2" strokeLinecap="round">
      <path d="M70 90 Q 100 60, 170 60 Q 240 60, 270 90" />
      <path d="M80 90 Q 110 70, 170 70 Q 230 70, 260 90" />
    </g>
    <g stroke="#A8C5A0" strokeWidth="1.4" strokeLinecap="round" fill="none">
      <path d="M170 60 L 170 30" />
      <path d="M170 40 Q 158 32, 152 42" />
      <path d="M170 40 Q 182 32, 188 42" />
      <path d="M150 60 L 150 38" />
      <path d="M150 44 Q 142 38, 138 46" />
      <path d="M190 60 L 190 38" />
      <path d="M190 44 Q 198 38, 202 46" />
    </g>
    <g fill="#C5613A" opacity="0.6">
      <circle cx="170" cy="26" r="2" />
      <circle cx="150" cy="34" r="1.6" />
      <circle cx="190" cy="34" r="1.6" />
    </g>
  </svg>
)

export function FinalCtaSection() {
  return (
    <section className="lp-final" id="cta">
      <div className="lp-final-inner">
        <RevealOnScroll>
          <h2>
            Votre prochaine saison commence <em>ici</em>.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <p>14 jours gratuits. Annulation en 1 clic. Vous restez aux commandes.</p>
        </RevealOnScroll>
        <RevealOnScroll delay={160}>
          <a
            href="#"
            className="lp-btn lp-btn-terra"
            aria-label="Créer mon compte Kultivar"
          >
            Créer mon compte
          </a>
        </RevealOnScroll>

        <RevealOnScroll className="lp-final-motif" delay={240}>
          <div aria-hidden>{FINAL_MOTIF}</div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
