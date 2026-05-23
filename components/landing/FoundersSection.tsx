import Image from 'next/image'
import { RevealOnScroll } from './RevealOnScroll'

export function FoundersSection() {
  return (
    <section className="lp-founders" id="histoire">
      <div className="lp-wrap lp-founders-grid">
        <RevealOnScroll>
          <div className="lp-founder-photo">
            {/*
              Photo Alex Loubet — image temporaire en attendant la vraie photo.
              Kamal doit déposer le fichier final :
                public/images/landing/alex-portrait.png
              Format attendu : portrait carré (1:1), 800x800 minimum, JPG ou PNG.
            */}
            <Image
              src="/images/landing/alex-portrait.png"
              alt="Alex Loubet, maraîcher au GAEC Les Haies Vives à Chaussan"
              fill
              sizes="(max-width: 880px) 100vw, 45vw"
              className="lp-founder-photo-img"
              priority={false}
            />
            <div className="lp-photo-tag">
              Alex Loubet · GAEC Les Haies Vives · Chaussan
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <span className="lp-eyebrow">Notre histoire</span>
          <div className="lp-founder-narr">
            <p>
              « Quand Alex a rejoint Kamal début 2026, il maraîchait depuis deux ans
              à Chaussan, sur <strong>33 parcelles, 39 cultures actives</strong>. Sa
              remarque : <em>les outils existants pensent comme des céréaliers</em>.
              Trop rigides. Trop loin du terrain. Faits pour des hectares, pas pour
              des planches. »
            </p>
            <p>
              « Kultivar est né de cette remarque. Mobile-first parce qu&apos;on est
              dans le champ. Personnalisable parce qu&apos;aucun maraîcher ne cultive
              exactement comme son voisin. <em>Adapté parce que la diversité
              agronomique européenne ne tient pas dans une méthode unique</em>. »
            </p>
          </div>
          <div className="lp-founder-sig">
            — Kamal Bentama &amp; Alex Loubet, co-fondateurs
          </div>

          {/*
            Illustration handshake — représente la co-fondation Kamal + Alex.
            Kamal doit déposer le fichier :
              public/images/landing/handshake.png
            Format attendu : aquarelle, fond transparent, ~500x375.
          */}
          <div className="lp-founder-handshake">
            <Image
              src="/images/landing/handshake.png"
              alt="Poignée de main symbolisant la co-fondation Alex et Kamal"
              width={220}
              height={165}
              className="lp-founder-handshake-img"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
