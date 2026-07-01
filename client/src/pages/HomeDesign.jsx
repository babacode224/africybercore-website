import { useEffect } from 'react';

export default function HomeDesign() {
  useEffect(() => {
    // Inject Tailwind config and custom styles
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --tertiary: #ffb690;
        --secondary-container: #00a6e0;
        --inverse-primary: #515f78;
        --tertiary-container: #2f0f00;
        --on-tertiary-fixed: #341100;
        --on-primary: #233148;
        --primary-fixed: #d6e3ff;
        --surface-dim: #101415;
        --surface: #101415;
        --outline-variant: #44474d;
        --surface-container-low: #191c1e;
        --surface-border: #233554;
        --background: #101415;
        --surface-container-highest: #323537;
        --error-container: #93000a;
        --surface-bright: #363a3b;
        --on-tertiary: #552100;
        --on-primary-container: #74829d;
        --primary-container: #0a192f;
        --on-secondary-fixed-variant: #004c69;
        --secondary-fixed-dim: #7bd0ff;
        --on-surface-variant: #c5c6cd;
        --on-error: #690005;
        --outline: #8f9097;
        --on-surface: #e0e3e5;
        --surface-tint: #b9c7e4;
        --on-primary-fixed-variant: #39475f;
        --on-secondary: #00354a;
        --cyber-glow: rgba(56, 189, 248, 0.15);
        --on-error-container: #ffdad6;
        --primary: #b9c7e4;
        --secondary: #7bd0ff;
        --tertiary-fixed: #ffdbca;
        --surface-card: #112240;
        --surface-container: #1d2022;
        --on-secondary-fixed: #001e2c;
        --on-primary-fixed: #0d1c32;
        --surface-container-lowest: #0b0f10;
        --surface-container-high: #272a2c;
        --on-tertiary-container: #d55e00;
        --success-green: #10B981;
        --on-secondary-container: #00374d;
        --inverse-surface: #e0e3e5;
        --inverse-on-surface: #2d3133;
        --surface-variant: #323537;
        --secondary-fixed: #c4e7ff;
        --on-background: #e0e3e5;
        --primary-fixed-dim: #b9c7e4;
        --on-tertiary-fixed-variant: #783200;
        --error: #ffb4ab;
        --tertiary-fixed-dim: #ffb690;
      }

      body {
        background-color: #101415;
        color: #e0e3e5;
        overflow-x: hidden;
        font-family: 'Inter', sans-serif;
      }

      .cyber-border-glow {
        border: 1px solid #233554;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
      }
      .cyber-border-glow:hover {
        border-color: #7bd0ff;
        box-shadow: 0 0 15px rgba(123, 208, 255, 0.2);
      }

      .glass-nav {
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }

      .hero-gradient {
        background: radial-gradient(circle at 50% 50%, rgba(10, 25, 47, 1) 0%, rgba(16, 20, 21, 1) 100%);
      }

      .pillar-card {
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .pillar-card:hover {
        transform: translateY(-8px);
      }

      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      @keyframes pulse-soft {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 0.7; }
      }
      .animate-pulse-soft {
        animation: pulse-soft 4s infinite ease-in-out;
      }

      .bento-container {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 24px;
      }

      /* Typography */
      .font-display-lg {
        font-family: 'Hanken Grotesk', sans-serif;
        font-size: 36px;
        line-height: 1.1;
        letter-spacing: -0.02em;
        font-weight: 800;
      }
      @media (min-width: 640px) {
        .font-display-lg {
          font-size: 48px;
        }
      }
      @media (min-width: 1024px) {
        .font-display-lg {
          font-size: 64px;
        }
      }

      .font-headline-lg {
        font-family: 'Hanken Grotesk', sans-serif;
        font-size: 28px;
        line-height: 1.2;
        font-weight: 700;
      }
      @media (min-width: 640px) {
        .font-headline-lg {
          font-size: 36px;
        }
      }
      @media (min-width: 1024px) {
        .font-headline-lg {
          font-size: 48px;
        }
      }

      .font-headline-md {
        font-family: 'Hanken Grotesk', sans-serif;
        font-size: 20px;
        line-height: 1.3;
        font-weight: 600;
      }
      @media (min-width: 640px) {
        .font-headline-md {
          font-size: 24px;
        }
      }
      @media (min-width: 1024px) {
        .font-headline-md {
          font-size: 32px;
        }
      }

      .font-body-lg {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        line-height: 1.6;
        font-weight: 400;
      }
      @media (min-width: 640px) {
        .font-body-lg {
          font-size: 16px;
        }
      }
      @media (min-width: 1024px) {
        .font-body-lg {
          font-size: 18px;
        }
      }

      .font-body-md {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        line-height: 1.6;
        font-weight: 400;
      }
      @media (min-width: 1024px) {
        .font-body-md {
          font-size: 16px;
        }
      }

      .font-label-caps {
        font-family: 'JetBrains Mono', monospace;
        font-size: 11px;
        line-height: 1.4;
        font-weight: 500;
        letter-spacing: 0.1em;
      }
      @media (min-width: 1024px) {
        .font-label-caps {
          font-size: 14px;
        }
      }

      .font-button-text {
        font-family: 'Hanken Grotesk', sans-serif;
        font-size: 14px;
        line-height: 1;
        font-weight: 600;
      }
      @media (min-width: 1024px) {
        .font-button-text {
          font-size: 16px;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      
      <div className="min-h-screen bg-[#101415] text-[#e0e3e5]">
        {/* TopNavBar */}
        <header className="fixed top-0 w-full z-50 bg-[#0a192f]/60 backdrop-blur-xl border-b border-[#233554]">
          <div className="flex justify-between items-center px-6 py-4 max-w-[1280px] mx-auto w-full">
            <a className="font-headline-md font-bold text-[#b9c7e4] flex items-center gap-2" href="#">
              <img src="/logoMain.png" alt="AfriCyberCore" className="h-8 w-8" />
              AfriCyberCore
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <a className="text-[#b9c7e4] font-bold border-b-2 border-[#ffb690] pb-1 font-label-caps text-xs uppercase tracking-widest" href="/">Home</a>
              <a className="text-[#c5c6cd] font-medium hover:text-[#7bd0ff] transition-colors duration-300 font-label-caps text-xs uppercase tracking-widest" href="/about">About</a>
              <a className="text-[#c5c6cd] font-medium hover:text-[#7bd0ff] transition-colors duration-300 font-label-caps text-xs uppercase tracking-widest" href="/products">Products</a>
              <a className="text-[#c5c6cd] font-medium hover:text-[#7bd0ff] transition-colors duration-300 font-label-caps text-xs uppercase tracking-widest" href="/services">Services</a>
              <a className="text-[#c5c6cd] font-medium hover:text-[#7bd0ff] transition-colors duration-300 font-label-caps text-xs uppercase tracking-widest" href="/consultation">Consulting</a>
              <a className="text-[#c5c6cd] font-medium hover:text-[#7bd0ff] transition-colors duration-300 font-label-caps text-xs uppercase tracking-widest" href="/contact">Contact</a>
            </nav>

          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-24 hero-gradient overflow-hidden">
            <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6 text-center">
              <div className="inline-flex items-center px-3 sm:px-4 py-1 rounded-full border border-[#7bd0ff]/30 bg-[#7bd0ff]/5 mb-6 sm:mb-8">
                <span className="font-label-caps text-xs uppercase tracking-widest text-[#7bd0ff]">Iron-Clad Innovation</span>
              </div>
              <h1 className="font-display-lg mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto">
                Your Digital Transformation Partner: <span className="text-[#7bd0ff]">Iron-Clad Security</span> & Intelligent Automation
              </h1>
              <p className="font-body-lg text-[#c5c6cd] mb-8 sm:mb-10 max-w-2xl mx-auto">
                Empowering African businesses with cutting-edge cybersecurity, AI-driven automation, and custom software solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <button className="w-full sm:w-auto bg-[#ffb690] text-[#341100] font-button-text px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#ffdbca] transition-all group">
                  Book a Consultation
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button className="w-full sm:w-auto border border-[#7bd0ff] text-[#7bd0ff] font-button-text px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#7bd0ff]/10 transition-all">
                  Explore Products
                </button>
              </div>
            </div>
            {/* Decorative grid lines */}
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{
              backgroundImage: 'radial-gradient(#7bd0ff 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </section>

          {/* Four Pillars Section */}
          <section className="py-16 sm:py-24 lg:py-[120px] bg-[#0b0f10]">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6 sm:gap-8">
                <div className="max-w-xl">
                  <span className="font-label-caps text-xs uppercase tracking-widest text-[#7bd0ff] mb-3 sm:mb-4 block">Core Competencies</span>
                  <h2 className="font-headline-lg text-[#e0e3e5]">The Four Pillars of Digital Sovereignty</h2>
                </div>
                <div className="md:text-right">
                  <p className="text-[#c5c6cd] font-body-md max-w-xs">Bespoke technical expertise tailored for the unique challenges of the Silicon Savannah.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {/* Pillar 1 */}
                <div className="pillar-card bg-[#112240] p-6 sm:p-8 rounded-xl cyber-border-glow flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-[#7bd0ff]/10 flex items-center justify-center mb-4 sm:mb-6">
                    <span className="material-symbols-outlined text-[#7bd0ff]" style={{fontVariationSettings: "'FILL' 1"}}>shield</span>
                  </div>
                  <h3 className="font-headline-md mb-3 sm:mb-4 text-[#e0e3e5]">Cybersecurity</h3>
                  <p className="text-[#c5c6cd] mb-6 sm:mb-8 flex-grow text-sm sm:text-base">Managed SOC, Penetration Testing, and Human-led Security strategies to protect your critical assets.</p>
                  <a className="text-[#7bd0ff] font-label-caps text-xs uppercase tracking-widest flex items-center gap-2 group" href="#">
                    LEARN MORE
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
                  </a>
                </div>

                {/* Pillar 2 */}
                <div className="pillar-card bg-[#112240] p-6 sm:p-8 rounded-xl cyber-border-glow flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-[#ffb690]/10 flex items-center justify-center mb-4 sm:mb-6">
                    <span className="material-symbols-outlined text-[#ffb690]" style={{fontVariationSettings: "'FILL' 1"}}>settings_suggest</span>
                  </div>
                  <h3 className="font-headline-md mb-3 sm:mb-4 text-[#e0e3e5]">Business Automation</h3>
                  <p className="text-[#c5c6cd] mb-6 sm:mb-8 flex-grow text-sm sm:text-base">Intelligent AI chatbots and seamless Zapier/Make workflow integrations to multiply your team's efficiency.</p>
                  <a className="text-[#ffb690] font-label-caps text-xs uppercase tracking-widest flex items-center gap-2 group" href="#">
                    LEARN MORE
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
                  </a>
                </div>

                {/* Pillar 3 */}
                <div className="pillar-card bg-[#112240] p-6 sm:p-8 rounded-xl cyber-border-glow flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-[#7bd0ff]/10 flex items-center justify-center mb-4 sm:mb-6">
                    <span className="material-symbols-outlined text-[#7bd0ff]" style={{fontVariationSettings: "'FILL' 1"}}>terminal</span>
                  </div>
                  <h3 className="font-headline-md mb-3 sm:mb-4 text-[#e0e3e5]">No-Code Dev</h3>
                  <p className="text-[#c5c6cd] mb-6 sm:mb-8 flex-grow text-sm sm:text-base">Rapid deployment of professional, scalable web platforms designed for high conversion and security.</p>
                  <a className="text-[#7bd0ff] font-label-caps text-xs uppercase tracking-widest flex items-center gap-2 group" href="#">
                    LEARN MORE
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
                  </a>
                </div>

                {/* Pillar 4 */}
                <div className="pillar-card bg-[#112240] p-6 sm:p-8 rounded-xl cyber-border-glow flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-[#ffb690]/10 flex items-center justify-center mb-4 sm:mb-6">
                    <span className="material-symbols-outlined text-[#ffb690]" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
                  </div>
                  <h3 className="font-headline-md mb-3 sm:mb-4 text-[#e0e3e5]">AI Innovations</h3>
                  <p className="text-[#c5c6cd] mb-6 sm:mb-8 flex-grow text-sm sm:text-base">Bespoke AI tools engineered specifically for Africa's unique growth challenges and local contexts.</p>
                  <a className="text-[#ffb690] font-label-caps text-xs uppercase tracking-widest flex items-center gap-2 group" href="#">
                    LEARN MORE
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="relative py-16 sm:py-24 lg:py-[120px] overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
                {/* Image on left */}
                <div className="order-2 lg:order-1">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square md:aspect-video border border-[#233554]">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="Tech team in futuristic office"
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031913152/FPrBhpFLLgqMU4tya6R44G/hero-tech-team-kvuNL9tYkBLeJF9Apm9myT.webp"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101415] via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Text on right */}
                <div className="order-1 lg:order-2">
                  <span className="font-label-caps text-xs uppercase tracking-widest text-[#ffb690] mb-4 sm:mb-6 block">Our Global Mission</span>
                  <h2 className="font-headline-lg text-[#e0e3e5] mb-6 sm:mb-8 leading-tight">
                    Presenting the Future of African Tech
                  </h2>
                  <p className="font-body-lg text-[#c5c6cd] mb-6 sm:mb-8">
                    AfriCyberCore is more than a service provider. We are the architects of a secure, automated future for the Silicon Savannah. Our mission is to provide the armor and the engine for African enterprises to scale globally without compromise.
                  </p>
                  <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                    <li className="flex items-start gap-3 sm:gap-4">
                      <span className="material-symbols-outlined text-[#7bd0ff] mt-1 flex-shrink-0">check_circle</span>
                      <span className="font-body-md text-[#e0e3e5] text-sm sm:text-base">Protecting over 500TB of sensitive business data across the continent.</span>
                    </li>
                    <li className="flex items-start gap-3 sm:gap-4">
                      <span className="material-symbols-outlined text-[#7bd0ff] mt-1 flex-shrink-0">check_circle</span>
                      <span className="font-body-md text-[#e0e3e5] text-sm sm:text-base">Saving businesses thousands of man-hours through AI integration.</span>
                    </li>
                    <li className="flex items-start gap-3 sm:gap-4">
                      <span className="material-symbols-outlined text-[#7bd0ff] mt-1 flex-shrink-0">check_circle</span>
                      <span className="font-body-md text-[#e0e3e5] text-sm sm:text-base">Pioneering localized AI models for healthcare and agriculture.</span>
                    </li>
                  </ul>
                  <button className="w-full sm:w-auto bg-[#b9c7e4] text-[#233148] font-button-text px-8 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-[#d6e3ff] transition-colors">
                    Partner With Us
                  </button>
                </div>
              </div>
            </div>
            {/* Atmospheric background element */}
            <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7bd0ff]/10 rounded-full blur-[120px] animate-pulse-soft"></div>
          </section>

          {/* Newsletter / CTA Banner */}
          <section className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6 pb-16 sm:pb-24 lg:pb-[120px]">
            <div className="bg-[#0a192f] p-8 sm:p-12 md:p-20 rounded-2xl sm:rounded-3xl border border-[#233554] relative overflow-hidden text-center">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-headline-lg text-[#e0e3e5] mb-4 sm:mb-6">Ready to Secure Your Future?</h2>
                <p className="text-[#c5c6cd] font-body-lg mb-8 sm:mb-10">Join forward-thinking companies already leveraging our iron-clad security and automation framework.</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <input 
                    className="bg-[#101415] border border-[#233554] rounded-lg px-4 sm:px-6 py-3 sm:py-4 focus:ring-2 focus:ring-[#7bd0ff] focus:border-[#7bd0ff] outline-none text-[#e0e3e5] w-full sm:w-80 placeholder-[#8f9097] text-sm sm:text-base"
                    placeholder="Enter your business email"
                    type="email"
                  />
                  <button className="bg-[#ffb690] text-[#341100] font-button-text px-6 sm:px-8 py-3 sm:py-4 rounded-lg whitespace-nowrap hover:bg-[#ffdbca] transition-all text-sm sm:text-base">
                    Get Started
                  </button>
                </div>
              </div>
              {/* Background texture */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'url(https://www.transparenttextures.com/patterns/carbon-fibre.png)'}}></div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[#0b0f10] w-full py-16 sm:py-24 lg:py-[120px] border-t border-[#233554]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 px-4 sm:px-5 md:px-6 max-w-[1280px] mx-auto">
            <div className="sm:col-span-2 md:col-span-1">
              <a className="font-headline-md font-bold text-[#ffb690] mb-4 sm:mb-6 block" href="#">AfriCyberCore</a>
              <p className="text-[#c5c6cd] font-body-md pr-0 sm:pr-8 text-sm sm:text-base">
                Iron-Clad Innovation for the Silicon Savannah. Protecting and scaling African business through world-class technology.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-label-caps text-xs uppercase text-[#b9c7e4]">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <a className="text-[#c5c6cd] hover:text-[#7bd0ff] transition-all duration-200 font-body-md text-sm sm:text-base" href="/">Home</a>
                <a className="text-[#c5c6cd] hover:text-[#7bd0ff] transition-all duration-200 font-body-md text-sm sm:text-base" href="/about">About Us</a>
                <a className="text-[#c5c6cd] hover:text-[#7bd0ff] transition-all duration-200 font-body-md text-sm sm:text-base" href="/contact">Contact</a>
                <a className="text-[#c5c6cd] hover:text-[#7bd0ff] transition-all duration-200 font-body-md text-sm sm:text-base" href="#">Privacy Policy</a>
              </nav>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-label-caps text-xs uppercase text-[#b9c7e4]">Our Expertise</h4>
              <nav className="flex flex-col space-y-2">
                <a className="text-[#c5c6cd] hover:text-[#7bd0ff] transition-all duration-200 font-body-md text-sm sm:text-base" href="#">Cybersecurity</a>
                <a className="text-[#c5c6cd] hover:text-[#7bd0ff] transition-all duration-200 font-body-md text-sm sm:text-base" href="#">Automation</a>
                <a className="text-[#c5c6cd] hover:text-[#7bd0ff] transition-all duration-200 font-body-md text-sm sm:text-base" href="#">No-Code</a>
                <a className="text-[#c5c6cd] hover:text-[#7bd0ff] transition-all duration-200 font-body-md text-sm sm:text-base" href="#">AI Tools</a>
              </nav>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-label-caps text-xs uppercase text-[#b9c7e4]">Connect</h4>
              <p className="text-[#c5c6cd] font-body-md text-sm sm:text-base">Nairobi Tech Hub, Kenya</p>
              <p className="text-[#c5c6cd] font-body-md text-sm sm:text-base">+254 700 000 000</p>
            </div>
          </div>
          <div className="border-t border-[#233554] mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-[#8f9097] text-xs sm:text-sm max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6">
            <p>© 2024 AfriCyberCore. Iron-Clad Innovation for the Silicon Savannah.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
