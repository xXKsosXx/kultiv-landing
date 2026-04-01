const FREE_FEATURES = [
  '1 parcelle incluse',
  'Météo locale (prévisions 3 jours)',
  'Journal de terrain illimité',
  'Encyclopédie des 104 cultures',
]

const PRO_FEATURES = [
  'Parcelles et cultures illimitées',
  'ITK et plannings automatisés',
  'Alertes météo en temps réel (push)',
  'Météo 7 jours + ETP + vent + rafales',
  'Scanner maladies IA',
  'Conseil agronomique IA personnalisé',
]

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 px-5 bg-surface-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            Tarifs simples
          </p>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface">
            Commencez gratuitement
          </h2>
          <p className="text-on-surface-variant mt-4 text-sm">
            Pas de carte bancaire requise. Passez à Pro quand vous en avez besoin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Free */}
          <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-soil-sm border border-outline-variant/20">
            <h3 className="font-headline font-bold text-lg mb-1">Gratuit</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold font-headline">0€</span>
              <span className="text-on-surface-variant text-sm">/mois</span>
            </div>
            <ul className="space-y-3 mb-8">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                    check_circle
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#beta"
              className="block text-center border-2 border-primary text-primary px-6 py-3 rounded-full font-bold text-sm hover:bg-primary/5 transition-colors"
            >
              Commencer gratuitement
            </a>
          </div>

          {/* Pro */}
          <div className="bg-organic-gradient text-white rounded-2xl p-8 shadow-soil relative md:-mt-4">
            {/* Badge */}
            <span className="absolute top-4 right-4 bg-tertiary text-on-surface text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider">
              Recommandé
            </span>

            <h3 className="font-headline font-bold text-lg mb-1">Pro</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-extrabold font-headline">9,90€</span>
              <span className="text-white/60 text-sm">/mois</span>
            </div>
            <p className="text-white/50 text-xs mb-6">ou 89€/an (économisez 2 mois)</p>
            <ul className="space-y-3 mb-8">
              {PRO_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/90">
                  <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5">
                    check_circle
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#beta"
              className="block text-center bg-white text-primary px-6 py-3 rounded-full font-bold text-sm hover:bg-white/90 transition-colors"
            >
              Essayer Pro gratuitement
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
