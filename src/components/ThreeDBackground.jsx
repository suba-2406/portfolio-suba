import React, { useEffect, useRef } from 'react';

const ThreeDBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 3D particles state
    const particleCount = 60;
    const particles = [];
    const maxDepth = 1000;
    
    // Mouse coords
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX - width / 2) * 0.4;
      targetMouseY = (e.clientY - height / 2) * 0.4;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Initialize 3D particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * maxDepth,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: -Math.random() * 0.5 - 0.1, // Moving towards viewer
        size: Math.random() * 2.5 + 0.8,
        color: Math.random() > 0.5 ? 'rgba(20, 184, 166, 0.25)' : 'rgba(59, 130, 246, 0.25)', // Teal/Blue colors matching the theme
      });
    }

    const draw = () => {
      const isDark = document.documentElement.classList.contains('dark');
      
      // Dynamic trail effect matching background
      ctx.fillStyle = isDark ? 'rgba(10, 10, 10, 0.12)' : 'rgba(248, 250, 252, 0.12)';
      ctx.fillRect(0, 0, width, height);

      // Auto sway over time combined with mouse target
      const time = Date.now() * 0.0005;
      const autoSwayX = Math.sin(time) * 12;
      const autoSwayY = Math.cos(time * 0.8) * 12;

      // Interpolate mouse movement plus auto sway for constant ambient movement
      mouseX += (targetMouseX + autoSwayX - mouseX) * 0.05;
      mouseY += (targetMouseY + autoSwayY - mouseY) * 0.05;

      const fov = 400; // Perspective zoom factor
      const centerX = width / 2;
      const centerY = height / 2;

      // Update and Draw Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Reset if too close or out of view
        if (p.z <= 0) {
          p.z = maxDepth;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
        }

        // Apply mouse position sway for 3D depth perception
        const rotatedX = p.x * Math.cos(mouseX * 0.0001) - p.z * Math.sin(mouseX * 0.0001);
        const rotatedZ = p.z * Math.cos(mouseX * 0.0001) + p.x * Math.sin(mouseX * 0.0001);

        // Project onto 2D screen coordinate space
        const px = (rotatedX / rotatedZ) * fov + centerX + mouseX * 0.12;
        const py = (p.y / rotatedZ) * fov + centerY + mouseY * 0.12;

        const scale = fov / (rotatedZ + fov);
        const rSize = Math.max(0.1, p.size * scale * 2);

        // Draw particle
        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          ctx.beginPath();
          ctx.arc(px, py, rSize, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      });

      // Draw constellation lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          // Render link if close enough in 3D space
          if (dist < 180) {
            const rx1 = p1.x * Math.cos(mouseX * 0.0001) - p1.z * Math.sin(mouseX * 0.0001);
            const rz1 = p1.z * Math.cos(mouseX * 0.0001) + p1.x * Math.sin(mouseX * 0.0001);
            const px1 = (rx1 / rz1) * fov + centerX + mouseX * 0.12;
            const py1 = (p1.y / rz1) * fov + centerY + mouseY * 0.12;

            const rx2 = p2.x * Math.cos(mouseX * 0.0001) - p2.z * Math.sin(mouseX * 0.0001);
            const rz2 = p2.z * Math.cos(mouseX * 0.0001) + p2.x * Math.sin(mouseX * 0.0001);
            const px2 = (rx2 / rz2) * fov + centerX + mouseX * 0.12;
            const py2 = (p2.y / rz2) * fov + centerY + mouseY * 0.12;

            if (
              px1 >= 0 && px1 <= width && py1 >= 0 && py1 <= height &&
              px2 >= 0 && px2 <= width && py2 >= 0 && py2 <= height
            ) {
              const alpha = (1 - dist / 180) * 0.12;
              const isDarkTheme = document.documentElement.classList.contains('dark');
              ctx.strokeStyle = isDarkTheme ? `rgba(20, 184, 166, ${alpha})` : `rgba(13, 148, 136, ${alpha})`;
              ctx.lineWidth = 0.4 * (fov / (Math.min(rz1, rz2) + fov));
              ctx.beginPath();
              ctx.moveTo(px1, py1);
              ctx.lineTo(px2, py2);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none w-full h-full opacity-70" />;
};

export default ThreeDBackground;
