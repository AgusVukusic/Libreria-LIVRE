import { businessInfo } from '../data/businessInfo';
import { generateWhatsappLink } from '../utils/whatsapp';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Librería escolar, artística y fotocopias en Hudson.
          </h1>
          <p className={styles.subtitle}>
            Todo para el cole, la oficina y tus proyectos creativos. Encontrá útiles, impresiones y anillados en un solo lugar.
          </p>
          <div className={styles.actions}>
            {generateWhatsappLink() && (
              <a 
                href={generateWhatsappLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.primaryBtn}
              >
                Consultar por WhatsApp
              </a>
            )}
            <a href="#productos" className={styles.secondaryBtn}>
              Ver productos
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          {/* Visual placeholder relacionado con librería */}
          <div className={styles.placeholderImage}>
            <span className={styles.emoji} aria-hidden="true">📚🎨✏️</span>
          </div>
        </div>
      </div>
    </section>
  );
}
