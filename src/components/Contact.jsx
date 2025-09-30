import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { useState, useEffect } from 'react';
import '../styles/Contact.css';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [animateSocial, setAnimateSocial] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setAnimateSocial(true), 500);
    }
  }, [inView]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

 const socialLinks = [
  { name: "GitHub", icon: <FaGithub size={24} />, href: "https://github.com/TalalAbbasi09" },
  { name: "LinkedIn", icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/talal-abbasi-94431028b/" },
  { name: "Twitter", icon: <FaTwitter size={24} />, href: "https://x.com/talalabbasi700" },
  { name: "Email", icon: <SiGmail size={24} />, href: "mailto:talalabbasi700@gmail.com" },
];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="contact-title"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>

          <div className="contact-content">
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="contact-info"
            >
              <div className="contact-intro">
                <h3>Let's work together!</h3>
                <p>
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a project in mind or just want to chat about technology, 
                  I'd love to hear from you.
                </p>
              </div>

              <div className="contact-details">
                <motion.div
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="contact-icon">
                    <span>📍</span>
                  </div>
                  <div className="contact-item-content">
                    <h4>Location</h4>
                    <p>Islamabad,Pakistan</p>
                  </div>
                </motion.div>

                <motion.div
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="contact-icon">
                    <span>📧</span>
                  </div>
                  <div className="contact-item-content">
                    <h4>Email</h4>
                    <p>talalabbasi700@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="contact-icon">
                    <span>📱</span>
                  </div>
                  <div className="contact-item-content">
                    <h4>Phone</h4>
                    <p>+92 319 0817182</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h4>Follow me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-link ${animateSocial ? 'animate' : ''}`}
                      whileHover={{
                        scale: 1.1,
                        rotateY: 10,
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={animateSocial ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <span>{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="contact-form-container"
            >
              <motion.form
                onSubmit={handleSubmit}
                className="contact-form"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  variants={itemVariants}
                  className="form-group"
                >
                  <label htmlFor="name" className="form-label">Name</label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="form-group"
                >
                  <label htmlFor="email" className="form-label">Email</label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="form-group"
                >
                  <label htmlFor="message" className="form-label">Message</label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="form-textarea"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button"
                  whileHover={!isSubmitting ? {
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  variants={itemVariants}
                >
                  {isSubmitting ? (
                    <div className="loading-content">
                      <div className="loading-spinner" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </motion.form>

              {/* Floating decoration */}
              <motion.div 
                className="form-decoration"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}