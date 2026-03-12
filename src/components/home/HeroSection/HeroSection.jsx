// src/components/home/HeroSection/HeroSection.jsx
'use client';
import { HOME } from '@/constants';
import Button from '@/components/common/Button/Button';
import useMagneticEffect from '@/hooks/useMagneticEffect';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const { greeting, name, title, subtitle, cta_primary, cta_secondary, stats } = HOME.hero;
  const magneticRef = useMagneticEffect();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <p className={styles.greeting}>{greeting}</p>
          <h1 className={styles.title}>
            <span className={styles.name}>{name}</span>
            <span className={styles.role}>{title}</span>
          </h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.ctas}>
            <Button {...cta_primary} size="lg" />
            <Button {...cta_secondary} variant="secondary" size="lg" />
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.outlineText}>DESIGN</div>
          <div ref={magneticRef} className={styles.decorativeShape}></div>
        </div>
      </div>

      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
