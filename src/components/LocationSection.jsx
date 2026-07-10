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
          {businessInfo.location.mapUrl && (
            <a 
              href={businessInfo.location.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.button}
              aria-label="Cómo llegar a LIVRE con Google Maps"
            >
              Cómo llegar
            </a>
          )}
        </div>
        <div className={styles.mapPlaceholder}>
          <div className={styles.placeholderText}>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
              <line x1="9" y1="3" x2="9" y2="18"></line>
              <line x1="15" y1="6" x2="15" y2="21"></line>
            </svg>
            <p>Mapa de Hudson</p>
          </div>
        </div>
      </div>
    </section>
  );
}
