import { businessInfo, isDemoMode } from '../data/businessInfo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {isDemoMode && (
        <div className={styles.demoBanner}>
          Demo conceptual no oficial, creada como propuesta de diseño.
        </div>
      )}
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.info}>
          <div className={styles.logo}>{businessInfo.name}</div>
          <p className={styles.desc}>{businessInfo.description}</p>
        </div>
        <div className={styles.links}>
          <h4>Contacto</h4>
          <ul>
            <li>{businessInfo.schedule}</li>
            <li>{businessInfo.location.address}</li>
            <li>
              <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} {businessInfo.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
