import {
  Sparkle,
  Microphone,
  ShieldCheck,
  LockKey,
} from '@phosphor-icons/react/dist/ssr'
import { RevealOnScroll } from './RevealOnScroll'

export function PillarsSection() {
  return (
    <section className="lp-pillars" id="fonctions">
      <div className="lp-wrap">
        <div className="lp-pillars-head">
          <RevealOnScroll>
            <span className="lp-eyebrow">Trois piliers</span>
            <h2 className="lp-section-h">
              Une méthode, <em>trois certitudes</em>.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <p>
              Pas une suite logicielle de plus. Trois briques précises qui résolvent
              les vrais problèmes du quotidien — depuis le premier matin jusqu&apos;à
              la dernière récolte.
            </p>
          </RevealOnScroll>
        </div>

        <div className="lp-bento">
          <RevealOnScroll as="article" className="lp-pillar lp-pillar-1">
            <div className="lp-pillar-icon">
              <Sparkle size={22} aria-hidden />
            </div>
            <h3>Conseils IA contextuels.</h3>
            <p>
              Chaque matin, votre conseil du jour croise la météo agronomique
              précise (ETP, bilan hydrique, prévisions 7 jours par Météo-France)
              avec le stade exact de vos cultures et vos pratiques. Pas un conseil
              générique : une recommandation actionnable, calibrée pour votre
              exploitation.
            </p>

            <div className="lp-pillar-cards" aria-hidden>
              <div className="lp-pcard-mini">
                <div className="lp-pcard-mini-label">Conseil du jour</div>
                <div className="lp-pcard-mini-title">
                  Repiquez les courgettes avant la pluie de jeudi.
                </div>
                <div className="lp-pcard-mini-body">
                  14 mm prévus jeudi soir. Vos plants Diamant sont à 4 vraies
                  feuilles — fenêtre idéale aujourd&apos;hui.
                </div>
                <div className="lp-pcard-mini-pill">
                  Parcelle Sud · Planche 03
                </div>
              </div>

              <div className="lp-pcard-mini">
                <div className="lp-pcard-mini-label">Météo agronomique</div>
                <div className="lp-pcard-mini-title">
                  ETP 4.3 mm · 0 mm de pluie sur 3 jours
                </div>
                <div className="lp-pcard-mini-body">
                  Risque de stress hydrique sur cultures sensibles. Irrigation
                  recommandée d&apos;ici 48 h.
                </div>
                <div className="lp-pcard-mini-pill">
                  Carottes J+58 · Tomates
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll as="article" className="lp-pillar" delay={80}>
            <div className="lp-pillar-icon">
              <Microphone size={22} aria-hidden />
            </div>
            <h3>Journal vocal en plein champ.</h3>
            <p>
              Une intervention&nbsp;? Dictez-la. Transcription en français, horodatée,
              géolocalisée. Vos mains restent libres.
            </p>

            <div className="lp-voice-mock">
              <div className="lp-rec">
                <Microphone size={16} weight="fill" />
              </div>
              <div className="lp-wave">
                <span /><span /><span /><span /><span /><span /><span /><span />
              </div>
              <div className="lp-t">0:42</div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll as="article" className="lp-pillar" delay={160}>
            <div className="lp-pillar-icon">
              <ShieldCheck size={22} aria-hidden />
            </div>
            <h3>Données 100&nbsp;% européennes.</h3>
            <p>
              Aucune information ne sort de l&apos;UE. Stockage Irlande, hébergement
              Allemagne. Souveraineté garantie.
            </p>

            <div className="lp-eu-mock">
              <LockKey size={22} weight="fill" />
              <div className="lp-lab">
                <b>RGPD · UE</b>
                Conformité native
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
