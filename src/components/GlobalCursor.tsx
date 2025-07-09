import React, { useState, useEffect } from 'react';

const GlobalCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState('white');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect background color based on current section
    const detectBackgroundColor = () => {
      const sections = document.querySelectorAll('section, nav, footer');
      let currentColor = 'white';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;

        // Check if section is in viewport center
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          const computedStyle = window.getComputedStyle(section);
          const backgroundColor = computedStyle.backgroundColor;
          
          // Determine if background is dark or light
          if (backgroundColor.includes('rgb(0, 0, 0)') || 
              backgroundColor.includes('rgba(0, 0, 0') ||
              section.classList.contains('bg-black')) {
            currentColor = 'white';
          } else {
            currentColor = 'black';
          }
        }
      });

      setCursorColor(currentColor);
    };

    // Handle hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over interactive elements
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.classList.contains('cursor-pointer') ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('[role="button"]') ||
          target.closest('.group')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleScroll = () => {
      detectBackgroundColor();
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('scroll', handleScroll);
    
    // Initial detection
    detectBackgroundColor();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className="fixed pointer-events-none z-[9999] transition-all duration-150 ease-out mix-blend-difference"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          transform: isHovering ? 'scale(2)' : 'scale(1)',
          opacity: isHovering ? 0.6 : 1,
        }}
      >
        <div 
          className="w-3 h-3 rounded-full transition-all duration-150"
          style={{
            backgroundColor: cursorColor,
            boxShadow: isHovering ? `0 0 20px ${cursorColor}` : 'none',
          }}
        />
      </div>

      {/* Cursor ring */}
      <div 
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out mix-blend-difference"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          opacity: isHovering ? 0.8 : 0.4,
        }}
      >
        <div 
          className="w-10 h-10 rounded-full border transition-all duration-300"
          style={{
            borderColor: cursorColor,
            borderWidth: isHovering ? '2px' : '1px',
          }}
        />
      </div>

      {/* Hover effect particles */}
      {isHovering && (
        <>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="fixed pointer-events-none z-[9997] animate-ping"
              style={{
                left: mousePosition.x - 2 + Math.cos(i * 60 * Math.PI / 180) * 15,
                top: mousePosition.y - 2 + Math.sin(i * 60 * Math.PI / 180) * 15,
                animationDelay: `${i * 100}ms`,
                animationDuration: '1s',
              }}
            >
              <div 
                className="w-1 h-1 rounded-full"
                style={{
                  backgroundColor: cursorColor,
                  opacity: 0.6,
                }}
              />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default GlobalCursor;