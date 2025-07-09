import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles, Code, Crown, Diamond, Star, Zap } from 'lucide-react';

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
              
              {/* Floating sparkles around the intro */}
              <Sparkles className="absolute -top-4 left-1/4 w-6 h-6 text-yellow-300 animate-pulse opacity-70" />
              <Sparkles className="absolute -bottom-4 right-1/4 w-4 h-4 text-blue-300 animate-pulse opacity-60" style={{ animationDelay: '1s' }} />
            </div>
            
            <h1 className="text-8xl md:text-9xl font-thin text-white mb-8 tracking-tight leading-none">
              <div className="relative inline-block">
                {/* Background glow effects */}
                <div className="absolute inset-0 text-8xl md:text-9xl font-thin text-white/20 blur-3xl animate-pulse">
                  GOKUL
                </div>
                <div className="absolute inset-0 text-8xl md:text-9xl font-thin text-white/10 blur-2xl scale-110 animate-pulse delay-500">
                  GOKUL
                </div>
                
                {/* Main text with premium effects */}
                <div className="relative">
                  <span className="relative inline-block group">
                    {/* Individual letter animations */}
                    <span className="inline-block hover:scale-110 transition-all duration-500 hover:text-yellow-300 hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>G</span>
                    <span className="inline-block hover:scale-110 transition-all duration-500 hover:text-yellow-300 hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>O</span>
                    <span className="inline-block hover:scale-110 transition-all duration-500 hover:text-yellow-300 hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>K</span>
                    <span className="inline-block hover:scale-110 transition-all duration-500 hover:text-yellow-300 hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>U</span>
                    <span className="inline-block hover:scale-110 transition-all duration-500 hover:text-yellow-300 hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] animate-fade-in-up" style={{ animationDelay: '0.5s' }}>L</span>
                    
                    {/* Floating luxury icons */}
                    <Crown className="absolute -top-16 -right-8 w-12 h-12 text-yellow-400 animate-bounce opacity-80" style={{ animationDelay: '2s' }} />
                    <Diamond className="absolute -top-8 -left-12 w-8 h-8 text-blue-300 animate-pulse opacity-70" style={{ animationDelay: '2.5s' }} />
                  </span>
                </div>
              </div>
              
              <div className="block mt-8 relative">
                {/* Background glow for GR */}
                <div className="absolute inset-0 text-7xl md:text-8xl font-black text-white/20 blur-3xl animate-pulse delay-1000">
                  GR
                </div>
                <div className="absolute inset-0 text-7xl md:text-8xl font-black text-white/10 blur-2xl scale-110 animate-pulse delay-1500">
                  GR
                </div>
                
                <span className="text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent animate-gradient-x">
                  <span className="inline-block hover:scale-125 transition-all duration-700 hover:rotate-12 hover:drop-shadow-[0_0_50px_rgba(255,255,255,1)] animate-fade-in-up" style={{ animationDelay: '0.8s' }}>G</span>
                </span>
              </div>
            </h1>
            
            <div className="flex justify-center space-x-6">
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