export default function Testimonial() {
  return (
    <section className="py-24 px-5">
      <div className="max-w-3xl mx-auto text-center">
        {/* Quote icon */}
        <span className="material-symbols-outlined text-primary/20 text-6xl mb-6">
          format_quote
        </span>

        <blockquote className="text-xl md:text-2xl font-headline italic text-on-surface leading-relaxed mb-8">
          &ldquo;Enfin une app qui parle vraiment aux maraîchers. L&apos;ITK automatique m&apos;a
          fait gagner des heures de planification chaque semaine, et les alertes météo sont
          d&apos;une précision redoutable.&rdquo;
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          {/* Avatar */}
          <div className="w-12 h-12 bg-organic-gradient rounded-full flex items-center justify-center text-white font-bold font-headline">
            A.L.
          </div>
          <div className="text-left">
            <p className="font-bold text-on-surface text-sm">A.L.</p>
            <p className="text-on-surface-variant text-xs">
              Maraîcher bio, Rhône-Alpes — Bêta testeur depuis 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
