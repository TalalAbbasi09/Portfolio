import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { useEffect, useState } from 'react';
import '../styles/Skills.css';

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setAnimateCards(true), 500);
    }
  }, [inView]);

  const skills = [
    { name: 'React', level: 95, icon: '⚛️' },
    { name: 'JavaScript', level: 90, icon: '🟨' },
    { name: 'Next.js', level: 88, icon: '▲' },
    { name: 'CSS', level: 92, icon: '🎨' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'HTML', level: 98, icon: '🌐' },
    { name: 'Git', level: 85, icon: '📚' },
    { name: 'Responsive Design', level: 94, icon: '📱' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="skills-title"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            Skills & Technologies
          </motion.h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                className={`skill-card ${animateCards ? 'animate' : ''}`}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-progress">
                  <div className="progress-bar-container">
                    <motion.div
                      className="progress-bar"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1 + 0.5,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="floating-dot" />
              </motion.div>
            ))}
          </div>

          {/* 3D Floating Elements */}
          <div className="floating-elements-container">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="floating-element"
                style={{ left: `${20 + i * 15}%`, top: `${Math.random() * 60}%` }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}