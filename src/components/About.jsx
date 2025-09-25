import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import '../styles/About.css';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { rotateY: -90, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }
    }
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      }
    }
  };

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Code Commits", value: "1000+" },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="about-title"
            variants={textVariants}
          >
            About Me
          </motion.h2>

          <div className="about-content">
            <motion.div
              variants={textVariants}
              className="about-text"
            >
              <p className="about-paragraph">
                Hi, I'm Talal Zeb Abbasi, a passionate frontend developer with a love for creating beautiful, functional, and user-friendly web applications. With expertise in modern JavaScript frameworks and a keen eye for design, I transform ideas into engaging digital experiences.
              </p>
              
              <p className="about-paragraph">
                My journey in web development started with curiosity and has evolved into a career dedicated to crafting pixel-perfect interfaces and seamless user interactions. I constantly stay updated with the latest technologies and best practices in the ever-evolving world of frontend development.
              </p>

              <div className="tech-tags">
                {['React', 'JavaScript', 'Next.js', 'CSS', 'Node.js', 'Git'].map((tech) => (
                  <motion.span
                    key={tech}
                    className="tech-tag"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#60a5fa",
                      color: "white",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="stats-grid"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <motion.div
                    className="stat-value"
                    animate={inView ? {
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.5,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}

              {/* Floating decoration */}
              <motion.div 
                className="floating-decoration-circle"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="floating-decoration-square"
                animate={{ rotateZ: [0, 45, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}