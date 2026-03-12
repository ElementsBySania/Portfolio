// src/components/contact/ContactForm/ContactForm.jsx
'use client';
import { useState } from 'react';
import { CONTACT } from '@/constants';
import Input from '@/components/common/Input/Input';
import Select from '@/components/common/Select/Select';
import Button from '@/components/common/Button/Button';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);
    alert('Thank you for your message! Alex will get back to you soon.');
    setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <Input 
            label="Name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            error={errors.name}
            required 
          />
          <Input 
            label="Email" 
            name="email" 
            type="email"
            value={formData.email} 
            onChange={handleChange} 
            error={errors.email}
            required 
          />
        </div>
        <div className={styles.row}>
          <Select 
            label="Project Type" 
            name="projectType" 
            options={CONTACT.form.projectTypes}
            value={formData.projectType}
            onChange={handleChange}
          />
          <Select 
            label="Budget Range" 
            name="budget" 
            options={CONTACT.form.budgets}
            value={formData.budget}
            onChange={handleChange}
          />
        </div>
        <Input 
          label="Message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          error={errors.message}
          textarea
          required 
        />
        <Button label="Send Message" type="submit" size="lg" className={styles.submitBtn} />
      </form>
    </div>
  );
};

export default ContactForm;
