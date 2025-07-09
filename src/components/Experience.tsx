import React from 'react';
import { Calendar, MapPin, TrendingUp, Award, Briefcase, Users, Building, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Chief Technology Officer",
      company: "TechVision Corp",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading technological innovation and digital transformation initiatives for a Fortune 500 company. Architecting next-generation cloud platforms serving 50M+ users globally with revolutionary AI-driven solutions.",
      achievements: [
        "Spearheaded digital transformation reducing operational costs by $100M annually",
        "Led engineering teams of 150+ developers across 12 global offices",
        "Implemented AI-driven infrastructure achieving 99.99% uptime",
        "Launched 15+ products generating $500M+ in revenue"
      ],
      color: "from-white to-gray-300",
      impact: "Transformed company's technological landscape"
    },
    {
      title: "Senior Software Architect",
      company: "InnovateLab",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Architected and developed revolutionary fintech platform from concept to IPO. Built scalable systems handling $1B+ in daily transactions with cutting-edge blockchain integration.",
      achievements: [
        "Designed architecture supporting 10M+ concurrent users",
        "Built real-time trading engine processing $1B+ daily volume",
        "Implemented blockchain payment system with zero downtime",
        "Mentored 50+ engineers, 40+ promoted to senior roles"
      ],
      color: "from-gray-300 to-white",
      impact: "Revolutionized fintech industry standards"
    },
    {
      title: "Lead Full-Stack Engineer",
      company: "StartupXYZ",
      location: "Seattle, WA",
      period: "2019 - 2020",
      description: "Core architect for AI-powered SaaS platform serving enterprise clients. Specialized in React, Node.js, and machine learning integration for predictive analytics and automation.",
      achievements: [
        "Built entire platform architecture from ground up",
        "Integrated ML models improving user engagement by 400%",
        "Scaled platform from 0 to 1M users in 12 months",
        "Achieved 99.9% uptime through robust monitoring systems"
      ],
      color: "from-white to-gray-200",
      impact: "Pioneered AI-driven enterprise solutions"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center mb-6 sm:mb-8">
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
            <div className="mx-4 sm:mx-8 flex items-center">
              <Building className="w-4 h-4 sm:w-6 sm:h-6 text-black mr-2 sm:mr-3" />
              <span className="text-black/60 font-light tracking-[0.2em] text-xs sm:text-sm uppercase">Career</span>
            </div>
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin text-black mb-6 sm:mb-8 tracking-tight">
            Professional
            <span className="block font-black mt-2 sm:mt-4">JOURNEY</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-black/70 max-w-2xl lg:max-w-3xl mx-auto font-light leading-relaxed px-4 sm:px-0">
            Building innovative solutions and leading transformative initiatives across diverse industries
          </p>
        </div>
        
        {/* Premium timeline */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-black/20 via-black/40 to-black/20"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 sm:mb-20 lg:mb-32 last:mb-0">
              {/* Timeline dot */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* Experience card */}
              <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'}`}>
                {/* Content side */}
                <div className={`${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'} space-y-6 sm:space-y-8`}>
                  {/* Header */}
                  <div>
                    <div className={`flex items-center mb-3 sm:mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-8 sm:w-12 h-px bg-black/30"></div>
                        <span className="mx-3 sm:mx-4 text-black/50 text-xs sm:text-sm font-light tracking-wider uppercase">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-black mb-2 leading-tight">
                      {exp.title}
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center text-black/60 mb-4 sm:mb-6 space-y-2 sm:space-y-0 sm:space-x-6">
                      <div className="flex items-center">
                        <Briefcase size={14} className="sm:w-4 sm:h-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="sm:w-4 sm:h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-base sm:text-lg text-black/70 leading-relaxed font-light mb-6 sm:mb-8">
                      {exp.description}
                    </p>
                  </div>
                  
                  {/* Impact statement */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-black/5 rounded-lg"></div>
                    <div className="relative p-4 sm:p-6 border-l-4 border-black">
                      <div className="flex items-center mb-2">
                        <Zap size={16} className="sm:w-5 sm:h-5 text-black mr-2" />
                        <span className="font-medium text-black/80 text-xs sm:text-sm uppercase tracking-wide">Key Impact</span>
                      </div>
                      <p className="text-sm sm:text-base text-black font-light italic">{exp.impact}</p>
                    </div>
                  </div>
                </div>
                
                {/* Achievements side */}
                <div className={`${index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'} space-y-4 sm:space-y-6`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-black/3 rounded-xl sm:rounded-2xl transform -rotate-1"></div>
                    <div className="relative bg-white border border-black/10 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <Award size={20} className="sm:w-6 sm:h-6 text-black mr-2 sm:mr-3" />
                        <h4 className="font-medium text-black text-base sm:text-lg tracking-wide">Key Achievements</h4>
                      </div>
                      
                      <div className="space-y-3 sm:space-y-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="group flex items-start">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mt-2 sm:mt-3 mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                            <span className="text-sm sm:text-base text-black/80 font-light leading-relaxed group-hover:text-black transition-colors duration-300">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Premium CTA */}
        <div className="text-center mt-20 sm:mt-24 lg:mt-32">
          <div className="inline-flex items-center group cursor-pointer">
            <div className="w-12 sm:w-16 h-px bg-black/30 group-hover:bg-black/60 transition-all duration-500"></div>
            <div className="mx-4 sm:mx-8 flex items-center text-black hover:text-black/80 transition-colors duration-300">
              <Users size={20} className="sm:w-6 sm:h-6 mr-3 sm:mr-4" />
              <span className="font-light tracking-wider text-sm sm:text-base lg:text-lg">Ready to Lead Your Next Project</span>
            </div>
            <div className="w-12 sm:w-16 h-px bg-black/30 group-hover:bg-black/60 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;