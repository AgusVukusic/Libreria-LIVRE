import Link from 'next/link';
import { businessInfo } from '../data/businessInfo';
import { generateWhatsappLink } from '../utils/whatsapp';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logo}>
          {businessInfo.name}
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="#servicios">Servicios</Link></li>
            <li><Link href="#productos">Productos</Link></li>
            <li><Link href="#ubicacion">Ubicación</Link></li>
          </ul>
        </nav>
        <a 
          href={generateWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
          Consultar
        </a>
      </div>
    </header>
  );
}
