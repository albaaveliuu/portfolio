import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageGallery from '../components/ImageGallery';
import VideoPlayer from '../components/VideoPlayer';
import '../styles/Portfolio.scss';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image?: string;
  description: string;
  hasGallery?: boolean;
  hasVideo?: boolean;
  galleryImages?: string[];
  videoUrl?: string;
  technologies: string[];
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showGallery, setShowGallery] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [currentGalleryImages, setCurrentGalleryImages] = useState<string[]>([]);
  const [currentVideo, setCurrentVideo] = useState<string>('');
  const [currentTitle, setCurrentTitle] = useState<string>('');
  const [currentDescription, setCurrentDescription] = useState<string>('');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'CSGD Brand Books & Logo',
      category: 'design',
      image: '/src/images/csgd/LogoDesign.jpg',
      description: 'Comprehensive brand identity design including logo creation and brand guidelines for CSGD.',
      hasGallery: true,
      galleryImages: [
        '/src/images/csgd/LogoDesign.jpg',
        '/src/images/csgd/logo.png',
        '/src/images/csgd/logoIcon.png',
        '/src/images/csgd/differentColors.png',
        '/src/images/csgd/flagMockup.png',
        '/src/images/csgd/glassMockup.png',
        '/src/images/csgd/notebookMockup.png',
        '/src/images/csgd/totebagMockup.png'
      ],
      technologies: ['Adobe Illustrator', 'Adobe InDesign', 'Brand Guidelines']
    },
    {
      id: 2,
      title: 'Mileniumi Branding',
      category: 'design',
      image: '/src/images/mileniumi/logoFinal.png',
      description: 'Complete brand identity and logo design for Mileniumi, showcasing modern aesthetics and versatile applications.',
      hasGallery: true,
      galleryImages: [
        '/src/images/mileniumi/logoFinal.png',
        '/src/images/mileniumi/logoConstruction.png',
        '/src/images/mileniumi/logoMockupNotebook.png',
        '/src/images/mileniumi/watchLogoMockup.png'
      ],
      technologies: ['Adobe Illustrator', 'Brand Identity', 'Logo Design']
    },
    {
      id: 3,
      title: 'Blink Branding',
      category: 'design',
      image: '/src/images/blink/logoWhite.jpg',
      description: 'Modern and versatile brand identity for Blink, featuring a clean logo design with both light and dark versions for various applications.',
      hasGallery: true,
      galleryImages: [
        '/src/images/blink/logoWhite.jpg',
        '/src/images/blink/logoBlack.jpg',
        '/src/images/blink/icon.jpg',
        '/src/images/blink/visitcards.jpg'
      ],
      technologies: ['Adobe Illustrator', 'Brand Identity', 'Logo Design']
    },
    {
      id: 4,
      title: 'GProject Branding & Website',
      category: 'design',
      image: '/src/images/gproject/logo.png',
      description: 'Complete brand identity and website design for GProject, a construction company with 34 years of family experience. The project included logo design, visual identity, and a modern website showcasing their services in project design, construction, and restoration.',
      hasGallery: true,
      galleryImages: [
        '/src/images/gproject/logo.png',
        '/src/images/gproject/redlogo.jpg',
        '/src/images/gproject/IMG_1152.jpeg'
      ],
      technologies: ['Adobe Illustrator', 'Brand Identity', 'Web Design', 'UI/UX', 'React']
    },
    {
      id: 5,
      title: 'Gabe Nunez Portfolio',
      category: 'design',
      image: '/src/images/gabenunez/page1.jpg',
      description: 'A modern and visually striking portfolio website for Gabe Nunez, showcasing his work with a clean and professional design. The project features responsive layouts and interactive elements to enhance user engagement.',
      hasGallery: true,
      galleryImages: [
        '/src/images/gabenunez/page1.jpg',
        '/src/images/gabenunez/page2.jpg',
        '/src/images/gabenunez/page3.jpg'
      ],
      technologies: ['Web Design', 'UI/UX', 'Responsive Design', 'React']
    },
    {
      id: 6,
      title: 'iPaymer Payment Platform',
      category: 'design',
      image: '/src/images/ipaymer/ipaymer.png',
      description: 'A comprehensive UI/UX design for iPaymer, a modern payment platform. The project features a clean, intuitive interface with a focus on user experience and visual appeal, making financial transactions seamless and engaging.',
      hasGallery: true,
      galleryImages: [
        '/src/images/ipaymer/ipaymer.png',
        '/src/images/ipaymer/ipaymer01.png',
        '/src/images/ipaymer/ipaymer02.png',
        '/src/images/ipaymer/ipaymer03.png',
        '/src/images/ipaymer/page1.png'
      ],
      technologies: ['UI/UX Design', 'Web Design', 'Payment Systems', 'Responsive Design']
    },
    {
      id: 7,
      title: 'Morsix Dashboard Animation',
      category: 'animation',
      image: '/src/animation/Morsix Dashboard Animation.mp4',
      description: 'Interactive dashboard animation demonstrating data visualization and user interface transitions.',
      hasVideo: true,
      videoUrl: '/src/animation/Morsix Dashboard Animation.mp4',
      technologies: ['After Effects', 'UI/UX Animation', 'Motion Design']
    },
    {
      id: 8,
      title: 'Shwabo Commercial',
      category: 'animation',
      image: '/src/animation/Shwabo - Trinken sie shwabo.mp4',
      description: 'Creative commercial animation for Shwabo, featuring engaging visuals and brand storytelling.',
      hasVideo: true,
      videoUrl: '/src/animation/Shwabo - Trinken sie shwabo.mp4',
      technologies: ['After Effects', 'Commercial Animation', 'Brand Animation']
    },
    {
      id: 9,
      title: 'Media Awareness Campaign',
      category: 'animation',
      image: '/src/animation/Titulli nuk eshte lajm! Fushate vetedijesuese ndaj keqinformimit te mediave dhe lajmeve te rreme..mp4',
      description: 'Educational animation campaign about media misinformation and fake news awareness.',
      hasVideo: true,
      videoUrl: '/src/animation/Titulli nuk eshte lajm! Fushate vetedijesuese ndaj keqinformimit te mediave dhe lajmeve te rreme..mp4',
      technologies: ['After Effects', 'Educational Animation', 'Motion Graphics']
    },
    {
      id: 10,
      title: 'Birra Peroni - Pa Panik Plako!',
      category: 'animation',
      image: '/src/animation/Birra Peroni - Pa Panik Plako!.mp4',
      hasVideo: true,
      videoUrl: '/src/animation/Birra Peroni - Pa Panik Plako!.mp4',
      description: 'A dynamic animation for Birra Peroni\'s campaign, featuring the tagline \'Pa Panik Plako!\' with energetic motion graphics and brand elements.',
      technologies: ['After Effects', 'Motion Graphics', 'Brand Animation']
    },
    {
      id: 11,
      title: 'German Embassy',
      category: 'animation',
      image: '/src/animation/Animacioni për Ambasadën Gjermane - Tage der Deutschen Sprache Logo Animation.mp4',
      hasVideo: true,
      videoUrl: '/src/animation/Animacioni për Ambasadën Gjermane - Tage der Deutschen Sprache Logo Animation.mp4',
      description: 'Logo animation for the German Embassy\'s language days event, showcasing elegant typography and cultural elements.',
      technologies: ['After Effects', 'Motion Graphics', 'Logo Design']
    },
    {
      id: 12,
      title: 'Political Campaign Prishtina',
      category: 'design',
      image: '/src/images/politicalCampaignPrishtina/thumbnailElection.png',
      description: 'Political campaign materials for Prishtina, including posters, social media content, and promotional materials.',
      hasGallery: true,
      galleryImages: [
        '/src/images/politicalCampaignPrishtina/thumbnailElection.png',
        '/src/images/politicalCampaignPrishtina/02.png',
        '/src/images/politicalCampaignPrishtina/03.png',
        '/src/images/politicalCampaignPrishtina/stickers04.png'
      ],
      technologies: ['Poster Design', 'Social Media', 'Promotional Materials']
    },
    {
      id: 13,
      title: 'Product Campaign',
      category: 'design',
      image: '/src/images/productCampaign/thumbnailProduct.png',
      description: 'Product campaign design featuring creative visuals and marketing materials.',
      hasGallery: true,
      galleryImages: [
        '/src/images/productCampaign/thumbnailProduct.png',
        '/src/images/productCampaign/02.png',
        '/src/images/productCampaign/03.png'
      ],
      technologies: ['Product Design', 'Marketing', 'Brand Strategy']
    },
    {
      id: 14,
      title: 'Grand Hotel',
      category: 'design',
      image: '/src/images/grandhotel/thumbnail.jpg',
      description: 'A comprehensive branding project for Grand Hotel, including logo design, visual identity, and marketing materials.',
      hasGallery: true,
      galleryImages: [
        '/src/images/grandhotel/Home-100.jpg',
        '/src/images/grandhotel/5-100.jpg',
        '/src/images/grandhotel/6-100.jpg',
        '/src/images/grandhotel/7-100.jpg',
        '/src/images/grandhotel/8-100.jpg',
        '/src/images/grandhotel/9-100.jpg',
        '/src/images/grandhotel/10-100.jpg',
        '/src/images/grandhotel/Projects-100.jpg',
        '/src/images/grandhotel/Studio          -100.jpg',
        '/src/images/grandhotel/What we do-100.jpg'
      ],
      technologies: ['React', 'SCSS', 'Framer Motion']
    }
  ];

  const categories = ['all', 'design', 'animation'];

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const handleProjectClick = (item: PortfolioItem) => {
    if (item.hasGallery && item.galleryImages) {
      setCurrentGalleryImages(item.galleryImages);
      setCurrentTitle(item.title);
      setCurrentDescription(item.description);
      setShowGallery(true);
    } else if (item.hasVideo && item.videoUrl) {
      setCurrentVideo(item.videoUrl);
      setCurrentTitle(item.title);
      setCurrentDescription(item.description);
      setShowVideo(true);
    }
  };

  return (
    <div className="portfolio">
      <motion.div 
        className="portfolio-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="contact-title"
      >
        I sometimes do <span className="highlight">great work</span>
      </motion.h1>
      
      </motion.div>

      <div className="portfolio-filters">
        {categories.map(category => (
          <motion.button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      <motion.div 
        className="portfolio-grid"
        layout
      >
        <AnimatePresence mode="wait">
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              className="portfolio-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              layout
              onClick={() => handleProjectClick(item)}
            >
              <div className="portfolio-image">
                {item.hasVideo ? (
                  <video 
                    className="preview-video"
                    src={item.videoUrl}
                    muted
                    playsInline
                    onLoadedMetadata={(e) => {
                      e.currentTarget.currentTime = e.currentTarget.duration / 2;
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.currentTime = 0;
                      e.currentTarget.play();
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = e.currentTarget.duration / 2;
                    }}
                  />
                ) : (
                  <img src={item.image} alt={item.title} />
                )}
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <span className="portfolio-category">{item.category.toUpperCase()}</span>
                    <h3 className="portfolio-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ImageGallery
        isOpen={showGallery}
        onClose={() => setShowGallery(false)}
        images={currentGalleryImages}
        title={currentTitle}
        description={currentDescription}
      />

      <VideoPlayer
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoUrl={currentVideo}
        title={currentTitle}
        description={currentDescription}
      />
    </div>
  );
};

export default Portfolio; 