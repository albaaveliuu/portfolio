import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D } from '@react-three/drei';
import '../styles/About.scss';

const FloatingEmoji = ({ emoji, position }: { emoji: string; position: [number, number, number] }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <Text3D 
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.2}
        position={position}
      >
        {emoji}
        <meshNormalMaterial />
      </Text3D>
    </Float>
  );
};

const About = () => {
  return (
    <div className="about">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Me</h1>
        <div className="bio">
          <motion.div 
            className="bio-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p>Hey there! 👋 I'm a creative soul who loves bringing ideas to life through design and animation.</p>
            <p>With a passion for both digital and traditional art, I create:</p>
            <ul>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                🎨 Vibrant graphic designs that tell stories
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                🎬 Engaging animations that capture attention
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                💻 Interactive web experiences that delight users
              </motion.li>
            </ul>
          </motion.div>
          
          <div className="canvas-container">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <FloatingEmoji emoji="🎨" position={[-2, 1, 0]} />
              <FloatingEmoji emoji="🎬" position={[0, -1, 0]} />
              <FloatingEmoji emoji="💻" position={[2, 1, 0]} />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>

        <motion.div 
          className="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <h2>Skills & Tools</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Design</h3>
              <p>Adobe Creative Suite, Figma, Sketch</p>
            </div>
            <div className="skill-category">
              <h3>Animation</h3>
              <p>After Effects, Blender, Cinema 4D</p>
            </div>
            <div className="skill-category">
              <h3>Web</h3>
              <p>React, Three.js, GSAP</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About; 