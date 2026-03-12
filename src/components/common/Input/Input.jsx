'use client';
// src/components/common/Input/Input.jsx
import styles from './Input.module.scss';

const Input = ({ 
  label, 
  name, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error, 
  required, 
  disabled,
  textarea 
}) => {
  const InputTag = textarea ? 'textarea' : 'input';

  return (
    <div className={`${styles.inputGroup} ${error ? styles.hasError : ''}`}>
      <div className={styles.inputWrapper}>
        <InputTag
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder || ' '}
          required={required}
          disabled={disabled}
          className={styles.input}
          rows={textarea ? 4 : undefined}
        />
        <label htmlFor={name} className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
        <div className={styles.borderLine}></div>
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Input;
