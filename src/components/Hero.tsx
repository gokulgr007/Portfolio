import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, Code } from 'lucide-react';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Simple background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, white 40%, white 60%, transparent 60%), 
                             linear-gradient(-45deg, transparent 40%, white 40%, white 60%, transparent 60%)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center min-h-screen">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Clean intro */}
          <motion.div 
            className="mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <motion.div 
              className="inline-flex items-center mb-6 sm:mb-8"
              variants={fadeInUp}
            >
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <div className="mx-4 sm:mx-8 flex items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Code className="w-4 h-4 sm:w-6 sm:h-6 text-white mr-2 sm:mr-3" />
                </motion.div>
                <span className="text-white/60 font-light tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm uppercase">Developer</span>
              </div>
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </motion.div>
            
            {/* Clean aligned name - Mobile Responsive */}
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white mb-6 sm:mb-8 tracking-wide leading-none"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            >
              GOKUL GR
            </motion.h1>
            
            <motion.div 
              className="relative mb-6 sm:mb-8"
              variants={fadeInUp}
            >
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 font-light tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Full-Stack Developer & Digital Architect
              </motion.p>
              <div className="w-24 sm:w-32 h-px bg-white/30 mx-auto mt-4 sm:mt-6"></div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mb-12 sm:mb-16"
            variants={fadeInUp}
          >
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              Crafting extraordinary digital experiences through innovative technology solutions. 
              Specializing in scalable architectures and cutting-edge development practices.
            </motion.p>
            
            {/* Mobile Responsive Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-4 sm:px-0"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.a 
                href="#contact" 
                className="group relative overflow-hidden"
                variants={slideInLeft}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative border border-white text-white px-8 sm:px-12 py-3 sm:py-4 font-light text-base sm:text-lg tracking-wide hover:text-black transition-colors duration-500">
                  Let's Collaborate
                </div>
              </motion.a>
              
              <motion.a 
                href="#projects" 
                className="group relative overflow-hidden"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-black border border-white"></div>
                <div className="relative bg-white text-black px-8 sm:px-12 py-3 sm:py-4 font-light text-base sm:text-lg tracking-wide group-hover:bg-transparent group-hover:text-white transition-all duration-500">
                  View Portfolio
                </div>
              </motion.a>
              
              <motion.a 
                href="#" 
                className="group relative overflow-hidden"
                variants={slideInLeft}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative border border-white text-white px-8 sm:px-12 py-3 sm:py-4 font-light text-base sm:text-lg tracking-wide hover:text-black transition-colors duration-500 flex items-center justify-center">
                  <Download size={16} className="sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Resume
                </div>
              </motion.a>
            </motion.div>
            
            {/* Mobile Responsive Social Links */}
            <motion.div 
              className="flex justify-center space-x-8 sm:space-x-12"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.a 
                href="#" 
                className="group text-white/60 hover:text-white transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Github size={24} className="sm:w-7 sm:h-7" />
              </motion.a>
              <motion.a 
                href="#" 
                className="group text-white/60 hover:text-white transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Linkedin size={24} className="sm:w-7 sm:h-7" />
              </motion.a>
              <motion.a 
                href="#" 
                className="group text-white/60 hover:text-white transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Mail size={24} className="sm:w-7 sm:h-7" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Mobile Responsive Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-white/40 text-xs sm:text-sm font-light tracking-wider mb-3 sm:mb-4 rotate-90 origin-center">SCROLL</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={20} className="sm:w-6 sm:h-6 text-white/60" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;