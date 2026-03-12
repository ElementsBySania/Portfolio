// src/components/contact/ContactPage/ContactPage.jsx
import ContactHero from '../ContactHero/ContactHero';
import ContactForm from '../ContactForm/ContactForm';
import ContactInfo from '../ContactInfo/ContactInfo';
import styles from './ContactPage.module.scss';

const ContactPage = () => {
  return (
    <main className={styles.contact}>
      <ContactHero />
      <section className="section-padding">
        <div className="container">
          <div className={styles.grid}>
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
