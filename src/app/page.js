import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CategoriesSection from '../components/CategoriesSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import FloatingWhatsappButton from '../components/FloatingWhatsappButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CategoriesSection />
        <FeaturedProducts />
      </main>
      <Footer />
      <FloatingWhatsappButton />
    </>
  );
}
