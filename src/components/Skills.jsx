import React from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { 
  Code2, Brain, Layout, Server, Database, Wrench, 
  CheckCircle2, Sparkles 
} from 'lucide-react';

const Skills = () => {
  const { skills } = portfolioData;

  const getCategoryIcon = (index) => {
    switch (index) {
      case 0:
        return <Code2 className="text-[#A85F45]" size={20} />;
      case 1:
        return <Brain className="text-[#A85F45]" size={20} />;
      case 2:
        return <Layout className="text-[#A85F45]" size={20} />;
      case 3:
        return <Server className="text-[#A85F45]" size={20} />;
      case 4:
        return <Database className="text-[#A85F45]" size={20} />;
      case 5:
      default:
        return <Wrench className="text-[#A85F45]" size={20} />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Core Competencies"
          title="Technical Skills & Methodologies"
          description="Curated and grouped based on hands-on project implementations, engineering coursework, and verified competencies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((category, index) => (
            <div
              key={index}
              className="editorial-card p-6 flex flex-col justify-between hover:border-[#C4775A] transition-all duration-300"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 rounded-lg bg-[#F5ECE1] border border-[#E9D3BF]">
                    {getCategoryIcon(index)}
                  </div>
                  <h3 className="text-base font-bold text-[#49352D]">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-[#8C7D73] mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges (Objective, NO percentage bars) */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        skill.highlight
                          ? 'bg-[#F5ECE1] text-[#723A27] border border-[#E9D3BF] hover:bg-[#E9D3BF]/60'
                          : 'bg-[#FAF5EF] text-[#655A54] border border-[#E7DDD3] hover:bg-[#F5ECE1]'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A85F45]"></span>
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-3 border-t border-[#E7DDD3]/60 flex items-center justify-between text-[11px] text-[#8C7D73]">
                <span>Verified Stack</span>
                <span className="font-semibold text-[#A85F45]">
                  {category.skills.length} competencies
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
