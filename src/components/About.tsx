import React, { useState, useEffect } from 'react';
import { Code, Palette, Zap, Users, Award, Coffee, Rocket, Heart, Target, Star, Crown, Diamond, Sparkles, Eye, Lightning, Gem, Flame, Atom } from 'lucide-react';

const About = () => {
  const [activeParticle, setActiveParticle] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveParticle((prev) => (prev + 1) % 50);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  const premiumIcons = [
    <Crown size={20} />, <Diamond size={18} />, <Star size={16} />, <Sparkles size={22} />,
    <Gem size={19} />, <Lightning size={17} />, <Flame size={21} />, <Atom size={20} />
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* SPECTACULAR $100M BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-black"
            style={{
              background: `
                radial-gradient(circle at 20% 20%, rgba(0,0,0,0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(0,0,0,0.2) 0%, transparent 50%),
                radial-gradient(circle at 40% 60%, rgba(0,0,0,0.15) 0%, transparent 50%),
                linear-gradient(45deg, transparent 30%, rgba(0,0,0,0.05) 50%, transparent 70%),
                linear-gradient(-45deg, transparent 30%, rgba(0,0,0,0.05) 50%, transparent 70%)
              `,
              animation: 'meshMove 15s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Premium geometric patterns */}
        <div className="absolute inset-0 opacity-8">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 2px 2px, black 1px, transparent 1px),
                linear-gradient(45deg, transparent 48%, black 49%, black 51%, transparent 52%),
                linear-gradient(-45deg, transparent 48%, black 49%, black 51%, transparent 52%),
                conic-gradient(from 0deg at 50% 50%, transparent 0deg, black 1deg, transparent 2deg)
              `,
              backgroundSize: '80px 80px, 120px 120px, 120px 120px, 200px 200px',
              animation: 'patternRotate 25s linear infinite'
            }}
          ></div>
        </div>

        {/* Floating premium particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-1000 ${activeParticle === i ? 'scale-150 opacity-100' : 'scale-100 opacity-30'}`}
            style={{
              left: `${(i * 7 + 10) % 90}%`,
              top: `${(i * 11 + 15) % 80}%`,
              animationDelay: `${i * 0.1}s`,
              animation: `float ${3 + (i % 3)}s ease-in-out infinite`
            }}
          >
            <div className="text-black/20 hover:text-black/40 transition-colors duration-500 hover:scale-200 transform">
              {premiumIcons[i % premiumIcons.length]}
            </div>
          </div>
        ))}

        {/* Dynamic light rays */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-5"
              style={{
                left: `${i * 12.5}%`,
                top: '-50%',
                width: '2px',
                height: '200%',
                background: 'linear-gradient(to bottom, transparent, black, transparent)',
                transform: `rotate(${i * 22.5}deg)`,
                animation: `lightRay ${8 + i}s linear infinite`
              }}
            ></div>
          ))}
        </div>

        {/* Premium hexagonal grid */}
        <div className="absolute inset-0 opacity-3">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at center, black 1px, transparent 1px),
                polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)
              `,
              backgroundSize: '60px 52px, 60px 52px',
              animation: 'hexMove 20s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Interactive mouse trail */}
        <div 
          className="absolute w-96 h-96 pointer-events-none opacity-5 transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: 'radial-gradient(circle, black 0%, transparent 70%)',
            animation: 'pulse 2s ease-in-out infinite'
          }}
        ></div>

        {/* Premium wave animations */}
        <div className="absolute inset-0 opacity-4">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 50px,
                  black 50px,
                  black 51px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 50px,
                  black 50px,
                  black 51px
                )
              `,
              animation: 'waveMove 12s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Spectacular corner accents */}
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 opacity-10">
          <div 
            className="w-full h-full border-2 border-black transform rotate-45 animate-spin"
            style={{ animationDuration: '30s' }}
          ></div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 opacity-10">
          <div 
            className="w-full h-full border-2 border-black transform -rotate-45 animate-spin"
            style={{ animationDuration: '25s', animationDirection: 'reverse' }}
          ></div>
        </div>

        {/* Premium spiral effects */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 opacity-8">
          <div 
            className="w-full h-full rounded-full border border-black animate-ping"
            style={{ animationDuration: '4s' }}
          ></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 opacity-8">
          <div 
            className="w-full h-full rounded-full border border-black animate-ping"
            style={{ animationDuration: '6s', animationDelay: '2s' }}
          ></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SPECTACULAR HEADER */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center mb-6 sm:mb-8">
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
            <div className="mx-4 sm:mx-8 flex items-center">
              <div className="relative">
                <Target className="w-4 h-4 sm:w-6 sm:h-6 text-black mr-2 sm:mr-3 animate-pulse" />
                <div className="absolute inset-0 w-4 h-4 sm:w-6 sm:h-6 border border-black/30 rounded-full animate-ping"></div>
              </div>
              <span className="text-black/60 font-light tracking-[0.2em] text-xs sm:text-sm uppercase">About</span>
            </div>
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
          </div>
          
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin text-black mb-6 sm:mb-8 tracking-tight relative">
              The
              <span className="block font-black mt-2 sm:mt-4 relative">
                STORY
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6">
                  <Crown className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-black/30 animate-bounce" />
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6">
                  <Diamond className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black/30 animate-pulse" />
                </div>
              </span>
            </h2>
            
            {/* Floating premium elements around title */}
            <div className="absolute top-0 left-1/4 animate-float">
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black/20" />
            </div>
            <div className="absolute bottom-0 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
              <Star className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-black/20" />
            </div>
          </div>
          
          <p className="text-base sm:text-lg lg:text-xl text-black/70 max-w-2xl lg:max-w-4xl mx-auto font-light leading-relaxed px-4 sm:px-0">
            Passionate full-stack developer with 8+ years of experience creating digital masterpieces that transform businesses and delight users worldwide.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center mb-20 sm:mb-24 lg:mb-32">
          {/* Image section with premium effects */}
          <div className="relative group">
            <div className="absolute inset-0 bg-black/5 rounded-xl sm:rounded-2xl transform rotate-1 sm:rotate-3 group-hover:rotate-6 transition-all duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10 rounded-xl sm:rounded-2xl transform -rotate-1 sm:-rotate-2 group-hover:-rotate-4 transition-all duration-700"></div>
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-black/10 group-hover:border-black/30 transition-all duration-500">
              <img 
                src="/photo.png" 
                alt="Gokul GR - Professional Developer" 
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/20 transition-all duration-700"></div>
              
              {/* Premium overlay effects */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-black/30 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-black/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 bg-black/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-6 sm:mb-8 leading-tight flex items-center">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-black/60 animate-pulse" />
                The Journey
              </h3>
              <div className="space-y-6 sm:space-y-8">
                <p className="text-base sm:text-lg text-black/70 leading-relaxed font-light">
                  My coding journey began with curiosity and evolved into a passion for creating 
                  digital experiences that matter. From crafting pixel-perfect UIs to architecting 
                  robust backend systems, I thrive on solving complex challenges with elegant solutions.
                </p>
                
                <p className="text-base sm:text-lg text-black/70 leading-relaxed font-light">
                  When I'm not immersed in code, you'll find me exploring emerging technologies, 
                  contributing to open-source projects, or sharing knowledge with the global developer community.
                </p>
              </div>
            </div>
            
            {/* Premium stats grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  <div className="relative text-center p-4 sm:p-6 border border-black/10 group-hover:border-black group-hover:text-white transition-all duration-300">
                    <div className="text-black group-hover:text-white mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-light text-black group-hover:text-white mb-2 transition-colors duration-300">{stat.number}</div>
                    <div className="text-sm text-black/60 group-hover:text-white/80 font-light tracking-wide transition-colors duration-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Premium tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
              {["React Specialist", "Node.js Expert", "Cloud Architect", "UI/UX Designer", "Problem Solver"].map((tag, index) => (
                <span key={index} className="group relative overflow-hidden border border-black/20 text-black/80 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-light hover:border-black hover:text-white transition-all duration-300">
                  <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <span className="relative">{tag}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Premium features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center relative">
              <div className="relative mb-6 sm:mb-8">
                <div className="absolute inset-0 bg-black/5 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5 rounded-2xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-700"></div>
                <div className="relative bg-white border border-black/10 p-6 sm:p-8 rounded-xl sm:rounded-2xl group-hover:border-black/30 group-hover:shadow-2xl transition-all duration-300">
                  <div className="text-black w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                    {feature.icon}
                    <div className="absolute inset-0 border border-black/10 rounded-full group-hover:border-black/30 group-hover:animate-ping"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-black mb-3 sm:mb-4 group-hover:text-black/80 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-black/70 font-light leading-relaxed group-hover:text-black/60 transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes meshMove {
          0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
          25% { transform: translateX(20px) translateY(-10px) rotate(90deg); }
          50% { transform: translateX(-10px) translateY(20px) rotate(180deg); }
          75% { transform: translateX(-20px) translateY(-20px) rotate(270deg); }
        }
        
        @keyframes patternRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes lightRay {
          0% { opacity: 0; transform: translateY(-100%) rotate(0deg); }
          50% { opacity: 1; transform: translateY(0%) rotate(180deg); }
          100% { opacity: 0; transform: translateY(100%) rotate(360deg); }
        }
        
        @keyframes hexMove {
          0%, 100% { transform: translateX(0) translateY(0); }
          33% { transform: translateX(30px) translateY(-15px); }
          66% { transform: translateX(-15px) translateY(30px); }
        }
        
        @keyframes waveMove {
          0%, 100% { transform: translateX(0) translateY(0) scale(1); }
          50% { transform: translateX(50px) translateY(-25px) scale(1.05); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;