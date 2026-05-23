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
            href="https://kultivar.app"
            className="lp-btn lp-btn-primary"
            aria-label="Essayer Kultivar gratuitement pendant 14 jours"
          >
            Essayer 14 jours gratuits
          </a>
        </RevealOnScroll>

        {/*
          Aquarelle mains + pousses.
          Path : public/images/landing/hands-with-seedlings.png
          La palette terracotta / sage / cream de l'aquarelle s'intègre
          maintenant sur le fond crème de la section.
        */}
        <RevealOnScroll className="lp-final-motif" delay={240}>
          <Image
            src="/images/landing/hands-with-seedlings.png"
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
