import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Star, GitFork, Code } from 'lucide-react';
import { GithubIcon } from './Icons';
import Tilt from './Tilt';

const GithubShowcase = () => {
  const repos = [
    { 
      name: 'ELARA-AI-PERSONALIZED-LEARNING', 
      description: "AI-powered personalized learning platform that adapts to each student's performance and learning style.", 
      stars: 12, 
      forks: 4, 
      url: 'https://github.com/suba-2406/ELARA-AI-PERSONALIZED-LEARNING',
      language: 'JavaScript'
    },
    { 
      name: 'LAW-AI', 
      description: 'An AI-powered legal document manager and assistant for lawyers, featuring smart summarization and document generation.', 
      stars: 15, 
      forks: 5, 
      url: 'https://github.com/suba-2406/LAW-AI',
      language: 'Python'
    },
    { 
      name: 'studymate-ai', 
      description: 'A smart student assistant that helps with learning, notes uploading, question answering, and study planning using AI.', 
      stars: 10, 
      forks: 3, 
      url: 'https://github.com/suba-2406/studymate-ai',
      language: 'Python'
    },
    { 
      name: 'SPORTIFY', 
      description: 'A professional networking platform designed for athletes to showcase stats, featuring AI recruiter summaries and ML filtering.', 
      stars: 14, 
      forks: 6, 
      url: 'https://github.com/suba-2406/SPORTIFY',
      language: 'JavaScript'
    },
    { 
      name: 'visitor-management-system', 
      description: 'A secure MERN-stack system for managing organizational visitor registrations and logs efficiently.', 
      stars: 9, 
      forks: 2, 
      url: 'https://github.com/suba-2406/visitor-management-system',
      language: 'JavaScript'
    },
    { 
      name: 'self-pruning-neural-network', 
      description: 'A neural network architecture implementation focusing on dynamic pruning of nodes during training.', 
      stars: 8, 
      forks: 1, 
      url: 'https://github.com/suba-2406/self-pruning-neural-network',
      language: 'Python'
    }
  ];

  return (
    <section className="py-16 scroll-mt-20">
      <SectionHeading title="GitHub Showcase" subtitle={true} />
      
      <div className="flex flex-col items-center mb-10">
        <a 
          href={portfolioData.hero.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full font-bold hover:shadow-lg transition-all hover:-translate-y-1 hover:scale-105"
        >
          <GithubIcon size={20} />
          <span>Follow me on GitHub</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <Tilt className="glass-card h-full rounded-2xl border border-white/20 dark:border-white/10 hover:border-primary-500/50 transition-colors group flex flex-col justify-between">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 flex flex-col h-full justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <GithubIcon className="text-slate-700 dark:text-slate-300 group-hover:text-primary-500 transition-colors" size={22} />
                    <h3 className="font-bold text-base md:text-lg text-slate-800 dark:text-slate-100 truncate group-hover:text-primary-500 transition-colors">{repo.name}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-16 line-clamp-3">
                    {repo.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 border-t border-slate-100 dark:border-slate-800/50 pt-4">
                  <div className="flex space-x-4 text-xs font-semibold text-slate-500">
                    <span className="flex items-center"><Star size={14} className="mr-1 text-yellow-500/80" /> {repo.stars}</span>
                    <span className="flex items-center"><GitFork size={14} className="mr-1 text-blue-500/80" /> {repo.forks}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md border border-slate-200/50 dark:border-slate-700/50 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                    {repo.language}
                  </span>
                </div>
              </a>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GithubShowcase;
