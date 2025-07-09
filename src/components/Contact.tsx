import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, User, Clock, Globe, Award, Zap, Star, Rocket, Heart, Eye, Target, Diamond, Crown, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [activeCard, setActiveCard] = useState(0);

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
    hidden: { opacity: 0, y: 60, scale: 0.8 },
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

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
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
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail size={40} />,
      title: "Email",
      value: "gokul.gr@example.com",
      description: "Lightning-fast responses",
      color: "from-black to-gray-800",
      accent: "border-black",
      stats: "< 2 hours response"
    },
    {
      icon: <Phone size={40} />,
      title: "Phone",
      value: "+91 98765 43210",
      description: "Direct line available",
      color: "from-gray-800 to-black",
      accent: "border-gray-600",
      stats: "Available 24/7"
    },
    {
      icon: <MessageCircle size={40} />,
      title: "WhatsApp",
      value: "+91 98765 43210",
      description: "Instant messaging",
      color: "from-black to-gray-700",
      accent: "border-black",
      stats: "Real-time chat"
    },
    {
      icon: <Globe size={40} />,
      title: "Video Call",
      value: "Schedule Meeting",
      description: "Face-to-face discussion",
      color: "from-gray-700 to-black",
      accent: "border-gray-500",
      stats: "HD quality calls"
    }
  ];

  const socialPlatforms = [
    { icon: <Github size={32} />, name: "GitHub", handle: "@gokulGR", followers: "50K+", color: "hover:bg-black hover:text-white" },
    { icon: <Linkedin size={32} />, name: "LinkedIn", handle: "gokul-gr", followers: "25K+", color: "hover:bg-blue-600 hover:text-white" },
    { icon: <Twitter size={32} />, name: "Twitter", handle: "@gokulGR_dev", followers: "30K+", color: "hover:bg-black hover:text-white" }
  ];

  const achievements = [
    { icon: <Crown size={24} />, label: "Top 1% Developer", value: "Global Ranking" },
    { icon: <Star size={24} />, label: "5-Star Rating", value: "Client Reviews" },
    { icon: <Rocket size={24} />, label: "500+ Projects", value: "Successfully Delivered" },
    { icon: <Diamond size={24} />, label: "$100M+ Revenue", value: "Generated for Clients" }
  ];

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">

      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, black 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, black 1px, transparent 1px),
              linear-gradient(45deg, transparent 48%, black 49%, black 51%, transparent 52%)
            `,
            backgroundSize: '100px 100px, 50px 50px, 200px 200px',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Floating geometric shapes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-2 h-2 bg-black/10 rotate-45 transform"></div>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SPECTACULAR HEADER */}
        <motion.div 
          className="text-center mb-20 sm:mb-24 lg:mb-32 xl:mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center mb-8 sm:mb-12 lg:mb-16"
            variants={fadeInUp}
          >
            <div className="w-20 sm:w-32 lg:w-40 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
            <div className="mx-6 sm:mx-12 lg:mx-16 flex items-center">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-black mr-3 sm:mr-4 lg:mr-6" />
                </motion.div>
                <div className="absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border-2 border-black/20 rounded-full animate-ping"></div>
              </div>
              <span className="text-black/60 font-light tracking-[0.2em] sm:tracking-[0.3em] lg:tracking-[0.4em] text-sm sm:text-base lg:text-lg uppercase">Contact</span>
            </div>
            <div className="w-20 sm:w-32 lg:w-40 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
          </motion.div>
          
          <div className="relative">
            <motion.h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-thin text-black mb-8 sm:mb-12 lg:mb-16 tracking-tight leading-none relative"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              LET'S
              <motion.span 
                className="block font-black mt-4 sm:mt-6 lg:mt-8 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                BUILD
                <motion.div 
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-2 sm:border-3 lg:border-4 border-black"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-black"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.span>
            </motion.h2>
            
            {/* Floating elements around title */}
            <motion.div 
              className="absolute top-0 left-1/4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border border-black/30 sm:border-2 rotate-45"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-0 right-1/4 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-black/20"
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          <div className="max-w-2xl sm:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-0">
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-black/70 font-light leading-relaxed mb-8 sm:mb-10 lg:mb-12"
              variants={fadeInUp}
            >
              Ready to create something <span className="font-bold text-black">EXTRAORDINARY</span>? 
              Let's transform your vision into digital <span className="font-bold text-black">REALITY</span>
            </motion.p>
            <motion.div 
              className="flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8"
              variants={fadeInUp}
            >
              <div className="w-16 sm:w-24 lg:w-32 h-px bg-black/30"></div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-black" />
              </motion.div>
              <div className="w-16 sm:w-24 lg:w-32 h-px bg-black/30"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* ACHIEVEMENTS BANNER */}
        <motion.div 
          className="mb-16 sm:mb-20 lg:mb-24 xl:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            variants={containerVariants}
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <div className="relative border border-black sm:border-2 p-4 sm:p-6 lg:p-8 text-center group-hover:text-white transition-colors duration-700">
                  <motion.div 
                    className="text-black group-hover:text-white mb-2 sm:mb-3 lg:mb-4 flex justify-center"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {achievement.icon}
                  </motion.div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-light text-black group-hover:text-white mb-1 sm:mb-2">{achievement.label}</div>
                  <div className="text-xs sm:text-sm text-black/60 group-hover:text-white/80 font-light tracking-wide">{achievement.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 xl:gap-32">
          {/* CONTACT METHODS - Left */}
          <motion.div 
            className="space-y-8 sm:space-y-12 lg:space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-thin text-black mb-8 sm:mb-12 lg:mb-16 xl:mb-20 flex items-center leading-tight">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Target size={32} className="sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 mr-4 sm:mr-6 lg:mr-8" />
                </motion.div>
                Connect
              </h3>
              
              <motion.div 
                className="space-y-6 sm:space-y-8 lg:space-y-12"
                variants={containerVariants}
              >
                {contactMethods.map((method, index) => (
                  <motion.div 
                    key={index} 
                    className="group relative overflow-hidden"
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-black/5"
                      animate={{ skewY: [-2, 0, -2] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="relative p-6 sm:p-8 lg:p-10 border-l-2 sm:border-l-3 lg:border-l-4 border-black/30 group-hover:border-black transition-all duration-500">
                      <div className="flex items-start">
                        <motion.div 
                          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border border-black/20 sm:border-2 flex items-center justify-center mr-4 sm:mr-6 lg:mr-8 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-500"
                          whileHover={{ rotate: 12, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {method.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-medium text-black text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 tracking-wide group-hover:text-black/80 transition-colors">{method.title}</h4>
                          <p className="text-black/80 font-light text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">{method.value}</p>
                          <p className="text-black/50 font-light text-xs sm:text-sm tracking-wide mb-1 sm:mb-2">{method.description}</p>
                          <div className="text-black/70 font-medium text-xs sm:text-sm">{method.stats}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* SOCIAL PLATFORMS */}
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-black/3"
                animate={{ rotate: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative bg-white border border-black sm:border-2 p-6 sm:p-8 lg:p-10">
                <h4 className="font-medium text-black text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 lg:mb-10 tracking-wide flex items-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Award size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 mr-3 sm:mr-4" />
                  </motion.div>
                  Social Presence
                </h4>
                <motion.div 
                  className="space-y-4 sm:space-y-6 lg:space-y-8"
                  variants={containerVariants}
                >
                  {socialPlatforms.map((social, index) => (
                    <motion.a 
                      key={index} 
                      href="#" 
                      className={`group flex items-center p-4 sm:p-5 lg:p-6 border border-black/15 sm:border-2 transition-all duration-500 ${social.color}`}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02, x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border border-black/20 sm:border-2 flex items-center justify-center mr-4 sm:mr-5 lg:mr-6 group-hover:border-white transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {social.icon}
                      </motion.div>
                      <div className="flex-1">
                        <div className="font-medium text-black group-hover:text-white text-base sm:text-lg lg:text-xl transition-colors">{social.name}</div>
                        <div className="text-black/60 group-hover:text-white/80 font-light text-sm sm:text-base">{social.handle}</div>
                        <div className="text-black/50 group-hover:text-white/70 font-light text-xs sm:text-sm">{social.followers} followers</div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.25 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Eye size={20} className="sm:w-6 sm:h-6 text-black/40 group-hover:text-white/60 transition-all duration-300" />
                      </motion.div>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* CONTACT FORM - Center & Right */}
          <motion.div 
            className="lg:col-span-2 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
            <motion.div 
              className="absolute inset-0 bg-black/3"
              animate={{ rotate: [-0.5, -1, -0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative bg-white border-2 border-black sm:border-3 lg:border-4">
              {/* FORM HEADER */}
              <div className="border-b-2 border-black/20 sm:border-b-3 lg:border-b-4 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-2 border-black/10 sm:border-3 lg:border-4 transform rotate-45 translate-x-8 sm:translate-x-12 lg:translate-x-16 -translate-y-8 sm:-translate-y-12 lg:-translate-y-16"
                  animate={{ rotate: [45, 90, 45] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-thin text-black mb-4 sm:mb-6 flex items-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Rocket size={28} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 mr-4 sm:mr-6" />
                  </motion.div>
                  Start Your Project
                </h3>
                <p className="text-black/60 font-light text-base sm:text-lg lg:text-xl leading-relaxed">
                  Tell me about your vision and let's create something that will 
                  <span className="font-bold text-black"> blow minds</span> and 
                  <span className="font-bold text-black"> break boundaries</span>
                </p>
              </div>
              
              {/* FORM CONTENT */}
              <div className="p-6 sm:p-10 lg:p-16">
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-8 sm:space-y-12 lg:space-y-16"
                  variants={containerVariants}
                >
                  <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                    <motion.div 
                      className="group relative"
                      variants={fadeInUp}
                    >
                      <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-black/80 mb-4 sm:mb-6 lg:mb-8 tracking-[0.2em] sm:tracking-[0.3em] uppercase flex items-center">
                        <User size={14} className="sm:w-4 sm:h-4 mr-2 sm:mr-3" />
                        Your Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-0 py-4 sm:py-6 lg:py-8 bg-transparent border-0 border-b-2 border-black/30 sm:border-b-3 lg:border-b-4 text-black text-base sm:text-lg lg:text-xl placeholder-black/40 focus:border-black focus:outline-none transition-all duration-700 font-light group-hover:border-black/60"
                          placeholder="Enter your full name"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-700 group-focus-within:w-full"></div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="group relative"
                      variants={fadeInUp}
                    >
                      <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-black/80 mb-4 sm:mb-6 lg:mb-8 tracking-[0.2em] sm:tracking-[0.3em] uppercase flex items-center">
                        <Mail size={14} className="sm:w-4 sm:h-4 mr-2 sm:mr-3" />
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-0 py-4 sm:py-6 lg:py-8 bg-transparent border-0 border-b-2 border-black/30 sm:border-b-3 lg:border-b-4 text-black text-base sm:text-lg lg:text-xl placeholder-black/40 focus:border-black focus:outline-none transition-all duration-700 font-light group-hover:border-black/60"
                          placeholder="your@email.com"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-700 group-focus-within:w-full"></div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="group relative"
                    variants={fadeInUp}
                  >
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-bold text-black/80 mb-4 sm:mb-6 lg:mb-8 tracking-[0.2em] sm:tracking-[0.3em] uppercase flex items-center">
                      <Zap size={14} className="sm:w-4 sm:h-4 mr-2 sm:mr-3" />
                      Project Type *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-4 sm:py-6 lg:py-8 bg-transparent border-0 border-b-2 border-black/30 sm:border-b-3 lg:border-b-4 text-black text-base sm:text-lg lg:text-xl placeholder-black/40 focus:border-black focus:outline-none transition-all duration-700 font-light group-hover:border-black/60"
                        placeholder="Web App, Mobile App, E-commerce, AI/ML, etc."
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-700 group-focus-within:w-full"></div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="group relative"
                    variants={fadeInUp}
                  >
                    <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-black/80 mb-4 sm:mb-6 lg:mb-8 tracking-[0.2em] sm:tracking-[0.3em] uppercase flex items-center">
                      <MessageCircle size={14} className="sm:w-4 sm:h-4 mr-2 sm:mr-3" />
                      Project Vision *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                        className="w-full px-0 py-4 sm:py-6 lg:py-8 bg-transparent border-0 border-b-2 border-black/30 sm:border-b-3 lg:border-b-4 text-black text-base sm:text-lg lg:text-xl placeholder-black/40 focus:border-black focus:outline-none transition-all duration-700 resize-none font-light group-hover:border-black/60"
                        placeholder="Describe your vision, goals, timeline, budget, and what makes this project special..."
                      ></textarea>
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-700 group-focus-within:w-full"></div>
                    </div>
                  </motion.div>
                  
                  {/* SPECTACULAR SUBMIT BUTTON */}
                  <motion.div 
                    className="pt-6 sm:pt-8 lg:pt-12"
                    variants={fadeInUp}
                  >
                    <motion.button
                      type="submit"
                      className="group relative overflow-hidden w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                      <div className="absolute inset-0 border-2 border-black sm:border-3 lg:border-4"></div>
                      <div className="relative border-2 border-black sm:border-3 lg:border-4 text-black py-6 sm:py-8 lg:py-12 font-light text-lg sm:text-xl lg:text-2xl tracking-[0.1em] sm:tracking-[0.2em] hover:text-white transition-colors duration-1000 flex items-center justify-center uppercase">
                        <motion.div
                          whileHover={{ y: [0, -10, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        >
                          <Rocket size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 mr-3 sm:mr-4 lg:mr-6" />
                        </motion.div>
                        <span className="mr-3 sm:mr-4 lg:mr-6">Launch Project</span>
                        <motion.div
                          whileHover={{ x: 16, rotate: 45 }}
                          transition={{ duration: 0.7 }}
                        >
                          <Send size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                        </motion.div>
                      </div>
                    </motion.button>
                  </motion.div>
                </motion.form>
              </div>
            </div>
            
            {/* RESPONSE GUARANTEE */}
            <motion.div 
              className="mt-8 sm:mt-10 lg:mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-black text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Clock size={16} className="sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                </motion.div>
                <span className="font-light text-sm sm:text-base lg:text-lg tracking-wide">⚡ GUARANTEED 24-HOUR RESPONSE ⚡</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* SPECTACULAR BOTTOM CTA */}
        <motion.div 
          className="mt-20 sm:mt-24 lg:mt-32 xl:mt-40 text-center relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <motion.div 
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 border border-black/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="relative z-10">
            <motion.div 
              className="inline-flex items-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 sm:w-24 lg:w-32 h-px bg-black/30 group-hover:bg-black transition-all duration-1000"></div>
              <div className="mx-6 sm:mx-12 lg:mx-16 flex items-center text-black hover:text-black/80 transition-colors duration-500">
                <motion.div
                  whileHover={{ y: [0, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <Crown size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 mr-4 sm:mr-6" />
                </motion.div>
                <span className="font-light tracking-[0.2em] sm:tracking-[0.3em] text-lg sm:text-xl lg:text-2xl uppercase">Ready to Create Magic?</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 ml-4 sm:ml-6" />
                </motion.div>
              </div>
              <div className="w-16 sm:w-24 lg:w-32 h-px bg-black/30 group-hover:bg-black transition-all duration-1000"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Contact;