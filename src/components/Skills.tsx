import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    { name: 'React', level: 95, icon: '⚛️' },
    { name: 'TypeScript', level: 90, icon: '🔷' },
    { name: 'JavaScript', level: 95, icon: '🟨' },
    { name: 'Next.js', level: 88, icon: '▲' },
    { name: 'Tailwind CSS', level: 92, icon: '🎨' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'HTML/CSS', level: 98, icon: '🌐' },
    { name: 'Git', level: 85, icon: '📚' },
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
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                className="group relative"
              >
                <motion.div
                  className="bg-card border border-border rounded-xl p-6 text-center shadow-lg h-full relative overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Background gradient effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  <motion.div
                    className="text-4xl mb-4 relative z-10"
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                  >
                    {skill.icon}
                  </motion.div>

                  <h3 className="font-semibold text-lg mb-4 relative z-10">{skill.name}</h3>

                  {/* Skill level bar */}
                  <div className="relative z-10">
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1 + 0.5,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                    <motion.span
                      className="text-sm text-muted-foreground font-medium"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.1 + 1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  {/* Floating decoration */}
                  <motion.div
                    className="absolute top-2 right-2 w-3 h-3 bg-primary/30 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* 3D Floating Elements */}
          <div className="relative mt-16 h-32 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-8 h-8 border border-primary/20 rounded-md"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${Math.random() * 60}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [0, 180, 360],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}