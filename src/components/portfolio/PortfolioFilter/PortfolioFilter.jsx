'use client';
// src/components/portfolio/PortfolioFilter/PortfolioFilter.jsx
import { PORTFOLIO } from '@/constants';
import styles from './PortfolioFilter.module.scss';

const PortfolioFilter = ({ activeFilter, setFilter }) => {
  return (
    <div className={styles.filterContainer}>
      <div className="container">
        <div className={styles.filters}>
          {PORTFOLIO.filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
              onClick={() => setFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilter;
