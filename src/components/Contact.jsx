import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, Phone, MapPin, 
  Send, Copy, Check, FileText, ArrowRight 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`);
    
    // Try opening web Gmail directly in a new tab for seamless user experience
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    
    // Also trigger system mailto handler
    setTimeout(() => {
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    }, 300);

    setFormSent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Get In Touch"
          title="Let's Connect & Build Together"
          description="Interested in AI engineering roles, campus opportunities, research collaborations, or full-stack software development? I would love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy Feature */}
            <div className="editorial-card p-6 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="p-3 rounded-xl bg-[#F5ECE1] text-[#A85F45]">
                  <Mail size={22} />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FAF5EF] hover:bg-[#E9D3BF]/60 text-[#723A27] border border-[#E9D3BF] transition-colors"
                >
                  {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                  <span>{copied ? "Copied!" : "Copy Email"}</span>
                </button>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#8C7D73] mb-1">
                  Primary Email (Resume)
                </p>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-lg font-bold text-[#49352D] hover:text-[#A85F45] transition-colors break-all"
                >
                  {personal.email}
                </a>
                {personal.academicEmail && (
                  <p className="text-xs text-[#8C7D73] mt-2 pt-2 border-t border-[#E7DDD3]/60">
                    <span className="font-semibold text-[#655A54]">University: </span>
                    <a href={`mailto:${personal.academicEmail}`} className="hover:text-[#A85F45] transition-colors">
                      {personal.academicEmail}
                    </a>
                  </p>
                )}
              </div>
            </div>

            {/* Phone Card */}
            <div className="editorial-card p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#F5ECE1] text-[#A85F45]">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#8C7D73] mb-0.5">
                    Phone / WhatsApp
                  </p>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="text-base font-bold text-[#49352D] hover:text-[#A85F45] transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="editorial-card p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#F5ECE1] text-[#A85F45]">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#8C7D73] mb-0.5">
                  Location
                </p>
                <p className="text-base font-bold text-[#49352D]">
                  {personal.location}
                </p>
              </div>
            </div>

            {/* Professional Profiles & Resume Box */}
            <div className="p-5 rounded-xl bg-[#E9D3BF]/40 border border-[#D8B597] space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#723A27]">
                Verified Professional Links
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-warm !py-2 !px-3.5 text-xs font-bold"
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-warm !py-2 !px-3.5 text-xs font-bold"
                >
                  <GithubIcon size={15} />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={personal.resumeUrl}
                  download="Subasree_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-terracotta !py-2 !px-3.5 text-xs font-bold"
                >
                  <FileText size={15} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Direct Email Form */}
          <div className="lg:col-span-7">
            <div className="editorial-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#49352D] mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-[#655A54] mb-6">
                Fill in the details below to open a pre-filled direct email in your preferred mail client or webmail.
              </p>

              {formSent ? (
                <div className="p-6 rounded-xl bg-[#F5ECE1] border border-[#E9D3BF] text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center text-[#A85F45] shadow-warm-sm">
                    <Check size={26} />
                  </div>
                  <h4 className="text-lg font-bold text-[#49352D]">
                    Ready to Send!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#655A54] leading-relaxed max-w-md mx-auto">
                    A pre-filled email draft has been generated for <strong>{personal.name}</strong>. Choose your preferred way to send:
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-terracotta !py-2 !px-4 text-xs font-bold"
                    >
                      <Mail size={14} />
                      <span>Open in Gmail (Web)</span>
                    </a>
                    <a
                      href={`mailto:${personal.email}?subject=${encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`}
                      className="btn-secondary-warm !py-2 !px-4 text-xs font-bold"
                    >
                      <ArrowRight size={14} />
                      <span>Open Default Mail App</span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="btn-secondary-warm !py-2 !px-4 text-xs font-bold"
                    >
                      {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                      <span>{copied ? "Copied Email!" : "Copy Email"}</span>
                    </button>
                  </div>

                  <div className="pt-3 border-t border-[#E7DDD3]">
                    <button
                      onClick={() => { setFormSent(false); setFormData({ name: '', email: '', message: '' }); }}
                      className="text-xs font-semibold text-[#8C7D73] hover:text-[#49352D] underline transition-colors"
                    >
                      Write Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#49352D] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7DDD3] bg-[#FAF5EF] text-[#49352D] text-sm focus:outline-none focus:border-[#A85F45] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#49352D] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. jane@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7DDD3] bg-[#FAF5EF] text-[#49352D] text-sm focus:outline-none focus:border-[#A85F45] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#49352D] mb-1.5">
                      Your Message or Opportunity *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding your team, role, or project..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7DDD3] bg-[#FAF5EF] text-[#49352D] text-sm focus:outline-none focus:border-[#A85F45] focus:bg-white transition-colors resize-y"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-[#8C7D73]">
                      * Directly opens in your default mail app
                    </span>
                    <button
                      type="submit"
                      className="btn-terracotta"
                    >
                      <span>Send Message</span>
                      <Send size={15} />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
