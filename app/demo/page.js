import Header from '@/components/Header'
import DemoHeroSection from '@/components/demo/DemoHeroSection'
import CoreCapabilitiesSection from '@/components/demo/CoreCapabilitiesSection'
import CameraIntegrationSection from '@/components/demo/CameraIntegrationSection'
import FooterSection from '@/components/FooterSection'

export default function DemoPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <DemoHeroSection />
      <CoreCapabilitiesSection />
      <CameraIntegrationSection />
      <FooterSection />
    </main>
  )
}