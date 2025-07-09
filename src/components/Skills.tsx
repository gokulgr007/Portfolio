import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Excellence",
      icon: <Code size={32} />,
      skills: [
        { name: "React", level: 98 },
        { name: "TypeScript", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "Vue.js", level: 88 },
        { name: "Tailwind CSS", level: 96 }
      ]
    },
    {
      title: "Backend Mastery",
      icon: <Database size={32} />,
      skills: [
        { name: "Node.js", level: 94 },
        { name: "Python", level: 90 },
        { name: "PostgreSQL", level: 87 },
        { name: "MongoDB", level: 85 },
        { name: "GraphQL", level: 89 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={32} />,
      skills: [
        { name: "AWS", level: 91 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 82 },
        { name: "CI/CD", level: 90 },
        { name: "Terraform", level: 78 }
      ]
    },
    {
      title: "Mobile & Emerging",
      icon: <Smartphone size={32} />,
      skills: [
        { name: "React Native", level: 86 },
        { name: "Flutter", level: 80 },
        { name: "Firebase", level: 88 },
        { name: "WebRTC", level: 75 },
        { name: "Socket.io", level: 92 }
      ]
    }
  ];

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

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, transparent 50%, white 50%)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium header */}
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
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="mx-4 sm:mx-8 flex items-center">
              <motion.div
                animate={{ rotate: 0 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Layers className="w-4 h-4 sm:w-6 sm:h-6 text-white mr-2 sm:mr-3" />
              </motion.div>
              <span className="text-white/60 font-light tracking-[0.2em] text-xs sm:text-sm uppercase">Expertise</span>
            </div>
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin text-white mb-6 sm:mb-8 tracking-tight"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Technical
            <motion.span 
              className="block font-black mt-2 sm:mt-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              MASTERY
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl lg:max-w-4xl mx-auto font-light leading-relaxed px-4 sm:px-0"
            variants={fadeInUp}
          >
            Expertise across the full technology stack, from frontend frameworks to cloud infrastructure
          </motion.p>
        </motion.div>
        
        {/* Skills grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-white/5 rounded-xl sm:rounded-2xl"
                  animate={{ rotate: [1, 2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative bg-black border border-white/10 p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl group-hover:border-white/30 transition-all duration-300">
                  {/* Category header */}
                  <div className="flex items-center mb-8 sm:mb-10 lg:mb-12">
                    <motion.div 
                      className="text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mr-4 sm:mr-6 flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills list */}
                  <div className="space-y-6 sm:space-y-8">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex} 
                        className="group/skill"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-3 sm:mb-4">
                          <span className="text-white/90 font-light text-base sm:text-lg group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-white/60 font-light text-base sm:text-lg">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Premium progress bar */}
                        <div className="relative">
                          <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                            <motion.div 
                              className="bg-white h-1 rounded-full transition-all duration-1000 ease-out relative"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                            >
                              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Premium footer */}
        <motion.div 
          className="text-center mt-20 sm:mt-24 lg:mt-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center">
            <div className="w-12 sm:w-16 h-px bg-white/30"></div>
            <div className="mx-4 sm:mx-8 flex items-center text-white/80">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Code size={20} className="sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              </motion.div>
              <span className="font-light tracking-wider text-sm sm:text-base lg:text-lg">Continuously Learning & Evolving</span>
            </div>
            <div className="w-12 sm:w-16 h-px bg-white/30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;