import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Features from '@/components/Features'
import WeatherHighlight from '@/components/WeatherHighlight'
import HowItWorks from '@/components/HowItWorks'
import Testimonial from '@/components/Testimonial'
import Pricing from '@/components/Pricing'
import BetaCTA from '@/components/BetaCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[65px]">
        <Hero />
        <Ticker />
        <Features />
        <WeatherHighlight />
        <HowItWorks />
        <Testimonial />
        <Pricing />
        <BetaCTA />
      </main>
      <Footer />
    </>
  )
}
