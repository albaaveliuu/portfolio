import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaSmile, FaRegSmile, FaRegSmileWink } from 'react-icons/fa';
import '../styles/Contact.scss';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    projectType: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeField, setActiveField] = useState('');
  const [mood, setMood] = useState('neutral');
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await emailjs.send(
        'service_lkknqf8',
        'template_auto_reply',
        {
          from_name: formState.name,
          from_email: formState.email,
          project_type: formState.projectType,
          phone: formState.phone,
          message: formState.message,
          to_email: 'albenitaveliuu@gmail.com',
        },
        'uKfBC5aQwy-EynMiI'
      );

      if (result.text === 'OK') {
        setIsSubmitted(true);
        setFormState({
          name: '',
          projectType: '',
          email: '',
          phone: '',
          message: ''
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('Email error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
    
    // Update mood based on form completion
    const filledFields = Object.values(formState).filter(value => value !== '').length;
    if (filledFields < 2) {
      setMood('neutral');
    } else if (filledFields < 3) {
      setMood('happy');
    } else {
      setMood('excited');
    }
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField('');
  };

  const cursorVariants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1,
      transition: { type: "spring", stiffness: 500, damping: 30 }
    },
    hover: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1.5,
      transition: { type: "spring", stiffness: 500, damping: 30 }
    }
  };

  const renderMoodIcon = () => {
    switch (mood) {
      case 'happy':
        return <FaRegSmile className="mood-icon" />;
      case 'excited':
        return <FaRegSmileWink className="mood-icon" />;
      default:
        return <FaSmile className="mood-icon" />;
    }
  };

  return (
    <motion.div 
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="cursor-follower"
        variants={cursorVariants}
        animate={activeField ? "hover" : "default"}
      />
      
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="contact-title"
      >
        Get in <span className="highlight">touch!</span>
      </motion.h1>
      

      
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div className="info">
                <span>Email</span>
                <a href="mailto:albenitaveliuu@gmail.com">albenitaveliuu@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">
                <FaPhone />
              </div>
              <div className="info">
                <span>Phone</span>
                <p>+49 162 3112149</p>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/albaaveliuu" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/albaveliuu" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
        
        <motion.form 
          className="contact-form"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          onSubmit={handleSubmit}
        >
          <h2>Send a Message</h2>
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formState.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="projectType">Project Type</label>
            <select
              id="projectType"
              name="projectType"
              value={formState.projectType}
              onChange={handleChange}
              onFocus={() => handleFocus('projectType')}
              onBlur={handleBlur}
              required
            >
              <option value="" disabled>Type of Project</option>
              <option value="Branding">Branding</option>
              <option value="Website">Website</option>
              <option value="Animation">Animation</option>
              <option value="All of the above">All of the above</option>
            </select>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formState.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={handleBlur}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me more about your project"
              value={formState.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
          
          {isSubmitted && (
            <div className="success-message">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          <div className="mood-indicator">
            {renderMoodIcon()}
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact; 