import React from 'react';
import { Link } from 'react-router-dom';
import './Testimonials.css';

const TestimonialList = ({ testimonials }) => {
  return (
    <div className="testimonial-list">
      <h2>Témoignages</h2>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className="testimonial-item">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.message}</p>
            <Link to={`/testimonials/edit/${testimonial.id}`} className="edit-testimonial-button">
              Modifier
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/testimonials/new" className="add-testimonial-button">
        Ajouter un témoignage
      </Link>
    </div>
  );
};

export default TestimonialList;
