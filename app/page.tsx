import './landing.css'

import { ScrollProgress } from '@/components/landing/ScrollProgress'
import { LandingNav } from '@/components/landing/LandingNav'
import { HeroSection } from '@/components/landing/HeroSection'
import { ProblemSection } from '@/components/landing/ProblemSection'
import { PillarsSection } from '@/components/landing/PillarsSection'
import { ShowcaseSection } from '@/components/landing/ShowcaseSection'
import { TerroirsSection } from '@/components/landing/TerroirsSection'
import { FoundersSection } from '@/components/landing/FoundersSection'
import { PricingSection } from '@/components/landing/PricingSection'
import { FaqSection } from '@/components/landing/FaqSection'
import { FinalCtaSection } from '@/components/landing/FinalCtaSection'
import { LandingFooter } from '@/components/landing/LandingFooter'

export default function Home() {
  return (
    <div className="landing-page">
      <ScrollProgress />
      <LandingNav />
      <main id="top">
        <HeroSection />
        <ProblemSection />
        <PillarsSection />
        <ShowcaseSection />
        <TerroirsSection />
        <FoundersSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <LandingFooter />
    </div>
  )
}
