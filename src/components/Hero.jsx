import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="hero">
      
      {/* Decorative Fine Art/Geometric Sphere */}
      <div className="hero-geometric-art">
        <svg viewBox="0 0 100 100" className="wireframe-sphere">
          <circle cx="50" cy="50" r="40" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.75" fill="none" />
          <ellipse cx="50" cy="50" rx="40" ry="15" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="0.75" fill="none" transform="rotate(30, 50, 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="15" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="0.75" fill="none" transform="rotate(60, 50, 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="15" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="0.75" fill="none" transform="rotate(120, 50, 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="15" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="0.75" fill="none" transform="rotate(150, 50, 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="25" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="0.75" fill="none" transform="rotate(-45, 50, 50)" />
        </svg>
      </div>

      {/* Hero Contents */}
      <div className="hero-content">
        <motion.span 
          className="hero-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          01 // INTRODUCTION
        </motion.span>

        <motion.h1 
          className="hero-title hero-title-dark"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Full-Stack<br />Developer.
        </motion.h1>

        <motion.p 
          className="hero-subtitle hero-subtitle-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, I’m Simone. I build digital experiences with clarity and purpose.
        </motion.p>

        <motion.div 
          className="hero-coordinates"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          44.63° N, 75.31° W
        </motion.div>
      </div>

      {/* Decorative Scroll Down Indicator */}
      <motion.div 
        className="hero-scroll"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" } 
        }}
      >
        SCROLL DOWN ↓
      </motion.div>
    </section>
  );
}

export default Hero;