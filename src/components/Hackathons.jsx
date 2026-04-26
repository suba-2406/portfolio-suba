import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Code2 } from 'lucide-react';

const Hackathons = () => {
  return (
    <section className="py-16 scroll-mt-20">
      <SectionHeading title="Hackathons & Competitions" subtitle={true} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.hackathons.map((hackathon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-6 rounded-2xl hover:shadow-primary-500/10 hover:border-primary-500/30 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{hackathon.name}</h3>
                  <span className="text-sm font-semibold text-primary-500">{hackathon.role}</span>
                </div>
              </div>
              <span className="text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                {hackathon.year}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm leading-relaxed">
              {hackathon.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
