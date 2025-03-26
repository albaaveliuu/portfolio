import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
        <motion.p 
          className="copyright"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          © {currentYear} All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer; 