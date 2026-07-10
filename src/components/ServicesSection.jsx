import { services } from '../data/services';
import { generateWhatsappLink } from '../utils/whatsapp';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={`container`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nuestros Servicios</h2>
          <p className={styles.subtitle}>Soluciones rápidas y de calidad para tus necesidades.</p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.id} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              {generateWhatsappLink(`Hola, quería consultar por ${service.title.toLowerCase()}.`) && (
                <a 
                  href={generateWhatsappLink(`Hola, quería consultar por ${service.title.toLowerCase()}.`)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Consultar
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
