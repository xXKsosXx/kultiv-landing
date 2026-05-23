import Image from 'next/image'
import { RevealOnScroll } from './RevealOnScroll'

export function FoundersSection() {
  return (
    <section className="lp-founders" id="histoire">
      <div className="lp-wrap">
        <div className="lp-founders-grid">
          <RevealOnScroll>
            <div className="lp-founder-photo">
              {/*
                Image temporaire — à remplacer par la vraie photo Alex.
                Fichier attendu : public/images/landing/alex-portrait.png
                Format : portrait carré (1:1), 800x800 minimum, JPG ou PNG.
              */}
              <Image
                src="/images/landing/alex-portrait.png"
                alt="Alexandre Loubet, co-fondateur de Kultivar, maraîcher au GAEC Les Haies Vives à Chaussan"
                fill
                sizes="(max-width: 880px) 100vw, 45vw"
                className="lp-founder-photo-img"
                priority={false}
              />
              <div className="lp-photo-tag">
                <span className="lp-photo-tag-line1">
                  Alexandre Loubet · Co-fondateur, maraîcher
                </span>
                <span className="lp-photo-tag-line2">
                  GAEC Les Haies Vives, Chaussan
                </span>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <span className="lp-eyebrow">Notre histoire</span>
            <div className="lp-founder-narr">
              <p>
                «&nbsp;Les outils agricoles pensent comme des céréaliers.{' '}
                <em>Trop rigides. Trop loin du terrain.</em> Faits pour des
                hectares, pas pour des planches.
              </p>
              <p>
                Kultivar est né de cette remarque. <em>Mobile-first</em> parce
                qu&apos;on est dans le champ. <em>Personnalisable</em> parce
                qu&apos;aucun maraîcher ne cultive exactement comme son voisin.{' '}
                <em>Adapté</em> parce que la diversité agronomique européenne ne
                tient pas dans une méthode unique.&nbsp;»
              </p>
            </div>
            <div className="lp-founder-sig">— L&apos;équipe Kultivar</div>
          </RevealOnScroll>
        </div>

        {/*
          Séparateur visuel — handshake centré + légende mono italic.
          Représente la rencontre terrain × technologie.
        */}
        <RevealOnScroll className="lp-founders-separator" delay={160}>
          <Image
            src="/images/landing/handshake.png"
            alt="Symbole de collaboration entre maraîcher et fondateur tech"
            width={100}
            height={100}
            className="lp-founders-separator-img"
          />
          <p className="lp-founders-separator-caption">
            Le terrain rencontre la technologie.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
