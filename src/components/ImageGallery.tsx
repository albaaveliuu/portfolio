import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ImageGallery.scss';

interface ImageGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title?: string;
  description?: string;
  isVideo?: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ isOpen, onClose, images, title = "Tage der Deutschen Sprache", description, isVideo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
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
        <div className="gallery-title">
          <h2>{title || 'Gallery'}</h2>
          {description && <p>{description}</p>}
        </div>
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <div className="gallery-navigation">
          <button className="nav-button prev" onClick={handlePrev}>&#8592;</button>
          <motion.div className="image-container">
            {isVideo ? (
              <motion.video
                key={currentIndex}
                src={images[currentIndex]}
                controls
                autoPlay
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              />
            )}
            <div className="image-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
          <button className="nav-button next" onClick={handleNext}>&#8594;</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageGallery; 