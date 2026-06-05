import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, TrendingUp, Trophy, Code2, 
  Terminal, Shield, Users, Heart, Sparkles 
} from 'lucide-react';

// 1. Internship 3D Work-Graph Simulator
export const InternshipsVisual = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = containerRef.current?.clientWidth || 400);
    let height = (canvas.height = 350);

    const handleResize = () => {
      if (containerRef.current) {
        width = canvas.width = containerRef.current.clientWidth;
        height = canvas.height = 350;
      }
    };
    window.addEventListener('resize', handleResize);

    // 3D Nodes representation of Subasree's technologies/skills
    const skills = [
      { name: 'React.js', x: -95, y: -50, z: -70, color: '#22d3ee' },
      { name: 'Node.js', x: 95, y: -50, z: 70, color: '#4ade80' },
      { name: 'MongoDB', x: -75, y: 50, z: 70, color: '#34d399' },
      { name: 'Express', x: 75, y: 50, z: -70, color: '#a78bfa' },
      { name: 'Python', x: 0, y: -100, z: 0, color: '#f59e0b' },
      { name: 'AI/ML', x: -110, y: 0, z: 0, color: '#f43f5e' },
      { name: 'Analytics', x: 110, y: 0, z: 0, color: '#3b82f6' }
    ];

    const nodes = skills.map(skill => ({
      ...skill,
      originalX: skill.x,
      originalY: skill.y,
      originalZ: skill.z,
      radius: 8,
      px: 0,
      py: 0,
      scale: 1
    }));

    const connections = [
      [0, 1], [1, 2], [2, 3], [3, 0], // MERN
      [4, 0], [4, 1], // Python connections
      [5, 4], [5, 0], // AI connections
      [6, 1], [6, 2], // Analytics connections
      [0, 2], [1, 3]  // Cross links
    ];

    const packets = connections.map(([fromIdx, toIdx]) => ({
      from: fromIdx,
      to: toIdx,
      progress: Math.random(),
      speed: 0.004 + Math.random() * 0.006,
      color: Math.random() > 0.5 ? '#22d3ee' : '#6366f1'
    }));

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left - width / 2) * 0.02;
      targetMouseY = (e.clientY - rect.top - height / 2) * 0.02;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    const handleMouseLeave = () => {
      targetMouseX = 0;
      targetMouseY = 0;
    };
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let angleY = 0.005;
    let angleX = 0.003;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      const rotY = angleY + mouseX * 0.01;
      const rotX = angleX + mouseY * 0.01;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      nodes.forEach(node => {
        let x1 = node.originalX * cosY - node.originalZ * sinY;
        let z1 = node.originalZ * cosY + node.originalX * sinY;
        let y2 = node.originalY * cosX - z1 * sinX;
        let z2 = z1 * cosX + node.originalY * sinX;

        node.originalX = x1;
        node.originalY = y2;
        node.originalZ = z2;

        const fov = 350;
        const distance = 250;
        const scale = fov / (distance + z2);
        node.scale = scale;
        node.px = x1 * scale + width / 2;
        node.py = y2 * scale + height / 2;
      });

      // Connections
      connections.forEach(([fromIdx, toIdx]) => {
        const n1 = nodes[fromIdx];
        const n2 = nodes[toIdx];
        const avgDepth = (n1.originalZ + n2.originalZ) / 2;
        const alpha = Math.max(0.05, 0.25 - (avgDepth + 100) / 300);

        ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
        ctx.lineWidth = Math.max(0.5, 1.5 * ((n1.scale + n2.scale) / 2));
        ctx.beginPath();
        ctx.moveTo(n1.px, n1.py);
        ctx.lineTo(n2.px, n2.py);
        ctx.stroke();
      });

      // Packets
      packets.forEach(packet => {
        packet.progress += packet.speed;
        if (packet.progress >= 1) {
          packet.progress = 0;
          packet.speed = 0.004 + Math.random() * 0.006;
        }

        const n1 = nodes[packet.from];
        const n2 = nodes[packet.to];
        const px = n1.px + (n2.px - n1.px) * packet.progress;
        const py = n1.py + (n2.py - n1.py) * packet.progress;
        const scale = n1.scale + (n2.scale - n1.scale) * packet.progress;

        ctx.fillStyle = packet.color;
        ctx.shadowColor = packet.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(px, py, Math.max(1.5, 3.5 * scale), 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Nodes
      nodes.forEach(node => {
        const radius = node.radius * node.scale;
        
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(node.px, node.py, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#0a0a0f';
        ctx.beginPath();
        ctx.arc(node.px, node.py, radius * 0.6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.font = `bold ${Math.max(8, Math.floor(10 * node.scale))}px monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(node.name, node.px, node.py - radius - 5);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[350px] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [perspective:600px] [transform:rotateX(60deg)] origin-top opacity-30"></div>
      
      <div className="absolute top-4 right-4 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full font-mono text-[9px] text-indigo-400 tracking-wider uppercase font-bold flex items-center gap-1.5 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"></span>
        3D Work-Graph Simulator
      </div>

      <canvas ref={canvasRef} className="w-full h-full block cursor-pointer" />
    </div>
  );
};

// 2. Hackathons Hacking Terminal/Core Visualizer
export const HackathonsVisual = () => {
  return (
    <div className="relative w-full h-[350px] bg-gradient-to-tr from-purple-950 via-slate-950 to-slate-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between p-4">
      {/* 3D Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

      {/* Top Bar simulating a Code Sandbox */}
      <div className="flex justify-between items-center bg-slate-950/60 p-2.5 rounded-xl border border-white/5 select-none font-mono text-[10px] text-purple-400">
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="ml-2">hackathon_sandbox.py</span>
        </div>
        <Terminal size={12} className="text-purple-400/70" />
      </div>

      {/* Center 3D animated core */}
      <div className="relative flex-grow flex items-center justify-center">
        {/* Orbital System */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="w-36 h-36 border border-dashed border-purple-500/20 rounded-full absolute flex items-center justify-center"
        >
          <div className="w-2 h-2 rounded-full bg-purple-400 absolute top-0"></div>
          <div className="w-2 h-2 rounded-full bg-indigo-400 absolute bottom-0"></div>
        </motion.div>

        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 border border-dotted border-pink-500/30 rounded-full absolute flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-pink-400 absolute left-0"></div>
        </motion.div>

        {/* Central Core */}
        <motion.div 
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="z-10 bg-slate-900/90 p-5 rounded-2xl border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.25)]"
        >
          <Trophy className="text-purple-400 w-10 h-10 animate-pulse" />
        </motion.div>
      </div>

      {/* Simulated 3D Cyber Deck/Terminal outputs */}
      <div className="font-mono text-[9px] text-slate-500 bg-slate-950/40 p-2.5 rounded-xl border border-white/5 flex justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-purple-400/80">&gt; npm run hackathon:build</span>
          <span className="text-emerald-500/80">✔ Compilation Successful</span>
          <span className="text-blue-400/80">✔ 4 Hackathons Loaded</span>
        </div>
        <div className="flex flex-col items-end justify-center font-bold text-purple-400">
          <span>VIT HACK 24</span>
          <span>SIH 24</span>
        </div>
      </div>
    </div>
  );
};

// 3. Volunteering Community / Leader Network Visualizer
export const VolunteeringVisual = () => {
  return (
    <div className="relative w-full h-[350px] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
      {/* 3D Space Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_60%)]"></div>

      {/* Orbit paths */}
      <div className="absolute w-56 h-56 border border-emerald-500/10 rounded-full animate-pulse"></div>
      <div className="absolute w-40 h-40 border border-teal-500/10 rounded-full"></div>

      {/* Connection lines (SVG overlay) */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <line x1="50" y1="50" x2="150" y2="175" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" />
        <line x1="300" y1="80" x2="150" y2="175" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" />
        <line x1="260" y1="280" x2="150" y2="175" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" />
        <line x1="60" y1="300" x2="150" y2="175" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" />
      </svg>

      {/* Animated nodes representing coordinators and events */}
      <motion.div 
        animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-16 bg-slate-900/80 p-2.5 rounded-xl border border-emerald-500/30 flex items-center space-x-2 shadow-lg"
      >
        <Users className="text-emerald-400 w-3.5 h-3.5" />
        <span className="text-[9px] font-bold text-slate-200">Datatrix Head</span>
      </motion.div>

      <motion.div 
        animate={{ y: [10, -10, 10], x: [8, -8, 8] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-12 bg-slate-900/80 p-2.5 rounded-xl border border-teal-500/30 flex items-center space-x-2 shadow-lg"
      >
        <Sparkles className="text-teal-400 w-3.5 h-3.5" />
        <span className="text-[9px] font-bold text-slate-200">Dashcraft Lead</span>
      </motion.div>

      <motion.div 
        animate={{ y: [-8, 8, -8], x: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-16 left-10 bg-slate-900/80 p-2.5 rounded-xl border border-teal-500/30 flex items-center space-x-2 shadow-lg"
      >
        <Users className="text-teal-400 w-3.5 h-3.5" />
        <span className="text-[9px] font-bold text-slate-200">Texus Volunteer</span>
      </motion.div>

      <motion.div 
        animate={{ y: [12, -12, 12], x: [-6, 6, -6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-16 bg-slate-900/80 p-2.5 rounded-xl border border-emerald-500/30 flex items-center space-x-2 shadow-lg"
      >
        <Heart className="text-emerald-400 w-3.5 h-3.5" />
        <span className="text-[9px] font-bold text-slate-200">Event Impact</span>
      </motion.div>

      {/* Central Core: Leadership Heart */}
      <motion.div 
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="bg-slate-950 p-6 rounded-full border-2 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.3)] z-10 flex items-center justify-center"
      >
        <Heart className="text-emerald-400 w-8 h-8 fill-emerald-500/20" />
      </motion.div>
    </div>
  );
};

// 4. Contact/Reachout Interactive Digital Beacon & Grid Mesh
export const ContactVisual = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [statusText, setStatusText] = useState('SYSTEM: READY');
  const [latency, setLatency] = useState(15);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = containerRef.current?.clientWidth || 400);
    let height = (canvas.height = 350);

    const handleResize = () => {
      if (containerRef.current) {
        width = canvas.width = containerRef.current.clientWidth;
        height = canvas.height = 350;
      }
    };
    window.addEventListener('resize', handleResize);

    // Grid config
    const cols = 14;
    const rows = 14;
    const spacingX = 26;
    const spacingY = 26;

    // Signal packets flowing to center beacon
    const packets = [];
    const maxPackets = 12;
    for (let i = 0; i < maxPackets; i++) {
      packets.push({
        // Start on random edge of grid
        col: Math.random() > 0.5 ? 0 : Math.floor(Math.random() * cols),
        row: Math.random() > 0.5 ? 0 : Math.floor(Math.random() * rows),
        targetCol: Math.floor(cols / 2),
        targetRow: Math.floor(rows / 2),
        progress: Math.random(),
        speed: 0.01 + Math.random() * 0.015,
        color: i % 2 === 0 ? '#f43f5e' : '#a78bfa' // Rose or Purple signal
      });
    }

    // Interactivity
    let mouseX = 0;
    let mouseY = 0;
    let isMouseOver = false;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      // Translate mouse coordinates relative to the center of the grid plane
      mouseX = e.clientX - rect.left - width / 2;
      mouseY = e.clientY - rect.top - height / 2 - 20;
      isMouseOver = true;
    };

    const handleMouseLeave = () => {
      isMouseOver = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;
    const angleX = 1.1; // Lay grid flat
    const angleZ = 0.4; // Rotate slightly

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.04;

      // Project grid points
      const grid = [];
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosZ = Math.cos(angleZ);
      const sinZ = Math.sin(angleZ);
      const fov = 300;

      for (let r = 0; r < rows; r++) {
        grid[r] = [];
        for (let c = 0; c < cols; c++) {
          // Centered grid coordinates
          const lx = (c - (cols - 1) / 2) * spacingX;
          const ly = (r - (rows - 1) / 2) * spacingY;

          // Compute distance from center of grid
          const distToCenter = Math.sqrt(lx * lx + ly * ly);

          // Wave effect undulating outward
          let lz = Math.sin(distToCenter * 0.05 - time) * 12;

          // Mouse distortion
          if (isMouseOver) {
            // Project mouse position onto the plane's coordinate system
            // Simple distance check
            const dx = lx - mouseX;
            const dy = ly - mouseY;
            const distToMouse = Math.sqrt(dx * dx + dy * dy);
            if (distToMouse < 90) {
              const force = (1 - distToMouse / 90) * 25;
              lz += Math.sin(time * 2) * force; // ripple excitation
            }
          }

          // 3D Rotations
          // Rotate around Z axis (yaw)
          const rx1 = lx * cosZ - ly * sinZ;
          const ry1 = ly * cosZ + lx * sinZ;

          // Rotate around X axis (pitch)
          const rx2 = rx1;
          const ry2 = ry1 * cosX - lz * sinX;
          const rz2 = lz * cosX + ry1 * sinX;

          // Perspective Projection
          const scale = fov / (fov + rz2);
          const px = rx2 * scale + width / 2;
          const py = ry2 * scale + height / 2 + 40; // translate down for better composition

          grid[r][c] = { px, py, scale, z: rz2 };
        }
      }

      // Draw Grid lines
      ctx.lineWidth = 0.8;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const pt = grid[r][c];

          // Draw horizontal line to next column
          if (c < cols - 1) {
            const nextPt = grid[r][c + 1];
            const avgScale = (pt.scale + nextPt.scale) / 2;
            const alpha = Math.max(0.02, 0.18 * avgScale);
            ctx.strokeStyle = `rgba(244, 63, 94, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(pt.px, pt.py);
            ctx.lineTo(nextPt.px, nextPt.py);
            ctx.stroke();
          }

          // Draw vertical line to next row
          if (r < rows - 1) {
            const nextPt = grid[r + 1][c];
            const avgScale = (pt.scale + nextPt.scale) / 2;
            const alpha = Math.max(0.02, 0.18 * avgScale);
            ctx.strokeStyle = `rgba(167, 139, 250, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(pt.px, pt.py);
            ctx.lineTo(nextPt.px, nextPt.py);
            ctx.stroke();
          }
        }
      }

      // Draw active signal packets traveling along grid toward center
      packets.forEach(p => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.col = Math.random() > 0.5 ? 0 : Math.floor(Math.random() * cols);
          p.row = Math.random() > 0.5 ? 0 : Math.floor(Math.random() * rows);
          p.speed = 0.01 + Math.random() * 0.015;
        }

        // Interpolate grid cell coordinates
        const cVal = p.col + (p.targetCol - p.col) * p.progress;
        const rVal = p.row + (p.targetRow - p.row) * p.progress;

        const cFloor = Math.floor(cVal);
        const rFloor = Math.floor(rVal);
        const cCeil = Math.min(cols - 1, cFloor + 1);
        const rCeil = Math.min(rows - 1, rFloor + 1);

        const cFract = cVal - cFloor;
        const rFract = rVal - rFloor;

        // Bilinear interpolation of projected screen coordinates
        if (grid[rFloor] && grid[rFloor][cFloor]) {
          const pt00 = grid[rFloor][cFloor];
          const pt10 = grid[rFloor][cCeil];
          const pt01 = grid[rCeil][cFloor];
          const pt11 = grid[rCeil][cCeil];

          const px = (1 - rFract) * ((1 - cFract) * pt00.px + cFract * pt10.px) +
                     rFract * ((1 - cFract) * pt01.px + cFract * pt11.px);
          const py = (1 - rFract) * ((1 - cFract) * pt00.py + cFract * pt10.py) +
                     rFract * ((1 - cFract) * pt01.py + cFract * pt11.py);
          const scale = pt00.scale;

          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 6 * scale;
          ctx.beginPath();
          ctx.arc(px, py, 3.5 * scale, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw the central transmission beacon (the "Receiver")
      const centerCol = Math.floor(cols / 2);
      const centerRow = Math.floor(rows / 2);
      const beacon = grid[centerRow][centerCol];

      if (beacon) {
        const scale = beacon.scale;

        // 1. Draw glowing ground ripples
        const pulse = Math.sin(time * 3) * 0.5 + 0.5;
        ctx.strokeStyle = `rgba(244, 63, 94, ${0.4 + pulse * 0.2})`;
        ctx.lineWidth = 1.5 * scale;
        ctx.beginPath();
        ctx.ellipse(beacon.px, beacon.py, 22 * scale * (1 + pulse * 0.3), 10 * scale * (1 + pulse * 0.3), 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = `rgba(167, 139, 250, ${0.3 - pulse * 0.1})`;
        ctx.beginPath();
        ctx.ellipse(beacon.px, beacon.py, 38 * scale, 17 * scale, 0, 0, Math.PI * 2);
        ctx.stroke();

        // 2. Draw vertical beacon light beam
        const gradient = ctx.createLinearGradient(beacon.px, beacon.py, beacon.px, beacon.py - 140 * scale);
        gradient.addColorStop(0, 'rgba(244, 63, 94, 0.7)');
        gradient.addColorStop(0.3, 'rgba(167, 139, 250, 0.4)');
        gradient.addColorStop(1, 'rgba(167, 139, 250, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(beacon.px - 6 * scale, beacon.py);
        ctx.lineTo(beacon.px + 6 * scale, beacon.py);
        ctx.lineTo(beacon.px + 1 * scale, beacon.py - 140 * scale);
        ctx.lineTo(beacon.px - 1 * scale, beacon.py - 140 * scale);
        ctx.closePath();
        ctx.fill();

        // 3. Glowing core sphere
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#f43f5e';
        ctx.shadowBlur = 15 * scale;
        ctx.beginPath();
        ctx.arc(beacon.px, beacon.py - 4 * scale, 5 * scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Interval to randomly change latency and status message for interactive tech aesthetic
    const statusInterval = setInterval(() => {
      const messages = [
        'SYSTEM: SECURE',
        'PING: RESPONSE OK',
        'SIGNAL: BROADCASTING',
        'NET: ESTABLISHED',
        'PORT: 5173 OPEN'
      ];
      setStatusText(messages[Math.floor(Math.random() * messages.length)]);
      setLatency(Math.floor(10 + Math.random() * 8));
    }, 4000);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      clearInterval(statusInterval);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[350px] bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
      {/* Tech Grid Background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.02),transparent_65%)]"></div>

      {/* Floating Monospace Stats for that premium tech visualizer vibe */}
      <div className="absolute top-4 left-4 font-mono text-[9px] text-slate-500 flex flex-col gap-1 select-none pointer-events-none">
        <div>CHANNEL: SECURE_SSL</div>
        <div>LATENCY: {latency}ms</div>
      </div>
      
      <div className="absolute top-4 right-4 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full font-mono text-[9px] text-rose-400 tracking-wider uppercase font-bold flex items-center gap-1.5 shadow-sm select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></span>
        {statusText}
      </div>

      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />

      {/* Interactive indicator at bottom */}
      <div className="absolute bottom-4 font-mono text-[9px] text-rose-400/50 select-none pointer-events-none tracking-widest uppercase">
        Move cursor to perturb signal field
      </div>
    </div>
  );
};
