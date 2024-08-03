import React, { useState } from 'react';
import './Contact.css';
import { validateForm } from '../../utils/validation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).every((key) => validationErrors[key] === '')) {
      console.log('Form data submitted:', formData);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      alert('Message envoyé avec succès');
    }
  };

  return (
    <div className="contact">
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit} className="contact__form">
        <div className="contact__form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="contact__error">{errors.name}</span>}
        </div>
        <div className="contact__form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="contact__error">{errors.email}</span>}
        </div>
        <div className="contact__form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="contact__error">{errors.message}</span>}
        </div>
        <button type="submit" className="contact__submit-button">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
