import { motion } from 'framer-motion';
import '../styles/LoadingSpinner.scss';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <motion.div
        className="loading-spinner"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span role="img" aria-label="palette">🎨</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Loading creative magic...
      </motion.p>
    </div>
  );
};

export default LoadingSpinner; 