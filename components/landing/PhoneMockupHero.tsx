import {
  CellSignalFull,
  WifiHigh,
  BatteryFull,
  Sun,
  MapPin,
  ArrowRight,
  House,
  Plant,
  Microphone,
  Calendar,
  BookOpen,
} from '@phosphor-icons/react/dist/ssr'

export function PhoneMockupHero() {
  return (
    <div
      className="lp-iphone"
      role="img"
      aria-label="Tableau de bord Kultivar montrant les 3 actions du jour"
    >
      <div className="lp-iphone-notch" aria-hidden />
      <div className="lp-iphone-screen">
        <div className="lp-status-bar">
          <span>9:41</span>
          <div className="lp-status-icons">
            <CellSignalFull size={12} weight="fill" />
            <WifiHigh size={12} weight="fill" />
            <BatteryFull size={14} weight="fill" />
          </div>
        </div>

        <div className="lp-app-header">
          <div>
            <div className="lp-app-greet">Mercredi 13 mai</div>
            <div className="lp-app-title">Bonjour, Alex.</div>
          </div>
          <div className="lp-avatar">AL</div>
        </div>

        <div className="lp-app-meta-row">
          <span className="lp-chip">
            <Sun size={10} /> 18°C · clair
          </span>
          <span className="lp-chip">
            <MapPin size={10} /> Chaussan
          </span>
        </div>

        <div className="lp-app-card">
          <div className="lp-app-card-label">Conseil du jour</div>
          <div className="lp-app-card-title">
            Repiquez les courgettes avant la pluie de jeudi.
          </div>
          <div className="lp-app-card-body">
            14 mm prévus jeudi soir. Vos plants Diamant sont à 4 vraies feuilles —
            fenêtre idéale aujourd&apos;hui.
          </div>
          <div className="lp-app-card-foot">
            <span className="lp-pill">Parcelle Sud · Planche 03</span>
            <ArrowRight size={14} />
          </div>
        </div>

        <div className="lp-app-list-title">
          3 actions du jour <span>2 / 3</span>
        </div>
        <div className="lp-task-row">
          <div className="lp-task-check lp-task-check--done" aria-hidden />
          <div className="lp-task-text lp-task-text--done">
            Arroser semis tunnel 2
            <span className="lp-task-meta">06:30 · fait</span>
          </div>
        </div>
        <div className="lp-task-row">
          <div className="lp-task-check lp-task-check--done" aria-hidden />
          <div className="lp-task-text lp-task-text--done">
            Récolter radis « 18 jours »
            <span className="lp-task-meta">08:10 · 4,2 kg</span>
          </div>
        </div>
        <div className="lp-task-row">
          <div className="lp-task-check" aria-hidden />
          <div className="lp-task-text">
            Repiquer courgettes Diamant
            <span className="lp-task-meta">Parcelle Sud · 48 plants</span>
          </div>
        </div>

        <div className="lp-tab-bar">
          <div className="lp-tab lp-tab--active">
            <House size={16} weight="fill" />
            Aujourd&apos;hui
          </div>
          <div className="lp-tab">
            <Plant size={16} />
            Cultures
          </div>
          <div className="lp-tab">
            <Microphone size={16} />
            Journal
          </div>
          <div className="lp-tab">
            <Calendar size={16} />
            Planning
          </div>
          <div className="lp-tab">
            <BookOpen size={16} />
            Encyclo.
          </div>
        </div>
      </div>
    </div>
  )
}
