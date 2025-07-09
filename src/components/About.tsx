import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Award, Coffee, Rocket, Heart, Target, Star, Crown, Diamond, Sparkles, Eye } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: "Clean Architecture",
      description: "Building scalable, maintainable systems with modern design patterns and industry best practices.",
    },
    {
      icon: <Palette size={32} />,
      title: "Creative Design",
      description: "Crafting beautiful, intuitive interfaces that users love and remember for exceptional experiences.",
    },
    {
      icon: <Zap size={32} />,
      title: "Performance First",
      description: "Optimizing for speed, accessibility, and seamless user experiences across all platforms.",
    },
    {
      icon: <Users size={32} />,
      title: "Team Leadership",
      description: "Mentoring developers and leading cross-functional teams to deliver outstanding results.",
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: <Rocket size={24} /> },
    { number: "200+", label: "Happy Clients", icon: <Heart size={24} /> },
    { number: "8+", label: "Years Experience", icon: <Award size={24} /> },
    { number: "∞", label: "Lines of Code", icon: <Coffee size={24} /> }
  ];

  // Animation variants
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: -100 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: 100 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { 
      opacity: 0, 
      scale: 0.5 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
        >
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              <div className="w-2 h-2 bg-black/20 rotate-45"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-black/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-black/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <motion.div 
          className="text-center mb-16 sm:mb-20 lg:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center mb-6 sm:mb-8"
            variants={fadeInUp}
          >
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
            <div className="mx-4 sm:mx-8 flex items-center">
              <motion.div 
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Target className="w-4 h-4 sm:w-6 sm:h-6 text-black mr-2 sm:mr-3" />
              </motion.div>
              <span className="text-black/60 font-light tracking-[0.2em] text-xs sm:text-sm uppercase">About</span>
            </div>
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin text-black mb-6 sm:mb-8 tracking-tight relative"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              The
              <motion.span 
                className="block font-black mt-2 sm:mt-4 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                STORY
                <motion.div 
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Crown className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-black/30" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Diamond className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black/30" />
                </motion.div>
              </motion.span>
            </motion.h2>
          </motion.div>
          
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-black/70 max-w-2xl lg:max-w-4xl mx-auto font-light leading-relaxed px-4 sm:px-0"
            variants={fadeInUp}
          >
            Passionate full-stack developer with 8+ years of experience creating digital masterpieces that transform businesses and delight users worldwide.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center mb-20 sm:mb-24 lg:mb-32">
          {/* Image section */}
          <motion.div 
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <motion.div 
              className="absolute inset-0 bg-black/5 rounded-xl sm:rounded-2xl"
              animate={{ rotate: [1, 3, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10 rounded-xl sm:rounded-2xl"
              animate={{ rotate: [-1, -2, -1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-black/10 group-hover:border-black/30 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="/photo.png" 
                alt="Gokul GR - Professional Developer" 
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/20 transition-all duration-700"></div>
            </motion.div>
          </motion.div>
          
          {/* Content section */}
          <motion.div 
            className="space-y-8 sm:space-y-10 lg:space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-6 sm:mb-8 leading-tight flex items-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Eye className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-black/60" />
                </motion.div>
                The Journey
              </h3>
              <div className="space-y-6 sm:space-y-8">
                <motion.p 
                  className="text-base sm:text-lg text-black/70 leading-relaxed font-light"
                  variants={fadeInUp}
                >
                  My coding journey began with curiosity and evolved into a passion for creating 
                  digital experiences that matter. From crafting pixel-perfect UIs to architecting 
                  robust backend systems, I thrive on solving complex challenges with elegant solutions.
                </motion.p>
                
                <motion.p 
                  className="text-base sm:text-lg text-black/70 leading-relaxed font-light"
                  variants={fadeInUp}
                >
                  When I'm not immersed in code, you'll find me exploring emerging technologies, 
                  contributing to open-source projects, or sharing knowledge with the global developer community.
                </motion.p>
              </div>
            </motion.div>
            
            {/* Stats grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="group relative overflow-hidden"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  <div className="relative text-center p-4 sm:p-6 border border-black/10 group-hover:border-black group-hover:text-white transition-all duration-300">
                    <motion.div 
                      className="text-black group-hover:text-white mb-3 flex justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-3xl font-light text-black group-hover:text-white mb-2 transition-colors duration-300">{stat.number}</div>
                    <div className="text-sm text-black/60 group-hover:text-white/80 font-light tracking-wide transition-colors duration-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Tags */}
            <motion.div 
              className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4"
              variants={containerVariants}
            >
              {["React Specialist", "Node.js Expert", "Cloud Architect", "UI/UX Designer", "Problem Solver"].map((tag, index) => (
                <motion.span 
                  key={index} 
                  className="group relative overflow-hidden border border-black/20 text-black/80 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-light hover:border-black hover:text-white transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <span className="relative">{tag}</span>
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Features grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group text-center relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative mb-6 sm:mb-8">
                <motion.div 
                  className="absolute inset-0 bg-black/5 rounded-2xl"
                  animate={{ rotate: [3, 6, 3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5 rounded-2xl"
                  animate={{ rotate: [-2, -4, -2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative bg-white border border-black/10 p-6 sm:p-8 rounded-xl sm:rounded-2xl group-hover:border-black/30 group-hover:shadow-2xl transition-all duration-300">
                  <motion.div 
                    className="text-black w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center relative"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                    <motion.div 
                      className="absolute inset-0 border border-black/10 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-light text-black mb-3 sm:mb-4 group-hover:text-black/80 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-black/70 font-light leading-relaxed group-hover:text-black/60 transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;