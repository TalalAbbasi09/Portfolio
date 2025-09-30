import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { useEffect, useState } from 'react';
import '../styles/Projects.css';
import pre1 from "../images/pre1.png";
import SunriseDips from "../images/SunriseDips.png"

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setAnimateCards(true), 300);
    }
  }, [inView]);

  const projects = [
    {
      title: "Prescripto Hospital",
      description: "A modern Hospital Website built with React, Next.js, and Stripe integration. Features include taking appoinment, doctors information, and payment processing.",
      tech: ["React", "Next.js", "JavaScript", "CSS", "Stripe"],
      image:pre1,

      github: "https://github.com/TalalAbbasi09",
      live: "https://example.com",
    },
    {
      title: "Sunrise Dips",
      description: "A restaurant management application with real-time order updates, drag-and-drop table reservations, and team collaboration features for kitchen and serving staff..",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "CSS"],
      image:SunriseDips,
      github: "https://github.com/TalalAbbasi09",
      live: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design for all devices.",
      tech: ["React", "Chart.js", "OpenWeather API", "CSS Grid", "PWA"],
      image: "https://images.unsplash.com/photo-1731846584223-81977e156b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODIxMzE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com/TalalAbbasi09",
      live: "https://example.com",
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and automated reporting.",
      tech: ["React", "D3.js", "Firebase", "CSS", "REST API"],
      image: "https://images.unsplash.com/photo-1676276375742-9e3d10e39d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTgxNTYwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com/TalalAbbasi09",
      live: "https://example.com",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: -15,
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
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="projects-title"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                className={`project-card ${animateCards ? 'animate' : ''}`}
              >
                {/* Project Image */}
                <div className="project-image-container">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="project-overlay" />
                  
                  {/* Overlay Buttons */}
                  <div className="project-buttons">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="tech-badge"
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
                </div>

                {/* 3D Corner Decoration */}
                <motion.div 
                  className="corner-decoration"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="projects-cta"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="cta-button"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://github.com/TalalAbbasi09', '_blank')}
            >
              View All Projects on GitHub
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}