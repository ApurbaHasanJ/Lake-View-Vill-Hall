import { Header } from '../../components/shared/header';
import { Breadcrumb } from '../../components/shared/breadcrumb';
import { HeroSection } from '../../components/gallery/hero-section';
import { FeaturesSection } from '../../components/gallery/features-section';
import { NewsEventsGrid } from '../../components/gallery/news-events-grid';
import { GalleryBento } from '../../components/gallery/gallery-bento';
import { Footer } from '../../components/shared/footer';

export default function Gallery() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Breadcrumb route="Gallery"/>
      <HeroSection />
      <GalleryBento />
      <FeaturesSection />
      <NewsEventsGrid />
      <Footer />
    </main>
  );
}
