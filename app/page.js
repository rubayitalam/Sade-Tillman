import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import BookingSection from '@/components/BookingSection'
import OpportunitiesSection from '@/components/OpportunitiesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ExpertiseSection />
            <BookingSection />
            <OpportunitiesSection />
            <ContactSection />
            <Footer />
        </main>
    )
}
