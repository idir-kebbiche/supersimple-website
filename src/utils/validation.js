export const validateName = (name) => {
    if (!name) {
      return 'Le nom est requis';
    }
    return '';
  };
  
  export const validateEmail = (email) => {
    if (!email) {
      return 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return 'L\'email n\'est pas valide';
    }
    return '';
  };
  
  export const validateMessage = (message) => {
    if (!message) {
      return 'Le message est requis';
    }
    return '';
  };
  
  export const validateForm = (formData) => {
    const errors = {};
    errors.name = validateName(formData.name);
    errors.email = validateEmail(formData.email);
    errors.message = validateMessage(formData.message);
    return errors;
  };
  
  // Validation pour les témoignages

export const validateTestimonial = (testimonial) => {
    const errors = {};
  
    if (!testimonial.name.trim()) {
      errors.name = "Le nom est requis";
    }
  
    if (!testimonial.message.trim()) {
      errors.message = "Le message est requis";
    }
  
    return errors;
  };