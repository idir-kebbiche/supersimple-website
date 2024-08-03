import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { validateTestimonial } from '../../utils/validation';
import './Testimonials.css';

const TestimonialForm = ({ onSave, testimonials }) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id && testimonials) {
      const testimonialToEdit = testimonials.find(testimonial => testimonial.id === parseInt(id));
      if (testimonialToEdit) {
        setFormData(testimonialToEdit);
      }
    }
  }, [id, testimonials]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateTestimonial(formData);
    if (Object.keys(validationErrors).length === 0) {
      if (id) {
        onSave(parseInt(id), formData);
      } else {
        onSave(formData);
      }
      navigate('/testimonials');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="testimonial-form">
      <h2>{id ? 'Modifier le témoignage' : 'Laisser un témoignage'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit" className="submit-button">Soumettre</button>
      </form>
    </div>
  );
};

export default TestimonialForm;