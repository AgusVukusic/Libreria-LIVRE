'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { businessInfo } from '../data/businessInfo';
import { generateWhatsappLink } from '../utils/whatsapp';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const whatsappLink = generateWhatsappLink();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setIsMenuOpen(false);
    buttonRef.current?.focus();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="#inicio" className={styles.logo}>
          {businessInfo.name}
        </Link>
        
        <button
          ref={buttonRef}
          className={styles.hamburger}
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={toggleMenu}
        >
          <span className={styles.hamburgerIcon} aria-hidden="true"></span>
        </button>

        <nav 
          id="main-nav" 
          ref={menuRef}
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
        >
          <ul className={styles.navList}>
            <li><Link href="#promos" onClick={closeMenu}>Promos</Link></li>
            <li><Link href="#servicios" onClick={closeMenu}>Servicios</Link></li>
            <li><Link href="#categorias" onClick={closeMenu}>Categorías</Link></li>
            <li><Link href="#productos" onClick={closeMenu}>Productos</Link></li>
            <li><Link href="#ubicacion" onClick={closeMenu}>Ubicación</Link></li>
            <li><Link href="#contacto" onClick={closeMenu}>Contacto</Link></li>
          </ul>
          
          {whatsappLink && (
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactBtn}
              onClick={closeMenu}
            >
              Consultar
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
