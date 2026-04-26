import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Star, GitFork } from 'lucide-react';
import { GithubIcon } from './Icons';

const GithubShowcase = () => {
  // Placeholder data for GitHub repos since direct API call might not be configured
  const repos = [
    { name: 'ELARA', description: 'AI-Powered Personalized Learning Platform', stars: 12, forks: 4, url: '#' },
    { name: 'Aviora', description: 'StudyMate AI intelligence system', stars: 8, forks: 2, url: '#' },
    { name: 'Law-AI', description: 'Legal Document Management Assistant', stars: 15, forks: 5, url: '#' },
  ];

  return (
    <section className="py-16 scroll-mt-20">
      <SectionHeading title="GitHub Showcase" subtitle={true} />
      
      <div className="flex flex-col items-center mb-8">
        <a 
          href={portfolioData.hero.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full font-bold hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <GithubIcon size={20} />
          <span>Follow me on GitHub</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <motion.a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-6 rounded-2xl hover:border-primary-500/50 transition-colors group block"
          >
            <div className="flex items-center space-x-3 mb-3">
              <GithubIcon className="text-slate-700 dark:text-slate-300 group-hover:text-primary-500 transition-colors" size={24} />
              <h3 className="font-bold text-lg truncate group-hover:text-primary-500 transition-colors">{repo.name}</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-10 line-clamp-2">
              {repo.description}
            </p>
            <div className="flex space-x-4 text-sm font-medium text-slate-500">
              <span className="flex items-center"><Star size={14} className="mr-1" /> {repo.stars}</span>
              <span className="flex items-center"><GitFork size={14} className="mr-1" /> {repo.forks}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default GithubShowcase;
