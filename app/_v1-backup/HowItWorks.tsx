'use client'

import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    color: 'bg-primary text-white',
    icon: 'landscape',
    title: 'Créez votre exploitation',
    desc: 'Définissez vos parcelles, tunnels et serres. Chaque espace de culture a son propre suivi.',
  },
  {
    number: '02',
    color: 'bg-secondary text-white',
    icon: 'eco',
    title: 'Ajoutez vos cultures',
    desc: 'Choisissez variétés et date de semis. Les ITK sont auto-générés avec tâches et rappels.',
  },
  {
    number: '03',
    color: 'bg-tertiary text-on-surface',
    icon: 'trending_up',
    title: 'Pilotez et optimisez',
    desc: 'Météo, alertes, tâches du matin — tout est centralisé pour prendre les bonnes décisions.',
  },
]

const stepVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const, delay: i * 0.15 },
  }),
}

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-5 bg-surface-container">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            Simple comme bonjour
          </p>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface">
            Comment ça marche
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-outline-variant/30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                variants={stepVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Number circle */}
                <div
                  className={`w-14 h-14 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-extrabold font-headline relative z-10`}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-surface-container-lowest rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soil-sm">
                  <span className="material-symbols-outlined text-primary">{step.icon}</span>
                </div>

                <h3 className="text-lg font-bold font-headline mb-2">{step.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
