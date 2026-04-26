import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 scroll-mt-20">
      <SectionHeading title="Get In Touch" subtitle={true} />
      
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-4">Reach Out</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-8 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group"
        >
          <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 transition-transform">
            <Mail size={32} />
          </div>
          <p className="text-sm text-slate-500 mb-2">Email</p>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-lg font-bold hover:text-primary-500 transition-colors break-all">
            {portfolioData.contact.email}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group"
        >
          <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
            <Phone size={32} />
          </div>
          <p className="text-sm text-slate-500 mb-2">Phone</p>
          <a href={`tel:${portfolioData.contact.phone}`} className="text-lg font-bold hover:text-blue-500 transition-colors">
            {portfolioData.contact.phone}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-8 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group"
        >
          <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
            <MapPin size={32} />
          </div>
          <p className="text-sm text-slate-500 mb-2">Location</p>
          <p className="text-lg font-bold">
            {portfolioData.contact.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
