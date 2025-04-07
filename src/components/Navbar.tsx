import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <div className="nav-content">
        <div className="nav-left">
          <Link to="/" className="nav-logo" onClick={scrollToTop}>
            AV
          </Link>
        </div>

        <div className="nav-center">
          <div className="nav-links">
            <div className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={scrollToTop}>Home</Link>
            </div>
            <div className="nav-item">
              <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`} onClick={scrollToTop}>Portfolio</Link>
            </div>
            <div className="nav-item">
              <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={scrollToTop}>Contact</Link>
            </div>
          </div>
        </div>

        <div className="nav-right">
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-nav-links">
              <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => { toggleMenu(); scrollToTop(); }}>Home</Link>
              <Link to="/portfolio" className={`mobile-nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`} onClick={() => { toggleMenu(); scrollToTop(); }}>Portfolio</Link>
              <Link to="/contact" className={`mobile-nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={() => { toggleMenu(); scrollToTop(); }}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 