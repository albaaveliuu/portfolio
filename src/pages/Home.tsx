import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import '../styles/Home.scss';
import profileImage from '../images/albenita.png';

const FloatingText = () => {
  return (
    <Float
      speed={4} 
      rotationIntensity={0.5} 
      floatIntensity={2}
    >
      <Text3D 
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        Albenita Veliu
        <meshStandardMaterial color="#FFD700" />
      </Text3D>
    </Float>
  );
};

const Home: React.FC = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="canvas-container">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} color="#FFD700" />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <FloatingText />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        <motion.div
          className="hero-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="profile-image"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img src={profileImage} alt="Albenita Veliu" />
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Graphic Web Designer • 2D Animator • Web Developer
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Creative Soul & Digital Artist
        </motion.h2>
        <motion.div 
          className="about-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <p>
            Welcome to my creative universe! I'm a passionate digital artist who transforms ideas into 
            stunning visual experiences. With a unique blend of artistic vision and technical expertise, 
            I create digital masterpieces that leave lasting impressions.
          </p>
          <div className="creative-highlights">
            <motion.div 
              className="highlight"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="emoji">🎨</span>
              <p>Bridging Art & Technology</p>
            </motion.div>
            <motion.div 
              className="highlight"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="emoji">✨</span>
              <p>Creating Digital Magic</p>
            </motion.div>
            <motion.div 
              className="highlight"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="emoji">🚀</span>
              <p>Innovative Solutions</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home; 