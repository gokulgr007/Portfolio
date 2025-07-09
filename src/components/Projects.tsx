import React from 'react';
import { ExternalLink, Github, Star, Zap, Users, TrendingUp, Award, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered E-Commerce Platform",
      description: "Revolutionary e-commerce solution with AI recommendations, real-time analytics, and blockchain payments. Built with React, Node.js, and machine learning algorithms serving millions of users globally.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "AI/ML", "Blockchain", "AWS", "PostgreSQL"],
      github: "#",
      live: "#",
      featured: true,
      stats: { users: "2.5M+", revenue: "$50M+", performance: "99.9%" }
    },
    {
      title: "Real-Time Collaboration Suite",
      description: "Next-generation workspace with video conferencing, real-time document editing, and AI-powered project management. Serving enterprise teams across 80+ countries worldwide.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "WebRTC", "Socket.io", "Microservices", "Docker", "Kubernetes"],
      github: "#",
      live: "#",
      featured: true,
      stats: { users: "500K+", uptime: "99.99%", countries: "80+" }
    },
    {
      title: "Blockchain DeFi Protocol",
      description: "Decentralized finance platform with yield farming, liquidity pools, and governance tokens. Smart contracts audited and managing over $100M in total value locked.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Solidity", "React", "Web3.js", "Ethereum", "IPFS", "DeFi"],
      github: "#",
      live: "#",
      featured: false,
      stats: { tvl: "$100M+", transactions: "5M+", apy: "250%" }
    },
    {
      title: "Neural Network Visualization",
      description: "Interactive platform for visualizing and training neural networks in the browser. Educational tool used by 200+ universities and 100K+ students worldwide.",
      image: "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "TensorFlow.js", "D3.js", "WebGL", "Python", "FastAPI"],
      github: "#",
      live: "#",
      featured: false,
      stats: { students: "100K+", universities: "200+", models: "10K+" }
    }
  ];

  return (
    <section id="projects" className="py-32 bg-black relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center mb-6 sm:mb-8">
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="mx-4 sm:mx-8 flex items-center">
              <Award className="w-4 h-4 sm:w-6 sm:h-6 text-white mr-2 sm:mr-3" />
              <span className="text-white/60 font-light tracking-[0.2em] text-xs sm:text-sm uppercase">Portfolio</span>
            </div>
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin text-white mb-6 sm:mb-8 tracking-tight">
            Featured
            <span className="block font-black mt-2 sm:mt-4">PROJECTS</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl lg:max-w-3xl mx-auto font-light leading-relaxed px-4 sm:px-0">
            Showcasing innovative solutions that redefine industry standards and push technological boundaries
          </p>
        </div>
        
        {/* Premium projects grid */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Project layout */}
              <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image section */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="absolute inset-0 bg-white/5 rounded-xl sm:rounded-2xl transform rotate-1 sm:rotate-3 group-hover:rotate-3 sm:group-hover:rotate-6 transition-transform duration-700"></div>
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                    <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Overlay content */}
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 w-full sm:w-auto">
                        <a href={project.github} className="flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 border border-white/20">
                          <Github size={16} className="sm:w-5 sm:h-5 mr-2" />
                          <span className="font-medium">Code</span>
                        </a>
                        <a href={project.live} className="flex items-center justify-center bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-white/90 transition-all duration-300">
                          <Eye size={16} className="sm:w-5 sm:h-5 mr-2" />
                          <span className="font-medium">Live Demo</span>
                        </a>
                      </div>
                    </div>
                    
                    {project.featured && (
                      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                        <div className="flex items-center bg-white text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-sm">
                          <Star size={14} className="sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Featured
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Content section */}
                <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-8 sm:w-12 h-px bg-white/30"></div>
                      <span className="mx-3 sm:mx-4 text-white/50 text-xs sm:text-sm font-light tracking-wider uppercase">Project {String(index + 1).padStart(2, '0')}</span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-4 sm:mb-6 leading-tight group-hover:text-white/90 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light mb-6 sm:mb-8">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tech stack */}
                  <div>
                    <h4 className="text-white/50 text-xs sm:text-sm font-light tracking-wider uppercase mb-3 sm:mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="border border-white/20 text-white/80 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-light hover:border-white/40 hover:text-white transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-white/10">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center group/stat">
                        <div className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-1 sm:mb-2 group-hover/stat:text-white/80 transition-colors">
                          {value}
                        </div>
                        <div className="text-xs sm:text-sm text-white/50 capitalize font-light tracking-wide">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Premium CTA */}
        <div className="text-center mt-20 sm:mt-24 lg:mt-32">
          <div className="inline-flex items-center group cursor-pointer">
            <div className="w-12 sm:w-16 h-px bg-white/30 group-hover:bg-white/60 transition-all duration-500"></div>
            <a href="#" className="mx-4 sm:mx-8 flex items-center text-white hover:text-white/80 transition-colors duration-300">
              <span className="font-light tracking-wider text-sm sm:text-base lg:text-lg mr-3 sm:mr-4">View All Projects</span>
              <TrendingUp size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <div className="w-12 sm:w-16 h-px bg-white/30 group-hover:bg-white/60 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;