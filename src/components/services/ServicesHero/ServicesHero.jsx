// src/components/services/ServicesHero/ServicesHero.jsx
import { SERVICES } from '@/constants';
import styles from './ServicesHero.module.scss';

const ServicesHero = () => {
  const { title, headline, subtitle } = SERVICES.hero;

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <span className={styles.tag}>{title}</span>
          <h1 className="heading-lg">{headline}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
