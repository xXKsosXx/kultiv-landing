import { RevealOnScroll } from './RevealOnScroll'

export function ProblemSection() {
  return (
    <section className="lp-problem" id="probleme">
      <div className="lp-wrap lp-problem-grid">
        <RevealOnScroll>
          <h2 className="lp-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Vous <em>cultivez</em>.
            <br />
            Pas vous <em>informatiquez</em>.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll className="lp-problem-side" delay={80}>
          <div style={{ paddingTop: 24 }}>
            <span className="lp-eyebrow">Le constat</span>
            <p className="lp-problem-p1">
              Les outils existants vous demandent de quitter le champ pour ouvrir un PC.
              Ils universalisent une méthode au lieu de respecter votre terroir. Ils
              stockent vos données à l&apos;étranger.
            </p>
            <p className="lp-problem-p2">
              Kultivar est conçu différemment : mobile-first, adapté aux terroirs
              français, et entièrement souverain.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
