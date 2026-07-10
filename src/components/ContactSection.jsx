import { businessInfo } from '../data/businessInfo';
import { generateWhatsappLink } from '../utils/whatsapp';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={`container ${styles.contactInner}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>¿Tenés alguna duda?</h2>
          <p className={styles.subtitle}>Escribinos por WhatsApp y te respondemos a la brevedad.</p>
        </div>
        <div className={styles.actions}>
          {generateWhatsappLink('Hola, quería hacer una consulta sobre sus productos.') && (
            <a 
              href={generateWhatsappLink('Hola, quería hacer una consulta sobre sus productos.')} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              Consultar por WhatsApp
            </a>
          )}
          {businessInfo.social.instagram && (
            <a 
              href={businessInfo.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
              aria-label="Seguir a LIVRE en Instagram"
            >
              Seguinos en Instagram
            </a>
          )}
        </div>
        <div className={styles.faqs}>
          <div className={styles.faq}>
            <h3>¿Hacen impresiones y fotocopias?</h3>
            <p>Sí, en blanco y negro o color, en el momento o enviándonos por WhatsApp o mail.</p>
          </div>
          <div className={styles.faq}>
            <h3>¿Cuáles son los horarios de atención?</h3>
            <p>{businessInfo.schedule}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
