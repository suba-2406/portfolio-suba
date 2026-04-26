import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Users } from 'lucide-react';

const Volunteering = () => {
  return (
    <section className="py-16 scroll-mt-20">
      <SectionHeading title="Volunteering & Leadership" subtitle={true} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.volunteering.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-6 rounded-2xl flex items-start space-x-4"
          >
            <div className="p-3 bg-blue-500/10 rounded-full text-blue-500 shrink-0">
              <Users size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{item.role}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-2">{item.event}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.impact}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Volunteering;
