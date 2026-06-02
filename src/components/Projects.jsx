import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-16 scroll-mt-20">
      <SectionHeading title="Featured Projects" subtitle={true} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-semibold px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
