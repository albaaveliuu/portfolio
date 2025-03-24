import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/PDFViewer.scss';

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ isOpen, onClose, pdfUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="pdf-viewer-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="pdf-viewer-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={onClose}>
              ×
            </button>
            <iframe
              src={pdfUrl}
              title="PDF Viewer"
              className="pdf-iframe"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PDFViewer; 