import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section className="py-16 scroll-mt-20">
      <SectionHeading title="Certifications" subtitle={true} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card flex flex-col sm:flex-row overflow-hidden rounded-2xl group"
          >
            <div className="w-full sm:w-1/3 h-48 sm:h-auto overflow-hidden relative">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent sm:bg-gradient-to-r"></div>
            </div>
            
            <div className="p-6 flex flex-col justify-center flex-grow">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <Award className="mr-2 text-yellow-500" size={20} />
                {cert.title}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">{cert.issuer}</p>
              <p className="text-slate-500 text-sm mb-4">Issued: {cert.date}</p>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors mt-auto"
              >
                View Credential <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
