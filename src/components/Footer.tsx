import React from 'react';
import { Heart, Github, Linkedin, Twitter, Code, User, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-24 relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 40%, white 40%, white 60%, transparent 60%)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          {/* Brand section */}
          <div className="sm:col-span-2">
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border border-white/20 flex items-center justify-center mr-4 sm:mr-6">
                <Code size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
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
              <a href="#" className="group text-white/60 hover:text-white transition-all duration-300">
                <Github size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="group text-white/60 hover:text-white transition-all duration-300">
                <Linkedin size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="group text-white/60 hover:text-white transition-all duration-300">
                <Twitter size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg sm:text-xl font-light mb-6 sm:mb-8 flex items-center">
              <User size={16} className="sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              Navigation
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base">About Me</a></li>
              <li><a href="#skills" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base">Skills</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base">Projects</a></li>
              <li><a href="#experience" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base">Experience</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-light mb-6 sm:mb-8 flex items-center">
              <Mail size={16} className="sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              Services
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base">Web Development</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base">Mobile Apps</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base">Cloud Solutions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base">UI/UX Design</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base">Consulting</a></li>
            </ul>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="border-t border-white/10 mt-12 sm:mt-14 lg:mt-16 pt-8 sm:pt-10 lg:pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-white/60 flex items-center font-light text-sm sm:text-base">
              Made with <Heart size={14} className="sm:w-4 sm:h-4 text-white mx-2 sm:mx-3 animate-pulse" /> by Gokul GR
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8">
              <span className="text-white/40 text-xs sm:text-sm font-light">© 2024 Gokul GR. All rights reserved.</span>
              <div className="flex items-center text-white/60">
                <Code size={14} className="sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm font-light tracking-wide">Always Coding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;