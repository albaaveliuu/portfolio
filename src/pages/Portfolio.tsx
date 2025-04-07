import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageGallery from '../components/ImageGallery';
import VideoPlayer from '../components/VideoPlayer';
import '../styles/Portfolio.scss';

// Import images
import csgdLogo from '../images/csgd/LogoDesign.jpg';
import csgdLogoPng from '../images/csgd/logo.png';
import csgdLogoIcon from '../images/csgd/logoIcon.png';
import csgdColors from '../images/csgd/differentColors.png';
import csgdFlag from '../images/csgd/flagMockup.png';
import csgdGlass from '../images/csgd/glassMockup.png';
import csgdNotebook from '../images/csgd/notebookMockup.png';
import csgdTotebag from '../images/csgd/totebagMockup.png';

import mileniumiLogo from '../images/mileniumi/logoFinal.png';
import mileniumiConstruction from '../images/mileniumi/logoConstruction.png';
import mileniumiNotebook from '../images/mileniumi/logoMockupNotebook.png';
import mileniumiWatch from '../images/mileniumi/watchLogoMockup.png';

import blinkWhite from '../images/blink/logoWhite.jpg';
import blinkBlack from '../images/blink/logoBlack.jpg';
import blinkIcon from '../images/blink/icon.jpg';
import blinkCards from '../images/blink/visitcards.jpg';

import gprojectLogo from '../images/gproject/logo.png';
import gprojectRed from '../images/gproject/redlogo.jpg';
import gprojectImg from '../images/gproject/IMG_1152.jpeg';

import gabePage1 from '../images/gabenunez/page1.jpg';
import gabePage2 from '../images/gabenunez/page2.jpg';
import gabePage3 from '../images/gabenunez/page3.jpg';

import ipaymerLogo from '../images/ipaymer/ipaymer.png';
import ipaymer01 from '../images/ipaymer/ipaymer01.png';
import ipaymer02 from '../images/ipaymer/ipaymer02.png';
import ipaymer03 from '../images/ipaymer/ipaymer03.png';
import ipaymerPage1 from '../images/ipaymer/page1.png';

import grandHotelThumb from '../images/grandhotel/thumbnail.jpg';
import grandHotelHome from '../images/grandhotel/Home-100.jpg';
import grandHotel5 from '../images/grandhotel/5-100.jpg';
import grandHotel6 from '../images/grandhotel/6-100.jpg';
import grandHotel7 from '../images/grandhotel/7-100.jpg';
import grandHotel8 from '../images/grandhotel/8-100.jpg';
import grandHotel9 from '../images/grandhotel/9-100.jpg';
import grandHotel10 from '../images/grandhotel/10-100.jpg';
import grandHotelProjects from '../images/grandhotel/Projects-100.jpg';
import grandHotelStudio from '../images/grandhotel/Studio          -100.jpg';
import grandHotelWhat from '../images/grandhotel/What we do-100.jpg';

import politicalThumb from '../images/politicalCampaignPrishtina/thumbnailElection.png';
import political02 from '../images/politicalCampaignPrishtina/02.png';
import political03 from '../images/politicalCampaignPrishtina/03.png';
import politicalStickers from '../images/politicalCampaignPrishtina/stickers04.png';

import productThumb from '../images/productCampaign/thumbnailProduct.png';
import product02 from '../images/productCampaign/02.png';
import product03 from '../images/productCampaign/03.png';

