import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="footer"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-content">
        <div className="footer-left">
          <Link to="/" className="footer-logo">
            AV
          </Link>
        </div>

        <div className="footer-center">
          <div className="footer-links">
            <div className="footer-item">
              <Link to="/" className="footer-link">Home</Link>
            </div>
            <div className="footer-item">
              <Link to="/portfolio" className="footer-link">Portfolio</Link>
            </div>
            <div className="footer-item">
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.a 
              href="https://github.com/albaaveliuu" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/albenita-veliu-b4b1b4291/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:albenitaveliuu@gmail.com"
              aria-label="Email"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="copyright">
          © {currentYear} All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer; 