import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, Target, Cpu, Award, Zap, Code } from 'lucide-react';
import Tilt from './Tilt';

const About = () => {
  const cards = [
    { 
      icon: <BookOpen className="text-teal-400" size={24} />, 
      title: 'Education', 
      content: portfolioData.about.education,
      gradient: 'from-teal-500/10 to-emerald-500/5',
      glow: 'shadow-[0_0_20px_rgba(20,184,166,0.15)]',
      border: 'border-teal-500/20'
    },
    { 
      icon: <Target className="text-blue-400" size={24} />, 
      title: 'Specialization', 
      content: portfolioData.about.specialization,
      gradient: 'from-blue-500/10 to-indigo-500/5',
      glow: 'shadow-[0_0_20px_rgba(59,130,246,0.15)]',
      border: 'border-blue-500/20'
    },
    { 
      icon: <Cpu className="text-purple-400" size={24} />, 
      title: 'Interests', 
      content: portfolioData.about.interests.join(', '),
      gradient: 'from-purple-500/10 to-pink-500/5',
      glow: 'shadow-[0_0_20px_rgba(168,85,247,0.15)]',
      border: 'border-purple-500/20'
    },
  ];

  // Stats for the stats dashboard
  const stats = [
    { label: 'CGPA', value: '9.13', icon: <BookOpen size={16} className="text-emerald-400" /> },
    { label: 'Internships', value: '4', icon: <Zap size={16} className="text-teal-400" /> },
    { label: 'Hackathons', value: '4', icon: <Award size={16} className="text-purple-400" /> },
    { label: 'Projects Built', value: '21', icon: <Code size={16} className="text-blue-400" /> },
  ];

  return (
    <section id="about" className="py-16 scroll-mt-20">
      <SectionHeading title="About Me" subtitle={true} />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Summary & Stats */}
        <div className="lg:col-span-6 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {portfolioData.about.summary}
            </p>
            
            {/* Styled Quote */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group border border-white/10 shadow-lg">
               <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary-500 to-blue-500"></div>
               <p className="italic text-slate-700 dark:text-slate-300 relative z-10 font-mono text-sm leading-relaxed">
                 "Striving to build solutions that merge big data analytics with intelligent AI engines and seamless full-stack web experiences."
               </p>
            </div>
          </motion.div>

          {/* Stats Dashboard */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center shadow-md hover:border-primary-500/30 transition-colors"
              >
                <div className="p-2 bg-slate-900/40 rounded-xl mb-2">
                  {stat.icon}
                </div>
                <span className="text-2xl font-black bg-gradient-to-r from-primary-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: 3D-oriented Focus Cards & Radar */}
        <div className="lg:col-span-6 grid grid-cols-1 gap-6 relative">
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl blur-3xl opacity-50 pointer-events-none"></div>

          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Tilt className={`glass-card p-6 rounded-2xl hover:bg-white/90 dark:hover:bg-dark-card/90 bg-gradient-to-br ${card.gradient} ${card.border} ${card.glow} transition-all duration-300`}>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-white/10">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{card.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 pl-16 text-sm leading-relaxed font-semibold">
                  {card.content}
                </p>
              </Tilt>
            </motion.div>
          ))}
          
          {/* Specialization Interactive Visualizer */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center gap-6 shadow-xl relative overflow-hidden"
          >
            {/* Spinning Radar circles in SVG */}
            <div className="relative shrink-0 w-28 h-28 flex items-center justify-center bg-slate-950/40 rounded-full border border-white/5">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute w-24 h-24 border border-dashed border-primary-500/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute w-16 h-16 border border-dotted border-purple-500/30 rounded-full"
              />
              <Target className="text-primary-400 w-8 h-8 animate-pulse" />
            </div>

            {/* Metrics */}
            <div className="flex-grow w-full space-y-3 font-semibold text-xs text-slate-600 dark:text-slate-400">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">Focus Distribution</h4>
              
              <div className="space-y-1">
                <div className="flex justify-between font-mono text-[10px]">
                  <span>AI & MACHINE LEARNING</span>
                  <span className="text-primary-400">55%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '55%' }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full bg-primary-500" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-mono text-[10px]">
                  <span>DATA ANALYTICS</span>
                  <span className="text-blue-400">65%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '65%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1 }} className="h-full bg-blue-500" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-mono text-[10px]">
                  <span>FULL STACK DEV</span>
                  <span className="text-purple-400">75%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-purple-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
