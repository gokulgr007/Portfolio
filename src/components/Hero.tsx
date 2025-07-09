import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Premium geometric background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, white 40%, white 60%, transparent 60%), 
                             linear-gradient(-45deg, transparent 40%, white 40%, white 60%, transparent 60%)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/10 rotate-45 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 border border-white/5 rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-white/15 -rotate-12 animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-8 py-20 flex flex-col justify-center min-h-screen">
        <div className="text-center">
          {/* Premium intro */}
          <div className="mb-12">
            <div className="inline-flex items-center mb-8">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <div className="mx-8 flex items-center">
                <Code className="w-6 h-6 text-white mr-3" />
                <span className="text-white/60 font-light tracking-[0.3em] text-sm uppercase">Developer</span>
              </div>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
            
            <h1 className="text-8xl md:text-9xl font-thin text-white mb-8 tracking-tight leading-none">
              GOKUL
              <span className="block font-black mt-4 text-7xl md:text-8xl">GR</span>
            </h1>
            
            <div className="relative mb-8">
              <p className="text-2xl md:text-3xl text-white/80 font-light tracking-wide">
                Full-Stack Developer & Digital Architect
              </p>
              <div className="w-32 h-px bg-white/30 mx-auto mt-6"></div>
            </div>
          </div>
          
          <div className="mb-16">
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Crafting extraordinary digital experiences through innovative technology solutions. 
              Specializing in scalable architectures and cutting-edge development practices.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-16">
              <a href="#contact" className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative border border-white text-white px-12 py-4 font-light text-lg tracking-wide hover:text-black transition-colors duration-500">
                  Let's Collaborate
                </div>
              </a>
              
              <a href="#projects" className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-black border border-white"></div>
                <div className="relative bg-white text-black px-12 py-4 font-light text-lg tracking-wide group-hover:bg-transparent group-hover:text-white transition-all duration-500">
                  View Portfolio
                </div>
              </a>
              
              <a href="#" className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative border border-white text-white px-12 py-4 font-light text-lg tracking-wide hover:text-black transition-colors duration-500 flex items-center">
                  <Download size={18} className="mr-3" />
                  Resume
                </div>
              </a>
            </div>
            
            <div className="flex justify-center space-x-12">
              <a href="#" className="group text-white/60 hover:text-white transition-all duration-300">
                <Github size={28} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="group text-white/60 hover:text-white transition-all duration-300">
                <Linkedin size={28} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="group text-white/60 hover:text-white transition-all duration-300">
                <Mail size={28} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <span className="text-white/40 text-sm font-light tracking-wider mb-4 rotate-90 origin-center">SCROLL</span>
            <ChevronDown size={24} className="text-white/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;