import {
  CellSignalFull,
  WifiHigh,
  BatteryFull,
  Plus,
  Plant,
  CaretRight,
  House,
  Microphone,
  Calendar,
  BookOpen,
} from '@phosphor-icons/react/dist/ssr'

export function PhoneMockupShowcase() {
  return (
    <div
      className="lp-iphone"
      role="img"
      aria-label="Application Kultivar — vue cultures"
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
            <div className="lp-app-greet">Mes cultures · 39 actives</div>
            <div className="lp-app-title">Saison 2026.</div>
          </div>
          <div className="lp-avatar lp-avatar--terra">
            <Plus size={14} />
          </div>
        </div>

        <div className="lp-app-meta-row">
          <span className="lp-chip lp-chip--active">Toutes</span>
          <span className="lp-chip">Tunnel</span>
          <span className="lp-chip">Plein champ</span>
          <span className="lp-chip">Vivaces</span>
        </div>

        <div className="lp-culture-list">
          <div className="lp-culture-card lp-culture-card--active">
            <div className="lp-culture-icon lp-culture-icon--green">
              <Plant size={16} />
            </div>
            <div className="lp-culture-info">
              <div className="lp-culture-name">Tomate cerise · Sungold</div>
              <div className="lp-culture-meta">
                Tunnel 1 · J+52 · Floraison
              </div>
            </div>
            <CaretRight size={14} className="lp-culture-caret" />
          </div>
          <div className="lp-culture-card">
            <div className="lp-culture-icon lp-culture-icon--sauge">
              <Plant size={16} />
            </div>
            <div className="lp-culture-info">
              <div className="lp-culture-name">Courgette · Diamant</div>
              <div className="lp-culture-meta">
                Parc. Sud · J+18 · Plantule
              </div>
            </div>
            <CaretRight size={14} className="lp-culture-caret" />
          </div>
          <div className="lp-culture-card">
            <div className="lp-culture-icon lp-culture-icon--terra">
              <Plant size={16} />
            </div>
            <div className="lp-culture-info">
              <div className="lp-culture-name">Radis · 18 jours</div>
              <div className="lp-culture-meta">
                Planche 7 · J+16 · Récolte
              </div>
            </div>
            <CaretRight size={14} className="lp-culture-caret" />
          </div>
          <div className="lp-culture-card lp-culture-card--dim">
            <div className="lp-culture-icon lp-culture-icon--sauge">
              <Plant size={16} />
            </div>
            <div className="lp-culture-info">
              <div className="lp-culture-name">Mâche · Verte de Cambrai</div>
              <div className="lp-culture-meta">
                Parc. Est · J+0 · Semis
              </div>
            </div>
          </div>
        </div>

        <div className="lp-tab-bar">
          <div className="lp-tab">
            <House size={16} />
            Aujourd&apos;hui
          </div>
          <div className="lp-tab lp-tab--active">
            <Plant size={16} weight="fill" />
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
