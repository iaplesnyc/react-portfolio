import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = "Valid email is required";
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Only clear the error if the new input is actually valid
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() ? "" : prevErrors[name]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // Hide success message after 3 seconds
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>

      {submitted && <p className="success-message">Your message has been sent successfully!</p>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            name="name" 
            id="name"
            value={formData.name} 
            onChange={handleChange} 
            className={errors.name ? "error-border" : ""}
            aria-label="Enter your full name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={formData.email} 
            onChange={handleChange} 
            className={errors.email ? "error-border" : ""}
            aria-label="Enter a valid email address"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea 
            name="message" 
            id="message"
            value={formData.message} 
            onChange={handleChange} 
            className={errors.message ? "error-border" : ""}
            aria-label="Enter your message"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="btn">Send</button>
      </form>

      {/* 🔹 Add LinkedIn Contact Option */}
      <div className="contact-links">
        <p>Or connect with me on:</p>
        <a 
          href="https://www.linkedin.com/in/iliana-pena/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
