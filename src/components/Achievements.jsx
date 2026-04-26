import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  return (
    <section className="py-16 scroll-mt-20">
      <SectionHeading title="Key Achievements" subtitle={true} />
      
      <div className="glass-card p-8 rounded-3xl">
        <ul className="space-y-6">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start"
            >
              <div className="mr-4 mt-1">
                <div className="p-1.5 bg-yellow-500/20 rounded-full text-yellow-600 dark:text-yellow-400">
                  <Trophy size={16} />
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium text-lg leading-relaxed">
                {achievement}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
