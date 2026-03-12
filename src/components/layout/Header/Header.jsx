// src/components/layout/Header/Header.jsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION } from '@/constants';
import useScrollPosition from '@/hooks/useScrollPosition';
import styles from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 50;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          {NAVIGATION.logo}
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {NAVIGATION.links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
              <span className={styles.dot}></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={styles.menuToggle} 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={styles.mobileOverlay}>
        <div className={styles.mobileNav}>
          {NAVIGATION.links.map((link, index) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileSocials}>
            {NAVIGATION.socials.map((social) => (
              <a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
