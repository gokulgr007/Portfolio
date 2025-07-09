import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, User, Clock, Globe, Award, Zap, Star, Rocket, Heart, Eye, Target, Diamond, Crown, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail size={40} />,
      title: "Email",
      value: "gokul.gr@example.com",
      description: "Lightning-fast responses",
      color: "from-black to-gray-800",
      accent: "border-black",
      stats: "< 2 hours response"
    },
    {
      icon: <Phone size={40} />,
      title: "Phone",
      value: "+91 98765 43210",
      description: "Direct line available",
      color: "from-gray-800 to-black",
      accent: "border-gray-600",
      stats: "Available 24/7"
    },
    {
      icon: <MessageCircle size={40} />,
      title: "WhatsApp",
      value: "+91 98765 43210",
      description: "Instant messaging",
      color: "from-black to-gray-700",
      accent: "border-black",
      stats: "Real-time chat"
    },
    {
      icon: <Globe size={40} />,
      title: "Video Call",
      value: "Schedule Meeting",
      description: "Face-to-face discussion",
      color: "from-gray-700 to-black",
      accent: "border-gray-500",
      stats: "HD quality calls"
    }
  ];

  const socialPlatforms = [
    { icon: <Github size={32} />, name: "GitHub", handle: "@gokulGR", followers: "50K+", color: "hover:bg-black hover:text-white" },
    { icon: <Linkedin size={32} />, name: "LinkedIn", handle: "gokul-gr", followers: "25K+", color: "hover:bg-blue-600 hover:text-white" },
    { icon: <Twitter size={32} />, name: "Twitter", handle: "@gokulGR_dev", followers: "30K+", color: "hover:bg-black hover:text-white" }
  ];

  const achievements = [
    { icon: <Crown size={24} />, label: "Top 1% Developer", value: "Global Ranking" },
    { icon: <Star size={24} />, label: "5-Star Rating", value: "Client Reviews" },
    { icon: <Rocket size={24} />, label: "500+ Projects", value: "Successfully Delivered" },
    { icon: <Diamond size={24} />, label: "$100M+ Revenue", value: "Generated for Clients" }
  ];

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Dynamic mouse follower */}
      <div 
        className="fixed w-6 h-6 bg-black rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: isHovering ? 'scale(3)' : 'scale(1)',
          opacity: isHovering ? 0.3 : 0.8
        }}
      />

      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, black 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, black 1px, transparent 1px),
              linear-gradient(45deg, transparent 48%, black 49%, black 51%, transparent 52%)
            `,
            backgroundSize: '100px 100px, 50px 50px, 200px 200px',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Floating geometric shapes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-2 h-2 bg-black/10 rotate-45 transform"></div>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* SPECTACULAR HEADER */}
        <div className="text-center mb-40">
          <div className="inline-flex items-center mb-16">
            <div className="w-40 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
            <div className="mx-16 flex items-center">
              <div className="relative">
                <Sparkles className="w-12 h-12 text-black mr-6 animate-spin" />
                <div className="absolute inset-0 w-12 h-12 border-2 border-black/20 rounded-full animate-ping"></div>
              </div>
              <span className="text-black/60 font-light tracking-[0.4em] text-lg uppercase">Contact</span>
            </div>
            <div className="w-40 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
          </div>
          
          <div className="relative">
            <h2 className="text-9xl md:text-[12rem] font-thin text-black mb-16 tracking-tight leading-none relative">
              LET'S
              <span className="block font-black mt-8 relative">
                BUILD
                <div className="absolute -top-8 -right-8 w-16 h-16 border-4 border-black animate-spin"></div>
                <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-black animate-pulse"></div>
              </span>
            </h2>
            
            {/* Floating elements around title */}
            <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-black/30 rotate-45 animate-bounce"></div>
            <div className="absolute bottom-0 right-1/4 w-6 h-6 bg-black/20 animate-pulse"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <p className="text-3xl text-black/70 font-light leading-relaxed mb-12">
              Ready to create something <span className="font-bold text-black">EXTRAORDINARY</span>? 
              Let's transform your vision into digital <span className="font-bold text-black">REALITY</span>
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="w-32 h-px bg-black/30"></div>
              <Heart className="w-8 h-8 text-black animate-pulse" />
              <div className="w-32 h-px bg-black/30"></div>
            </div>
          </div>
        </div>

        {/* ACHIEVEMENTS BANNER */}
        <div className="mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden ${activeCard === index ? 'scale-105' : ''} transition-all duration-500`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <div className="relative border-2 border-black p-8 text-center group-hover:text-white transition-colors duration-700">
                  <div className="text-black group-hover:text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-light text-black group-hover:text-white mb-2">{achievement.label}</div>
                  <div className="text-sm text-black/60 group-hover:text-white/80 font-light tracking-wide">{achievement.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-32">
          {/* CONTACT METHODS - Left */}
          <div className="space-y-16">
            <div>
              <h3 className="text-6xl font-thin text-black mb-20 flex items-center leading-tight">
                <Target size={48} className="mr-8 animate-pulse" />
                Connect
              </h3>
              
              <div className="space-y-12">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div className="absolute inset-0 bg-black/5 transform -skew-y-2 group-hover:skew-y-0 transition-transform duration-700"></div>
                    <div className="relative p-10 border-l-4 border-black/30 group-hover:border-black transition-all duration-500">
                      <div className="flex items-start">
                        <div className="w-20 h-20 border-2 border-black/20 flex items-center justify-center mr-8 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-black text-2xl mb-3 tracking-wide group-hover:text-black/80 transition-colors">{method.title}</h4>
                          <p className="text-black/80 font-light text-xl mb-2">{method.value}</p>
                          <p className="text-black/50 font-light text-sm tracking-wide mb-2">{method.description}</p>
                          <div className="text-black/70 font-medium text-sm">{method.stats}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* SOCIAL PLATFORMS */}
            <div className="relative">
              <div className="absolute inset-0 bg-black/3 transform rotate-1"></div>
              <div className="relative bg-white border-2 border-black p-10">
                <h4 className="font-medium text-black text-3xl mb-10 tracking-wide flex items-center">
                  <Award size={32} className="mr-4 animate-bounce" />
                  Social Presence
                </h4>
                <div className="space-y-8">
                  {socialPlatforms.map((social, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className={`group flex items-center p-6 border-2 border-black/15 transition-all duration-500 ${social.color}`}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div className="w-16 h-16 border-2 border-black/20 flex items-center justify-center mr-6 group-hover:border-white group-hover:scale-110 transition-all duration-300">
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-black group-hover:text-white text-xl transition-colors">{social.name}</div>
                        <div className="text-black/60 group-hover:text-white/80 font-light">{social.handle}</div>
                        <div className="text-black/50 group-hover:text-white/70 font-light text-sm">{social.followers} followers</div>
                      </div>
                      <Eye size={24} className="text-black/40 group-hover:text-white/60 group-hover:scale-125 transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* CONTACT FORM - Center & Right */}
          <div className="lg:col-span-2 relative">
            <div className="absolute inset-0 bg-black/3 transform -rotate-1"></div>
            <div className="relative bg-white border-4 border-black">
              {/* FORM HEADER */}
              <div className="border-b-4 border-black/20 p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 border-4 border-black/10 transform rotate-45 translate-x-16 -translate-y-16"></div>
                <h3 className="text-5xl font-thin text-black mb-6 flex items-center">
                  <Rocket size={40} className="mr-6 animate-pulse" />
                  Start Your Project
                </h3>
                <p className="text-black/60 font-light text-xl leading-relaxed">
                  Tell me about your vision and let's create something that will 
                  <span className="font-bold text-black"> blow minds</span> and 
                  <span className="font-bold text-black"> break boundaries</span>
                </p>
              </div>
              
              {/* FORM CONTENT */}
              <div className="p-16">
                <form onSubmit={handleSubmit} className="space-y-16">
                  <div className="grid md:grid-cols-2 gap-16">
                    <div className="group relative">
                      <label htmlFor="name" className="block text-sm font-bold text-black/80 mb-8 tracking-[0.3em] uppercase flex items-center">
                        <User size={16} className="mr-3" />
                        Your Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-0 py-8 bg-transparent border-0 border-b-4 border-black/30 text-black text-xl placeholder-black/40 focus:border-black focus:outline-none transition-all duration-700 font-light group-hover:border-black/60"
                          placeholder="Enter your full name"
                          onFocus={() => setIsHovering(true)}
                          onBlur={() => setIsHovering(false)}
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-700 group-focus-within:w-full"></div>
                      </div>
                    </div>
                    
                    <div className="group relative">
                      <label htmlFor="email" className="block text-sm font-bold text-black/80 mb-8 tracking-[0.3em] uppercase flex items-center">
                        <Mail size={16} className="mr-3" />
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-0 py-8 bg-transparent border-0 border-b-4 border-black/30 text-black text-xl placeholder-black/40 focus:border-black focus:outline-none transition-all duration-700 font-light group-hover:border-black/60"
                          placeholder="your@email.com"
                          onFocus={() => setIsHovering(true)}
                          onBlur={() => setIsHovering(false)}
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-700 group-focus-within:w-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative">
                    <label htmlFor="subject" className="block text-sm font-bold text-black/80 mb-8 tracking-[0.3em] uppercase flex items-center">
                      <Zap size={16} className="mr-3" />
                      Project Type *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-8 bg-transparent border-0 border-b-4 border-black/30 text-black text-xl placeholder-black/40 focus:border-black focus:outline-none transition-all duration-700 font-light group-hover:border-black/60"
                        placeholder="Web App, Mobile App, E-commerce, AI/ML, etc."
                        onFocus={() => setIsHovering(true)}
                        onBlur={() => setIsHovering(false)}
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-700 group-focus-within:w-full"></div>
                    </div>
                  </div>
                  
                  <div className="group relative">
                    <label htmlFor="message" className="block text-sm font-bold text-black/80 mb-8 tracking-[0.3em] uppercase flex items-center">
                      <MessageCircle size={16} className="mr-3" />
                      Project Vision *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={10}
                        required
                        className="w-full px-0 py-8 bg-transparent border-0 border-b-4 border-black/30 text-black text-xl placeholder-black/40 focus:border-black focus:outline-none transition-all duration-700 resize-none font-light group-hover:border-black/60"
                        placeholder="Describe your vision, goals, timeline, budget, and what makes this project special..."
                        onFocus={() => setIsHovering(true)}
                        onBlur={() => setIsHovering(false)}
                      ></textarea>
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-700 group-focus-within:w-full"></div>
                    </div>
                  </div>
                  
                  {/* SPECTACULAR SUBMIT BUTTON */}
                  <div className="pt-12">
                    <button
                      type="submit"
                      className="group relative overflow-hidden w-full"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                      <div className="absolute inset-0 border-4 border-black"></div>
                      <div className="relative border-4 border-black text-black py-12 font-light text-2xl tracking-[0.2em] hover:text-white transition-colors duration-1000 flex items-center justify-center uppercase">
                        <Rocket size={28} className="mr-6 group-hover:animate-bounce" />
                        <span className="mr-6">Launch Project</span>
                        <Send size={28} className="group-hover:translate-x-4 group-hover:rotate-45 transition-all duration-700" />
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* RESPONSE GUARANTEE */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center bg-black text-white px-8 py-4">
                <Clock size={20} className="mr-3 animate-pulse" />
                <span className="font-light text-lg tracking-wide">⚡ GUARANTEED 24-HOUR RESPONSE ⚡</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* SPECTACULAR BOTTOM CTA */}
        <div className="mt-40 text-center relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-96 h-96 border border-black/10 rounded-full animate-spin"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center group cursor-pointer">
              <div className="w-32 h-px bg-black/30 group-hover:bg-black transition-all duration-1000"></div>
              <div className="mx-16 flex items-center text-black hover:text-black/80 transition-colors duration-500">
                <Crown size={32} className="mr-6 group-hover:animate-bounce" />
                <span className="font-light tracking-[0.3em] text-2xl uppercase">Ready to Create Magic?</span>
                <Sparkles size={32} className="ml-6 group-hover:animate-spin" />
              </div>
              <div className="w-32 h-px bg-black/30 group-hover:bg-black transition-all duration-1000"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default Contact;