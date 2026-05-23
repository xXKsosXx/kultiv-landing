import {
  DeviceMobile,
  BookOpen,
  ShieldCheck,
  Sparkle,
  Plant,
} from '@phosphor-icons/react/dist/ssr'
import { RevealOnScroll } from './RevealOnScroll'

interface TerroirCardProps {
  roman: string
  icon: React.ReactNode
  title: string
  body: string
  highlight?: boolean
  signature?: { initials: string; name: string; meta: string }
  delay?: number
}

function TerroirCard({
  roman,
  icon,
  title,
  body,
  highlight,
  signature,
  delay,
}: TerroirCardProps) {
  return (
    <RevealOnScroll
      as="article"
      className={`lp-terroir-card ${highlight ? 'lp-terroir-card--highlight' : ''}`}
      delay={delay}
    >
      <span className="lp-terroir-numeral" aria-hidden>
        {roman}
      </span>
      <span className="lp-terroir-icon" aria-hidden>
        {icon}
      </span>
      <div className="lp-terroir-body">
        <h3 className="lp-terroir-title">{title}</h3>
        <p className="lp-terroir-text">{body}</p>
        {signature && (
          <div className="lp-terroir-sig">
            <div className="lp-terroir-avatar">{signature.initials}</div>
            <div className="lp-terroir-sig-text">
              <div className="lp-terroir-sig-name">{signature.name}</div>
              <div className="lp-terroir-sig-meta">{signature.meta}</div>
            </div>
          </div>
        )}
      </div>
    </RevealOnScroll>
  )
}

export function TerroirsSection() {
  return (
    <section className="lp-terroirs">
      <div className="lp-wrap">
        <RevealOnScroll className="lp-terroirs-head">
          <h2 className="lp-section-h">
            Un outil français pensé pour les <em>terroirs</em> français.
          </h2>
          <p className="lp-terroirs-lede">
            D&apos;autres outils existent. Kultivar s&apos;en distingue par cinq
            choix fondamentaux.
          </p>
        </RevealOnScroll>

        <div className="lp-terroirs-grid">
          <TerroirCard
            roman="I"
            icon={<DeviceMobile size={20} />}
            title="Pensé mobile, conçu pour le terrain."
            body="L'agronomie depuis votre poche, pas depuis un bureau. Chaque écran pensé pour être consulté en plein champ, sous le soleil, avec des mains qui ont travaillé la terre."
          />
          <TerroirCard
            roman="II"
            icon={<BookOpen size={20} />}
            title="Adapté aux terroirs français."
            body="Calendriers culturaux, références agronomiques, alertes phyto, calendrier lunaire — calibrés pour la France métropolitaine, par région. Pas une méthode importée et universalisée."
            delay={80}
          />
          <TerroirCard
            roman="III"
            icon={<ShieldCheck size={20} />}
            title="Souveraineté des données."
            body="Vos parcelles, vos cultures, votre journal, vos photos : 100 % stockés en Union Européenne. Aucune donnée ne quitte le continent."
            delay={160}
          />
          <TerroirCard
            roman="IV"
            icon={<Sparkle size={20} />}
            title="Conseil IA contextuel quotidien."
            body="Chaque matin, un conseil personnalisé qui croise votre météo, le stade de vos cultures, et vos pratiques. Pas une réponse générique."
            delay={240}
          />
          <TerroirCard
            roman="V"
            icon={<Plant size={20} />}
            title="Co-fondé par un maraîcher en activité."
            body="Alex Loubet maraîche tous les jours à Chaussan. Chaque feature passe par son verdict avant d'être livrée. C'est lui qui décide ce qui sert, pas un product manager."
            highlight
            signature={{
              initials: 'AL',
              name: 'Alex Loubet',
              meta: 'Maraîcher · GAEC Les Haies Vives · Chaussan',
            }}
            delay={320}
          />
        </div>
      </div>
    </section>
  )
}
