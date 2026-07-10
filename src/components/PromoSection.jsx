import { promos } from '../data/promos';
import { generateWhatsappLink } from '../utils/whatsapp';
import styles from './PromoSection.module.css';

export default function PromoSection() {
  return (
    <section id="promos" className={styles.section}>
      <div className={`container ${styles.promoInner}`}>
        <div className={styles.content}>
          <span className={styles.badge}>Temporada Escolar</span>
          <h2 className={styles.title}>{promos.title}</h2>
          <p className={styles.subtitle}>{promos.subtitle}</p>
          <p className={styles.desc}>{promos.description}</p>
          <a 
            href={generateWhatsappLink(`Hola LIVRE, quería consultar por la promo de ${promos.title}: listas escolares y kits.`)} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.button}
          >
            {promos.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
