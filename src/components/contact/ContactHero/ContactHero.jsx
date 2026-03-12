// src/components/contact/ContactHero/ContactHero.jsx
import { CONTACT } from '@/constants';
import styles from './ContactHero.module.scss';

const ContactHero = () => {
  const { title, headline } = CONTACT.hero;

  return (
    <section className={styles.hero}>
      <div className="container">
        <span className={styles.tag}>{title}</span>
        <h1 className="heading-lg">{headline}</h1>
      </div>
    </section>
  );
};

export default ContactHero;
