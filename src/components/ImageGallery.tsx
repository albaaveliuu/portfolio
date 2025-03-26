import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ImageGallery.scss';

interface ImageGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ isOpen, onClose, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      className="gallery-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="gallery-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <div className="gallery-navigation">
          <button className="nav-button prev" onClick={handlePrev}>&#8592;</button>
          <motion.div className="image-container">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            />
            <div className="image-counter">
              {currentImageIndex + 1} / {images.length}
            </div>
          </motion.div>
          <button className="nav-button next" onClick={handleNext}>&#8594;</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageGallery; 