import React, { useState } from 'react';

const ThreeDWorkspace = ({ photo }) => {
  const [coords, setCoords] = useState({ rX: 0, rY: 0, glareX: 50, glareY: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coords relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Rotate max 12 degrees for an elegant 3D tilt
    const rX = -(mouseY / (height / 2)) * 12;
    const rY = (mouseX / (width / 2)) * 12;
    
    // Glare coordinates
    const glareX = ((e.clientX - rect.left) / width) * 100;
    const glareY = ((e.clientY - rect.top) / height) * 100;

    setCoords({ rX, rY, glareX, glareY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setCoords({ rX: 0, rY: 0, glareX: 50, glareY: 50 });
  };

  const transformStyle = isHovering
    ? `perspective(1000px) rotateX(${coords.rX}deg) rotateY(${coords.rY}deg) scale3d(1.03, 1.03, 1.03)`
    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

  return (
    <div className="relative w-full max-w-[260px] sm:max-w-[300px] mx-auto lg:mx-0">
      {/* Background glow shadow - ambient lighting behind the photo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-blue-500/20 rounded-3xl blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"></div>

      {/* Main 3D Card Wrapper */}
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: transformStyle,
          transition: isHovering ? 'transform 0.05s ease-out' : 'transform 0.5s ease',
          transformStyle: 'preserve-3d'
        }}
        className="relative overflow-hidden w-full aspect-[3/4] bg-white/10 dark:bg-slate-900/10 backdrop-blur-md border border-slate-200/40 dark:border-white/10 rounded-3xl shadow-2xl p-3"
      >
        {/* Dynamic glare overlay */}
        {isHovering && (
          <div
            style={{
              background: `radial-gradient(circle 220px at ${coords.glareX}% ${coords.glareY}%, rgba(20, 184, 166, 0.15), transparent)`,
            }}
            className="absolute inset-0 z-50 pointer-events-none rounded-[inherit]"
          />
        )}

        {/* Outer Glass Border Frame */}
        <div 
          style={{ transform: 'translateZ(15px)' }}
          className="w-full h-full rounded-[1.25rem] overflow-hidden bg-slate-950/20 dark:bg-slate-950/40 border border-slate-300/30 dark:border-white/5 relative"
        >
          {/* Natural profile image with no overlays on top */}
          <img 
            src={photo} 
            alt="Subasree M" 
            className="w-full h-full object-cover object-center select-none"
            style={{ transform: 'translateZ(10px)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ThreeDWorkspace;
