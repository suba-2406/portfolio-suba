import React, { useRef, useState } from 'react';

const Tilt = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ rX: 0, rY: 0, glareX: 50, glareY: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to the card center
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Calculate rotation angles (max 10 degrees to keep it elegant)
    const rX = -(mouseY / (height / 2)) * 10;
    const rY = (mouseX / (width / 2)) * 10;
    
    // Track cursor coordinates for the glare overlay
    const glareX = ((e.clientX - rect.left) / width) * 100;
    const glareY = ((e.clientY - rect.top) / height) * 100;

    setCoords({ rX, rY, glareX, glareY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCoords({ rX: 0, rY: 0, glareX: 50, glareY: 50 });
  };

  const transformStyle = isHovering
    ? `perspective(1000px) rotateX(${coords.rX}deg) rotateY(${coords.rY}deg) scale3d(1.02, 1.02, 1.02)`
    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovering ? 'transform 0.05s ease-out' : 'transform 0.5s ease',
        transformStyle: 'preserve-3d',
      }}
      className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Glare/Shine Effect */}
      {isHovering && (
        <div
          style={{
            background: `radial-gradient(circle 150px at ${coords.glareX}% ${coords.glareY}%, rgba(20, 184, 166, 0.15), transparent)`,
          }}
          className="absolute inset-0 z-50 pointer-events-none rounded-[inherit]"
        />
      )}
      
      {/* Container that pops components forward in Z-space */}
      <div 
        style={{ 
          transform: isHovering ? 'translateZ(25px)' : 'translateZ(0px)', 
          transition: 'transform 0.3s ease',
          transformStyle: 'preserve-3d' 
        }} 
        className="h-full w-full"
      >
        {children}
      </div>
    </div>
  );
};

export default Tilt;
