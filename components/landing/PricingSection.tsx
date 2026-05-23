import { Check } from '@phosphor-icons/react/dist/ssr'
import { RevealOnScroll } from './RevealOnScroll'

export function PricingSection() {
  return (
    <section className="lp-pricing" id="tarifs">
      <div className="lp-wrap">
        <div className="lp-pricing-head">
          <RevealOnScroll>
            <span className="lp-eyebrow">Tarifs honnêtes</span>
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <h2 className="lp-section-h">
              Commencez gratuitement. <em>Passez Pro</em> quand vous êtes prêt.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={160}>
            <p>
              Pas de paliers cachés. Pas de modules à la carte. Deux offres claires —
              c&apos;est tout.
            </p>
          </RevealOnScroll>
        </div>

        <div className="lp-pricing-grid">
          <RevealOnScroll as="article" className="lp-pcard">
            <div className="lp-pcard-eyebrow">
              Gratuit <span className="lp-badge">Pour découvrir</span>
            </div>
            <h3>Gratuit</h3>
            <div className="lp-pcard-tag">Pour découvrir.</div>
            <div className="lp-pcard-price">
              0 €<small> / pour toujours</small>
            </div>
            <div className="lp-pcard-sub">Aucune carte requise</div>
            <ul className="lp-pcard-features">
              <li><Check size={16} />3 cultures actives</li>
              <li><Check size={16} />1 parcelle</li>
              <li><Check size={16} />Journal vocal</li>
              <li><Check size={16} />Encyclopédie complète</li>
              <li><Check size={16} />Alertes météo basiques</li>
            </ul>
            <a href="#essai" className="lp-btn lp-btn-ghost">
              Commencer gratuitement
            </a>
          </RevealOnScroll>

          <RevealOnScroll as="article" className="lp-pcard lp-pcard-pro" delay={80}>
            <div id="essai" />
            <div className="lp-pcard-eyebrow">
              Pro <span className="lp-badge">Recommandé</span>
            </div>
            <h3>Pro</h3>
            <div className="lp-pcard-tag">Pour piloter.</div>
            <div className="lp-pcard-price">
              9,90 €<small> / mois</small>
            </div>
            <div className="lp-pcard-sub">Ou 95 € / an — 2 mois offerts</div>
            <ul className="lp-pcard-features">
              <li className="lp-group-h">Tout du Gratuit, plus :</li>
              <li><Check size={16} />Cultures et parcelles illimitées</li>
              <li><Check size={16} />Conseil IA quotidien personnalisé</li>
              <li><Check size={16} />Alertes phyto météo-dépendantes</li>
              <li><Check size={16} />ITK personnalisable par étape</li>
              <li><Check size={16} />Planning récoltes multi-canaux</li>
              <li><Check size={16} />Documents et factures (PDF)</li>
              <li><Check size={16} />Export Excel / CSV</li>
              <li><Check size={16} />Support prioritaire</li>
            </ul>
            <a href="#cta" className="lp-btn lp-btn-terra">
              Essayer 14 jours
            </a>
            <div className="lp-pcard-trust">
              Sans engagement · CB sécurisée · Résiliation 1 clic
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
