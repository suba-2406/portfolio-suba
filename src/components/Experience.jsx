import React from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Work Experience"
          title="Industry Experience & Engineering Roles"
          description="Verified professional experience in AI development, backend microservices, and machine learning pipelines."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-[#E9D3BF] pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative group">
                
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#FAF5EF] border-4 border-[#A85F45] group-hover:scale-125 transition-transform duration-200"></div>

                {/* Job Card */}
                <div className="editorial-card p-6 sm:p-8 hover:border-[#C4775A] transition-all duration-300">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-[#E7DDD3]/60">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={17} className="text-[#A85F45]" />
                        <h3 className="text-xl font-bold text-[#49352D]">
                          {job.role}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#F5ECE1] text-[#723A27] border border-[#E9D3BF]">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-base font-bold text-[#A85F45]">
                        {job.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-[#8C7D73] gap-1 font-medium">
                      <span className="flex items-center gap-1.5 bg-[#FAF5EF] px-3 py-1 rounded-full border border-[#E7DDD3]">
                        <Calendar size={13} className="text-[#A85F45]" />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-[#8C7D73]">
                        <MapPin size={13} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[#49352D] font-medium mb-4">
                    {job.summary}
                  </p>

                  {/* Responsibilities list */}
                  <ul className="space-y-2.5 mb-6">
                    {job.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#655A54] leading-relaxed">
                        <CheckCircle2 size={16} className="text-[#A85F45] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E7DDD3]/60">
                    {job.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FAF5EF] text-[#723A27] border border-[#E9D3BF]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
