'use client'

import { motion } from 'framer-motion'

const FEATURES = [
  {
    icon: 'psychology',
    colorClass: 'bg-primary/10 text-primary',
    emoji: '🌱',
    title: 'ITK automatique',
    desc: "Dès le semis, vos itinéraires techniques sont générés automatiquement. Tâches planifiées jour par jour, rappels intelligents chaque matin.",
  },
  {
    icon: 'cloud_sync',
    colorClass: 'bg-secondary/10 text-secondary',
    emoji: '🌦️',
    title: 'Météo agronomique',
    desc: "Prévisions 7 jours, ETP irrigation, rafales et direction du vent, alertes gel/mildiou. Modèle Météo-France AROME — le plus précis pour la France.",
  },
  {
    icon: 'history_edu',
    colorClass: 'bg-tertiary/10 text-tertiary',
    emoji: '📋',
    title: 'Journal de terrain',
    desc: "Notez irrigations, traitements, observations en 3 taps. Associé à chaque culture et chaque planche. Même pour le matériel en panne.",
  },
  {
    icon: 'map',
    colorClass: 'bg-primary/10 text-primary',
    emoji: '🗺️',
    title: 'Gestion des parcelles',
    desc: "Vue visuelle de vos planches, cultures et rotations. Tunnel froid, plein champ, serre — chaque espace avec son propre suivi.",
  },
  {
    icon: 'camera',
    colorClass: 'bg-secondary/10 text-secondary',
    emoji: '🔍',
    title: 'Scanner de maladies',
    desc: "Photographiez une feuille suspecte. Identification instantanée par IA — maladies, ravageurs, carences — pour réagir avant que ça s'étende.",
  },
  {
    icon: 'lightbulb',
    colorClass: 'bg-tertiary/10 text-tertiary',
    emoji: '💡',
    title: 'Conseil du jour',
    desc: "Chaque matin, un conseil agronomique personnalisé basé sur vos cultures en cours, le stade ITK et la météo locale de votre exploitation.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const, delay: i * 0.08 },
  }),
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-5 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            L&apos;outil du terrain
          </p>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface leading-tight">
            L&apos;agronomie au creux
            <br />
            de votre main
          </h2>
        </div>
        <p className="text-on-surface-variant max-w-xs text-sm leading-relaxed">
          Des outils de précision pensés pour le terrain, pas pour les bureaux.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="bg-surface-container-lowest p-8 rounded-2xl shadow-soil-sm
                       hover:-translate-y-1 hover:shadow-soil transition-all duration-250"
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${f.colorClass}`}>
              <span className="material-symbols-outlined">{f.icon}</span>
            </div>
            <h3 className="text-lg font-bold mb-2.5 font-headline">
              {f.emoji} {f.title}
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
