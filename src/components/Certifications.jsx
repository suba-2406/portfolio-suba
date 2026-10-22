import React from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Award, Trophy, BookOpen, Cloud, Database, Sparkles, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const { certifications, achievements } = portfolioData;

  const getCertIcon = (index) => {
    switch (index) {
      case 0:
        return <Trophy className="text-[#A85F45]" size={22} />;
      case 1:
        return <BookOpen className="text-[#A85F45]" size={22} />;
      case 2:
        return <Cloud className="text-[#A85F45]" size={22} />;
      case 3:
      default:
        return <Database className="text-[#A85F45]" size={22} />;
    }
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Recognition & Credentials"
          title="Certifications & Verified Honors"
          description="Recognitions in competitive hackathons, academic research presentations, and professional cloud & database credentials."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="editorial-card p-6 flex flex-col justify-between hover:border-[#C4775A] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#F5ECE1] border border-[#E9D3BF]">
                    {getCertIcon(index)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF5EF] text-[#723A27] border border-[#E9D3BF]">
                    {cert.year}
                  </span>
                </div>

                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#A85F45] mb-1">
                  {cert.track}
                </span>

                <h3 className="text-lg font-bold text-[#49352D] mb-1 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-[#8C7D73] mb-3">
                  Issued by: {cert.issuer}
                </p>

                <p className="text-xs sm:text-sm text-[#655A54] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E7DDD3]/60 flex items-center justify-between text-xs text-[#8C7D73]">
                <span className="flex items-center gap-1.5 text-[#A85F45] font-semibold">
                  <CheckCircle2 size={14} />
                  Verified Credential
                </span>
                <span className="text-[11px]">{cert.type}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Achievements & Honors Callout Banner */}
        <div className="editorial-card p-6 sm:p-8 bg-[#FAF5EF]">
          <div className="flex items-center gap-2 mb-6">
            <Trophy size={20} className="text-[#A85F45]" />
            <h3 className="text-lg font-bold text-[#49352D]">
              Honors & Academic Distinctions
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#E7DDD3] shadow-warm-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#A85F45] bg-[#F5ECE1] px-2 py-0.5 rounded mb-2">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#49352D] mb-2 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#655A54] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
