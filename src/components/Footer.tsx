import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {"<Dev/>"}
          </motion.div>

          <p className="text-muted-foreground max-w-md mx-auto">
            Crafting beautiful web experiences with passion and precision. 
            Let's build something amazing together.
          </p>

          <div className="flex justify-center space-x-6">
            {[
              { name: 'GitHub', href: 'https://github.com' },
              { name: 'LinkedIn', href: 'https://linkedin.com' },
              { name: 'Twitter', href: 'https://twitter.com' },
              { name: 'Email', href: 'mailto:hello@example.com' },
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <motion.div
            className="pt-6 border-t border-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">
              © {currentYear} Frontend Developer Portfolio. Built with React & Tailwind CSS.
            </p>
          </motion.div>

          {/* Floating elements */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-8">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full"
                style={{
                  left: `${i * 20}px`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}