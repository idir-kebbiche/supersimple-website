import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import ProjectList from './pages/Projects/ProjectList';
import Contact from './pages/Contact/Contact';
import TestimonialList from './pages/Testimonials/TestimonialList';
import TestimonialForm from './pages/Testimonials/TestimonialForm';
//import './App.css';

function App() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const storedTestimonials = localStorage.getItem('testimonials');
    if (storedTestimonials) {
      setTestimonials(JSON.parse(storedTestimonials));
    }
  }, []);

  const addTestimonial = (newTestimonial) => {
    const updatedTestimonials = [...testimonials, { ...newTestimonial, id: Date.now() }];
    setTestimonials(updatedTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
  };

  const updateTestimonial = (id, updatedTestimonial) => {
    const updatedTestimonials = testimonials.map(testimonial => 
      testimonial.id === id ? { ...testimonial, ...updatedTestimonial } : testimonial
    );
    setTestimonials(updatedTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<TestimonialList testimonials={testimonials} />} />
          <Route path="/testimonials/new" element={<TestimonialForm onSave={addTestimonial} />} />
          <Route path="/testimonials/edit/:id" element={<TestimonialForm onSave={updateTestimonial} testimonials={testimonials} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;