import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Code, User, Mail } from 'lucide-react';

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <footer className="bg-black text-white py-24 relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 40%, white 40%, white 60%, transparent 60%)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16"
          variants={containerVariants}
        >
          {/* Brand section */}
          <motion.div 
            className="sm:col-span-2"
            variants={fadeInUp}
          >
            <div className="flex items-center mb-6 sm:mb-8">
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border border-white/20 flex items-center justify-center mr-4 sm:mr-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Code size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light">Gokul GR</h3>
                <p className="text-white/60 font-light tracking-wide text-sm sm:text-base">Full-Stack Developer</p>
              </div>
            </div>
            
            <p className="text-white/70 mb-8 sm:mb-10 lg:mb-12 max-w-md leading-relaxed font-light text-sm sm:text-base">
              Passionate about creating exceptional digital experiences that make a difference. 
              Available for exciting projects and collaborations worldwide.
            </p>
            
            <div className="flex space-x-6 sm:space-x-8">
              <motion.a 
                href="#" 
                className="group text-white/60 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Github size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
              <motion.a 
                href="#" 
                className="group text-white/60 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
              <motion.a 
                href="#" 
                className="group text-white/60 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Twitter size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Quick links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg sm:text-xl font-light mb-6 sm:mb-8 flex items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <User size={16} className="sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              </motion.div>
              Navigation
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><motion.a href="#about" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base" whileHover={{ x: 5 }}>About Me</motion.a></li>
              <li><motion.a href="#skills" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base" whileHover={{ x: 5 }}>Skills</motion.a></li>
              <li><motion.a href="#projects" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base" whileHover={{ x: 5 }}>Projects</motion.a></li>
              <li><motion.a href="#experience" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base" whileHover={{ x: 5 }}>Experience</motion.a></li>
              <li><motion.a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base" whileHover={{ x: 5 }}>Contact</motion.a></li>
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg sm:text-xl font-light mb-6 sm:mb-8 flex items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Mail size={16} className="sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              </motion.div>
              Services
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><motion.a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base" whileHover={{ x: 5 }}>Web Development</motion.a></li>
              <li><motion.a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base" whileHover={{ x: 5 }}>Mobile Apps</motion.a></li>
              <li><motion.a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base" whileHover={{ x: 5 }}>Cloud Solutions</motion.a></li>
              <li><motion.a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base" whileHover={{ x: 5 }}>UI/UX Design</motion.a></li>
              <li><motion.a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base" whileHover={{ x: 5 }}>Consulting</motion.a></li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Footer bottom */}
        <motion.div 
          className="border-t border-white/10 mt-12 sm:mt-14 lg:mt-16 pt-8 sm:pt-10 lg:pt-12"
          variants={fadeInUp}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-white/60 flex items-center font-light text-sm sm:text-base">
              Made with 
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mx-2 sm:mx-3"
              >
                <Heart size={14} className="sm:w-4 sm:h-4 text-white" />
              </motion.div>
              by Gokul GR
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8">
              <span className="text-white/40 text-xs sm:text-sm font-light">© 2024 Gokul GR. All rights reserved.</span>
              <div className="flex items-center text-white/60">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="mr-1 sm:mr-2"
                >
                  <Code size={14} className="sm:w-4 sm:h-4" />
                </motion.div>
                <span className="text-xs sm:text-sm font-light tracking-wide">Always Coding</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;