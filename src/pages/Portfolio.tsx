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

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
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
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
      title: 'Landing Page Animation',
      category: 'animation',
      image: '/src/animation/landingPageAnimation.mp4',
      description: 'A dynamic landing page animation showcasing smooth transitions and engaging user interactions.',
      hasVideo: true,
      videoUrl: '/src/animation/landingPageAnimation.mp4',
      technologies: ['After Effects', 'Motion Graphics', 'UI Animation']
    },
    {
      id: 5,
      title: 'Morsix Dashboard Animation',
      category: 'animation',
      image: '/src/animation/Morsix Dashboard Animation.mp4',
      description: 'Interactive dashboard animation demonstrating data visualization and user interface transitions.',
      hasVideo: true,
      videoUrl: '/src/animation/Morsix Dashboard Animation.mp4',
      technologies: ['After Effects', 'UI/UX Animation', 'Motion Design']
    },
    {
      id: 6,
      title: 'Shwabo Commercial',
      category: 'animation',
      image: '/src/animation/Shwabo - Trinken sie shwabo.mp4',
      description: 'Creative commercial animation for Shwabo, featuring engaging visuals and brand storytelling.',
      hasVideo: true,
      videoUrl: '/src/animation/Shwabo - Trinken sie shwabo.mp4',
      technologies: ['After Effects', 'Commercial Animation', 'Brand Animation']
    },
    {
      id: 7,
      title: 'Media Awareness Campaign',
      category: 'animation',
      image: '/src/animation/Titulli nuk eshte lajm! Fushate vetedijesuese ndaj keqinformimit te mediave dhe lajmeve te rreme..mp4',
      description: 'Educational animation campaign about media misinformation and fake news awareness.',
      hasVideo: true,
      videoUrl: '/src/animation/Titulli nuk eshte lajm! Fushate vetedijesuese ndaj keqinformimit te mediave dhe lajmeve te rreme..mp4',
      technologies: ['After Effects', 'Educational Animation', 'Motion Graphics']
    },
    {
      id: 8,
      title: 'Birra Peroni - Pa Panik Plako!',
      category: 'animation',
      image: '/src/animation/Birra Peroni - Pa Panik Plako!.mp4',
      hasVideo: true,
      videoUrl: '/src/animation/Birra Peroni - Pa Panik Plako!.mp4',
      description: 'A dynamic animation for Birra Peroni\'s campaign, featuring the tagline \'Pa Panik Plako!\' with energetic motion graphics and brand elements.',
      technologies: ['After Effects', 'Motion Graphics', 'Brand Animation']
    },
    {
      id: 9,
      title: 'Ambasada Gjermane - Tage der Deutschen Sprache',
      category: 'animation',
      image: '/src/animation/Animacioni për Ambasadën Gjermane - Tage der Deutschen Sprache Logo Animation.mp4',
      hasVideo: true,
      videoUrl: '/src/animation/Animacioni për Ambasadën Gjermane - Tage der Deutschen Sprache Logo Animation.mp4',
      description: 'Logo animation for the German Embassy\'s language days event, showcasing elegant typography and cultural elements.',
      technologies: ['After Effects', 'Motion Graphics', 'Logo Design']
    },
    {
      id: 10,
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
      id: 11,
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
    }
  ];

  const categories = ['all', 'design', 'animation'];

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const handleProjectClick = (item: PortfolioItem) => {
    if (item.hasGallery && item.galleryImages) {
      setCurrentGalleryImages(item.galleryImages);
      setShowGallery(true);
    } else if (item.hasVideo && item.videoUrl) {
      setCurrentVideo(item.videoUrl);
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
        <h1>My Work</h1>
        <p>Explore my creative journey through various projects</p>
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleProjectClick(item)}
              layout
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
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="portfolio-technologies">
                    {item.technologies?.map((tech: string, index: number) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <button className="view-project">
                    {item.hasVideo ? 'Play Video' : 'View Gallery'}
                  </button>
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
      />

      <VideoPlayer
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoUrl={currentVideo}
      />
    </div>
  );
};

export default Portfolio; 