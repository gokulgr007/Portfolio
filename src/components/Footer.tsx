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
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-16">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 border border-white/20 flex items-center justify-center mr-6">
                <Code size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-4xl font-light">Gokul GR</h3>
                <p className="text-white/60 font-light tracking-wide">Full-Stack Developer</p>
              </div>
            </div>
            
            <p className="text-white/70 mb-12 max-w-md leading-relaxed font-light">
              Passionate about creating exceptional digital experiences that make a difference. 
              Available for exciting projects and collaborations worldwide.
            </p>
            
            <div className="flex space-x-8">
              <a href="#" className="group text-white/60 hover:text-white transition-all duration-300">
                <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="group text-white/60 hover:text-white transition-all duration-300">
                <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="group text-white/60 hover:text-white transition-all duration-300">
                <Twitter size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-xl font-light mb-8 flex items-center">
              <User size={18} className="mr-3" />
              Navigation
            </h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors duration-300 font-light">About Me</a></li>
              <li><a href="#skills" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Skills</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Projects</a></li>
              <li><a href="#experience" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Experience</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-light mb-8 flex items-center">
              <Mail size={18} className="mr-3" />
              Services
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Web Development</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Mobile Apps</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Cloud Solutions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light">UI/UX Design</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Consulting</a></li>
            </ul>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="border-t border-white/10 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 flex items-center mb-6 md:mb-0 font-light">
              Made with <Heart size={16} className="text-white mx-3 animate-pulse" /> by Gokul GR
            </p>
            
            <div className="flex items-center space-x-8">
              <span className="text-white/40 text-sm font-light">© 2024 Gokul GR. All rights reserved.</span>
              <div className="flex items-center text-white/60">
                <Code size={16} className="mr-2" />
                <span className="text-sm font-light tracking-wide">Always Coding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;