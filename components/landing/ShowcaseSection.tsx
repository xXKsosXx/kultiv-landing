import {
  ListChecks,
  CloudRain,
  Basket,
  BookOpen,
  Plant,
  Warning,
  DotsSixVertical,
  ChartLineUp,
} from '@phosphor-icons/react/dist/ssr'
import { RevealOnScroll } from './RevealOnScroll'
import { PhoneMockupShowcase } from './PhoneMockupShowcase'

export function ShowcaseSection() {
  return (
    <section className="lp-showcase" id="demo">
      <div className="lp-wrap">
        <div className="lp-showcase-head">
          <RevealOnScroll>
            <span className="lp-eyebrow">Tout ce qu&apos;il faut, rien de trop</span>
          </RevealOnScroll>
          <RevealOnScroll>
            <h2 className="lp-section-h">
              Un outil complet. <em>Sans</em> l&apos;usine à gaz.
            </h2>
          </RevealOnScroll>
        </div>

        <div className="lp-showcase-stage">
          <RevealOnScroll className="lp-floater lp-float-1">
            <div className="lp-flab">
              <ListChecks size={12} />
              ITK · Tomate cerise
            </div>
            <h4>Itinéraire personnalisable</h4>
            <div className="lp-itk-step">
              <DotsSixVertical size={14} className="lp-handle" />
              <span className="lp-num">01</span>
              <span className="lp-name">Semis sous abri</span>
              <span className="lp-day">J-0</span>
            </div>
            <div className="lp-itk-step">
              <DotsSixVertical size={14} className="lp-handle" />
              <span className="lp-num">02</span>
              <span className="lp-name">Repiquage en motte</span>
              <span className="lp-day">J+18</span>
            </div>
            <div className="lp-itk-step">
              <DotsSixVertical size={14} className="lp-handle" />
              <span className="lp-num">03</span>
              <span className="lp-name">Plantation tunnel</span>
              <span className="lp-day">J+45</span>
            </div>
            <div className="lp-itk-step">
              <DotsSixVertical size={14} className="lp-handle" />
              <span className="lp-num">04</span>
              <span className="lp-name">Palissage</span>
              <span className="lp-day">J+60</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="lp-floater lp-float-2" delay={80}>
            <div className="lp-flab">
              <CloudRain size={12} />
              Alerte phyto
            </div>
            <h4>Risque mildiou élevé</h4>
            <p className="lp-fs">
              Humidité &gt; 85 % sur 36 h, températures 14–22 °C. Conditions Mills
              favorables.
            </p>
            <div className="lp-alert-row">
              <Warning size={16} weight="fill" />
              <div className="lp-t">
                <b>Tomate · Parc. Nord</b>Traiter sous 24 h recommandé
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="lp-floater lp-float-3" delay={160}>
            <div className="lp-flab">
              <Basket size={12} />
              Récolte · Radis
            </div>
            <h4>+18 % vs semaine dernière</h4>
            <div className="lp-spark">
              <span style={{ height: '24%' }} />
              <span className="lp-light" style={{ height: '40%' }} />
              <span style={{ height: '32%' }} />
              <span className="lp-light" style={{ height: '55%' }} />
              <span style={{ height: '48%' }} />
              <span className="lp-light" style={{ height: '70%' }} />
              <span style={{ height: '62%' }} />
              <span style={{ height: '90%' }} />
            </div>
            <div className="lp-spark-meta">
              <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span>
              <span>Ven</span><span>Sam</span><span>Dim</span><span>Auj.</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="lp-floater lp-float-4" delay={240}>
            <div className="lp-flab">
              <BookOpen size={12} />
              Encyclopédie · 159 fiches
            </div>
            <div className="lp-enc-img">
              <Plant size={32} />
            </div>
            <h4>Carotte de Colmar</h4>
            <div className="lp-enc-meta">
              <span>120 j</span>
              <span>Bio</span>
              <span>Plein champ</span>
              <span>Zone B</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="lp-phone-stage" delay={120}>
            <div className="lp-phone-glow" aria-hidden />
            <PhoneMockupShowcase />
          </RevealOnScroll>
        </div>

        <div className="lp-showcase-feat">
          <RevealOnScroll className="lp-feat">
            <div className="lp-feat-icon">
              <ListChecks size={18} />
            </div>
            <h5>ITK personnalisable par étape</h5>
            <p>
              Construisez vos itinéraires comme vous travaillez, planche par planche,
              étape par étape.
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="lp-feat" delay={80}>
            <div className="lp-feat-icon">
              <CloudRain size={18} />
            </div>
            <h5>Alertes phyto météo-dépendantes</h5>
            <p>
              Modèles Mills mildiou, Oïdium, charbon. Croisés à votre station météo
              locale.
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="lp-feat" delay={160}>
            <div className="lp-feat-icon">
              <ChartLineUp size={18} />
            </div>
            <h5>Suivi des récoltes par culture</h5>
            <p>
              Pesées rapides, marges par planche, comparaison saisonnière en un coup
              d&apos;œil.
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="lp-feat" delay={240}>
            <div className="lp-feat-icon">
              <BookOpen size={18} />
            </div>
            <h5>Encyclopédie de 159 variétés</h5>
            <p>
              Références agronomiques officielles françaises pour 28 cultures
              principales.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
