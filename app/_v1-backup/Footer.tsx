export default function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant/20 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
            <div className="w-7 h-7 bg-organic-gradient rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[14px]">
                potted_plant
              </span>
            </div>
            <span className="text-lg font-extrabold text-primary font-headline tracking-tight">
              Kultiv
            </span>
          </div>
          <p className="text-xs text-on-surface-variant">
            © 2026 Kultiv. La terre, notre futur.
          </p>
          <p className="text-[10px] text-on-surface-variant/50 mt-0.5">
            Une solution Lumileo SASU
          </p>
        </div>

        {/* Right */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-on-surface-variant">
          {[
            { href: '#features', label: 'Fonctionnalités' },
            { href: '#tarifs', label: 'Tarifs' },
            { href: 'mailto:contact@kultiv.app', label: 'Contact' },
            { href: '#', label: 'Mentions légales' },
            { href: '#', label: 'CGU' },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
