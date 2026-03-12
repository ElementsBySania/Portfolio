// src/components/about/AboutPage/AboutPage.jsx
import AboutHero from '../AboutHero/AboutHero';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <main className={styles.about}>
      <AboutHero />
      <Skills />
      <Experience />
    </main>
  );
};

export default AboutPage;
