import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PDFViewer from '../components/PDFViewer';
import '../styles/Portfolio.scss';

const portfolioItems = [
  {
    id: 1,
    title: 'Brand Identity Design',
    category: 'Graphic Design',
    image: '/placeholder1.jpg',
    description: 'A playful and modern brand identity for a creative agency.',
    pdfUrl: '/pdf/Grand International.pdf'
  },
  {
    id: 2,
    title: 'Character Animation',
    category: 'Animation',
    image: '/placeholder2.jpg',
    description: 'Fun character animations for a children\'s educational app.',
    pdfUrl: '/pdf/Grand International.pdf'
  },
  {
    id: 3,
    title: 'E-commerce Website',
    category: 'Web Development',
    image: '/images/ecommerce.jpg',
    description: 'A full-featured e-commerce platform with modern design and seamless user experience.',
    pdfUrl: '/pdf/Grand International.pdf'
  },
  {
    id: 4,
    title: 'Magazine Layout',
    category: 'Graphic Design',
    image: '/placeholder4.jpg',
    description: 'Editorial design for a lifestyle magazine.',
    pdfUrl: '/pdf/Grand International.pdf'
  },
  {
    id: 5,
    title: 'Motion Graphics',
    category: 'Animation',
    image: '/placeholder5.jpg',
    description: 'Engaging motion graphics for social media campaigns.',
    pdfUrl: '/pdf/Grand International.pdf'
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'Web Design',
    image: '/placeholder6.jpg',
    description: 'A creative portfolio website with 3D elements.',
    pdfUrl: '/pdf/Grand International.pdf'
  }
];

const Portfolio = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const handleProjectClick = (pdfUrl: string) => {
    setSelectedPdf(pdfUrl);
  };

  return (
    <div className="portfolio">
      <motion.div 
        className="portfolio-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>My Work</h1>
        <p>A selection of my favorite projects</p>
      </motion.div>

      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="portfolio-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => item.pdfUrl && handleProjectClick(item.pdfUrl)}
          >
            <div className="item-image">
              <img src={item.image} alt={item.title} />
              <div className="item-overlay">
                <span className="category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="view-project">
                  {item.pdfUrl ? 'View PDF' : 'View Project'}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <PDFViewer
        isOpen={!!selectedPdf}
        onClose={() => setSelectedPdf(null)}
        pdfUrl={selectedPdf || ''}
      />

      <motion.div 
        className="contact-cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2>Let's Create Something Amazing Together!</h2>
        <button className="contact-button">Get in Touch</button>
      </motion.div>
    </div>
  );
};

export default Portfolio; 