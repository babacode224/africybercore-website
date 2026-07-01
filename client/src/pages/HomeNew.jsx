import { useState } from 'react';
import { useLocation } from 'wouter';

export default function HomeNew() {
  const [, setLocation] = useLocation();

  const pillars = [
    {
      title: 'Cybersecurity',
      description: 'Managed SOC, Penetration Testing, and Human-led Security strategies to protect your critical assets.',
      icon: 'shield',
      color: 'secondary',
      accentColor: '#7bd0ff'
    },
    {
      title: 'Business Automation',
      description: 'Intelligent AI chatbots and seamless Zapier/Make workflow integrations to multiply your team\'s efficiency.',
      icon: 'settings_suggest',
      color: 'tertiary',
      accentColor: '#ffb690'
    },
    {
      title: 'No-Code Dev',
      description: 'Rapid deployment of professional, scalable web platforms designed for high conversion and security.',
      icon: 'terminal',
      color: 'secondary',
      accentColor: '#7bd0ff'
    },
    {
      title: 'AI Innovations',
      description: 'Bespoke AI tools engineered specifically for Africa\'s unique growth challenges and local contexts.',
      icon: 'psychology',
      color: 'tertiary',
      accentColor: '#ffb690'
    }
  ];

  return (
    <div className="min-h-screen bg-[#101415] text-[#e0e3e5]">
      {/* Fixed Navigation */}
      <header className="fixed top-0 w-full z-50 bg-[#0a192f]/60 backdrop-blur-xl border-b border-[#233554]">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <a className="text-2xl font-bold text-[#b9c7e4]" href="/">
            AfriCyberCore
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a className="text-[#b9c7e4] font-bold border-b-2 border-[#ffb690] pb-1 text-sm uppercase tracking-wider" href="#home">Home</a>
            <a className="text-[#c5c6cd] hover:text-[#7bd0ff] transition-colors text-sm uppercase tracking-wider" href="#about">About</a>
            <a className="text-[#c5c6cd] hover:text-[#7bd0ff] transition-colors text-sm uppercase tracking-wider" href="#products">Products</a>
            <a className="text-[#c5c6cd] hover:text-[#7bd0ff] transition-colors text-sm uppercase tracking-wider" href="#services">Services</a>
            <a className="text-[#c5c6cd] hover:text-[#7bd0ff] transition-colors text-sm uppercase tracking-wider" href="#consulting">Consulting</a>
            <a className="text-[#c5c6cd] hover:text-[#7bd0ff] transition-colors text-sm uppercase tracking-wider" href="#contact">Contact</a>
          </nav>
          <button className="bg-[#ffb690] text-[#341100] font-bold px-6 py-3 rounded-lg hover:bg-[#ffdbca] transition-all text-sm">
            Book a Consultation
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#101415]"></div>
        
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(#7bd0ff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#7bd0ff]/30 bg-[#7bd0ff]/5 mb-8">
            <span className="text-[#7bd0ff] text-xs uppercase tracking-widest font-mono">Iron-Clad Innovation</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            Your Digital Transformation Partner: <span className="text-[#7bd0ff]">Iron-Clad Security</span> & Intelligent Automation
          </h1>
          
          <p className="text-xl text-[#c5c6cd] mb-10 max-w-3xl mx-auto">
            Empowering African businesses with cutting-edge cybersecurity, AI-driven automation, and custom software solutions.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-[#ffb690] text-[#341100] font-bold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-[#ffdbca] transition-all group">
              Book a Consultation
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="border border-[#7bd0ff] text-[#7bd0ff] font-bold px-8 py-4 rounded-lg hover:bg-[#7bd0ff]/10 transition-all">
              Explore Products
            </button>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-32 bg-[#0b0f10]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[#7bd0ff] text-xs uppercase tracking-widest font-mono mb-4 block">Core Competencies</span>
              <h2 className="text-5xl font-bold text-[#e0e3e5]">The Four Pillars of Digital Sovereignty</h2>
            </div>
            <div className="md:text-right">
              <p className="text-[#c5c6cd] max-w-xs">Bespoke technical expertise tailored for the unique challenges of the Silicon Savannah.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-[#112240] p-8 rounded-xl border border-[#233554] hover:border-[#7bd0ff] hover:shadow-lg hover:shadow-[#7bd0ff]/20 transition-all group cursor-pointer transform hover:-translate-y-2">
                <div className="w-12 h-12 rounded-lg bg-[#7bd0ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#7bd0ff]/20 transition-all">
                  <span className="material-symbols-outlined text-[#7bd0ff]" style={{ fontSize: '24px' }}>
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#e0e3e5]">{pillar.title}</h3>
                <p className="text-[#c5c6cd] mb-8 flex-grow">{pillar.description}</p>
                <a className="text-[#7bd0ff] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/link" href="#">
                  LEARN MORE
                  <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">east</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#7bd0ff] text-xs uppercase tracking-widest font-mono mb-4 block">Our Global Mission</span>
              <h2 className="text-5xl font-bold mb-6 text-[#e0e3e5]">Presenting the Future of African Tech</h2>
              <p className="text-[#c5c6cd] mb-6 text-lg">
                AfriCyberCore is on a mission to provide the armor and the engines for African enterprises to scale globally without compromise.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb690] mt-1">✓</span>
                  <span className="text-[#c5c6cd]">Protecting over 500TB of sensitive business data across the continent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb690] mt-1">✓</span>
                  <span className="text-[#c5c6cd]">Saving businesses thousands of man-hours through AI integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb690] mt-1">✓</span>
                  <span className="text-[#c5c6cd]">Pioneering localized AI models for healthcare and agriculture</span>
                </li>
              </ul>
              <button className="bg-[#7bd0ff] text-[#0a192f] font-bold px-8 py-4 rounded-lg hover:bg-[#b9c7e4] transition-all">
                Partner With Us
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#233554] aspect-video">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031913152/FPrBhpFLLgqMU4tya6R44G/mission-security-dashboard-PFzwLsUsFcZWeMzPwLwZkk.webp"
                alt="Security Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#0a192f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-[#e0e3e5]">Ready to Secure Your Future?</h2>
          <p className="text-xl text-[#c5c6cd] mb-10">
            Join forward-thinking companies already leveraging our iron-clad security and automation frameworks.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your business email" 
              className="px-6 py-4 rounded-lg bg-[#1d2022] border border-[#233554] text-[#e0e3e5] placeholder-[#8f9097] focus:outline-none focus:border-[#7bd0ff] flex-1 md:flex-none"
            />
            <button className="bg-[#ffb690] text-[#341100] font-bold px-8 py-4 rounded-lg hover:bg-[#ffdbca] transition-all">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b0f10] border-t border-[#233554] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-[#b9c7e4] font-bold mb-4">AfriCyberCore</h3>
              <p className="text-[#c5c6cd] text-sm">Iron-Clad Innovation for the Silicon Savannah. Protecting and scaling African businesses through cutting-edge cybersecurity.</p>
            </div>
            <div>
              <h4 className="text-[#e0e3e5] font-bold mb-4 text-xs uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-2 text-[#c5c6cd] text-sm">
                <li><a href="#" className="hover:text-[#7bd0ff] transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-[#7bd0ff] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#7bd0ff] transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-[#7bd0ff] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#e0e3e5] font-bold mb-4 text-xs uppercase tracking-widest">Our Expertise</h4>
              <ul className="space-y-2 text-[#c5c6cd] text-sm">
                <li><a href="#" className="hover:text-[#7bd0ff] transition-colors">Cybersecurity</a></li>
                <li><a href="#" className="hover:text-[#7bd0ff] transition-colors">Automation</a></li>
                <li><a href="#" className="hover:text-[#7bd0ff] transition-colors">No-Code</a></li>
                <li><a href="#" className="hover:text-[#7bd0ff] transition-colors">AI Tools</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#e0e3e5] font-bold mb-4 text-xs uppercase tracking-widest">Connect</h4>
              <p className="text-[#c5c6cd] text-sm mb-2">Nairobi Tech Hub, Kenya</p>
              <p className="text-[#c5c6cd] text-sm">+254 700 000 000</p>
            </div>
          </div>
          <div className="border-t border-[#233554] pt-8 text-center text-[#8f9097] text-sm">
            <p>© 2024 AfriCyberCore. Iron-Clad Innovation for the Silicon Savannah.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
