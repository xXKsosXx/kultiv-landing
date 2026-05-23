import { RevealOnScroll } from './RevealOnScroll'

export function ProblemSection() {
  return (
    <section className="lp-problem" id="probleme">
      <div className="lp-wrap lp-problem-grid">
        <RevealOnScroll>
          <span className="lp-eyebrow lp-problem-eyebrow">Le constat</span>
          <h2 className="lp-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Vos outils vous éloignent du <em>champ</em>.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll className="lp-problem-side" delay={80}>
          <div style={{ paddingTop: 24 }}>
            <p className="lp-problem-p1">
              Logiciels conçus il y a 15 ans, dashboards pensés pour le bureau,
              références agronomiques importées et universalisées. Kultivar prend le
              contre-pied : mobile, contextuel, adapté à la diversité des
              exploitations européennes.
            </p>
            <p className="lp-problem-p2">
              Conçu avec un maraîcher en activité. Pensé pour rester dans votre
              poche, du premier matin au dernier coup de bêche.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
