import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, TrendingUp, Trophy, Code2, 
  Terminal, Shield, Users, Heart, Sparkles 
} from 'lucide-react';

// 1. Internship Career Growth Visualizer
export const InternshipsVisual = () => {
  return (
    <div className="relative w-full h-[350px] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
      {/* 3D Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [perspective:500px] [transform:rotateX(60deg)] origin-top opacity-40"></div>
      
      {/* Ambient glowing fields */}
      <div className="absolute w-44 h-44 rounded-full bg-teal-500/10 blur-[50px] top-10 left-10 animate-pulse"></div>
      <div className="absolute w-44 h-44 rounded-full bg-blue-500/10 blur-[50px] bottom-10 right-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 w-full max-w-[280px] h-full flex flex-col justify-around py-8 select-none">
        {/* Track Line */}
        <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-primary-500 via-blue-500 to-indigo-500">
          {/* Traveling Laser Pulse */}
          <motion.div 
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 -left-[3px] w-2 h-16 bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#22d3ee]"
          />
        </div>

        {/* Milestone 1: Alfido Tech */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center space-x-4 ml-3"
        >
          <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white border-4 border-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.6)] z-20 shrink-0">
            <Briefcase size={12} />
          </div>
          <div className="bg-slate-900/80 backdrop-blur-sm p-3 rounded-xl border border-white/5 flex-grow">
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary-400">Current</span>
            <h4 className="text-xs font-bold text-white">MERN Stack Intern</h4>
            <p className="text-[10px] text-slate-400">Alfido Tech</p>
          </div>
        </motion.div>

        {/* Milestone 2: ApexPlanet */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center space-x-4 ml-3"
        >
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white border-4 border-slate-950 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-20 shrink-0">
            <TrendingUp size={12} />
          </div>
          <div className="bg-slate-900/80 backdrop-blur-sm p-3 rounded-xl border border-white/5 flex-grow">
            <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400">Upcoming</span>
            <h4 className="text-xs font-bold text-white">Data Analytics</h4>
            <p className="text-[10px] text-slate-400">ApexPlanet</p>
          </div>
        </motion.div>

        {/* Milestone 3: Upstride */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center space-x-4 ml-3"
        >
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white border-4 border-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.6)] z-20 shrink-0">
            <Sparkles size={12} />
          </div>
          <div className="bg-slate-900/80 backdrop-blur-sm p-3 rounded-xl border border-white/5 flex-grow">
            <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-400">Completed</span>
            <h4 className="text-xs font-bold text-white">AI Engineer Intern</h4>
            <p className="text-[10px] text-slate-400">Upstride</p>
          </div>
        </motion.div>
      </div>

      {/* Floating abstract rings in corner */}
      <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-48 h-48 border border-white/5 rounded-full pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full border border-dashed border-teal-500/10 rounded-full"
        />
      </div>
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
