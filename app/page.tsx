import { Header } from '../components/shared/header';
import { HeroSection } from '../components/home/hero-section';
import { AboutSection } from '../components/home/about-section';
import { FeaturesGrid } from '../components/home/features-grid';
import { BookingInfo } from '../components/home/booking-info';
import { TrustInfo } from '../components/home/trust-info';
import { Footer } from '../components/shared/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesGrid />
      <BookingInfo />
      <TrustInfo />
      <Footer />
    </main>
  );
}
