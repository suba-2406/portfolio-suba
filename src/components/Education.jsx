import React from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 sm:py-20 scroll-mt-20 bg-[#F5ECE1]/40 border-y border-[#E7DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Academic Journey"
          title="Education"
          description="Formal academic education in computer science, big data analytics, and mathematics."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`editorial-card p-6 flex flex-col justify-between ${
                index === 0 ? 'border-2 border-[#A85F45] shadow-warm-md' : ''
              }`}
            >
              <div>
                {/* Degree & Year */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="p-2 rounded-lg bg-[#F5ECE1] text-[#A85F45]">
                    <GraduationCap size={20} />
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF5EF] text-[#8C7D73] border border-[#E7DDD3]">
                    {edu.period}
                  </span>
                </div>

                {index === 0 && (
                  <span className="inline-block text-[11px] font-bold text-[#A85F45] uppercase tracking-wider mb-2">
                    Current Degree · Undergraduate
                  </span>
                )}

                <h3 className="text-lg font-bold text-[#49352D] mb-1">
                  {edu.institution}
                </h3>
                
                <p className="text-sm font-semibold text-[#A85F45] mb-1">
                  {edu.degree}
                </p>

                <p className="text-xs text-[#8C7D73] mb-4">
                  {edu.specialization}
                </p>

                {/* Coursework */}
                {edu.coursework && (
                  <div className="pt-3 border-t border-[#E7DDD3]/60 mb-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#8C7D73] mb-2">
                      Key Subjects
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((c, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[11px] px-2 py-0.5 rounded bg-[#FAF5EF] text-[#655A54] border border-[#E7DDD3]"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Score Badge */}
              <div className="pt-4 border-t border-[#E7DDD3] flex items-center justify-between">
                <span className="text-xs text-[#8C7D73] font-medium">Academic Performance</span>
                <span className="text-sm font-extrabold text-[#49352D] bg-[#F5ECE1] px-2.5 py-0.5 rounded border border-[#E9D3BF]">
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
