import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const categories = [
    { title: "Programming", skills: portfolioData.skills.programming },
    { title: "Frontend", skills: portfolioData.skills.frontend },
    { title: "Backend", skills: portfolioData.skills.backend },
    { title: "Databases", skills: portfolioData.skills.databases },
    { title: "AI/ML", skills: portfolioData.skills.ai },
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
            className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
          >
            {/* Soft gradient background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-100 relative z-10">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-sm font-medium rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
