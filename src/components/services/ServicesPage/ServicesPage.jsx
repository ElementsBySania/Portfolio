// src/components/services/ServicesPage/ServicesPage.jsx
import ServicesHero from '../ServicesHero/ServicesHero';
import ServicesList from '../ServicesList/ServicesList';
import Pricing from '../Pricing/Pricing';
import styles from './ServicesPage.module.scss';

const ServicesPage = () => {
  return (
    <main className={styles.services}>
      <ServicesHero />
      <ServicesList />
      <Pricing />
    </main>
  );
};

export default ServicesPage;
