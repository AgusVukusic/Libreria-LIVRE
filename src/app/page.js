import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsappButton from '../components/FloatingWhatsappButton';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container" style={{ minHeight: '60vh', padding: '2rem 1rem' }}>
        {/* Placeholder para la siguiente fase */}
        <h1 style={{ fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: '1rem' }}>
          Bienvenido a LIVRE
        </h1>
        <p style={{ color: 'var(--color-text-light)' }}>
          Estructura visual base montada correctamente (Fase 5). 
          En la próxima fase se implementará el Hero, Servicios y el resto de los componentes.
        </p>
      </main>
      <Footer />
      <FloatingWhatsappButton />
    </>
  );
}
