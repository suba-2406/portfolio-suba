import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Users } from 'lucide-react';
import { VolunteeringVisual } from './SectionVisuals';

const Volunteering = () => {
  return (
    <section className="py-16 scroll-mt-20">
      <SectionHeading title="Volunteering & Leadership" subtitle={true} />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Volunteering Items */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portfolioData.volunteering.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-5 rounded-2xl flex items-start space-x-4 border border-white/20 dark:border-white/10 shadow-xl"
            >
              <div className="p-3 bg-blue-500/10 rounded-full text-blue-500 shrink-0">
                <Users size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">{item.role}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold text-xs mb-2">{item.event}</p>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  {item.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: 3D Community Network */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 w-full"
        >
          <VolunteeringVisual />
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteering;
