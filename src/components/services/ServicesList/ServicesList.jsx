// src/components/services/ServicesList/ServicesList.jsx
import { SERVICES } from '@/constants';
import styles from './ServicesList.module.scss';

const ServicesList = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.grid}>
          {SERVICES.list.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.number}>0{index + 1}</div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <ul className={styles.deliverables}>
                {service.deliverables.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
