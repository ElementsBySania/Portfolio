// src/components/portfolio/PortfolioHero/PortfolioHero.jsx
import { PORTFOLIO } from '@/constants';
import styles from './PortfolioHero.module.scss';

const PortfolioHero = () => {
  const { title, headline } = PORTFOLIO.hero;

  return (
    <section className={styles.hero}>
      <div className="container">
        <span className={styles.tag}>{title}</span>
        <h1 className="heading-lg">{headline}</h1>
      </div>
    </section>
  );
};

export default PortfolioHero;
