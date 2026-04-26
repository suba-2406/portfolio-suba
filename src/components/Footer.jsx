import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.
        </p>
        
        <div className="flex items-center space-x-1 text-slate-500 text-sm mb-4 md:mb-0">
          <span>Built with</span>
          <Heart size={14} className="text-red-500 mx-1" />
          <span>using React & Tailwind</span>
        </div>

        <div className="flex space-x-6">
          <a href={portfolioData.hero.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-500 transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href={portfolioData.hero.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-500 transition-colors">
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
