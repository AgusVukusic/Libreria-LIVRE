import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PromoSection from '../components/PromoSection';
import ServicesSection from '../components/ServicesSection';
import CategoriesSection from '../components/CategoriesSection';
import FeaturedProducts from '../components/FeaturedProducts';
import LocationSection from '../components/LocationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingWhatsappButton from '../components/FloatingWhatsappButton';

export default function Home() {
  return (
    <>
      <Header />
      <main id="inicio">
        <HeroSection />
        <PromoSection />
        <ServicesSection />
        <CategoriesSection />
        <FeaturedProducts />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsappButton />
    </>
  );
}
