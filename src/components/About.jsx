import React from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Brain, Layout, Server, CheckCircle2, Terminal } from 'lucide-react';

const About = () => {
  const { personal, skills } = portfolioData;

  const keyStrengths = [
    {
      icon: <Brain className="text-[#A85F45]" size={22} />,
      title: "AI & Intelligent Applications",
      description:
        "Building practical AI solutions using Python, Machine Learning, NLP, TF-IDF classifiers, and LLM integrations for real-world tasks like personalized learning and context retrieval.",
    },
    {
      icon: <Layout className="text-[#A85F45]" size={22} />,
      title: "UI/UX & Frontend Craft",
      description:
        "Translating complex user workflows into clean, accessible web interfaces. Designing responsive layouts with React.js, Tailwind CSS, and Figma with careful attention to cognitive load.",
    },
    {
      icon: <Server className="text-[#A85F45]" size={22} />,
      title: "Backend APIs & Data Systems",
      description:
        "Engineering RESTful backend workflows using FastAPI and Node.js, vector embeddings indexing, PostgreSQL persistence, and Docker containerization.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Background"
          title="About Me"
          description="A summary of my background, technical focus, and approach to building reliable software solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Biography & Academic Focus */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="editorial-card p-6 sm:p-8">
              <p className="text-base sm:text-lg text-[#49352D] leading-relaxed font-normal mb-6">
                {personal.summary}
              </p>

              {/* Editorial Quote */}
              <blockquote className="border-l-4 border-[#A85F45] pl-4 py-1 bg-[#F5ECE1]/60 rounded-r-lg">
                <p className="text-sm italic text-[#49352D] font-medium leading-relaxed">
                  "I believe great AI software should be as intuitive and accessible to everyday users as it is mathematically sound under the hood."
                </p>
              </blockquote>
            </div>

            {/* Core CS Fundamentals Box */}
            <div className="editorial-card p-6">
              <div className="flex items-center gap-2 mb-4 text-[#49352D] font-bold text-sm uppercase tracking-wider">
                <Terminal size={17} className="text-[#A85F45]" />
                <span>Core Computer Science Foundations</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.coreFundamentals.map((fundamental, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-[#655A54]">
                    <CheckCircle2 size={16} className="text-[#A85F45] shrink-0" />
                    <span>{fundamental}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Three Pillar Strengths & Academic Highlights */}
          <div className="lg:col-span-5 space-y-4">
            
            {keyStrengths.map((strength, index) => (
              <div key={index} className="editorial-card p-5 hover:border-[#C4775A]">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#F5ECE1] border border-[#E9D3BF] shrink-0 mt-0.5">
                    {strength.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#49352D] mb-1.5">
                      {strength.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#655A54] leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Academic Snapshot Card */}
            <div className="p-5 rounded-2xl bg-[#E9D3BF]/40 border border-[#D8B597] flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#723A27]">
                  Academic Excellence
                </p>
                <p className="text-lg font-bold text-[#49352D]">
                  {personal.institution}
                </p>
                <p className="text-xs text-[#655A54]">
                  {personal.degree}
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-[#A85F45] block">
                  {personal.cgpa}
                </span>
                <span className="text-[11px] font-semibold text-[#8C7D73] uppercase tracking-wider">
                  CGPA Score
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
