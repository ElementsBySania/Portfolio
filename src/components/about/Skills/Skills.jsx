// src/components/about/Skills/Skills.jsx
'use client';
import { ABOUT } from '@/constants';
import useInView from '@/hooks/useInView';
import styles from './Skills.module.scss';

const Skills = () => {
  const [ref, isVisible] = useInView({ triggerOnce: true });

  return (
    <section className="section-padding">
      <div className="container">
        <h2 className={`heading-md ${styles.title}`}>Capabilities</h2>
        <div ref={ref} className={styles.grid}>
          {ABOUT.skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillInfo}>
                <span className={styles.skillLabel}>{skill.label}</span>
                <span className={styles.skillValue}>{skill.level}%</span>
              </div>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill}
                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
