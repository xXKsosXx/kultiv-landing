const WEATHER_FEATURES = [
  {
    icon: 'water_drop',
    title: 'ETP + bilan hydrique',
    desc: "Évapotranspiration potentielle calculée quotidiennement. Planifiez vos irrigations avec précision.",
  },
  {
    icon: 'air',
    title: 'Vent moyen + rafales',
    desc: "Direction et vitesse du vent, rafales prévues. Évitez les traitements par grand vent.",
  },
  {
    icon: 'device_thermostat',
    title: 'Température du sol',
    desc: "Estimations de température au sol pour anticiper les semis et les risques de gel.",
  },
  {
    icon: 'notifications_active',
    title: 'Alertes automatiques',
    desc: "Gel, mildiou, fortes pluies — recevez des alertes push avant qu'il ne soit trop tard.",
  },
]

export default function WeatherHighlight() {
  return (
    <section className="bg-organic-gradient text-white py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text */}
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
              Météo agronomique
            </p>
            <h2 className="text-3xl md:text-4xl font-headline font-bold leading-tight mb-4">
              La météo des champs,
              <br />
              pas celle de la ville
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-10 max-w-md">
              Modèle Météo-France AROME — résolution 1,3 km. Les données les plus précises
              disponibles pour le territoire français.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WEATHER_FEATURES.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-[20px]">
                      {f.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                    <p className="text-white/60 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="flex-1 max-w-md w-full">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-3xl">partly_cloudy_day</span>
                <div>
                  <p className="text-2xl font-bold">18°C</p>
                  <p className="text-white/60 text-xs">Partiellement nuageux</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { label: 'ETP', value: '3.2 mm' },
                  { label: 'Vent', value: '12 km/h' },
                  { label: 'Pluie', value: '0 mm' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-xl p-3">
                    <p className="text-white/50 text-[10px] uppercase tracking-wider">{s.label}</p>
                    <p className="font-bold text-sm mt-1">{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-2">
                {[
                  { day: 'Lun', temp: 18 },
                  { day: 'Mar', temp: 19 },
                  { day: 'Mer', temp: 17 },
                  { day: 'Jeu', temp: 21 },
                  { day: 'Ven', temp: 20 },
                  { day: 'Sam', temp: 16 },
                  { day: 'Dim', temp: 18 },
                ].map((d, i) => (
                  <div
                    key={d.day}
                    className={`flex-1 text-center py-2 rounded-lg text-xs ${
                      i === 0 ? 'bg-white/15 font-bold' : 'text-white/50'
                    }`}
                  >
                    <p>{d.day}</p>
                    <p className="mt-1 font-medium">{d.temp}°</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
