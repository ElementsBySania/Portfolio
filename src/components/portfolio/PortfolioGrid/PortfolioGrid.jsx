// src/components/portfolio/PortfolioGrid/PortfolioGrid.jsx
import { PORTFOLIO } from '@/constants';
import Card from '@/components/common/Card/Card';
import styles from './PortfolioGrid.module.scss';

const PortfolioGrid = ({ activeFilter }) => {
  const filteredItems = activeFilter === 'All' 
    ? PORTFOLIO.items 
    : PORTFOLIO.items.filter(item => item.category === activeFilter);

  return (
    <section className={styles.gridSection}>
      <div className="container">
        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <Card 
                title={item.title}
                tag={item.category}
                image={item.image}
                href={`/portfolio/${item.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
