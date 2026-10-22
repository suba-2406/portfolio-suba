import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowRight, ExternalLink, BookOpen, 
  Layers, CheckCircle2, UserCheck, Sparkles 
} from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Selected Work"
          title="Verified Projects & Technical Case Studies"
          description="Curated projects demonstrating AI application development, backend system architecture, full-stack engineering, and user-centered interface design."
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="editorial-card flex flex-col justify-between overflow-hidden group hover:border-[#C4775A] transition-all duration-300"
            >
              <div>
                {/* Card Top Category & Priority Bar */}
                <div className="p-6 pb-4 border-b border-[#E7DDD3]/70 bg-[#FAF5EF]/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A85F45] bg-[#F5ECE1] border border-[#E9D3BF] px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-[#8C7D73]">
                    Project 0{project.priority}
                  </span>
                </div>

                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#49352D] group-hover:text-[#A85F45] transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#655A54] leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* My Contribution Callout Box */}
                  <div className="p-3.5 rounded-xl bg-[#FAF5EF] border border-[#E7DDD3] mb-5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#A85F45] uppercase tracking-wider mb-1.5">
                      <UserCheck size={14} />
                      <span>My Contribution</span>
                    </div>
                    <p className="text-xs text-[#49352D] font-medium leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>

                  {/* Verified Project Highlights */}
                  <ul className="space-y-1.5 mb-6">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-[#655A54]">
                        <CheckCircle2 size={13} className="text-[#A85F45] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#FAF5EF] text-[#655A54] border border-[#E7DDD3]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-4 border-t border-[#E7DDD3] bg-[#FAF5EF]/40 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A85F45] hover:text-[#8E4B34] transition-colors group/btn"
                >
                  <BookOpen size={14} />
                  <span>Case Study & Details</span>
                  <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View code for ${project.title}`}
                    className="p-2 rounded-lg text-[#655A54] hover:text-[#49352D] hover:bg-[#F5ECE1] transition-colors"
                  >
                    <GithubIcon size={17} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
