import { Image as ImageIcon } from '@phosphor-icons/react/dist/ssr'
import { RevealOnScroll } from './RevealOnScroll'

export function FoundersSection() {
  return (
    <section className="lp-founders" id="histoire">
      <div className="lp-wrap lp-founders-grid">
        <RevealOnScroll>
          <div className="lp-founder-photo">
            {/* TODO landing v2.1: replace with real photo at /images/landing/alex-portrait.jpg */}
            <div className="lp-photo-placeholder" aria-hidden>
              <ImageIcon size={56} />
              <span>
                Portrait Alex Loubet — serre, fin d&apos;après-midi, chapeau, regard
                hors-champ
              </span>
            </div>
            <div className="lp-photo-tag">
              Alex Loubet · GAEC Les Haies Vives · Chaussan
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <span className="lp-eyebrow">Notre histoire</span>
          <div className="lp-founder-narr">
            <p>
              « Quand Alex a rejoint Kamal début 2026, il maraîchait depuis deux ans
              à Chaussan, sur <strong>33 parcelles, 39 cultures actives</strong>. Sa
              remarque : <em>les outils existants pensent comme des céréaliers</em>.
              Trop rigides. Trop loin du terrain. Faits pour des hectares, pas pour
              des planches. »
            </p>
            <p>
              « Kultivar est né de cette remarque. Mobile-first parce qu&apos;on est
              dans le champ. Personnalisable parce qu&apos;aucun maraîcher ne cultive
              exactement comme son voisin. <em>Adapté parce que la diversité
              agronomique européenne ne tient pas dans une méthode unique</em>. »
            </p>
          </div>
          <div className="lp-founder-sig">
            — Kamal Bentama &amp; Alex Loubet, co-fondateurs
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
