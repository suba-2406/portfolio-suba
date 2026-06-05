import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import Tilt from './Tilt';
import { SkillLogo } from './SkillLogo';

const Skills = () => {
  const categories = [
    { title: "Programming Languages", skills: portfolioData.skills.programming },
    { title: "Frontend Development", skills: portfolioData.skills.frontend },
    { title: "Backend Systems", skills: portfolioData.skills.backend },
    { title: "Databases & Storage", skills: portfolioData.skills.databases },
    { title: "Artificial Intelligence & ML", skills: portfolioData.skills.ai },
    { title: "Tools & Platforms", skills: portfolioData.skills.tools },
  ];

  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <SectionHeading title="My Skills" subtitle={true} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <Tilt className="glass-card p-6 sm:p-8 rounded-3xl group relative overflow-hidden h-full border border-white/20 dark:border-white/10 shadow-xl">
              {/* Soft gradient background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-100 relative z-10">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="flex items-center space-x-2 px-3 py-2 bg-slate-100/80 dark:bg-slate-800/80 text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-primary-500/40 dark:hover:border-primary-400/40 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
                  >
                    <SkillLogo name={skill} className="w-5 h-5 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-200">{skill}</span>
                  </span>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
