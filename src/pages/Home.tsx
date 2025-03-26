import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import '../styles/Home.scss';
import profileImage from '../images/albenita.png';
import aboutMeImage from '../images/aboutMe.jpeg';

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
          <motion.h1
            className="name"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Albenita Veliu
          </motion.h1>
          <motion.p
            className="title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
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
          About Me
        </motion.h2>
        <motion.div 
          className="about-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a creative professional who combines design, animation, and development 
                to create engaging digital experiences. With a focus on clean aesthetics and 
                intuitive functionality, I bring ideas to life through thoughtful design and 
                precise execution.
              </p>
              <p className="interests">
                When I'm not crafting digital experiences, you can find me playing guitar and singing. 
                Music is another form of creative expression that I deeply enjoy, allowing me to 
                explore different melodies and harmonies in my free time.
              </p>
              <div className="skills">
                <div className="skill-category">
                  <h3>Design</h3>
                  <p>UI/UX Design, Brand Identity, Visual Design</p>
                </div>
                <div className="skill-category">
                  <h3>Animation</h3>
                  <p>2D Animation, Motion Graphics, Character Design</p>
                </div>
                <div className="skill-category">
                  <h3>Development</h3>
                  <p>Web Development, Interactive Experiences, Responsive Design</p>
                </div>
              </div>
            </div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <img src={aboutMeImage} alt="About Albenita" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home; 