'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-24 pb-28 md:pt-40 md:pb-44">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/20 to-surface/80" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Bêta ouverte — Accès gratuit
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tight leading-[1.1] mb-7"
        >
          Votre exploitation,
          <br />
          pilotée avec{' '}
          <em className="text-primary italic">intelligence</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Journal de terrain, météo agronomique, ITK personnalisés et alertes en temps réel —
          tout ce dont un agriculteur a besoin, sur une seule app.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#beta"
            className="bg-organic-gradient text-white px-9 py-4 rounded-full font-bold text-lg shadow-soil hover:opacity-90 active:scale-95 transition-all"
          >
            Essayer gratuitement
          </a>
          <a
            href="#how"
            className="border-2 border-outline-variant text-primary bg-white/60 backdrop-blur-sm px-9 py-4 rounded-full font-bold text-lg hover:bg-surface-container-low active:scale-95 transition-all"
          >
            Voir comment ça marche
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-6 mt-12 text-xs text-on-surface-variant font-medium"
        >
          {[
            { icon: 'lock', text: 'Données hébergées en France' },
            { icon: 'cloud_done', text: 'Modèle Météo-France AROME' },
            { icon: 'eco', text: 'Compatible agriculture biologique' },
          ].map(({ icon, text }) => (
            <span key={text} className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-[16px]">{icon}</span>
              {text}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
