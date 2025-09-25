import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20 pt-20">
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border border-primary/20 rounded-lg"
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
        className="text-center z-10 px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Picture - Small and Floating */}
        <motion.div 
          variants={itemVariants}
          className="mb-6 relative"
        >
          <motion.div
            className="relative group mx-auto w-fit"
            whileHover={{ 
              scale: 1.1,
              rotateY: 10,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Animated Ring */}
            <motion.div
              className="absolute -inset-2 rounded-full opacity-60"
              style={{
                background: "linear-gradient(45deg, #60a5fa, #a78bfa, #60a5fa)",
                backgroundSize: "300% 300%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                rotate: [0, 360],
              }}
              transition={{
                backgroundPosition: { duration: 4, repeat: Infinity },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              }}
            />
            
            {/* Glow Effect */}
            <motion.div
              className="absolute -inset-4 rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            
            {/* Profile Image - Much Smaller */}
            <motion.img
              src="https://images.unsplash.com/photo-1731951039706-0e793240bb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMG1hbGV8ZW58MXx8fHwxNzU4MjU3MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Alex Johnson - Frontend Developer"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover relative z-10 shadow-xl border-2 border-primary/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          {/* Name */}
          <motion.h3
            className="text-lg md:text-xl font-medium text-foreground mb-3 opacity-90"
            animate={{
              textShadow: [
                "0 0 8px rgba(96, 165, 250, 0.3)",
                "0 0 15px rgba(96, 165, 250, 0.5)",
                "0 0 8px rgba(96, 165, 250, 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Alex Johnson
          </motion.h3>
          
          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2"
            style={{
              background: "linear-gradient(45deg, #ffffff, #64748b, #ffffff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundSize: "200% 200%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Frontend
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
            animate={{
              rotateX: [0, 5, -5, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Developer
          </motion.h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Crafting beautiful, interactive web experiences with modern technologies and creative solutions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-medium shadow-lg"
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
          
          <motion.button
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg text-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
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

        <motion.div
          className="mt-16"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto relative">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}