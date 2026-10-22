import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal, hero } = portfolioData;

  return (
    <section id="hero" className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#49352D] tracking-tight mb-4 leading-[1.15]">
              {personal.name}
            </h1>

            {/* Role Subheading */}
            <p className="text-xl sm:text-2xl font-semibold text-[#A85F45] mb-6">
              {personal.title}
            </p>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-[#655A54] leading-relaxed mb-6 max-w-2xl">
              {hero.description}
            </p>

            {/* Highlight Focus Tags */}
            <div className="flex flex-wrap gap-2 mb-8 max-w-xl">
              <span className="badge-sand">AI Applications</span>
              <span className="badge-sand">FastAPI & Python</span>
              <span className="badge-sand">Full-Stack Development</span>
              <span className="badge-sand">Big Data Analytics</span>
              <span className="badge-sand">Machine Learning</span>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="btn-terracotta w-full sm:w-auto text-center"
              >
                <span>View Projects</span>
                <ArrowRight size={17} />
              </a>

              <a
                href={personal.resumeUrl}
                download="Subasree_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-warm w-full sm:w-auto text-center"
              >
                <Download size={17} className="text-[#A85F45]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#655A54] hover:text-[#A85F45] transition-colors py-2 px-3 underline decoration-[#E9D3BF] hover:decoration-[#A85F45] underline-offset-4"
              >
                <span>Contact Me</span>
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Academic Credential Note */}
            <div className="mt-8 pt-6 border-t border-[#E7DDD3] w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#8C7D73] font-medium">
              <span className="flex items-center gap-1.5">
                <GraduationCap size={15} className="text-[#A85F45]" />
                {personal.institution} · CGPA {personal.cgpa}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-[#A85F45]" />
                {personal.location}
              </span>
            </div>

          </div>

          {/* Right Column: Clean Professional Photograph */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
              
              {/* Subtle Warm Backdrop Card Accent */}
              <div className="absolute -inset-3 bg-[#E9D3BF]/60 rounded-3xl transform rotate-2 pointer-events-none transition-transform duration-300"></div>

              {/* Main Card Surface */}
              <div className="relative bg-white p-3 rounded-2xl border border-[#E7DDD3] shadow-warm-lg overflow-hidden">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#FAF5EF]">
                  <img
                    src={personal.photoUrl}
                    alt="Subasree M - AI & Software Developer"
                    className="w-full h-full object-cover object-top select-none"
                    loading="eager"
                  />
                </div>

                {/* Portrait Caption */}
                <div className="pt-3 pb-1 px-2 text-center">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-sm font-bold text-[#49352D] leading-tight">
                        {personal.name}
                      </p>
                      <p className="text-xs text-[#8C7D73]">
                        Class of {personal.graduationYear} · SRM IST
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#A85F45] bg-[#F5ECE1] border border-[#E9D3BF] px-2 py-0.5 rounded-md">
                      CGPA {personal.cgpa}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
