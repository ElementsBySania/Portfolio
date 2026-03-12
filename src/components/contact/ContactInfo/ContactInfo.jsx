// src/components/contact/ContactInfo/ContactInfo.jsx
import { CONTACT } from '@/constants';
import styles from './ContactInfo.module.scss';

const ContactInfo = () => {
  const { info } = CONTACT;

  return (
    <div className={styles.infoWrapper}>
      <div className={styles.item}>
        <span className={styles.label}>Email</span>
        <a href={`mailto:${info.email}`} className={styles.value}>{info.email}</a>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>Phone</span>
        <a href={`tel:${info.phone}`} className={styles.value}>{info.phone}</a>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>Location</span>
        <span className={styles.value}>{info.location}</span>
      </div>
      <div className={styles.socials}>
        <span className={styles.label}>Follow</span>
        <div className={styles.socialLinks}>
          {info.socials.map((social) => (
            <a 
              key={social.label} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
