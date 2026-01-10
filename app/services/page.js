import Header from '@/components/Header'
import ServicesHeroSection from '@/components/services/ServicesHeroSection'
import OurServicesSection from '@/components/services/OurServicesSection'
import ContactUsCTASection from '@/components/services/ContactUsCTASection'
import ReduceSecurityRiskSection from '@/components/services/ReduceSecurityRiskSection'
import RequestDemoSection from '@/components/services/RequestDemoSection'
import ForWhomSection from '@/components/services/ForWhomSection'
import FooterSection from '@/components/FooterSection'

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <ServicesHeroSection />
      <OurServicesSection />
      <ContactUsCTASection />
      <ReduceSecurityRiskSection />
      <RequestDemoSection />
      <ForWhomSection />
      <FooterSection />
    </main>
  )
}