import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold heading-gradient tracking-tighter">
            PORTFOLIO.
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 border-l border-slate-300 dark:border-slate-700 pl-4">
              <a href={portfolioData.hero.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-500 transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href={portfolioData.hero.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-500 transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 focus:outline-none">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 text-slate-500">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 dark:text-slate-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass-nav absolute top-full left-0 w-full flex flex-col py-4 px-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="py-3 text-base font-medium text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-4 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <a href={portfolioData.hero.github} className="text-slate-500"><GithubIcon size={24} /></a>
            <a href={portfolioData.hero.linkedin} className="text-slate-500"><LinkedinIcon size={24} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
