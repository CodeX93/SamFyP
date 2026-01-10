import ScrollableHeader from '@/components/about-us/ScrollableHeader'
import AboutUsHeroSection from '@/components/about-us/AboutUsHeroSection'
import OurMissionSection from '@/components/about-us/OurMissionSection'
import SeeHowItWorksSection from '@/components/about-us/SeeHowItWorksSection'
import HowSystemWorksSection from '@/components/about-us/HowSystemWorksSection'
import OurInvestorsSection from '@/components/about-us/OurInvestorsSection'
import OurTeamSection from '@/components/about-us/OurTeamSection'
import OurAdvisorsSection from '@/components/about-us/OurAdvisorsSection'
import FooterSection from '@/components/FooterSection'

export default function AboutUsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <ScrollableHeader />
      <AboutUsHeroSection />
      <OurMissionSection />
      <SeeHowItWorksSection />
      <HowSystemWorksSection />
      <OurInvestorsSection />
      <OurTeamSection />
      <OurAdvisorsSection />
      <FooterSection />
    </main>
  )
}