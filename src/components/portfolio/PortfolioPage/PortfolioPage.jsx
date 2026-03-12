// src/components/portfolio/PortfolioPage/PortfolioPage.jsx
'use client';
import { useState } from 'react';
import PortfolioHero from '../PortfolioHero/PortfolioHero';
import PortfolioFilter from '../PortfolioFilter/PortfolioFilter';
import PortfolioGrid from '../PortfolioGrid/PortfolioGrid';
import styles from './PortfolioPage.module.scss';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <main className={styles.portfolio}>
      <PortfolioHero />
      <PortfolioFilter activeFilter={activeFilter} setFilter={setActiveFilter} />
      <PortfolioGrid activeFilter={activeFilter} />
    </main>
  );
};

export default PortfolioPage;
