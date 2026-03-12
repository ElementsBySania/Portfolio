// src/components/home/FeaturedWork/FeaturedWork.jsx
import { HOME } from '@/constants';
import Card from '@/components/common/Card/Card';
import Button from '@/components/common/Button/Button';
import styles from './FeaturedWork.module.scss';

const FeaturedWork = () => {
  const { title, items } = HOME.featured_work;

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2 className="heading-md">{title}</h2>
          <Button label="View All Projects" href="/portfolio" variant="ghost" />
        </div>
        
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={item.id} className={`${styles.item} ${styles[`item${index + 1}`]}`}>
              <Card 
                title={item.title}
                tag={item.category}
                image={item.image}
                href={item.href}
                variant={index === 0 ? 'featured' : 'default'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
