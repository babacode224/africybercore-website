import React, { useEffect, useState } from 'react';

export default function ServicesDesign() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#101415] text-[#e0e3e5]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: 400;
          font-style: normal;
          font-size: 24px;
          display: inline-block;
          line-height: 1;
          text-transform: none;
          letter-spacing: normal;
          word-wrap: normal;
          white-space: nowrap;
          direction: ltr;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          -webkit-font-smoothing: antialiased;
        }
        
        .material-symbols-outlined.lg {
          font-size: 48px;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
        }
        
        .material-symbols-outlined.xl {
          font-size: 64px;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 64;
        }
        
        .material-symbols-outlined.text-9xl {
          font-size: 144px;
        }
        
        .cyber-grid {
          background-image: 
              linear-gradient(to right, rgba(35, 53, 84, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(35, 53, 84, 0.2) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .glow-hover:hover {
          box-shadow: 0 0 15px rgba(123, 208, 255, 0.3);
          border-color: #7bd0ff;
        }
        
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .reveal-on-scroll.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .timeline-line {
          background: linear-gradient(to bottom, transparent, #7bd0ff, transparent);
        }
      `}</style>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex flex-col justify-center items-center text-center px-4 sm:px-4 sm:px-5 md:px-6 pt-32 pb-[120px] overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <span className="font-mono text-[14px] text-[#7bd0ff] mb-4 sm:mb-6 lg:mb-[32px] block tracking-widest uppercase font-medium">Our Service Ecosystem</span>
            <h1 className="font-bold text-[64px] md:text-[64px] text-white mb-4 sm:mb-6 lg:mb-[32px] leading-tight" style={{fontFamily: 'Hanken Grotesk'}}>
              Comprehensive Security &amp; <span className="text-[#7bd0ff]">Automation Solutions</span>
            </h1>
            <p className="text-[18px] text-[#c5c6cd] mb-4 sm:mb-6 lg:mb-[32px] max-w-2xl mx-auto leading-[1.6]" style={{fontFamily: 'Inter'}}>
              Iron-Clad Innovation for the Silicon Savannah. We protect your digital assets while streamlining your operational core with advanced AI and automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#ffb690] text-[#341100] font-bold text-[16px] px-8 py-4 rounded-lg hover:scale-105 transition-transform">
                Explore Cybersecurity
              </button>
              <button className="border border-[#7bd0ff] text-[#7bd0ff] font-bold text-[16px] px-8 py-4 rounded-lg hover:bg-[#7bd0ff]/10 transition-all">
                View Case Studies
              </button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <span className="material-symbols-outlined text-3xl">keyboard_double_arrow_down</span>
          </div>
        </section>

        {/* Service Breakdown: Bento Grid */}
        <section className="py-16 sm:py-24 lg:py-[120px] px-4 sm:px-4 sm:px-5 md:px-6 max-w-[1280px] mx-auto cyber-grid">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-[24px]">
            {/* Cybersecurity Focus */}
            <div className="md:col-span-8 bg-[#112240] border border-[#233554] p-8 rounded-xl glow-hover transition-all group reveal-on-scroll">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4 sm:mb-6 lg:mb-[32px]">
                  <span className="material-symbols-outlined lg text-[#7bd0ff] group-hover:scale-110 transition-transform">shield_with_heart</span>
                  <span className="font-mono text-[14px] text-[#c5c6cd] border border-[#233554] px-3 py-1 uppercase tracking-widest font-medium">CORE PILLAR</span>
                </div>
                <h3 className="font-bold text-[32px] text-white mb-4 sm:mb-6 lg:mb-[16px]" style={{fontFamily: 'Hanken Grotesk'}}>Cybersecurity Consulting</h3>
                <p className="text-[16px] text-[#c5c6cd] mb-4 sm:mb-6 lg:mb-[32px] leading-[1.6]" style={{fontFamily: 'Inter'}}>
                  We provide proactive, human-led, and tech-driven defense strategies. From Managed Detection &amp; Response (MDR) to full-scale SOC deployments, our goal is to render your infrastructure impenetrable.
                </p>
                <div className="grid grid-cols-1 grid-cols-1 md:grid-cols-3 gap-[16px] mt-auto">
                  <div className="p-4 bg-[#0b0f10] border border-[#233554] rounded">
                    <h4 className="font-bold text-[#7bd0ff] mb-1">MDR</h4>
                    <p className="text-xs text-[#c5c6cd]">24/7 Threat Hunting &amp; Response</p>
                  </div>
                  <div className="p-4 bg-[#0b0f10] border border-[#233554] rounded">
                    <h4 className="font-bold text-[#7bd0ff] mb-1">Managed SOC</h4>
                    <p className="text-xs text-[#c5c6cd]">Centralized Security Operations</p>
                  </div>
                  <div className="p-4 bg-[#0b0f10] border border-[#233554] rounded">
                    <h4 className="font-bold text-[#7bd0ff] mb-1">Pen Testing</h4>
                    <p className="text-xs text-[#c5c6cd]">Deep Vulnerability Analysis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Academy */}
            <div className="md:col-span-4 relative overflow-hidden bg-[#112240] border border-[#233554] p-8 rounded-xl glow-hover transition-all reveal-on-scroll">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-9xl">school</span>
              </div>
              <div className="relative z-10">
                <span className="material-symbols-outlined lg text-[#7bd0ff] mb-4 sm:mb-6 lg:mb-[16px] block">school</span>
                <h3 className="font-bold text-[32px] text-white mb-4 sm:mb-6 lg:mb-[16px]" style={{fontFamily: 'Hanken Grotesk'}}>Training Academy</h3>
                <p className="text-[16px] text-[#c5c6cd] mb-4 sm:mb-6 lg:mb-[16px] leading-[1.6]" style={{fontFamily: 'Inter'}}>
                  Upskilling the next generation of African cyber warriors and no-code architects through intensive, practical certification programs.
                </p>
                <ul className="space-y-2 mb-4 sm:mb-6 lg:mb-[32px]">
                  <li className="flex items-center gap-2 text-[#c5c6cd] text-sm">
                    <span className="material-symbols-outlined text-[#10B981] text-sm">check_circle</span> Cyber Literacy
                  </li>
                  <li className="flex items-center gap-2 text-[#c5c6cd] text-sm">
                    <span className="material-symbols-outlined text-[#10B981] text-sm">check_circle</span> No-Code Mastery
                  </li>
                  <li className="flex items-center gap-2 text-[#c5c6cd] text-sm">
                    <span className="material-symbols-outlined text-[#10B981] text-sm">check_circle</span> AI Optimization
                  </li>
                </ul>
                <a className="text-[#7bd0ff] font-bold inline-flex items-center gap-2 group hover:text-[#b9c7e4] transition-colors">
                  Enroll Now <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Business Automation */}
            <div className="md:col-span-6 bg-[#112240] border border-[#233554] p-8 rounded-xl glow-hover transition-all reveal-on-scroll">
              <div className="flex items-center gap-4 mb-4 sm:mb-6 lg:mb-[32px]">
                <span className="material-symbols-outlined lg text-[#7bd0ff]">dynamic_feed</span>
                <h3 className="font-bold text-[32px] text-white" style={{fontFamily: 'Hanken Grotesk'}}>Business Automation</h3>
              </div>
              <p className="text-[16px] text-[#c5c6cd] mb-4 sm:mb-6 lg:mb-[32px] leading-[1.6]" style={{fontFamily: 'Inter'}}>
                We leverage AI to eliminate repetitive tasks. From bespoke AI Chatbots to complex CRM integrations via Zapier and Make, we build the engine of your growth.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] border border-[#8f9097] px-2 py-1 uppercase tracking-tighter text-[#c5c6cd]">AI Chatbots</span>
                <span className="text-[10px] border border-[#8f9097] px-2 py-1 uppercase tracking-tighter text-[#c5c6cd]">CRM Sync</span>
                <span className="text-[10px] border border-[#8f9097] px-2 py-1 uppercase tracking-tighter text-[#c5c6cd]">Zapier/Make</span>
              </div>
            </div>

            {/* No-Code Web Dev */}
            <div className="md:col-span-6 bg-[#112240] border border-[#233554] p-8 rounded-xl glow-hover transition-all reveal-on-scroll">
              <div className="flex items-center gap-4 mb-4 sm:mb-6 lg:mb-[32px]">
                <span className="material-symbols-outlined lg text-[#7bd0ff]">web</span>
                <h3 className="font-bold text-[32px] text-white" style={{fontFamily: 'Hanken Grotesk'}}>No-Code Web Dev</h3>
              </div>
              <p className="text-[16px] text-[#c5c6cd] mb-4 sm:mb-6 lg:mb-[32px] leading-[1.6]" style={{fontFamily: 'Inter'}}>
                Rapid deployment without compromising on security or scale. We create high-performance, responsive web applications that look premium and perform flawlessly.
              </p>
              <div className="w-full h-32 bg-cover bg-center rounded-lg border border-[#233554] opacity-60" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663031913152/FPrBhpFLLgqMU4tya6R44G/hero-tech-team-kvuNL9tYkBLeJF9Apm9myT.webp)'}}></div>
            </div>
          </div>
        </section>

        {/* How We Do It: 5-Step Process */}
        <section className="py-16 sm:py-24 lg:py-[120px] bg-[#0b0f10] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-4 sm:px-5 md:px-6">
            <div className="text-center mb-24">
              <span className="font-mono text-[14px] text-[#ffb690] mb-[8px] block uppercase tracking-widest font-medium">Our Methodology</span>
              <h2 className="font-bold text-[48px] text-white" style={{fontFamily: 'Hanken Grotesk'}}>From Concept to Scale</h2>
            </div>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#233554] -translate-x-1/2 hidden md:block"></div>
              <div className="space-y-24 relative">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-[24px] group reveal-on-scroll">
                  <div className="md:w-1/2 md:text-right">
                    <span className="font-mono text-[14px] text-[#7bd0ff] mb-2 block uppercase tracking-widest font-medium">01</span>
                    <h3 className="font-bold text-[32px] text-white mb-2" style={{fontFamily: 'Hanken Grotesk'}}>Concept &amp; Strategy</h3>
                    <p className="text-[16px] text-[#c5c6cd] max-w-md md:ml-auto leading-[1.6]" style={{fontFamily: 'Inter'}}>Deep-dive into your business architecture to identify automation gaps and security vulnerabilities.</p>
                  </div>
                  <div className="relative z-10 w-12 h-12 bg-[#0a192f] border-2 border-[#7bd0ff] rounded-full flex items-center justify-center shrink-0 group-hover:scale-125 transition-transform duration-500 shadow-[0_0_15px_rgba(123,208,255,0.4)]">
                    <span className="material-symbols-outlined text-[#7bd0ff]">lightbulb</span>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-[24px] group reveal-on-scroll">
                  <div className="md:w-1/2">
                    <span className="font-mono text-[14px] text-[#7bd0ff] mb-2 block uppercase tracking-widest font-medium">02</span>
                    <h3 className="font-bold text-[32px] text-white mb-2" style={{fontFamily: 'Hanken Grotesk'}}>No-Code Build</h3>
                    <p className="text-[16px] text-[#c5c6cd] max-w-md leading-[1.6]" style={{fontFamily: 'Inter'}}>Rapidly prototyping and building your digital infrastructure using enterprise-grade no-code tools for speed and agility.</p>
                  </div>
                  <div className="relative z-10 w-12 h-12 bg-[#0a192f] border-2 border-[#7bd0ff] rounded-full flex items-center justify-center shrink-0 group-hover:scale-125 transition-transform duration-500 shadow-[0_0_15px_rgba(123,208,255,0.4)]">
                    <span className="material-symbols-outlined text-[#7bd0ff]">construction</span>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-[24px] group reveal-on-scroll">
                  <div className="md:w-1/2 md:text-right">
                    <span className="font-mono text-[14px] text-[#7bd0ff] mb-2 block uppercase tracking-widest font-medium">03</span>
                    <h3 className="font-bold text-[32px] text-white mb-2" style={{fontFamily: 'Hanken Grotesk'}}>Automation Integration</h3>
                    <p className="text-[16px] text-[#c5c6cd] max-w-md md:ml-auto leading-[1.6]" style={{fontFamily: 'Inter'}}>Connecting your silos. We weave AI and workflows throughout your build to ensure peak operational efficiency.</p>
                  </div>
                  <div className="relative z-10 w-12 h-12 bg-[#0a192f] border-2 border-[#7bd0ff] rounded-full flex items-center justify-center shrink-0 group-hover:scale-125 transition-transform duration-500 shadow-[0_0_15px_rgba(123,208,255,0.4)]">
                    <span className="material-symbols-outlined text-[#7bd0ff]">alt_route</span>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-[24px] group reveal-on-scroll">
                  <div className="md:w-1/2">
                    <span className="font-mono text-[14px] text-[#7bd0ff] mb-2 block uppercase tracking-widest font-medium">04</span>
                    <h3 className="font-bold text-[32px] text-white mb-2" style={{fontFamily: 'Hanken Grotesk'}}>Security Hardening</h3>
                    <p className="text-[16px] text-[#c5c6cd] max-w-md leading-[1.6]" style={{fontFamily: 'Inter'}}>The most critical phase. We stress-test and fortify every connection to ensure iron-clad data protection from day zero.</p>
                  </div>
                  <div className="relative z-10 w-12 h-12 bg-[#0a192f] border-2 border-[#7bd0ff] rounded-full flex items-center justify-center shrink-0 group-hover:scale-125 transition-transform duration-500 shadow-[0_0_15px_rgba(123,208,255,0.4)]">
                    <span className="material-symbols-outlined text-[#7bd0ff]">verified_user</span>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-[24px] group reveal-on-scroll">
                  <div className="md:w-1/2 md:text-right">
                    <span className="font-mono text-[14px] text-[#7bd0ff] mb-2 block uppercase tracking-widest font-medium">05</span>
                    <h3 className="font-bold text-[32px] text-white mb-2" style={{fontFamily: 'Hanken Grotesk'}}>Launch &amp; Scale</h3>
                    <p className="text-[16px] text-[#c5c6cd] max-w-md md:ml-auto leading-[1.6]" style={{fontFamily: 'Inter'}}>Go-live support and continuous scaling strategies to ensure your tech grows as fast as your business.</p>
                  </div>
                  <div className="relative z-10 w-12 h-12 bg-[#0a192f] border-2 border-[#7bd0ff] rounded-full flex items-center justify-center shrink-0 group-hover:scale-125 transition-transform duration-500 shadow-[0_0_15px_rgba(123,208,255,0.4)]">
                    <span className="material-symbols-outlined text-[#7bd0ff]">rocket_launch</span>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 lg:py-[120px] px-4 sm:px-4 sm:px-5 md:px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10 border border-[#233554] bg-[#112240] p-12 rounded-2xl">
            <h2 className="font-bold text-[48px] text-white mb-4 sm:mb-6 lg:mb-[16px]" style={{fontFamily: 'Hanken Grotesk'}}>Ready to Bulletproof Your Operations?</h2>
            <p className="text-[18px] text-[#c5c6cd] mb-4 sm:mb-6 lg:mb-[32px] leading-[1.6]" style={{fontFamily: 'Inter'}}>
              Join the ranks of Africa's fastest-growing enterprises that trust AfriCyberCore for their digital survival and automation growth.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-[#ffb690] text-[#341100] font-bold text-[16px] px-10 py-5 rounded-lg shadow-lg shadow-[#ffb690]/20 hover:shadow-[#ffb690]/40 hover:-translate-y-1 transition-all">
                Schedule Your Security Audit
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
