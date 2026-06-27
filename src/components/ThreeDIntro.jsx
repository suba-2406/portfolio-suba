import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Activity, Database, ArrowRight } from 'lucide-react';

const ThreeDIntro = ({ onComplete }) => {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [loadStage, setLoadStage] = useState('Initializing core graphics...');
  const [isEntering, setIsEntering] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Simulation of loading progress
  useEffect(() => {
    const stages = [
      { threshold: 0, text: 'Initializing core graphics...' },
      { threshold: 25, text: 'Loading 3D workspace engines...' },
      { threshold: 50, text: 'Fetching project achievements & data...' },
      { threshold: 75, text: 'Compiling neural network node visualizations...' },
      { threshold: 95, text: 'Finalizing high-fidelity rendering pipeline...' },
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setShowButton(true);
          setLoadStage('Neural Workspace Ready.');
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 4) + 1;
        const currentStage = stages
          .slice()
          .reverse()
          .find((stage) => next >= stage.threshold);
        
        if (currentStage) {
          setLoadStage(currentStage.text);
        }

        return Math.min(next, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  // 3D Canvas rendering loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let animationFrameId;
    const particleCount = 180;
    const particles = [];
    const sphereRadius = Math.min(width, height) * 0.25;

    // Generate spherical coordinates for particles
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      particles.push({
        // Spherical polar coordinate vectors
        x: sphereRadius * Math.sin(phi) * Math.cos(theta),
        y: sphereRadius * Math.sin(phi) * Math.sin(theta),
        z: sphereRadius * Math.cos(phi),
        // Original positions to calculate warp vectors
        ox: sphereRadius * Math.sin(phi) * Math.cos(theta),
        oy: sphereRadius * Math.sin(phi) * Math.sin(theta),
        oz: sphereRadius * Math.cos(phi),
        
        size: Math.random() * 2 + 1,
        color: i % 3 === 0 
          ? 'rgba(20, 184, 166, 0.8)' // primary teal
          : i % 3 === 1 
          ? 'rgba(59, 130, 246, 0.8)'  // blue
          : 'rgba(168, 85, 247, 0.8)', // purple
        speedFactor: Math.random() * 0.5 + 0.5
      });
    }

    let angleX = 0.003;
    let angleY = 0.005;
    let warpFactor = 1.0;
    let cameraZ = 600;

    // Mouse interactive sway
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX - width / 2) * 0.0005;
      mouseY = (e.clientY - height / 2) * 0.0005;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      // Background clear with slight trail
      ctx.fillStyle = 'rgba(10, 10, 10, 0.2)';
      ctx.fillRect(0, 0, width, height);

      // Rotation speeds influenced by hover/click and entry warp
      let currentAngleY = angleY + mouseX;
      let currentAngleX = angleX + mouseY;

      if (isEntering) {
        warpFactor += 0.8;
        currentAngleY *= 15;
        currentAngleX *= 15;
        cameraZ = Math.max(50, cameraZ - 25);
      }

      const cosY = Math.cos(currentAngleY);
      const sinY = Math.sin(currentAngleY);
      const cosX = Math.cos(currentAngleX);
      const sinX = Math.sin(currentAngleX);

      const fov = 400;
      const centerX = width / 2;
      const centerY = height / 2;

      // Draw constellation connections and particles
      particles.forEach((p, idx) => {
        // 1. Rotate around Y axis
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // 2. Rotate around X axis
        let y2 = p.x * sinY + p.y * cosX - z1 * sinX; // added complex rotation
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Apply warp speed vector pushing particles outwards on the Z axis
        if (isEntering) {
          // Push particles towards the camera (negative z direction relative to perspective)
          p.z -= 15 * p.speedFactor * warpFactor;
          // When they pass the camera plane, wrap them around to create dynamic tunnel streaks
          if (z2 + cameraZ <= 10) {
            z2 = 800;
            p.x = (Math.random() - 0.5) * width * 2;
            p.y = (Math.random() - 0.5) * height * 2;
          }
        } else {
          // Keep rotating sphere coordinates in place
          p.x = x1;
          p.y = y1;
          p.z = z2;
        }

        // Perspective divide
        const distance = z2 + cameraZ;
        const scale = fov / Math.max(1, distance);
        const sx = p.x * scale + centerX;
        const sy = p.y * scale + centerY;

        // Draw particle if in front of camera
        if (distance > 10 && sx >= 0 && sx <= width && sy >= 0 && sy <= height) {
          const depthAlpha = Math.max(0.1, Math.min(1.0, 1.0 - distance / 1000));
          const finalAlpha = isEntering ? depthAlpha * 0.4 : depthAlpha;
          
          ctx.beginPath();
          // Draw streak lines during warp
          if (isEntering) {
            ctx.moveTo(sx, sy);
            // Draw lines pointing to original centers
            const prevScale = fov / Math.max(1, distance + 40 * warpFactor);
            const psx = p.x * prevScale + centerX;
            const psy = p.y * prevScale + centerY;
            ctx.lineTo(psx, psy);
            ctx.strokeStyle = p.color.replace('0.8', `${finalAlpha}`);
            ctx.lineWidth = p.size * scale * 0.8;
            ctx.stroke();
          } else {
            ctx.arc(sx, sy, Math.max(0.2, p.size * scale * 0.8), 0, Math.PI * 2);
            ctx.fillStyle = p.color.replace('0.8', `${finalAlpha}`);
            ctx.fill();
          }
        }
      });

      // Draw faint connections between nearby nodes on the sphere to represent digital network mesh
      if (!isEntering) {
        for (let i = 0; i < particles.length; i += 3) {
          for (let j = i + 1; j < Math.min(particles.length, i + 6); j++) {
            const p1 = particles[i];
            const p2 = particles[j];

            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dz = p1.z - p2.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < 120) {
              const d1 = p1.z + cameraZ;
              const d2 = p2.z + cameraZ;
              
              if (d1 > 10 && d2 > 10) {
                const s1 = fov / d1;
                const sx1 = p1.x * s1 + centerX;
                const sy1 = p1.y * s1 + centerY;

                const s2 = fov / d2;
                const sx2 = p2.x * s2 + centerX;
                const sy2 = p2.y * s2 + centerY;

                const opacity = (1 - dist / 120) * 0.15;
                ctx.strokeStyle = `rgba(20, 184, 166, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(sx1, sy1);
                ctx.lineTo(sx2, sy2);
                ctx.stroke();
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEntering]);

  const handleEnter = () => {
    setIsEntering(true);
    // Proceed to portfolio main page after warp animation duration
    setTimeout(() => {
      onComplete();
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col justify-center items-center overflow-hidden font-sans text-slate-100 select-none">
      {/* 3D background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Top Diagnostics HUD */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-[10px] font-mono text-slate-500 tracking-wider pointer-events-none">
        <div className="flex items-center space-x-2">
          <Activity size={12} className="text-teal-500 animate-pulse" />
          <span>SYS_STATUS: ACTIVE</span>
        </div>
        <div className="hidden sm:block">
          <span>PORT: 5173 // SECURE: SSL</span>
        </div>
        <div>
          <span>B.TECH CSE - BIG DATA ANALYTICS</span>
        </div>
      </div>

      {/* Center UI loading module */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
        <AnimatePresence mode="wait">
          {!isEntering && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -6, 0]
              }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                default: { duration: 0.6 }
              }}
              className="w-full flex flex-col items-center"
            >
              {/* Spinning Logo / Indicator */}
              <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border border-dashed border-teal-500/40"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-2 rounded-full border border-dotted border-blue-500/50"
                />
                <Cpu className="text-teal-400 w-8 h-8" />
              </div>

              {/* Title Header */}
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-widest bg-gradient-to-r from-teal-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent mb-2 uppercase">
                SUBASREE M
              </h1>
              <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-8">
                Portfolio Experience
              </p>

              {/* Progress & Diagnostics */}
              <div className="w-full space-y-4 mb-8">
                {/* Diagnostics Stage */}
                <div className="flex justify-between items-center text-xs font-mono text-slate-400 h-5">
                  <span className="truncate">{loadStage}</span>
                  <span className="text-teal-400 font-bold ml-2">{progress}%</span>
                </div>
                
                {/* Linear Glow Progress Bar */}
                <div className="h-1.5 w-full bg-slate-900 border border-white/5 rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'easeOut' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_1.5s_infinite] pointer-events-none" />
                </div>
              </div>

              {/* Enter Button */}
              <div className="h-14 flex items-center justify-center">
                {showButton ? (
                  <motion.button
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleEnter}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 text-slate-950 font-bold text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(20,184,166,0.35)] hover:shadow-[0_0_40px_rgba(20,184,166,0.55)] transition-all duration-300 flex items-center space-x-2 border border-teal-300/30"
                  >
                    <span>Enter Experience</span>
                    <ArrowRight size={14} className="stroke-[3]" />
                  </motion.button>
                ) : (
                  <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                    Loading resources...
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom status specs HUD */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-[9px] font-mono text-slate-600 pointer-events-none">
        <div className="flex items-center space-x-4">
          <span>REACT v19</span>
          <span>FRAMER-MOTION v12</span>
        </div>
        <div>
          <span>© 2026 SUBASREE</span>
        </div>
      </div>
    </div>
  );
};

export default ThreeDIntro;
