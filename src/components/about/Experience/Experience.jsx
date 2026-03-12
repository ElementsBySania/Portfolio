// src/components/about/Experience/Experience.jsx
import { ABOUT } from '@/constants';
import styles from './Experience.module.scss';

const Experience = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.column}>
            <h2 className={`heading-md ${styles.title}`}>Experience</h2>
            <div className={styles.list}>
              {ABOUT.experience.map((exp, index) => (
                <div key={index} className={styles.item}>
                  <span className={styles.period}>{exp.period}</span>
                  <h3 className={styles.role}>{exp.title}</h3>
                  <span className={styles.company}>{exp.company}</span>
                  <p className={styles.description}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.column}>
            <h2 className={`heading-md ${styles.title}`}>Education</h2>
            <div className={styles.list}>
              {ABOUT.education.map((edu, index) => (
                <div key={index} className={styles.item}>
                  <span className={styles.period}>{edu.period}</span>
                  <h3 className={styles.role}>{edu.title}</h3>
                  <span className={styles.company}>{edu.school}</span>
                  <p className={styles.description}>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
