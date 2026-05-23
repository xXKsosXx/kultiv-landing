import { Flag, RocketLaunch, Buildings, Leaf } from '@phosphor-icons/react/dist/ssr'
import { RevealOnScroll } from './RevealOnScroll'

export function SocialProofSection() {
  return (
    <RevealOnScroll as="section" className="lp-proof">
      <div className="lp-wrap lp-proof-row">
        <div className="lp-proof-quote">
          « Conçue avec un maraîcher en activité, pour ceux qui vivent de la terre. »
        </div>
        <div className="lp-proof-divider" />
        <div className="lp-proof-logos">
          <div className="lp-proof-logo">
            <Flag size={20} /> French Tech Méditerranée
          </div>
          <div className="lp-proof-logo">
            <RocketLaunch size={20} /> Blast Club
          </div>
          <div className="lp-proof-logo">
            <Buildings size={20} /> BIC Innovup
          </div>
          <div className="lp-proof-logo">
            <Leaf size={20} /> GAEC Les Haies Vives
          </div>
        </div>
      </div>
    </RevealOnScroll>
  )
}
