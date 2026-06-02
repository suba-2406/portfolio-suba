import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="w-full flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative group"
        >
          {/* Subtle glowing ambient background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-blue-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          <img 
            src={portfolioData.hero.photo} 
            alt={portfolioData.hero.name} 
            className="relative w-36 h-48 md:w-44 md:h-56 rounded-3xl object-cover object-[center_20%] border-4 border-white/10 dark:border-white/20 shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
          </span>
          <span className="text-sm font-medium">Available for work</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Hi, I'm <span className="heading-gradient">{portfolioData.hero.name}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-8 max-w-3xl"
        >
          {portfolioData.hero.role}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed"
        >
          {portfolioData.hero.intro}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a href="#projects" className="btn-primary flex items-center justify-center space-x-2">
            <span>View Work</span>
            <ArrowRight size={18} />
          </a>
          <a href={portfolioData.hero.resume} target="_blank" rel="noopener noreferrer" download="Resume_Subasree.pdf" className="btn-secondary flex items-center justify-center space-x-2">
            <span>Download Resume</span>
            <Download size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
