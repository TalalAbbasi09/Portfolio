import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

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
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            variants={textVariants}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={textVariants}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm Alex Johnson, a passionate frontend developer with a love for creating beautiful, functional, and user-friendly web applications. With expertise in modern JavaScript frameworks and a keen eye for design, I transform ideas into engaging digital experiences.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in web development started with curiosity and has evolved into a career dedicated to crafting pixel-perfect interfaces and seamless user interactions. I constantly stay updated with the latest technologies and best practices in the ever-evolving world of frontend development.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Git'].map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "var(--primary)",
                      color: "var(--primary-foreground)",
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
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-card border border-border rounded-lg p-6 text-center shadow-lg"
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <motion.div
                      className="text-3xl font-bold text-primary mb-2"
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
                    <div className="text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Floating decoration */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 border-2 border-primary/30 rounded-full"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-lg"
                animate={{
                  rotateZ: [0, 45, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}