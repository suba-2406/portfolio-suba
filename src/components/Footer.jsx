import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, FileText, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#FAF5EF] border-t border-[#E7DDD3] py-12 text-[#655A54]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E7DDD3]">
          {/* Brand info */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold text-[#49352D] hover:text-[#A85F45] transition-colors">
              {personal.name}
            </a>
            <p className="text-xs text-[#8C7D73] mt-1">
              {personal.title} · B.Tech CSE (Big Data Analytics) at {personal.institution}
            </p>
          </div>

          {/* Social Links & Resume */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white border border-[#E7DDD3] hover:border-[#A85F45] text-[#655A54] hover:text-[#A85F45] transition-colors shadow-warm-sm"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white border border-[#E7DDD3] hover:border-[#A85F45] text-[#655A54] hover:text-[#A85F45] transition-colors shadow-warm-sm"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-white border border-[#E7DDD3] hover:border-[#A85F45] text-[#655A54] hover:text-[#A85F45] transition-colors shadow-warm-sm"
            >
              <Mail size={17} />
            </a>
            <a
              href={personal.resumeUrl}
              download="Subasree_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terracotta !py-2 !px-3.5 text-xs font-bold"
            >
              <FileText size={14} />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7D73]">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A85F45] hover:text-[#8E4B34] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
