import {
  Plant,
  MapPin,
  WifiSlash,
  Sparkle,
  Leaf,
} from '@phosphor-icons/react/dist/ssr'
import { RevealOnScroll } from './RevealOnScroll'

interface TerroirCardProps {
  roman: string
  icon: React.ReactNode
  title: string
  body: string
  delay?: number
}

function TerroirCard({ roman, icon, title, body, delay }: TerroirCardProps) {
  return (
    <RevealOnScroll as="article" className="lp-terroir-card" delay={delay}>
      <span className="lp-terroir-numeral" aria-hidden>
        {roman}
      </span>
      <span className="lp-terroir-icon" aria-hidden>
        {icon}
      </span>
      <div className="lp-terroir-body">
        <h3 className="lp-terroir-title">{title}</h3>
        <p className="lp-terroir-text">{body}</p>
      </div>
    </RevealOnScroll>
  )
}

export function TerroirsSection() {
  return (
    <section className="lp-terroirs">
      <div className="lp-wrap">
        <RevealOnScroll className="lp-terroirs-head">
          <span className="lp-eyebrow lp-terroirs-eyebrow">Pourquoi Kultivar</span>
          <h2 className="lp-section-h">
            Pensé <em>différemment</em>.
          </h2>
          <p className="lp-terroirs-lede">
            Cinq choix de conception qui changent l&apos;usage quotidien.
          </p>
        </RevealOnScroll>

        <div className="lp-terroirs-grid">
          <TerroirCard
            roman="I"
            icon={<Plant size={20} />}
            title="Pensé mobile, conçu pour le terrain."
            body="L'agronomie depuis votre poche, pas depuis un bureau. Chaque écran pensé pour être consulté en plein champ, sous le soleil, avec des mains qui ont travaillé la terre."
          />
          <TerroirCard
            roman="II"
            icon={<MapPin size={20} />}
            title="Adapté à la diversité européenne."
            body="Calendriers culturaux, références agronomiques, alertes phyto, calendrier lunaire — calibrés pour la France métropolitaine, par région. Pas une méthode importée et universalisée."
            delay={80}
          />
          <TerroirCard
            roman="III"
            icon={<WifiSlash size={20} />}
            title="Fonctionne en zone blanche."
            body="Optimisé pour les connexions faibles du terrain. Mode hors-ligne complet déployé été 2026 — vos données sont déjà sauvegardées localement, jamais perdues."
            delay={160}
          />
          <TerroirCard
            roman="IV"
            icon={<Sparkle size={20} />}
            title="Une IA qui apprend votre exploitation."
            body="Plus vous utilisez Kultivar, plus l'assistant comprend votre terrain, vos rotations, vos préférences. Le conseil du jour devient progressivement le vôtre — calibré sur votre météo locale, vos cultures réelles, vos pratiques."
            delay={240}
          />
          <TerroirCard
            roman="V"
            icon={<Leaf size={20} />}
            title="Conçu par et pour le terrain."
            body="Chaque feature de Kultivar passe par le test d'un maraîcher en activité avant d'être livrée. C'est le terrain qui dicte ce qui sert, pas le marketing."
            delay={320}
          />
        </div>
      </div>
    </section>
  )
}
