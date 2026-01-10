import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutUsSection from '@/components/AboutUsSection'
import ServicesSection from '@/components/ServicesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import TryPrototypeSection from '@/components/TryPrototypeSection'
import BenefitsSection from '@/components/BenefitsSection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <HowItWorksSection />
      <TryPrototypeSection />
      <BenefitsSection />
      <FooterSection />
    </main>
  )
}