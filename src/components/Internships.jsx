import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

const Internships = () => {
  return (
    <section id="experience" className="py-16 scroll-mt-20">
      <SectionHeading title="Internship Experience" subtitle={true} />
      
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-primary-500/30 pl-8 ml-4">
          {portfolioData.internships.map((internship, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[41px] top-1.5 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
              
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center">
                      <Briefcase className="mr-2 text-primary-500" size={20} />
                      {internship.role}
                    </h3>
                    <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400">
                      {internship.company}
                    </h4>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-4 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-semibold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {internship.duration}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {internship.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {internship.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
