import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Cpu, BookOpen, GraduationCap, 
  Sparkles, Orbit, Atom, Compass,
  Trophy, Activity, ShieldCheck, Scale,
  QrCode, UserCheck, KeyRound, FileSearch, 
  Receipt, ScanLine, FileText
} from 'lucide-react';

const ProjectVisual = ({ title, index }) => {
  // Select different icons, gradients, and shapes based on the project index or title
  const getVisualConfig = () => {
    switch (index) {
      case 0: // Aviora / StudyMate AI
        return {
          gradient: 'from-teal-950 via-slate-900 to-blue-950',
          glow: 'bg-teal-500/20',
          icon: <Brain className="text-teal-400 w-12 h-12" />,
          accentIcon: <GraduationCap className="text-blue-400 w-6 h-6" />,
          title: 'StudyMate AI',
          color: 'teal',
          shapes: (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="w-32 h-32 border border-dashed border-teal-500/20 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="w-24 h-24 border border-dotted border-blue-500/30 rounded-full absolute"
              />
            </div>
          )
        };
      case 1: // ELARA
        return {
          gradient: 'from-purple-950 via-slate-900 to-indigo-950',
          glow: 'bg-purple-500/20',
          icon: <Orbit className="text-purple-400 w-12 h-12" />,
          accentIcon: <Sparkles className="text-indigo-400 w-6 h-6" />,
          title: 'ELARA',
          color: 'purple',
          shapes: (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-28 h-28 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-xl absolute"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-36 h-20 border border-purple-500/30 rounded-full -skew-y-12"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-36 border border-indigo-500/20 rounded-full skew-x-12 absolute"
              />
            </div>
          )
        };
      case 2: // Sportify
        return {
          gradient: 'from-blue-950 via-slate-900 to-cyan-950',
          glow: 'bg-blue-500/20',
          icon: <Trophy className="text-blue-400 w-12 h-12" />,
          accentIcon: <Activity className="text-cyan-400 w-6 h-6" />,
          title: 'Sportify',
          color: 'blue',
          shapes: (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-1/2 absolute bottom-0 bg-slate-950/40 border-t border-blue-500/20 flex flex-col justify-around px-4 overflow-hidden">
                <motion.div 
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  className="h-[2px] w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                />
                <motion.div 
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="h-[2px] w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                />
              </div>
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="w-24 h-24 border border-blue-500/20 rounded-lg transform rotate-45"
              />
            </div>
          )
        };
      case 3: // Law AI
        return {
          gradient: 'from-amber-950 via-slate-900 to-slate-950',
          glow: 'bg-amber-500/15',
          icon: <Scale className="text-amber-400 w-12 h-12" />,
          accentIcon: <ShieldCheck className="text-slate-400 w-6 h-6" />,
          title: 'Law AI',
          color: 'amber',
          shapes: (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ 
                  y: [-10, 10, -10]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-28 h-20 border border-amber-500/20 rounded-lg flex flex-col p-2 gap-1 bg-slate-950/40"
              >
                <div className="h-1 w-12 bg-amber-400/40 rounded"></div>
                <div className="h-1 w-full bg-slate-700/40 rounded"></div>
                <div className="h-1 w-4/5 bg-slate-700/40 rounded"></div>
                <div className="h-1 w-full bg-slate-700/40 rounded"></div>
              </motion.div>
              <motion.div 
                animate={{ y: [20, -100] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="h-[1px] w-36 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent absolute"
              />
            </div>
          )
        };
      case 4: // Visitor Management System
        return {
          gradient: 'from-rose-950 via-slate-900 to-slate-950',
          glow: 'bg-rose-500/15',
          icon: <QrCode className="text-rose-400 w-12 h-12" />,
          accentIcon: <UserCheck className="text-emerald-400 w-6 h-6" />,
          title: 'Visitor Management',
          color: 'rose',
          shapes: (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ 
                  scale: [0.8, 1.1, 0.8],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="w-36 h-36 border-2 border-rose-500/20 rounded-xl"
              />
              <motion.div 
                animate={{ y: [-50, 50, -50] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="h-[2px] w-40 bg-rose-500/70 shadow-[0_0_10px_#f43f5e] absolute"
              />
            </div>
          )
        };
      case 5: // DocsAI
        return {
          gradient: 'from-violet-950 via-slate-900 to-fuchsia-950',
          glow: 'bg-violet-500/20',
          icon: <FileSearch className="text-violet-400 w-12 h-12" />,
          accentIcon: <Receipt className="text-fuchsia-400 w-6 h-6" />,
          title: 'DocsAI',
          color: 'violet',
          shapes: (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ 
                  rotateY: [0, 180, 360],
                  z: [0, 20, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-24 h-32 border border-violet-500/30 bg-slate-950/60 rounded-lg flex flex-col p-3 shadow-xl"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                <div className="h-2 w-10 bg-violet-400/60 rounded mb-2"></div>
                <div className="h-1.5 w-full bg-slate-700/50 rounded mb-1"></div>
                <div className="h-1.5 w-5/6 bg-slate-700/50 rounded mb-1"></div>
                <div className="h-1.5 w-4/5 bg-slate-700/50 rounded mb-1"></div>
                <div className="h-1.5 w-full bg-slate-700/50 rounded"></div>
              </motion.div>
            </div>
          )
        };
      default:
        return {
          gradient: 'from-slate-900 via-slate-800 to-slate-950',
          glow: 'bg-primary-500/10',
          icon: <Cpu className="text-primary-400 w-12 h-12" />,
          accentIcon: <Sparkles className="text-primary-400 w-6 h-6" />,
          title: 'Project',
          color: 'primary',
          shapes: null
        };
    }
  };

  const config = getVisualConfig();

  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${config.gradient} flex items-center justify-center overflow-hidden`}>
      {/* 3D Wireframe Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

      {/* Floating Particles in Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div 
          animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-8 left-12 w-2 h-2 rounded-full bg-white/40"
        />
        <motion.div 
          animate={{ y: [15, -15, 15], x: [8, -8, 8] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-12 right-16 w-1.5 h-1.5 rounded-full bg-white/30"
        />
        <motion.div 
          animate={{ y: [-20, 20, -20], x: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-white/20"
        />
      </div>

      {/* Ambient Radial Glow */}
      <div className={`absolute w-32 h-32 rounded-full ${config.glow} blur-[40px] pointer-events-none`}></div>

      {/* Rotating and animated Shapes */}
      {config.shapes}

      {/* Core Floating 3D Node Container */}
      <motion.div 
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.1, translateZ: 30 }}
        className="relative z-10 flex flex-col items-center justify-center pointer-events-none"
      >
        {/* Floating Ring / Halo */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative bg-slate-900/80 p-5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm"
        >
          {config.icon}
          
          {/* Floating Small Accent Icon */}
          <motion.div
            animate={{ 
              y: [-12, -8, -12],
              x: [24, 26, 24],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-3 -right-3 bg-slate-950 p-1.5 rounded-lg border border-white/10 shadow-lg"
          >
            {config.accentIcon}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Subtle Tag */}
      <div className="absolute bottom-3 right-4 font-mono text-[10px] text-white/20 tracking-widest uppercase pointer-events-none">
        Visualizer v1.0
      </div>
    </div>
  );
};

export default ProjectVisual;
