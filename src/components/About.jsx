import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, Target, Cpu } from 'lucide-react';

const About = () => {
  const cards = [
    { icon: <BookOpen className="text-primary-500" size={24} />, title: 'Education', content: portfolioData.about.education },
    { icon: <Target className="text-blue-500" size={24} />, title: 'Specialization', content: portfolioData.about.specialization },
    { icon: <Cpu className="text-purple-500" size={24} />, title: 'Interests', content: portfolioData.about.interests.join(', ') },
  ];

  return (
    <section id="about" className="py-16 scroll-mt-20">
      <SectionHeading title="About Me" subtitle={true} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {portfolioData.about.summary}
          </p>
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-blue-500"></div>
             <p className="italic text-slate-700 dark:text-slate-300 relative z-10">
               "Striving to build solutions that merge data analytics with seamless web experiences."
             </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:bg-white/80 dark:hover:bg-dark-card/80 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4 mb-2">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 pl-16">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
