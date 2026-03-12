'use client';
// src/components/common/Button/Button.jsx
import Link from 'next/link';
import styles from './Button.module.scss';

const Button = ({ 
  label, 
  href, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  icon, 
  disabled, 
  type = 'button',
  className = ''
}) => {
  const content = (
    <>
      <span className={styles.label}>{label}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </>
  );

  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled} 
      className={buttonClasses}
    >
      {content}
    </button>
  );
};

export default Button;
