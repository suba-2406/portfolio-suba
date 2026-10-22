import React from 'react';

const SectionHeading = ({ tag, title, description, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      {tag && (
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#A85F45] bg-[#F5ECE1] border border-[#E9D3BF] px-3 py-1 rounded-full mb-3">
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#49352D] tracking-tight mb-4">
        {title}
      </h2>
      <div className={`accent-rule mb-4 ${centered ? 'mx-auto' : ''}`} />
      {description && (
        <p className="text-base sm:text-lg text-[#655A54] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
