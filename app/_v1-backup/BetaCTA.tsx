'use client'

import { useState } from 'react'

export default function BetaCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="beta" className="py-24 px-5">
      <div className="max-w-2xl mx-auto text-center">
        <span className="material-symbols-outlined text-primary text-4xl mb-4">
          rocket_launch
        </span>
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-4">
          Rejoignez les premiers agriculteurs à tester Kultiv
        </h2>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-10 max-w-lg mx-auto">
          Nous ouvrons progressivement l&apos;accès bêta à des exploitations de toute la France.
          Inscrivez-vous pour réserver votre place.
        </p>

        {submitted ? (
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
            <span className="material-symbols-outlined text-primary text-3xl mb-2">
              check_circle
            </span>
            <p className="font-bold text-primary font-headline">Inscription enregistrée !</p>
            <p className="text-on-surface-variant text-sm mt-1">
              On vous contacte très vite.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="votre@email.fr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
            <button
              type="submit"
              className="bg-organic-gradient text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-soil-sm hover:opacity-90 active:scale-95 transition-all whitespace-nowrap"
            >
              Rejoindre la bêta
            </button>
          </form>
        )}

        <p className="text-[11px] text-on-surface-variant/50 mt-6">
          Données hébergées en France · Aucun partage tiers · Désabonnement en 1 clic
        </p>
      </div>
    </section>
  )
}
