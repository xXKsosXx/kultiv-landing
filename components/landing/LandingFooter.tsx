import { KultivarLogo } from './KultivarLogo'

export function LandingFooter() {
  return (
    <footer className="lp-footer">
      <div className="lp-wrap">
        <div className="lp-footer-grid">
          <div>
            <div className="lp-footer-brand">
              <KultivarLogo variant="light" size={28} />
              Kultivar
            </div>
            <p>
              Le compagnon agronomique des exploitations à taille humaine. Conçu en
              France, avec un maraîcher en activité.
            </p>
          </div>

          <div>
            <h6>Produit</h6>
            <ul>
              <li><a href="#fonctions">Fonctionnalités</a></li>
              <li><a href="#tarifs">Tarifs</a></li>
              <li><a href="#">Mises à jour</a></li>
              <li><a href="#">Encyclopédie</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h6>Société</h6>
            <ul>
              <li><a href="#histoire">À propos</a></li>
              <li><a href="#">Équipe</a></li>
              <li><a href="#">Blog · à venir</a></li>
              <li><a href="#">Presse · à venir</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h6>Légal</h6>
            <ul>
              <li><a href="#">CGU</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Mentions légales</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="lp-footer-bottom">
          <div className="lp-footer-bottom-left">
            © 2026 Kultivar · Conçu en France pour ceux qui cultivent · Hébergé en
            Europe · Site conçu par{' '}
            <a
              href="https://sparkana.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="lp-footer-sparkana"
            >
              Sparkana
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
