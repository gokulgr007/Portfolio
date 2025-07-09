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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Mobile Responsive */}
          <div className="flex items-center group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border border-white/20 flex items-center justify-center mr-3 sm:mr-4 group-hover:border-white/60 transition-all duration-300">
              <Code size={20} className="sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <span className="text-lg sm:text-2xl font-light text-white group-hover:text-white/80 transition-colors duration-300">
                Gokul GR
              </span>
              <div className="flex items-center">
                <User size={10} className="sm:w-3 sm:h-3 text-white/60 mr-1 sm:mr-2" />
                <span className="text-xs text-white/60 font-light tracking-wider uppercase">Developer</span>
              </div>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 lg:space-x-12">
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
              className="relative w-10 h-10 sm:w-12 sm:h-12 border border-white/20 flex items-center justify-center text-white hover:border-white/60 transition-all duration-300 focus:outline-none"
            >
              {/* Animated hamburger icon */}
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                }`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu with smooth animation */}
      <div className={`md:hidden fixed inset-0 top-16 sm:top-20 z-40 transition-all duration-700 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-700 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        ></div>
        
        {/* Menu content */}
        <div className={`relative bg-black/95 backdrop-blur-md border-t border-white/10 transform transition-all duration-700 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="px-4 sm:px-6 py-8 space-y-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block text-white/80 hover:text-white transition-all duration-300 font-light text-xl sm:text-2xl tracking-wide transform transition-all duration-700 ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center py-3 border-b border-white/10 hover:border-white/30 transition-colors duration-300">
                  <span className="mr-4 text-white/40 font-mono text-sm">0{index + 1}</span>
                  <span>{item.name}</span>
                </div>
              </a>
            ))}
            
            {/* Mobile social links */}
            <div className={`pt-8 border-t border-white/10 transform transition-all duration-700 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              <p className="text-white/60 text-sm mb-4 font-light">Connect with me</p>
              <div className="flex space-x-6">
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                  <span className="sr-only">Email</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;