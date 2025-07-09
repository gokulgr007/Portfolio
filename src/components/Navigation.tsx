import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center mr-4 group-hover:border-white/60 transition-all duration-300">
              <Code size={24} className="text-white" />
            </div>
            <div>
              <span className="text-2xl font-light text-white group-hover:text-white/80 transition-colors duration-300">
                Gokul GR
              </span>
              <div className="flex items-center">
                <User size={12} className="text-white/60 mr-2" />
                <span className="text-xs text-white/60 font-light tracking-wider uppercase">Developer</span>
              </div>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative text-white/80 hover:text-white transition-all duration-300 font-light tracking-wide"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:border-white/60 transition-all duration-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-8 py-6 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white/80 hover:text-white transition-colors duration-300 font-light text-lg tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;