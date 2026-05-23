import { CheckCircle, MinusCircle } from '@phosphor-icons/react/dist/ssr'
import { RevealOnScroll } from './RevealOnScroll'

interface Row {
  criterion: string
  kultivar: string
  heirloom: string
  legacy: string
  legacyDisabled?: boolean
  heirloomDisabled?: boolean
}

const ROWS: Row[] = [
  {
    criterion: 'Approche',
    kultivar: 'Mobile-first',
    heirloom: 'Web-first',
    legacy: 'Logiciel desktop legacy',
  },
  {
    criterion: 'Méthode agronomique',
    kultivar: 'Adaptée terroirs FR',
    heirloom: 'Méthode importée du QC',
    legacy: 'Méthode céréalière',
  },
  {
    criterion: 'Hébergement données',
    kultivar: '100 % UE, RGPD',
    heirloom: 'Amérique du Nord',
    legacy: 'Variable',
  },
  {
    criterion: 'Conseil IA contextuel',
    kultivar: 'Quotidien, personnalisé',
    heirloom: 'Non',
    legacy: 'Non',
    heirloomDisabled: true,
    legacyDisabled: true,
  },
  {
    criterion: 'ITK personnalisable',
    kultivar: 'Oui, drag-and-drop',
    heirloom: 'Templates figés',
    legacy: 'Non',
    legacyDisabled: true,
  },
  {
    criterion: 'Co-fondation',
    kultivar: 'Maraîcher FR + tech FR',
    heirloom: 'Producteur QC',
    legacy: 'Éditeur logiciel',
  },
]

export function DifferentiationSection() {
  return (
    <section className="lp-diff">
      <div className="lp-wrap">
        <RevealOnScroll className="lp-diff-head">
          <span className="lp-eyebrow">Comparaison honnête</span>
          <h2 className="lp-section-h">
            Pourquoi Kultivar et <em>pas les autres</em>.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll
          className="lp-diff-table"
          delay={80}
        >
          <div className="lp-diff-head-row lp-diff-label-head" role="columnheader">
            Critère
          </div>
          <div className="lp-diff-head-row lp-diff-kult" role="columnheader">
            Kultivar
          </div>
          <div className="lp-diff-head-row" role="columnheader">
            Heirloom
          </div>
          <div className="lp-diff-head-row" role="columnheader">
            Outils historiques
          </div>

          {ROWS.map((row) => (
            <RowCells key={row.criterion} row={row} />
          ))}
        </RevealOnScroll>
      </div>
    </section>
  )
}

function RowCells({ row }: { row: Row }) {
  return (
    <>
      <div className="lp-diff-label lp-diff-cell" data-label="Critère">
        {row.criterion}
      </div>
      <div
        className="lp-diff-kult lp-diff-check lp-diff-cell"
        data-label="Kultivar"
      >
        <CheckCircle size={16} weight="fill" /> {row.kultivar}
      </div>
      <div
        className={`${row.heirloomDisabled ? 'lp-diff-x' : 'lp-diff-other'} lp-diff-cell`}
        data-label="Heirloom"
      >
        {row.heirloomDisabled && <MinusCircle size={16} />} {row.heirloom}
      </div>
      <div
        className={`${row.legacyDisabled ? 'lp-diff-x' : 'lp-diff-other'} lp-diff-cell`}
        data-label="Historiques"
      >
        {row.legacyDisabled && <MinusCircle size={16} />} {row.legacy}
      </div>
    </>
  )
}
