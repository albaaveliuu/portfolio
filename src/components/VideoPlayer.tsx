import React from 'react';
import { motion } from 'framer-motion';
import '../styles/VideoPlayer.scss';

interface VideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
  description?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ isOpen, onClose, videoUrl, title, description }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="video-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="video-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="video-title">
          <h2>{title || 'Video'}</h2>
          {description && <p>{description}</p>}
        </div>
        <button className="close-button" onClick={onClose}>&times;</button>
        <div className="video-container">
          <video 
            controls 
            autoPlay
            className="video-player"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoPlayer; 