// Import videos
import morsixVideo from '../animation/Morsix Dashboard Animation.mp4';
import shwaboVideo from '../animation/Shwabo - Trinken sie shwabo.mp4';
import mediaAwarenessVideo from '../animation/Titulli nuk eshte lajm! Fushate vetedijesuese ndaj keqinformimit te mediave dhe lajmeve te rreme..mp4';
import peroniVideo from '../animation/Birra Peroni - Pa Panik Plako!.mp4';
import germanEmbassyVideo from '../animation/Animacioni për Ambasadën Gjermane - Tage der Deutschen Sprache Logo Animation.mp4';

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
      image: csgdLogo,
      description: 'Comprehensive brand identity design including logo creation and brand guidelines for CSGD.',
      hasGallery: true,
      galleryImages: [
        csgdLogo,
        csgdLogoPng,
        csgdLogoIcon,
        csgdColors,
        csgdFlag,
        csgdGlass,
        csgdNotebook,
        csgdTotebag
      ],
      technologies: ['Adobe Illustrator', 'Adobe InDesign', 'Brand Guidelines']
    },
    {
      id: 2,
      title: 'Mileniumi Branding',
      category: 'design',
      image: mileniumiLogo,
      description: 'Complete brand identity and logo design for Mileniumi, showcasing modern aesthetics and versatile applications.',
      hasGallery: true,
      galleryImages: [
        mileniumiLogo,
        mileniumiConstruction,
        mileniumiNotebook,
        mileniumiWatch
      ],
      technologies: ['Adobe Illustrator', 'Brand Identity', 'Logo Design']
    },
    {
      id: 3,
      title: 'Blink Branding',
      category: 'design',
      image: blinkWhite,
      description: 'Modern and versatile brand identity for Blink, featuring a clean logo design with both light and dark versions for various applications.',
      hasGallery: true,
      galleryImages: [
        blinkWhite,
        blinkBlack,
        blinkIcon,
        blinkCards
      ],
      technologies: ['Adobe Illustrator', 'Brand Identity', 'Logo Design']
    },
    {
      id: 4,
      title: 'GProject Branding & Website',
      category: 'design',
      image: gprojectLogo,
      description: 'Complete brand identity and website design for GProject, a construction company with 34 years of family experience. The project included logo design, visual identity, and a modern website showcasing their services in project design, construction, and restoration.',
      hasGallery: true,
      galleryImages: [
        gprojectLogo,
        gprojectRed,
        gprojectImg
      ],
      technologies: ['Adobe Illustrator', 'Brand Identity', 'Web Design', 'UI/UX', 'React']
    },
    {
      id: 5,
      title: 'Gabe Nunez Portfolio',
      category: 'design',
      image: gabePage1,
      description: 'A modern and visually striking portfolio website for Gabe Nunez, showcasing his work with a clean and professional design. The project features responsive layouts and interactive elements to enhance user engagement.',
      hasGallery: true,
      galleryImages: [
        gabePage1,
        gabePage2,
        gabePage3
      ],
      technologies: ['Web Design', 'UI/UX', 'Responsive Design', 'React']
    },
    {
      id: 6,
      title: 'iPaymer Payment Platform',
      category: 'design',
      image: ipaymerLogo,
      description: 'A comprehensive UI/UX design for iPaymer, a modern payment platform. The project features a clean, intuitive interface with a focus on user experience and visual appeal, making financial transactions seamless and engaging.',
      hasGallery: true,
      galleryImages: [
        ipaymerLogo,
        ipaymer01,
        ipaymer02,
        ipaymer03,
        ipaymerPage1
      ],
      technologies: ['UI/UX Design', 'Web Design', 'Payment Systems', 'Responsive Design']
    },
    {
      id: 7,
      title: 'Morsix Dashboard Animation',
      category: 'animation',
      image: morsixVideo,
      description: 'Interactive dashboard animation demonstrating data visualization and user interface transitions.',
      hasVideo: true,
      videoUrl: morsixVideo,
      technologies: ['After Effects', 'UI/UX Animation', 'Motion Design']
    },
    {
      id: 8,
      title: 'Shwabo Commercial',
      category: 'animation',
      image: shwaboVideo,
      description: 'Creative commercial animation for Shwabo, featuring engaging visuals and brand storytelling.',
      hasVideo: true,
      videoUrl: shwaboVideo,
      technologies: ['After Effects', 'Commercial Animation', 'Brand Animation']
    },
    {
      id: 9,
      title: 'Media Awareness Campaign',
      category: 'animation',
      image: mediaAwarenessVideo,
      description: 'Educational animation campaign about media misinformation and fake news awareness.',
      hasVideo: true,
      videoUrl: mediaAwarenessVideo,
      technologies: ['After Effects', 'Educational Animation', 'Motion Graphics']
    },
    {
      id: 10,
      title: 'Birra Peroni - Pa Panik Plako!',
      category: 'animation',
      image: peroniVideo,
      hasVideo: true,
      videoUrl: peroniVideo,
      description: 'A dynamic animation for Birra Peroni\'s campaign, featuring the tagline \'Pa Panik Plako!\' with energetic motion graphics and brand elements.',
      technologies: ['After Effects', 'Motion Graphics', 'Brand Animation']
    },
    {
      id: 11,
      title: 'German Embassy',
      category: 'animation',
      image: germanEmbassyVideo,
      hasVideo: true,
      videoUrl: germanEmbassyVideo,
      description: 'Logo animation for the German Embassy\'s language days event, showcasing elegant typography and cultural elements.',
      technologies: ['After Effects', 'Motion Graphics', 'Logo Design']
    },
    {
      id: 12,
      title: 'Political Campaign Prishtina',
      category: 'design',
      image: politicalThumb,
      description: 'Political campaign materials for Prishtina, including posters, social media content, and promotional materials.',
      hasGallery: true,
      galleryImages: [
        politicalThumb,
        political02,
        political03,
        politicalStickers
      ],
      technologies: ['Poster Design', 'Social Media', 'Promotional Materials']
    },
    {
      id: 13,
      title: 'Product Campaign',
      category: 'design',
      image: productThumb,
      description: 'Product campaign design featuring creative visuals and marketing materials.',
      hasGallery: true,
      galleryImages: [
        productThumb,
        product02,
        product03
      ],
      technologies: ['Product Design', 'Marketing', 'Brand Strategy']
    },
    {
      id: 14,
      title: 'Grand Hotel',
      category: 'design',
      image: grandHotelThumb,
      description: 'A comprehensive branding project for Grand Hotel, including logo design, visual identity, and marketing materials.',
      hasGallery: true,
      galleryImages: [
        grandHotelHome,
        grandHotel5,
        grandHotel6,
        grandHotel7,
        grandHotel8,
        grandHotel9,
        grandHotel10,
        grandHotelProjects,
        grandHotelStudio,
        grandHotelWhat
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