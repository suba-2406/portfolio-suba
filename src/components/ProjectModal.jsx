import React, { useEffect } from 'react';
import { 
  X, ExternalLink, CheckCircle2, AlertCircle, 
  Layers, UserCheck, Target, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { GithubIcon } from './Icons';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#49352D]/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl border border-[#E7DDD3] shadow-warm-xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Navigation Bar */}
        <div className="px-6 py-4 border-b border-[#E7DDD3] flex items-center justify-between bg-[#FAF5EF]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A85F45] bg-[#F5ECE1] border border-[#E9D3BF] px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-xs font-semibold text-[#8C7D73] hidden sm:inline-block">
              Priority #{project.priority}
            </span>
          </div>
          
          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-1.5 rounded-lg text-[#655A54] hover:text-[#49352D] hover:bg-[#E9D3BF]/50 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#655A54]">
          
          {/* Header Title & Status */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#49352D] tracking-tight">
                {project.title}
              </h2>
              <span className="text-xs font-bold text-[#723A27] bg-[#E9D3BF]/60 border border-[#D8B597] px-2.5 py-0.5 rounded-md">
                {project.status}
              </span>
            </div>
            <p className="text-base text-[#655A54] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* My Role & Specific Contribution (High Priority for Recruiter Review) */}
          <div className="p-5 rounded-xl bg-[#F5ECE1] border border-[#E9D3BF]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#A85F45] flex items-center gap-2 mb-2">
              <UserCheck size={18} />
              <span>My Individual Contribution & Role</span>
            </h3>
            <p className="text-sm sm:text-base text-[#49352D] font-medium leading-relaxed">
              {project.contribution}
            </p>
          </div>

          {/* Technology Stack Badges */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C7D73] mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#FAF5EF] text-[#49352D] border border-[#E7DDD3]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Grid: Problem, Target Users & Goals */}
          {caseStudy && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Problem Statement */}
              <div className="editorial-card p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-[#49352D] mb-2">
                  <AlertCircle size={18} className="text-[#A85F45]" />
                  <span>Problem Statement</span>
                </div>
                <p className="text-sm leading-relaxed text-[#655A54]">
                  {caseStudy.problem}
                </p>
              </div>

              {/* Target Users */}
              <div className="editorial-card p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-[#49352D] mb-2">
                  <Target size={18} className="text-[#A85F45]" />
                  <span>Target Users</span>
                </div>
                <p className="text-sm leading-relaxed text-[#655A54]">
                  {caseStudy.targetUsers}
                </p>
              </div>

              {/* Goals & Requirements */}
              <div className="editorial-card p-5 md:col-span-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#49352D] mb-3">
                  <CheckCircle2 size={18} className="text-[#A85F45]" />
                  <span>Project Goals & Requirements</span>
                </div>
                <ul className="space-y-2">
                  {caseStudy.goals.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#655A54]">
                      <ArrowRight size={15} className="text-[#A85F45] shrink-0 mt-0.5" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* UI/UX Decisions & Reasoning (Crucial for AI Generalist Design role) */}
              <div className="editorial-card p-5 md:col-span-2 bg-[#FAF5EF]/60">
                <div className="flex items-center gap-2 text-sm font-bold text-[#49352D] mb-3">
                  <Layers size={18} className="text-[#A85F45]" />
                  <span>UI/UX Decisions & Design Process</span>
                </div>
                <ul className="space-y-2.5">
                  {caseStudy.designDecisions.map((decision, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#655A54]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A85F45] shrink-0 mt-2"></span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Architecture & Challenges */}
              <div className="editorial-card p-5 md:col-span-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#49352D] mb-2">
                  <ShieldCheck size={18} className="text-[#A85F45]" />
                  <span>Technical Architecture & Engineering Challenges</span>
                </div>
                <p className="text-sm leading-relaxed text-[#655A54] mb-3">
                  {caseStudy.technicalArchitecture}
                </p>
                <div className="space-y-2">
                  {caseStudy.challenges.map((challenge, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[#FAF5EF] border border-[#E7DDD3] text-xs text-[#655A54] leading-relaxed">
                      {challenge}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-4 border-t border-[#E7DDD3] bg-[#FAF5EF] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-warm !py-2 !px-4 text-xs font-bold"
              >
                <GithubIcon size={15} />
                <span>View Code Repository</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terracotta !py-2 !px-4 text-xs font-bold"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-bold text-[#655A54] hover:text-[#49352D] hover:bg-[#E7DDD3]/50 transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
