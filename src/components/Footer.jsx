import { motion } from 'motion/react';
import '../styles/Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="footer-logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {'<Dev/>'}
          </motion.div>

          <p className="footer-description">
            Crafting beautiful web experiences with passion and precision. 
            Let's build something amazing together.
          </p>

          <div className="footer-links">
            {[
              { name: 'GitHub', href: 'https://github.com/TalalAbbasi09' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/talal-abbasi-94431028b/' },
              { name: 'Twitter', href: 'https://x.com/talalabbasi700' },
              { name: 'Email', href: 'mailto:talalabbasi700@gmail.com' },
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <motion.div
            className="footer-divider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="footer-copyright">
              © {currentYear} Frontend Developer Portfolio. Built with React & CSS.
            </p>
          </motion.div>

          {/* Floating elements */}
          <div className="footer-floating-elements">
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={i} 
                className="floating-dot"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}