import { RevealOnScroll } from './RevealOnScroll'
import { FaqItem } from './FaqItem'

export function FaqSection() {
  return (
    <section className="lp-faq" id="faq">
      <div className="lp-wrap">
        <div className="lp-faq-head">
          <RevealOnScroll>
            <span className="lp-eyebrow">Questions fréquentes</span>
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <h2 className="lp-section-h">
              Tout ce qu&apos;il faut <em>savoir</em>.
            </h2>
          </RevealOnScroll>
        </div>

        <div className="lp-faq-list">
          <FaqItem question="Mes données sont-elles vraiment en sécurité ?">
            Oui. Toutes vos données (parcelles, cultures, journal, photos) sont
            hébergées en Union Européenne, conformes RGPD. Aucune donnée ne sort de
            l&apos;UE — stockage en Irlande, traitement en Allemagne.
          </FaqItem>

          <FaqItem question="Que se passe-t-il après les 14 jours d'essai ?">
            Vous êtes prélevé automatiquement, sauf si vous résiliez avant. Une
            notification vous est envoyée 2 jours avant la fin de l&apos;essai.
            Résiliation en 1 clic depuis l&apos;app, sans question.
          </FaqItem>

          <FaqItem question="Est-ce adapté à ma région, à mon terroir ?">
            Kultivar intègre les références agronomiques officielles françaises pour
            28 cultures principales. Les ITK sont entièrement personnalisables si
            votre pratique diffère — c&apos;est même le principe.
          </FaqItem>

          <FaqItem question="Fonctionne-t-il sans connexion en plein champ ?">
            Le mode hors-ligne est en cours de déploiement (été 2026). En attendant,
            Kultivar fonctionne en 3G/4G — les données sont optimisées pour les
            connexions faibles.
          </FaqItem>

          <FaqItem question="Puis-je l'utiliser pour la viticulture ou l'arboriculture ?">
            Oui. Kultivar couvre maraîchage, viticulture, arboriculture et
            polyculture. La version 2026 est optimisée maraîchage ; les modules viti
            et arbo sont enrichis en continu.
          </FaqItem>

          <FaqItem question="Vous prévoyez de fermer dans 6 mois et de perdre mes données ?">
            Non. Kultivar est co-fondé par un maraîcher en activité et un
            entrepreneur tech expérimenté (13 ans). Nous sommes accompagnés par BIC
            Innovup et French Tech Méditerranée. Et vos données sont exportables à
            tout moment (CSV / JSON).
          </FaqItem>
        </div>
      </div>
    </section>
  )
}
