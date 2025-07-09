import React from 'react';
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

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, transparent 50%, white 50%)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Premium header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="mx-8 flex items-center">
              <Layers className="w-6 h-6 text-white mr-3" />
              <span className="text-white/60 font-light tracking-[0.2em] text-sm uppercase">Expertise</span>
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>
          
          <h2 className="text-7xl md:text-8xl font-thin text-white mb-8 tracking-tight">
            Technical
            <span className="block font-black mt-4">MASTERY</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
            Expertise across the full technology stack, from frontend frameworks to cloud infrastructure
          </p>
        </div>
        
        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
                <div className="relative bg-black border border-white/10 p-12 rounded-2xl group-hover:border-white/30 transition-all duration-300">
                  {/* Category header */}
                  <div className="flex items-center mb-12">
                    <div className="text-white w-16 h-16 mr-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-light text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills list */}
                  <div className="space-y-8">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-white/90 font-light text-lg group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-white/60 font-light text-lg">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Premium progress bar */}
                        <div className="relative">
                          <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                            <div 
                              className="bg-white h-1 rounded-full transition-all duration-1000 ease-out relative"
                              style={{ width: `${skill.level}%` }}
                            >
                              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Premium footer */}
        <div className="text-center mt-32">
          <div className="inline-flex items-center">
            <div className="w-16 h-px bg-white/30"></div>
            <div className="mx-8 flex items-center text-white/80">
              <Code size={24} className="mr-3" />
              <span className="font-light tracking-wider text-lg">Continuously Learning & Evolving</span>
            </div>
            <div className="w-16 h-px bg-white/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;