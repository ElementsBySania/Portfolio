'use client';
// src/components/home/Testimonials/Testimonials.jsx
import { HOME } from '@/constants';
import styles from './Testimonials.module.scss';
import useInView from '@/hooks/useInView';

const Testimonials = () => {
  const { testimonials } = HOME;
  const [ref, isVisible] = useInView({ triggerOnce: true });

  return (
    <section className="section-padding">
      <div className="container">
        <h2 className={`heading-md ${styles.title}`}>Kind Words</h2>
        <div ref={ref} className={`${styles.grid} ${isVisible ? styles.isVisible : ''}`}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonial}>
              <div className={styles.quoteIcon}>“</div>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.author}>
                <span className={styles.name}>{testimonial.author}</span>
                <span className={styles.position}>{testimonial.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
