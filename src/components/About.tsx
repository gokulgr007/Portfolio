import React from 'react';
import { Code, Palette, Zap, Users, Award, Coffee, Rocket, Heart, Target } from 'lucide-react';

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

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Premium header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
            <div className="mx-8 flex items-center">
              <Target className="w-6 h-6 text-black mr-3" />
              <span className="text-black/60 font-light tracking-[0.2em] text-sm uppercase">About</span>
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
          </div>
          
          <h2 className="text-7xl md:text-8xl font-thin text-black mb-8 tracking-tight">
            The
            <span className="block font-black mt-4">STORY</span>
          </h2>
          
          <p className="text-xl text-black/70 max-w-4xl mx-auto font-light leading-relaxed">
            Passionate full-stack developer with 8+ years of experience creating digital masterpieces that transform businesses and delight users worldwide.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          {/* Image section */}
          <div className="relative">
            <div className="absolute inset-0 bg-black/5 rounded-2xl transform rotate-3"></div>
            <div className="relative overflow-hidden rounded-2xl border border-black/10">
              <img 
                src="/photo.png" 
                alt="Gokul GR - Professional Developer" 
                className="w-full h-[1000px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="space-y-12">
            <div>
              <h3 className="text-4xl font-light text-black mb-8 leading-tight">The Journey</h3>
              <div className="space-y-8">
                <p className="text-lg text-black/70 leading-relaxed font-light">
                  My coding journey began with curiosity and evolved into a passion for creating 
                  digital experiences that matter. From crafting pixel-perfect UIs to architecting 
                  robust backend systems, I thrive on solving complex challenges with elegant solutions.
                </p>
                
                <p className="text-lg text-black/70 leading-relaxed font-light">
                  When I'm not immersed in code, you'll find me exploring emerging technologies, 
                  contributing to open-source projects, or sharing knowledge with the global developer community.
                </p>
              </div>
            </div>
            
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center p-6 border border-black/10 hover:border-black/30 transition-all duration-300">
                  <div className="text-black/60 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-light text-black mb-2">{stat.number}</div>
                  <div className="text-sm text-black/60 font-light tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-4">
              {["React Specialist", "Node.js Expert", "Cloud Architect", "UI/UX Designer", "Problem Solver"].map((tag, index) => (
                <span key={index} className="border border-black/20 text-black/80 px-4 py-2 text-sm font-light hover:border-black/40 hover:text-black transition-all duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-black/5 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative bg-white border border-black/10 p-8 rounded-2xl group-hover:border-black/30 transition-all duration-300">
                  <div className="text-black w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-light text-black mb-4">{feature.title}</h3>
                  <p className="text-black/70 font-light leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
