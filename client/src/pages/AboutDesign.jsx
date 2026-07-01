import React from 'react';
import { useLocation } from 'wouter';

export default function AboutDesign() {
  const [, navigate] = useLocation();

  const teamMembers = [
    {
      name: 'AbdulQuadri Omoloju',
      role: 'CEO & Founder',
      bio: 'Cybersecurity veteran with 20+ years of enterprise defense experience.',
      image: '/manus-storage/first_d6996e64.png'
    },
    {
      name: 'Abdulhamid Adegoke',
      role: 'Chief Operations Officer',
      bio: 'Expert in operational excellence and digital transformation scaling.',
      image: '/manus-storage/second_94279a08.png'
    },
    {
      name: 'Ahmad Adegoke',
      role: 'Head of Automation',
      bio: 'Pioneer in AI-driven workflows and no-code architecture.',
      image: '/manus-storage/third_c0d801bb.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-[#101415] text-[#e0e3e5]">
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .cyber-grid {
          background-image: linear-gradient(to right, rgba(35, 53, 84, 0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(35, 53, 84, 0.2) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .glass-card {
          background: rgba(17, 34, 64, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(56, 189, 248, 0.1);
        }
        .hover-glow:hover {
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
          border-color: #7bd0ff;
        }
      `}</style>

      {/* Hero Section: Mission & Vision */}
      <header className="relative pt-16 sm:pt-24 lg:pt-[120px] pb-16 sm:pb-24 lg:pb-[120px] overflow-hidden">
        <div className="cyber-grid absolute inset-0"></div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6 text-center">
          <span className="font-label-caps text-xs uppercase text-secondary mb-4 sm:mb-6 block">OUR PURPOSE</span>
          <h1 className="font-display-lg text-white max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-[32px] leading-tight font-bold">
            Iron-Clad Innovation for the <span className="text-secondary">Silicon Savannah</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-[24px] mt-12 sm:mt-16 lg:mt-[80px]">
            <div className="glass-card p-6 sm:p-8 lg:p-[40px] rounded-xl text-left border-l-4 border-l-tertiary">
              <h2 className="font-headline-md text-tertiary mb-4 sm:mb-6 lg:mb-[16px] font-bold">Mission</h2>
              <p className="font-body-lg text-on-surface-variant text-sm sm:text-base">
                To empower African enterprises with unbreakable cybersecurity and seamless business automation, fostering a secure digital ecosystem where innovation knows no boundaries.
              </p>
            </div>
            <div className="glass-card p-6 sm:p-8 lg:p-[40px] rounded-xl text-left border-l-4 border-l-secondary">
              <h2 className="font-headline-md text-secondary mb-4 sm:mb-6 lg:mb-[16px] font-bold">Vision</h2>
              <p className="font-body-lg text-on-surface-variant text-sm sm:text-base">
                To be the premier architect of Africa's digital fortress, driving the continent's transformation through secure, AI-powered excellence and human-led technology.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Who We Are Section */}
      <section className="py-16 sm:py-24 lg:py-[120px] bg-[#0b0f10]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 sm:gap-16 lg:gap-[80px] items-center">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 border-t-2 border-l-2 border-secondary"></div>
              <div className="absolute -bottom-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 border-b-2 border-r-2 border-tertiary"></div>
              <div className="bg-surface-card rounded-lg overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px]">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031913152/FPrBhpFLLgqMU4tya6R44G/hero-tech-team-kvuNL9tYkBLeJF9Apm9myT.webp" 
                  alt="Team" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="font-label-caps text-xs uppercase text-secondary mb-4 sm:mb-6 block">Who We Are</span>
              <h2 className="font-headline-lg text-white mb-6 sm:mb-8 lg:mb-[32px] font-bold">Architects of the African Digital Frontier</h2>
              <div className="space-y-[16px]">
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  AfriCyberCore isn't just a technology provider; we are a collective of visionaries, ethical hackers, and automation specialists dedicated to the continent's growth. Born in the heart of the Silicon Savannah, we understand the unique challenges and vast opportunities of the African business landscape.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Our team brings together decades of global expertise in high-stakes cybersecurity and disruptive software development. We are committed to moving beyond generic solutions, building custom-engineered systems that are as resilient as they are innovative.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant font-semibold text-primary">
                  We don't just build software; we build the trust that enables African businesses to scale globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 sm:py-24 lg:py-[120px] relative bg-[#101415]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-[96px]">
            <span className="font-label-caps text-xs uppercase text-secondary mb-4 sm:mb-6 block">METHODOLOGY</span>
            <h2 className="font-headline-lg text-white font-bold">Our Strategic Triad</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-[48px]">
            {[
              {
                number: '01',
                title: 'Consult',
                icon: 'psychology',
                description: 'We begin by dissecting your current infrastructure and identifying vulnerabilities. Our experts provide deep strategic roadmaps aligned with your growth objectives.',
                borderColor: 'border-secondary/30',
                hoverColor: 'group-hover:text-secondary/20'
              },
              {
                number: '02',
                title: 'Build',
                icon: 'architecture',
                description: 'Using cutting-edge no-code and custom development, we craft automation workflows and AI tools that streamline operations and eliminate technical debt.',
                borderColor: 'border-tertiary/30',
                hoverColor: 'group-hover:text-tertiary/20'
              },
              {
                number: '03',
                title: 'Protect',
                icon: 'verified_user',
                description: 'Security is not an afterthought. We apply iron-clad hardening and 24/7 monitoring to every solution we deploy, ensuring your assets remain untouchable.',
                borderColor: 'border-secondary-container/30',
                hoverColor: 'group-hover:text-secondary-container/20'
              }
            ].map((step, idx) => (
              <div key={idx} className="group relative p-6 sm:p-8 lg:p-[40px] glass-card rounded-xl hover-glow transition-all duration-300">
                <div className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-surface-border absolute top-0 right-4 sm:right-8 transition-colors">{step.number}</div>
                <div className={`w-12 sm:w-16 h-12 sm:h-16 bg-primary-container rounded-lg flex items-center justify-center mb-6 sm:mb-8 lg:mb-[32px] border ${step.borderColor}`}>
                  <span className="material-symbols-outlined text-2xl sm:text-3xl" style={{color: step.icon === 'psychology' ? '#7bd0ff' : step.icon === 'architecture' ? '#ffb690' : '#00a6e0'}}>{step.icon}</span>
                </div>
                <h3 className="font-headline-md text-white mb-4 sm:mb-6 lg:mb-[16px] font-bold">{step.title}</h3>
                <p className="font-body-md text-on-surface-variant text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AfriCyberCore Section */}
      <section className="py-16 sm:py-24 lg:py-[120px] bg-primary-container">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-[80px]">
            <div>
              <h2 className="font-headline-lg text-white mb-8 sm:mb-12 lg:mb-[48px] font-bold">Why AfriCyberCore?</h2>
              <p className="font-body-lg text-on-surface-variant mb-8 sm:mb-12 lg:mb-[48px] text-sm sm:text-base">
                In an era of rising digital threats, mediocrity is a liability. We differentiate ourselves through a relentless pursuit of excellence and a localized approach to global technology standards.
              </p>
              <ul className="space-y-6 sm:space-y-8 lg:space-y-[24px]">
                {[
                  {
                    title: 'Security-First Philosophy',
                    description: 'Every line of code and every workflow is designed with defensive architecture from day one.'
                  },
                  {
                    title: 'Localized Expertise',
                    description: 'Deep understanding of African regulatory compliance and infrastructure nuances.'
                  },
                  {
                    title: 'Human-Led, Tech-Driven',
                    description: 'We combine the efficiency of AI with the critical thinking of seasoned professionals.'
                  }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-[16px] group">
                    <div className="mt-1 w-6 h-6 rounded-full border border-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                      <span className="material-symbols-outlined text-[14px] text-secondary group-hover:text-on-secondary transition-colors">check</span>
                    </div>
                    <div>
                      <h4 className="font-button-text text-button-text text-white font-bold">{item.title}</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-[24px]">
              <div className="space-y-4 sm:space-y-6 lg:space-y-[24px] pt-0 sm:pt-0 lg:pt-[48px]">
                {[
                  { value: '99%', label: 'Threat Neutralized', color: 'text-secondary' },
                  { value: '500+', label: 'Automations Built', color: 'text-tertiary' }
                ].map((stat, idx) => (
                  <div key={idx} className="glass-card p-4 sm:p-6 lg:p-[24px] rounded-xl text-center">
                    <div className={`${stat.color} font-display-lg text-2xl sm:text-3xl lg:text-4xl mb-2 font-bold`}>{stat.value}</div>
                    <div className="font-label-caps text-xs uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 sm:space-y-6 lg:space-y-[24px]">
                {[
                  { value: '24/7', label: 'Active Monitoring', color: 'text-primary' },
                  { value: '15+', label: 'African Markets', color: 'text-secondary-container' }
                ].map((stat, idx) => (
                  <div key={idx} className="glass-card p-4 sm:p-6 lg:p-[24px] rounded-xl text-center">
                    <div className={`${stat.color} font-display-lg text-2xl sm:text-3xl lg:text-4xl mb-2 font-bold`}>{stat.value}</div>
                    <div className="font-label-caps text-xs uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 sm:py-24 lg:py-[120px] bg-[#101415]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-[96px]">
            <span className="font-label-caps text-xs uppercase text-secondary mb-4 sm:mb-6 block">THE BRAIN TRUST</span>
            <h2 className="font-headline-lg text-white font-bold">Meet the Innovators</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[32px]">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4 sm:mb-6 lg:mb-[16px] bg-surface-card">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-headline-md text-white font-bold">{member.name}</h3>
                <p className="font-label-caps text-xs text-secondary uppercase mb-2">{member.role}</p>
                <p className="font-body-md text-sm text-on-surface-variant">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
