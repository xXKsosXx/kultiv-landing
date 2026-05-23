import Image from 'next/image'
import { RevealOnScroll } from './RevealOnScroll'

export function FinalCtaSection() {
  return (
    <section className="lp-final" id="cta">
      <div className="lp-final-inner">
        <RevealOnScroll>
          <h2>
            Votre prochaine saison commence <em>ici</em>.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <p>14 jours gratuits. Annulation en 1 clic. Vous restez aux commandes.</p>
        </RevealOnScroll>
        <RevealOnScroll delay={160}>
          <a
            href="#"
            className="lp-btn lp-btn-cream"
            aria-label="Créer mon compte Kultivar"
          >
            Créer mon compte
          </a>
        </RevealOnScroll>

        {/*
          Image fournie par Kamal. Format attendu : PNG fond transparent,
          palette Kultivar (terracotta + sage + vert profond + crème), env. 1024x683.
          Path final attendu : /images/landing/hands-with-seedlings.png
          (placeholder SVG actuellement utilisé en attendant le PNG)
        */}
        <RevealOnScroll className="lp-final-motif" delay={240}>
          <Image
            src="/images/landing/hands-with-seedlings.svg"
            alt="Mains tenant de la terre avec de jeunes pousses"
            width={480}
            height={320}
            className="lp-final-illustration"
            priority={false}
          />
        </RevealOnScroll>
      </div>
    </section>
  )
}
