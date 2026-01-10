import ScrollableHeader from '@/components/about-us/ScrollableHeader'
import ContactHeroSection from '@/components/contact/ContactHeroSection'
import ContactFormSection from '@/components/contact/ContactFormSection'
import ContactInfoSection from '@/components/contact/ContactInfoSection'
import FooterSection from '@/components/FooterSection'

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <ScrollableHeader />
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      <FooterSection />
    </main>
  )
}