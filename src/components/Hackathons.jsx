import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Code2 } from 'lucide-react';
import Tilt from './Tilt';
import { HackathonsVisual } from './SectionVisuals';

const Hackathons = () => {
  return (
    <section className="py-16 scroll-mt-20">
      <SectionHeading title="Hackathons & Competitions" subtitle={true} />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: 3D Animated Hacking Simulation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 w-full order-2 lg:order-1"
        >
          <HackathonsVisual />
        </motion.div>

        {/* Right Side: Hackathon Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-2">
          {portfolioData.hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt className="glass-card p-5 rounded-2xl border border-white/20 dark:border-white/10 shadow-xl h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-500">
                        <Code2 size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 leading-tight">{hackathon.name}</h3>
                        <span className="text-xs font-semibold text-primary-500">{hackathon.role}</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                      {hackathon.year}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mt-3 text-xs leading-relaxed">
                    {hackathon.description}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
