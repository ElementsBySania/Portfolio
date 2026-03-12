'use client';
// src/components/common/Card/Card.jsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './Card.module.scss';
import useInView from '@/hooks/useInView';

const Card = ({ 
  title, 
  description, 
  image, 
  tag, 
  href, 
  variant = 'default' 
}) => {
  const [ref, isVisible] = useInView({ triggerOnce: true });

  const content = (
    <div 
      ref={ref}
      className={`${styles.card} ${styles[variant]} ${isVisible ? styles.isVisible : ''}`}
    >
      <div className={styles.imageWrapper}>
        {image ? (
          <Image 
            src={image} 
            alt={title} 
            fill 
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className={styles.placeholder}>Graphic Design</div>
        )}
        <div className={styles.overlay}>
          <span className={styles.viewLabel}>View Project</span>
        </div>
      </div>
      <div className={styles.content}>
        {tag && <span className={styles.tag}>{tag}</span>}
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={styles.linkWrapper}>
        {content}
      </Link>
    );
  }

  return content;
};

export default Card;
