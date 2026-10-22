import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF5EF]/95 backdrop-blur-md shadow-warm-sm border-b border-[#E7DDD3] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Personal Brand */}
          <a href="#" className="flex flex-col group">
            <span className="text-xl font-bold tracking-tight text-[#49352D] group-hover:text-[#A85F45] transition-colors">
              {portfolioData.personal.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#655A54] hover:text-[#A85F45] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A85F45] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Resume Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-[#655A54] hover:text-[#A85F45] hover:bg-[#F5ECE1] transition-colors"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-[#655A54] hover:text-[#A85F45] hover:bg-[#F5ECE1] transition-colors"
            >
              <LinkedinIcon size={19} />
            </a>
            <a
              href={portfolioData.personal.resumeUrl}
              download="Subasree_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terracotta !py-2 !px-4 text-xs tracking-wide uppercase font-bold"
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Subasree_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden btn-terracotta !py-1.5 !px-3 text-xs font-bold"
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-[#49352D] hover:bg-[#F5ECE1] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#E7DDD3] shadow-warm-lg px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm font-semibold text-[#49352D] hover:bg-[#F5ECE1] hover:text-[#A85F45] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-[#E7DDD3] flex items-center justify-between">
            <div className="flex space-x-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#655A54] hover:bg-[#F5ECE1] hover:text-[#A85F45]"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#655A54] hover:bg-[#F5ECE1] hover:text-[#A85F45]"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
            <a
              href={portfolioData.personal.resumeUrl}
              download="Subasree_Resume.pdf"
              className="btn-terracotta !py-2 !px-4 text-xs font-bold"
            >
              <FileText size={15} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
