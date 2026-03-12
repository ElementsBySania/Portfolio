// src/components/services/Pricing/Pricing.jsx
import { SERVICES } from '@/constants';
import Button from '@/components/common/Button/Button';
import styles from './Pricing.module.scss';

const Pricing = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className={`heading-md ${styles.title}`}>Investment</h2>
        <div className={styles.grid}>
          {SERVICES.pricing.map((tier, index) => (
            <div key={index} className={`${styles.card} ${tier.featured ? styles.featured : ''}`}>
              {tier.featured && <div className={styles.badge}>Most Popular</div>}
              <h3 className={styles.name}>{tier.name}</h3>
              <div className={styles.price}>{tier.price}</div>
              <p className={styles.desc}>{tier.description}</p>
              <ul className={styles.features}>
                {tier.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Button 
                {...tier.cta} 
                variant={tier.featured ? 'primary' : 'secondary'}
                className={styles.cta}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
