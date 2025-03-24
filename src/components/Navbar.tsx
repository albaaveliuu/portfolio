import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-content">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 