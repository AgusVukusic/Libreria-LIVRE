import { businessInfo } from '../data/businessInfo';
import styles from './LocationSection.module.css';

export default function LocationSection() {
  return (
    <section id="ubicacion" className={styles.section}>
      <div className={`container ${styles.locationInner}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Nuestra Ubicación</h2>
          <p className={styles.subtitle}>Librería escolar, artística, fotocopias e impresiones en Hudson, Berazategui.</p>
          <div className={styles.info}>
            <p><strong>Dirección:</strong> {businessInfo.location.address}</p>
            <p><strong>Horarios:</strong> {businessInfo.schedule}</p>
          </div>
          <a 
            href={businessInfo.location.mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.button}
          >
            Cómo llegar (Google Maps)
          </a>
        </div>
        <div className={styles.mapPlaceholder}>
          <div className={styles.placeholderText}>
            <span>🗺️</span>
            <p>Mapa de Hudson</p>
          </div>
        </div>
      </div>
    </section>
  );
}
