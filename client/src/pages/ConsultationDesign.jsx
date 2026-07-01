import { useState } from 'react';

export default function ConsultationDesign() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    primaryChallenge: 'Cybersecurity Vulnerabilities',
    briefOverview: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative z-10 px-margin-mobile md:px-gutter pt-section-padding pb-32 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-start">
          {/* Left Content */}
          <div className="space-y-stack-md">
            <span className="inline-block py-1 px-3 rounded-full border border-secondary text-secondary font-label-caps text-label-caps bg-secondary/10">
              EXPERT CONSULTANCY
            </span>
            <h1 className="font-display-lg text-display-lg leading-tight text-on-surface">
              Architecting <span className="text-secondary">Iron-Clad</span> Innovation.
            </h1>
            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
              Our consulting approach merges elite cybersecurity protocols with seamless business automation to future-proof your Silicon Savannah enterprise.
            </p>
            <div className="pt-stack-md flex flex-wrap gap-4">
              <button className="bg-tertiary text-on-tertiary-fixed px-8 py-4 rounded-lg font-button-text text-button-text font-bold hover:shadow-[0_0_20px_rgba(255,182,144,0.4)] transition-all">
                Secure Your Roadmap
              </button>
              <button className="border border-secondary text-secondary px-8 py-4 rounded-lg font-button-text text-button-text font-bold hover:bg-secondary/10 transition-all flex items-center gap-2">
                Our Methodology <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Right Panel - Digital Hardening */}
          <div className="relative">
            <div className="bg-surface-card rounded-xl p-6 border border-surface-border overflow-hidden relative">
              <div className="absolute top-4 right-4">
                <button className="text-on-surface-variant hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>close</span>
                </button>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Digital Hardening</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-primary-container/40 p-4 rounded-lg border border-surface-border/50">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0" style={{ fontSize: '20px' }}>analytics</span>
                  <div className="min-w-0">
                    <p className="font-label-caps text-label-caps text-white text-xs">STRATEGY ENGINE</p>
                    <p className="text-on-surface-variant text-xs">Real-time risk assessment active</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-primary-container/40 p-4 rounded-lg border border-surface-border/50">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0" style={{ fontSize: '20px' }}>memory</span>
                  <div className="min-w-0">
                    <p className="font-label-caps text-label-caps text-white text-xs">AUTOMATION LOGIC</p>
                    <p className="text-on-surface-variant text-xs">Optimizing 12 workflow nodes</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-primary-container/40 p-4 rounded-lg border border-surface-border/50">
                  <span className="material-symbols-outlined text-success-green flex-shrink-0" style={{ fontSize: '20px' }}>verified_user</span>
                  <div className="min-w-0">
                    <p className="font-label-caps text-label-caps text-white text-xs">CYBER COMPLIANCE</p>
                    <p className="text-on-surface-variant text-xs">System integrity verified 100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative z-10 px-margin-mobile md:px-gutter py-section-padding bg-surface-container-lowest/50">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-section-padding">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">Expertise in Digital Transformation</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body-lg text-body-lg">We don't just advise; we engineer resilience and efficiency into your DNA.</p>
          </div>

          {/* Bento Grid - Exact Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Enterprise Scalability - 8 cols (TOP LEFT) */}
            <div className="md:col-span-8 bg-surface-card rounded-xl border border-surface-border p-stack-lg relative overflow-hidden group hover:border-secondary/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px]"></div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-secondary mb-4 block" style={{ fontSize: '40px' }}>rocket_launch</span>
                <h3 className="font-headline-md text-headline-md mb-4 text-white">Enterprise Scalability</h3>
                <p className="text-on-surface-variant mb-6 text-body-lg">Modernizing legacy systems through intelligent AI-powered CRM setups and Zapier/Make workflow integrations that eliminate manual bottlenecks.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="flex items-center gap-2 text-on-surface text-sm"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Tech Stack Audit</li>
                  <li className="flex items-center gap-2 text-on-surface text-sm"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Legacy Migration</li>
                  <li className="flex items-center gap-2 text-on-surface text-sm"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Cloud Infrastructure</li>
                  <li className="flex items-center gap-2 text-on-surface text-sm"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Operational Efficiency</li>
                </ul>
              </div>
            </div>

            {/* Threat Mitigation - 4 cols (TOP RIGHT) */}
            <div className="md:col-span-4 bg-surface-card rounded-xl border border-surface-border p-stack-lg flex flex-col justify-between group hover:border-secondary/50 transition-all duration-500">
              <div>
                <span className="material-symbols-outlined text-error mb-4 block" style={{ fontSize: '40px' }}>security</span>
                <h3 className="font-headline-md text-headline-md mb-2 text-white">Threat Mitigation</h3>
                <p className="text-on-surface-variant text-body-md">Continuous monitoring and security hardening for critical digital assets.</p>
              </div>
              <a className="text-secondary flex items-center gap-2 font-button-text text-button-text mt-8 hover:translate-x-2 transition-transform" href="#">
                View Security Protocols <span className="material-symbols-outlined text-sm">chevron_right</span>
              </a>
            </div>

            {/* AI Innovation - 4 cols (BOTTOM LEFT) */}
            <div className="md:col-span-4 bg-surface-card rounded-xl border border-surface-border p-stack-lg group hover:border-secondary/50 transition-all duration-500">
              <span className="material-symbols-outlined text-secondary mb-4 block" style={{ fontSize: '40px' }}>psychology</span>
              <h3 className="font-headline-md text-headline-md mb-2 text-white">AI Innovation</h3>
              <p className="text-on-surface-variant text-body-md">Bespoke AI innovations tailored for the African market growth, from chatbots to specialized tools.</p>
            </div>

            {/* No-Code Velocity - 8 cols (BOTTOM RIGHT) */}
            <div className="md:col-span-8 bg-surface-card rounded-xl border border-surface-border p-stack-lg relative overflow-hidden group hover:border-secondary/50 transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-stack-lg items-center">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-tertiary mb-4 block" style={{ fontSize: '40px' }}>rebase_edit</span>
                  <h3 className="font-headline-md text-headline-md mb-4 text-white">No-Code Velocity</h3>
                  <p className="text-on-surface-variant text-body-lg">Rapidly deploy custom software solutions without the overhead of traditional development cycles.</p>
                </div>
                <div className="w-full md:w-48 aspect-square rounded-lg overflow-hidden border border-surface-border flex-shrink-0">
                  <div className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAx5MT14WlJ7HKJvN5QU8H5B2ghgL_R_2SuyK3jQNDo1yY5hKOACPMJuwWAn_3Wsgr-otGLJPbQz_FWVvZgKOqlEZS5FQAtzGFPQKSAcAZ470PAGGZjou6LiNBIH714P2HZhfysucRhbfFMdYI2XRkSTRNebH0Xic7BD-dHwFm8X3kSuXNtqkA1g_cmFYjOBJaxhTt2VXI0STZTKEv_jQyrEWtpT3rdgg54v26Av_19hndolvyI1td9ENUe-XhLtueTcoRQh28G_V4')"}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="relative z-10 px-margin-mobile md:px-gutter py-section-padding max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-stack-lg items-start">
          {/* Left Sidebar - Sticky */}
          <div className="md:w-1/3 sticky top-32">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md">The AfriCyberCore Methodology</h2>
            <p className="text-on-surface-variant mb-stack-lg text-body-md">Our 5-step consulting journey ensures that strategy translates directly into iron-clad operational reality.</p>
            <div className="p-6 bg-primary-container border border-surface-border rounded-lg">
              <p className="font-label-caps text-label-caps text-secondary mb-2">QUICK FACT</p>
              <p className="text-sm text-on-surface-variant">We reduce operational latency by an average of 40% through automation integration in the first 90 days.</p>
            </div>
          </div>

          {/* Right Steps */}
          <div className="md:w-2/3 space-y-gutter">
            {/* Step 1 */}
            <div className="flex gap-6 items-start p-6 rounded-xl hover:bg-surface-card transition-colors border border-transparent hover:border-surface-border group">
              <div className="text-secondary font-display-lg text-display-lg leading-none opacity-30 group-hover:opacity-100 transition-opacity min-w-fit">01</div>
              <div>
                <h4 className="font-headline-md text-headline-md text-white mb-2">Concept & Strategy</h4>
                <p className="text-on-surface-variant text-body-md">We deep-dive into your current architecture, identifying vulnerabilities and automation opportunities through comprehensive stakeholder interviews and tech audits.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start p-6 rounded-xl hover:bg-surface-card transition-colors border border-transparent hover:border-surface-border group">
              <div className="text-secondary font-display-lg text-display-lg leading-none opacity-30 group-hover:opacity-100 transition-opacity min-w-fit">02</div>
              <div>
                <h4 className="font-headline-md text-headline-md text-white mb-2">No-Code Build</h4>
                <p className="text-on-surface-variant text-body-md">Rapid prototyping and construction of your core platforms using high-performance no-code tools, ensuring speed to market without sacrificing quality.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start p-6 rounded-xl hover:bg-surface-card transition-colors border border-transparent hover:border-surface-border group">
              <div className="text-secondary font-display-lg text-display-lg leading-none opacity-30 group-hover:opacity-100 transition-opacity min-w-fit">03</div>
              <div>
                <h4 className="font-headline-md text-headline-md text-white mb-2">Automation Integration</h4>
                <p className="text-on-surface-variant text-body-md">Seamlessly connecting your data streams through Zapier/Make and custom AI chatbots, creating a self-sustaining business engine.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start p-6 rounded-xl hover:bg-surface-card transition-colors border border-transparent hover:border-surface-border group">
              <div className="text-secondary font-display-lg text-display-lg leading-none opacity-30 group-hover:opacity-100 transition-opacity min-w-fit">04</div>
              <div>
                <h4 className="font-headline-md text-headline-md text-white mb-2">Security Hardening</h4>
                <p className="text-on-surface-variant text-body-md">Implementing iron-clad security protocols. We layer multi-factor defense, encryption, and threat detection directly into your new workflows.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start p-6 rounded-xl hover:bg-surface-card transition-colors border border-transparent hover:border-surface-border group">
              <div className="text-secondary font-display-lg text-display-lg leading-none opacity-30 group-hover:opacity-100 transition-opacity min-w-fit">05</div>
              <div>
                <h4 className="font-headline-md text-headline-md text-white mb-2">Launch & Scale</h4>
                <p className="text-on-surface-variant text-body-md">Full deployment with continuous performance monitoring and iterative scaling strategies to keep you ahead of the curve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="relative z-10 px-margin-mobile md:px-gutter py-section-padding bg-gradient-to-b from-transparent to-primary-container/30">
        <div className="max-w-4xl mx-auto bg-surface-card rounded-2xl p-margin-mobile md:p-stack-lg border-2 border-secondary/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg text-white mb-4">Book Your Strategic Session</h2>
            <p className="text-on-surface-variant text-body-md">Secure 45 minutes with our lead consultants to map your transformation roadmap.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-secondary text-xs">FULL NAME</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-surface-border rounded-lg p-4 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm placeholder-on-surface-variant/50" 
                  placeholder="John Doe" 
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-secondary text-xs">BUSINESS EMAIL</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-surface-border rounded-lg p-4 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm placeholder-on-surface-variant/50" 
                  placeholder="john@enterprise.com" 
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-secondary text-xs">PRIMARY CHALLENGE</label>
              <select 
                className="w-full bg-surface-container-lowest border border-surface-border rounded-lg p-4 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm"
                name="primaryChallenge"
                value={formData.primaryChallenge}
                onChange={handleChange}
              >
                <option>Cybersecurity Vulnerabilities</option>
                <option>Inefficient Business Workflows</option>
                <option>Custom Software Development</option>
                <option>AI/Automation Implementation</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-secondary text-xs">BRIEF OVERVIEW</label>
              <textarea 
                className="w-full bg-surface-container-lowest border border-surface-border rounded-lg p-4 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm placeholder-on-surface-variant/50" 
                placeholder="Tell us about your current digital infrastructure..." 
                rows="4"
                name="briefOverview"
                value={formData.briefOverview}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                className="w-full bg-tertiary text-on-tertiary-fixed py-5 rounded-lg font-button-text text-button-text font-extrabold uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all shadow-lg" 
                type="submit"
              >
                Initialize Consultation Request
              </button>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-surface-border text-center">
            <p className="text-on-surface-variant font-label-caps text-label-caps text-xs">OR BOOK DIRECTLY VIA CALENDLY</p>
            <div className="flex justify-center gap-4 mt-4">
              <a className="text-secondary hover:underline flex items-center gap-2 text-sm" href="#">
                <span className="material-symbols-outlined text-sm">calendar_today</span> Sync Calendar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
