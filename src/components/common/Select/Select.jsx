// src/components/common/Select/Select.jsx
'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './Select.module.scss';

const Select = ({ 
  label, 
  name, 
  options = [], 
  value, 
  onChange, 
  error, 
  required 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className={`${styles.selectGroup} ${error ? styles.hasError : ''}`} ref={containerRef}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <div className={`${styles.customSelect} ${isOpen ? styles.isOpen : ''}`} onClick={handleToggle}>
        <div className={styles.selectedPlaceholder}>
          {selectedOption ? selectedOption.label : 'Select an option'}
        </div>
        <div className={styles.arrow}></div>
        {isOpen && (
          <ul className={styles.optionsList}>
            {options.map((option, index) => (
              <li 
                key={option.value} 
                className={`${styles.optionItem} ${value === option.value ? styles.active : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(option.value);
                }}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Select;
