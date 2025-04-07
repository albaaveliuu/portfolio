import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Home.scss';
import aboutMeImage from '../images/aboutMe.jpeg';

// Project data
const projects = [
  {
    id: 1,
    title: "German Embassy",
    category: "Identity + Website",
    image: "https://via.placeholder.com/600x400/FF1493/FFFFFF?text=German+Embassy",
    link: "/portfolio"
  },
  {
    id: 2,
    title: "Animation Project",
    category: "Animation",
    image: "https://via.placeholder.com/600x400/00BFFF/FFFFFF?text=Animation",
    link: "/portfolio"
  },
  {
    id: 3,
    title: "Web Development",
    category: "Development",
    image: "https://via.placeholder.com/600x400/FFD700/FFFFFF?text=Development",
    link: "/portfolio"
  }
];

const Home: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track mouse position for cursor effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-title">
              <span className="line">Hey there, I am</span>
              <span className="line">Albenita Veliu</span>
            </h1>
            <p className="hero-subtitle">
              Crafting bold visual identities and stunning websites that make your brand stand out.
            </p>
            <motion.div 
              className="cta-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Link to="/contact" className="cta-button">
               Contact Me
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="image-container">
              <img src={aboutMeImage} alt="Albenita Veliu" />
            </div>
          </motion.div>
        </div>
        
        <div 
          className="cursor-follower"
          style={{ 
            left: `${mousePosition.x}px`, 
            top: `${mousePosition.y}px`,
            transform: `translate(-50%, -50%) scale(${activeProject ? 1.5 : 1})`
          }}
        />
      </section>

      {/* Services Section */}
      <section className="services-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>What I Do</h2>
        </motion.div>
        
        <motion.div 
          className="creative-highlights"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="highlight-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="highlight-icon">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path className="icon-path" d="M20,50 L80,50" />
                <path className="icon-path" d="M50,20 L50,80" />
                <circle className="icon-circle" cx="50" cy="50" r="30" />
              </svg>
            </div>
            <h3>Design</h3>
            <p>Creating visually stunning and user-friendly interfaces that leave a lasting impression.</p>
          </motion.div>
          <motion.div 
            className="highlight-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="highlight-icon">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path className="icon-path" d="M20,50 Q50,20 80,50" />
                <path className="icon-path" d="M20,50 Q50,80 80,50" />
                <circle className="icon-circle" cx="50" cy="50" r="30" />
              </svg>
            </div>
            <h3>Animation</h3>
            <p>Bringing stories to life through captivating 2D animations that engage and inspire.</p>
          </motion.div>
          <motion.div 
            className="highlight-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="highlight-icon">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path className="icon-path" d="M30,30 L70,30 L70,70 L30,70 Z" />
                <path className="icon-path" d="M40,40 L60,40" />
                <path className="icon-path" d="M40,50 L60,50" />
                <path className="icon-path" d="M40,60 L60,60" />
              </svg>
            </div>
            <h3>Development</h3>
            <p>Building robust and scalable web applications with clean, efficient code.</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="view-all-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/portfolio" className="view-all-link">
            View All Projects
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section 
        className="about-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="about-text"
            variants={itemVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="about-title"
            >
              About Me
            </motion.h2>
            <motion.div 
              className="animated-text-container"
              variants={itemVariants}
            >
              <motion.p
                className="animated-text"
                variants={itemVariants}
              >
                I am a passionate Graphic Web Designer, 2D Animator, and Web Developer with a keen eye for detail and a love for creating engaging digital experiences. My work combines creativity with technical expertise to deliver impactful solutions.
              </motion.p>
              <motion.p
                className="animated-text"
                variants={itemVariants}
              >
                When I'm not designing or coding, you can find me playing guitar and singing, which helps me maintain a creative balance in my life.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home; 