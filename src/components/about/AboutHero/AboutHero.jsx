// src/components/about/AboutHero/AboutHero.jsx
import Image from 'next/image';
import { ABOUT } from '@/constants';
import styles from './AboutHero.module.scss';

const AboutHero = () => {
  const { title, headline, bio, image } = ABOUT.hero;

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.tag}>{title}</span>
            <h1 className="heading-lg">{headline}</h1>
            <p className={styles.bio}>{bio}</p>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.placeholder}>Photo</div>
            {/* <Image src={image} alt="Sania Bahar" fill className={styles.image} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
