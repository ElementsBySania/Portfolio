// src/components/home/HomePage/HomePage.jsx
import HeroSection from '../HeroSection/HeroSection';
import FeaturedWork from '../FeaturedWork/FeaturedWork';
import ClientLogos from '../ClientLogos/ClientLogos';
import Testimonials from '../Testimonials/Testimonials';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <main className={styles.home}>
      <HeroSection />
      <FeaturedWork />
      <ClientLogos />
      <Testimonials />
    </main>
  );
};

export default HomePage;
