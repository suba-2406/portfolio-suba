import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ThreeDWorkspace from './ThreeDWorkspace';

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center pt-24 pb-12">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6"
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
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
          >
            Hi, I'm <span className="heading-gradient">{portfolioData.hero.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-6"
          >
            {portfolioData.hero.role}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed"
          >
            {portfolioData.hero.intro}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
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

        {/* Right Column: 3D Interactive Terminal Workspace */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <ThreeDWorkspace photo={portfolioData.hero.photo} />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
