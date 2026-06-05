import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactVisual } from './SectionVisuals';

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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 rounded-3xl flex items-center space-x-6 hover:-translate-y-1 transition-all duration-300 group border border-white/20 dark:border-white/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform shrink-0">
              <Mail size={28} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Email</p>
              <a href={`mailto:${portfolioData.contact.email}`} className="text-lg font-extrabold hover:text-primary-500 transition-colors break-all">
                {portfolioData.contact.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 rounded-3xl flex items-center space-x-6 hover:-translate-y-1 transition-all duration-300 group border border-white/20 dark:border-white/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform shrink-0">
              <Phone size={28} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Phone</p>
              <a href={`tel:${portfolioData.contact.phone}`} className="text-lg font-extrabold hover:text-blue-500 transition-colors">
                {portfolioData.contact.phone}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 rounded-3xl flex items-center space-x-6 hover:-translate-y-1 transition-all duration-300 group border border-white/20 dark:border-white/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform shrink-0">
              <MapPin size={28} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Location</p>
              <p className="text-lg font-extrabold text-slate-800 dark:text-slate-100">
                {portfolioData.contact.location}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Hologram Mail Globe Simulation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 w-full animate-float"
        >
          <ContactVisual />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
