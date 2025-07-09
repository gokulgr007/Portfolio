import React, { useState, useEffect, useRef } from 'react';

const GlobalCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorColor, setCursorColor] = useState('white');
  const [isVisible, setIsVisible] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number; timestamp: number }>>([]);
  const [sparkles, setSparkles] = useState<Array<{ x: number; y: number; id: number; timestamp: number }>>([]);
  
  const lastPosition = useRef({ x: 0, y: 0 });
  const trailIdRef = useRef(0);
  const rippleIdRef = useRef(0);
  const sparkleIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      
      // Calculate velocity for dynamic effects
      const vel = {
        x: newPosition.x - lastPosition.current.x,
        y: newPosition.y - lastPosition.current.y
      };
      setVelocity(vel);
      
      setMousePosition(newPosition);
      setIsVisible(true);
      lastPosition.current = newPosition;

      // Add trail points
      setTrail(prev => {
        const newTrail = [...prev, { 
          x: newPosition.x, 
          y: newPosition.y, 
          id: trailIdRef.current++ 
        }];
        return newTrail.slice(-15); // Keep last 15 points
      });

      // Add sparkles when moving fast
      const speed = Math.sqrt(vel.x * vel.x + vel.y * vel.y);
      if (speed > 5 && Math.random() > 0.7) {
        setSparkles(prev => [...prev, {
          x: newPosition.x + (Math.random() - 0.5) * 40,
          y: newPosition.y + (Math.random() - 0.5) * 40,
          id: sparkleIdRef.current++,
          timestamp: Date.now()
        }]);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      // Create ripple effect on click
      setRipples(prev => [...prev, {
        x: mousePosition.x,
        y: mousePosition.y,
        id: rippleIdRef.current++,
        timestamp: Date.now()
      }]);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
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
        const viewportCenter = window.innerHeight / 2;

        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          const computedStyle = window.getComputedStyle(section);
          const backgroundColor = computedStyle.backgroundColor;
          
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
      
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.classList.contains('cursor-pointer') ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('[role="button"]') ||
          target.closest('.group') ||
          target.closest('input') ||
          target.closest('textarea')) {
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
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('scroll', handleScroll);
    
    detectBackgroundColor();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mousePosition]);

  // Clean up old effects
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now();
      setRipples(prev => prev.filter(ripple => now - ripple.timestamp < 1000));
      setSparkles(prev => prev.filter(sparkle => now - sparkle.timestamp < 800));
    }, 100);

    return () => clearInterval(cleanup);
  }, []);

  if (!isVisible) return null;

  const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
  const isMovingFast = speed > 3;

  return (
    <>
      {/* Trail Effect */}
      {trail.map((point, index) => {
        const opacity = (index + 1) / trail.length * 0.6;
        const size = (index + 1) / trail.length * 8 + 2;
        
        return (
          <div
            key={point.id}
            className="fixed pointer-events-none z-[9995] transition-all duration-100"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              opacity,
            }}
          >
            <div
              className="rounded-full blur-sm"
              style={{
                width: size,
                height: size,
                backgroundColor: cursorColor,
                boxShadow: `0 0 ${size * 2}px ${cursorColor}`,
              }}
            />
          </div>
        );
      })}

      {/* Main Cursor - Outer Ring */}
      <div 
        className="fixed pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x - 25,
          top: mousePosition.y - 25,
          transform: `scale(${isHovering ? 1.8 : isClicking ? 0.8 : 1}) rotate(${isMovingFast ? velocity.x * 2 : 0}deg)`,
          opacity: isHovering ? 0.9 : 0.7,
        }}
      >
        <div 
          className="w-12 h-12 rounded-full border-2 transition-all duration-200 relative"
          style={{
            borderColor: cursorColor,
            borderStyle: isHovering ? 'dashed' : 'solid',
            animation: isHovering ? 'spin 2s linear infinite' : 'none',
            boxShadow: isHovering ? `0 0 30px ${cursorColor}40` : `0 0 15px ${cursorColor}20`,
          }}
        >
          {/* Inner rotating elements */}
          {isHovering && (
            <>
              <div 
                className="absolute w-2 h-2 rounded-full top-1 left-1/2 transform -translate-x-1/2"
                style={{ backgroundColor: cursorColor }}
              />
              <div 
                className="absolute w-2 h-2 rounded-full bottom-1 left-1/2 transform -translate-x-1/2"
                style={{ backgroundColor: cursorColor }}
              />
              <div 
                className="absolute w-2 h-2 rounded-full left-1 top-1/2 transform -translate-y-1/2"
                style={{ backgroundColor: cursorColor }}
              />
              <div 
                className="absolute w-2 h-2 rounded-full right-1 top-1/2 transform -translate-y-1/2"
                style={{ backgroundColor: cursorColor }}
              />
            </>
          )}
        </div>
      </div>

      {/* Main Cursor - Center Dot */}
      <div 
        className="fixed pointer-events-none z-[10000] transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: `scale(${isClicking ? 2 : isHovering ? 1.5 : 1})`,
        }}
      >
        <div 
          className="w-2 h-2 rounded-full transition-all duration-100"
          style={{
            backgroundColor: cursorColor,
            boxShadow: `0 0 ${isHovering ? 20 : 10}px ${cursorColor}`,
          }}
        />
      </div>

      {/* Magnetic Field Effect */}
      {isHovering && (
        <div 
          className="fixed pointer-events-none z-[9998] animate-pulse"
          style={{
            left: mousePosition.x - 40,
            top: mousePosition.y - 40,
          }}
        >
          <div 
            className="w-20 h-20 rounded-full border opacity-30"
            style={{
              borderColor: cursorColor,
              animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
            }}
          />
        </div>
      )}

      {/* Click Ripples */}
      {ripples.map((ripple) => {
        const age = Date.now() - ripple.timestamp;
        const progress = age / 1000;
        const scale = 1 + progress * 5;
        const opacity = Math.max(0, 1 - progress);

        return (
          <div
            key={ripple.id}
            className="fixed pointer-events-none z-[9997]"
            style={{
              left: ripple.x - 25,
              top: ripple.y - 25,
              transform: `scale(${scale})`,
              opacity,
            }}
          >
            <div 
              className="w-12 h-12 rounded-full border-2"
              style={{
                borderColor: cursorColor,
                animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
              }}
            />
          </div>
        );
      })}

      {/* Sparkle Effects */}
      {sparkles.map((sparkle) => {
        const age = Date.now() - sparkle.timestamp;
        const progress = age / 800;
        const opacity = Math.max(0, 1 - progress);
        const scale = 1 - progress * 0.5;

        return (
          <div
            key={sparkle.id}
            className="fixed pointer-events-none z-[9996]"
            style={{
              left: sparkle.x - 3,
              top: sparkle.y - 3,
              transform: `scale(${scale}) rotate(${progress * 180}deg)`,
              opacity,
            }}
          >
            <div 
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: cursorColor,
                boxShadow: `0 0 8px ${cursorColor}`,
              }}
            />
          </div>
        );
      })}

      {/* Orbital Elements */}
      {isHovering && (
        <>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="fixed pointer-events-none z-[9997]"
              style={{
                left: mousePosition.x - 2 + Math.cos(Date.now() * 0.005 + i * 120 * Math.PI / 180) * 30,
                top: mousePosition.y - 2 + Math.sin(Date.now() * 0.005 + i * 120 * Math.PI / 180) * 30,
              }}
            >
              <div 
                className="w-1 h-1 rounded-full animate-pulse"
                style={{
                  backgroundColor: cursorColor,
                  opacity: 0.8,
                  boxShadow: `0 0 6px ${cursorColor}`,
                }}
              />
            </div>
          ))}
        </>
      )}

      {/* Speed Lines */}
      {isMovingFast && (
        <>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="fixed pointer-events-none z-[9994]"
              style={{
                left: mousePosition.x - velocity.x * (i + 1) * 2,
                top: mousePosition.y - velocity.y * (i + 1) * 2,
                opacity: Math.max(0, 0.8 - i * 0.15),
              }}
            >
              <div 
                className="w-0.5 h-4 rounded-full"
                style={{
                  backgroundColor: cursorColor,
                  transform: `rotate(${Math.atan2(velocity.y, velocity.x) * 180 / Math.PI + 90}deg)`,
                }}
              />
            </div>
          ))}
        </>
      )}

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default GlobalCursor;