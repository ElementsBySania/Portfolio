// src/components/home/ClientLogos/ClientLogos.jsx
import { HOME } from '@/constants';
import styles from './ClientLogos.module.scss';

const ClientLogos = () => {
  const { clients } = HOME;

  return (
    <section className={styles.clients}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className={styles.client}>
              <span className={styles.clientName}>{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
