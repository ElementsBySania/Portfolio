// src/components/layout/Footer/Footer.jsx
import Link from 'next/link';
import { NAVIGATION } from '@/constants';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.info}>
            <Link href="/" className={styles.logo}>
              {NAVIGATION.logo}
            </Link>
            <p className={styles.tagline}>
              Crafting visual identities that leave a lasting impression.
            </p>
          </div>
          <div className={styles.nav}>
            <h4 className={styles.navTitle}>Sitemap</h4>
            <ul className={styles.links}>
              {NAVIGATION.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.socials}>
            <h4 className={styles.navTitle}>Social</h4>
            <ul className={styles.links}>
              {NAVIGATION.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {currentYear} {NAVIGATION.logo}. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
