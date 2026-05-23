'use client'

const ITEMS = [
  { icon: 'yard', label: 'Maraîchage diversifié' },
  { icon: 'spa', label: 'Agriculture biologique' },
  { icon: 'water_drop', label: "Gestion de l'irrigation" },
  { icon: 'grain', label: 'Grandes cultures' },
  { icon: 'local_florist', label: 'Viticulture' },
  { icon: 'agriculture', label: 'Élevage' },
  { icon: 'warehouse', label: 'Tunnel & serre froide' },
  { icon: 'compost', label: 'Maraîchage sur sol vivant' },
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <section className="py-8 bg-surface-container overflow-hidden border-y border-outline-variant/20">
      <div className="flex">
        <div className="animate-ticker flex items-center" style={{ width: 'max-content' }}>
          {doubled.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 mx-8 text-sm font-medium text-on-surface-variant whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-primary text-[18px]">
                {item.icon}
              </span>
              {item.label}
            </span>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-on-surface-variant/50 mt-4 font-medium uppercase tracking-widest">
        Conçu pour les agriculteurs de toute la France
      </p>
    </section>
  )
}
