
"use client";

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroGravityBalls from '../components/sections/HomePage/Herosection';
import ProjectsSection from '../components/sections/HomePage/ProjectSection';
import GoalsSection from '../components/sections/HomePage/GoalsSection';
import SkillsSection from '../components/sections/HomePage/SkillSection';
import ContactSection from '../components/sections/HomePage/ContactSection';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  // Page load animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animated page transitions
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.35
      }
    }
  };

  // Section entrance animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  // Interactive particle line effect for section dividers
  const SectionDivider = () => (
    <div className="w-full h-24 relative overflow-hidden my-12">
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div 
          className="w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
          animate={{ 
            width: ["0%", "80%", "0%"],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-2 h-2 rounded-full bg-indigo-500"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, Math.random() * 20 - 10],
              x: [0, Math.random() * 20 - 10],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );

  // Parallax scrolling effect for background
  const ParallaxBackground = () => {
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{ y: y1 }}
        >
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1 + Math.random() * 0.05,
                filter: 'blur(30px)'
              }}
            />
          ))}
        </motion.div>
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{ y: y2 }}
        >
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.05 + Math.random() * 0.05,
                filter: 'blur(50px)'
              }}
            />
          ))}
        </motion.div>
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{ y: y3 }}
        >
          <div 
            className="absolute w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(100, 100, 255, 0.1), transparent 40%), radial-gradient(circle at 70% 60%, rgba(100, 255, 100, 0.05), transparent 30%)',
              backgroundSize: '100% 100%',
              filter: 'blur(40px)'
            }}
          />
        </motion.div>
      </div>
    );
  };

  return (
    <motion.main 
      className="w-full overflow-hidden relative"
      variants={pageVariants}
      initial="initial"
      animate={isLoaded ? "animate" : "initial"}
    >
      <ParallaxBackground />
      
      {/* Hero Section with enhanced animations */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10"
      >
        <HeroGravityBalls />
      </motion.div>
      
      <SectionDivider />
      
      {/* Goals Section with entrance animation */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        <GoalsSection />
      </motion.div>
      
      <SectionDivider />
      
      {/* Skills Section with entrance animation and hover effects */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        <SkillsSection />
      </motion.div>
      
      <SectionDivider />
      
      {/* Contact Section with entrance animation */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        <ContactSection id="contact" />
      </motion.div>
      
      {/* Floating interactive elements */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg flex items-center justify-center text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.main>
  );
}