import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import '../styles/Hero.css';
import me from "../images/me.jpg";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="home" className="hero">
      {/* Floating 3D Elements */}
      <div className="floating-elements">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: mousePosition.x * 0.01 * (i + 1),
              y: mousePosition.y * 0.01 * (i + 1),
              rotateX: mousePosition.x * 0.02,
              rotateY: mousePosition.y * 0.02,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            whileHover={{ scale: 1.2, rotateZ: 180 }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Picture */}
        <motion.div 
          variants={itemVariants}
          className="profile-section"
        >
          <motion.div
            className="profile-image-container"
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              boxShadow: "0 30px 60px rgba(96, 165, 250, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.img
               src={me}
              alt="Alex Johnson - Frontend Developer"
              className="profile-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <div className="profile-ring" />
            <div className="profile-glow" />
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.div variants={itemVariants} className="name-section">
          <motion.h3 className="developer-name">
            Alex Johnson
          </motion.h3>
          <motion.h1 className="hero-title">
            Frontend
          </motion.h1>
          <motion.h2 className="hero-subtitle">
            Developer
          </motion.h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="hero-description"
        >
          Crafting beautiful, interactive web experiences with modern technologies and creative solutions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="hero-buttons"
        >
          <motion.button
            className="hero-btn-primary"
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
          
          <motion.button
            className="hero-btn-secondary"
            whileHover={{
              scale: 1.05,
              rotateY: -5,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div className="scroll-indicator">
          <div className="scroll-mouse">
            <motion.div className="scroll-wheel" />
          </div>
        </motion.div>
      </motion.div>

      {/* Gradient overlay */}
      <div className="gradient-overlay" />
    </section>
  );
}