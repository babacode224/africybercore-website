import React from 'react';

export default function ProductsDesign() {
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
        
        .cyber-glow-hover:hover {
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
          border-color: #7bd0ff;
        }
        
        .product-grid-pattern {
          background-image: radial-gradient(#233554 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-4 sm:px-5 md:px-6 max-w-[1280px] mx-auto text-center mb-[120px] overflow-hidden">
          <div className="space-y-[16px] py-[32px]">
            <span className="inline-block px-4 py-1 rounded-full border border-[#7bd0ff] text-[#7bd0ff] font-mono text-[14px] bg-[#7bd0ff]/5 uppercase tracking-widest font-medium">
              Proprietary Innovations
            </span>
            <h1 className="font-bold text-[64px] max-w-4xl mx-auto leading-tight text-white" style={{fontFamily: 'Hanken Grotesk'}}>
              AI-Powered Tools Designed for <span className="text-[#ffb690]">Africa's Growth</span>
            </h1>
            <p className="font-[18px] text-[#c5c6cd] max-w-2xl mx-auto leading-[1.6]" style={{fontFamily: 'Inter'}}>
              We engineer localized solutions that bridge the gap between global technology standards and unique continental challenges. Iron-clad innovation starts here.
            </p>
          </div>
        </section>

        {/* Product Bento Showcase */}
        <section className="px-4 sm:px-4 sm:px-5 md:px-6 max-w-[1280px] mx-auto space-y-[24px] mb-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-[24px]">
            {/* Zola Health */}
            <div className="md:col-span-12 lg:col-span-7 group bg-[#112240] border border-[#233554] rounded-xl overflow-hidden flex flex-col md:flex-row cyber-glow-hover transition-all duration-500">
              <div className="md:w-1/2 relative min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent z-10 md:bg-gradient-to-r"></div>
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031913152/FPrBhpFLLgqMU4tya6R44G/hero-tech-team-kvuNL9tYkBLeJF9Apm9myT.webp" 
                  alt="Zola Health" 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="md:w-1/2 p-[32px] flex flex-col justify-center space-y-[16px]">
                <div className="flex items-center space-x-2">
                  <span className="material-symbols-outlined lg text-[#7bd0ff]">health_metrics</span>
                  <h3 className="font-bold text-[32px] text-[#b9c7e4]" style={{fontFamily: 'Hanken Grotesk'}}>Zola Health</h3>
                </div>
                <p className="text-[#c5c6cd] font-[16px] leading-[1.6]" style={{fontFamily: 'Inter'}}>
                  Revolutionizing medical facility management across the continent. AI-powered patient triage and automated supply chain logistics for modern healthcare.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-[14px] text-[#7bd0ff]">
                    <span className="material-symbols-outlined mr-2">check_circle</span> AI-Triage & Diagnosis Support
                  </li>
                  <li className="flex items-center text-[14px] text-[#7bd0ff]">
                    <span className="material-symbols-outlined mr-2">check_circle</span> Automated Inventory Tracking
                  </li>
                  <li className="flex items-center text-[14px] text-[#7bd0ff]">
                    <span className="material-symbols-outlined mr-2">check_circle</span> Telemedicine Integration Hub
                  </li>
                </ul>
                <a className="inline-flex items-center text-[#ffb690] font-bold hover:translate-x-2 transition-transform">
                  Learn More <span className="material-symbols-outlined ml-1">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* ANSA.AI */}
            <div className="md:col-span-6 lg:col-span-5 group bg-[#112240] border border-[#233554] rounded-xl p-[32px] flex flex-col justify-between cyber-glow-hover transition-all duration-500">
              <div className="space-y-[16px]">
                <div className="w-12 h-12 rounded-lg bg-[#7bd0ff]/10 flex items-center justify-center border border-[#7bd0ff]/20">
                  <span className="material-symbols-outlined lg text-[#7bd0ff]">insights</span>
                </div>
                <h3 className="font-bold text-[32px] text-[#b9c7e4]" style={{fontFamily: 'Hanken Grotesk'}}>ANSA.AI</h3>
                <p className="text-[#c5c6cd] font-[16px] leading-[1.6]" style={{fontFamily: 'Inter'}}>
                  The intelligent layer for African enterprises. Real-time business intelligence that understands market nuances and predicts consumer trends with high-fidelity accuracy.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#101415]/50 rounded-lg border border-[#233554]">
                    <div className="text-2xl font-bold text-[#7bd0ff]">40%</div>
                    <div className="text-xs text-[#c5c6cd] font-mono uppercase tracking-widest">Efficiency Gains</div>
                  </div>
                  <div className="p-4 bg-[#101415]/50 rounded-lg border border-[#233554]">
                    <div className="text-2xl font-bold text-[#ffb690]">10x</div>
                    <div className="text-xs text-[#c5c6cd] font-mono uppercase tracking-widest">Faster Analysis</div>
                  </div>
                </div>
              </div>
              <a className="mt-8 py-3 w-full text-center border border-[#7bd0ff] text-[#7bd0ff] rounded-lg font-bold hover:bg-[#7bd0ff] hover:text-[#001e2c] transition-all">
                Request Access
              </a>
            </div>

            {/* AfriAgroCore */}
            <div className="md:col-span-6 lg:col-span-12 group bg-[#112240] border border-[#233554] rounded-xl overflow-hidden flex flex-col lg:flex-row-reverse cyber-glow-hover transition-all duration-500">
              <div className="lg:w-1/2 relative min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#112240] z-10 lg:bg-gradient-to-l"></div>
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031913152/FPrBhpFLLgqMU4tya6R44G/hero-tech-team-kvuNL9tYkBLeJF9Apm9myT.webp" 
                  alt="AfriAgroCore" 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="lg:w-1/2 p-[32px] lg:p-[64px] flex flex-col justify-center space-y-[16px]">
                <span className="text-[#ffb690] font-mono text-[14px] uppercase tracking-widest font-medium">Sustainable Future</span>
                <h3 className="font-bold text-[48px] text-[#b9c7e4] leading-tight" style={{fontFamily: 'Hanken Grotesk'}}>AfriAgroCore</h3>
                <p className="text-[#c5c6cd] font-[18px] leading-[1.6]" style={{fontFamily: 'Inter'}}>
                  Empowering the backbone of the economy. Smart agriculture solutions integrating IoT sensors and AI-driven supply chain management to maximize yield and minimize waste.
                </p>
                <div className="flex flex-wrap gap-3 py-4">
                  <span className="px-3 py-1 border border-[#233554] rounded-full text-xs font-mono text-[#c5c6cd] uppercase tracking-widest">IoT Sensors</span>
                  <span className="px-3 py-1 border border-[#233554] rounded-full text-xs font-mono text-[#c5c6cd] uppercase tracking-widest">Predictive Analytics</span>
                  <span className="px-3 py-1 border border-[#233554] rounded-full text-xs font-mono text-[#c5c6cd] uppercase tracking-widest">Smart Logistics</span>
                </div>
                <div className="flex items-center space-x-6 pt-4">
                  <button className="bg-[#7bd0ff] text-[#001e2c] px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">View Case Studies</button>
                  <a className="text-[#b9c7e4] font-bold hover:text-[#7bd0ff] transition-colors inline-flex items-center">
                    Detailed Specs <span className="material-symbols-outlined ml-1">chevron_right</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid (Secondary Highlight) */}
        <section className="bg-[#0b0f10] py-16 sm:py-24 lg:py-[120px] border-y border-[#233554] product-grid-pattern">
          <div className="px-4 sm:px-4 sm:px-5 md:px-6 max-w-[1280px] mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-bold text-[48px] text-white" style={{fontFamily: 'Hanken Grotesk'}}>Our Technological Foundation</h2>
              <p className="text-[#c5c6cd] max-w-xl mx-auto font-[16px]" style={{fontFamily: 'Inter'}}>Every tool we build is fortified with three core principles of the AfriCyberCore philosophy.</p>
            </div>
            <div className="grid grid-cols-1 grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-[24px]">
              {[
                {
                  icon: 'security',
                  title: 'Hardened Security',
                  description: 'Built from the ground up with military-grade encryption and zero-trust architecture.'
                },
                {
                  icon: 'bolt',
                  title: 'Local Latency',
                  description: 'Optimized for regional connectivity standards to ensure peak performance anywhere.'
                },
                {
                  icon: 'hub',
                  title: 'Deep Integration',
                  description: 'Seamlessly connects with your existing workflows via custom Zapier and Make bridges.'
                }
              ].map((feature, idx) => (
                <div key={idx} className="p-[32px] bg-[#112240] border border-[#233554] rounded-xl">
                  <span className="material-symbols-outlined xl text-[#7bd0ff] mb-4 block">{ feature.icon}</span>
                  <h4 className="font-bold text-[32px] text-[#b9c7e4] mb-2" style={{fontFamily: 'Hanken Grotesk'}}>{feature.title}</h4>
                  <p className="text-[#c5c6cd] font-[16px]" style={{fontFamily: 'Inter'}}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 lg:py-[120px] relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0a192f] -z-20"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7bd0ff]/10 blur-[120px] rounded-full -z-10"></div>
          <div className="px-4 sm:px-4 sm:px-5 md:px-6 max-w-[1280px] mx-auto text-center space-y-[32px]">
            <h2 className="font-bold text-[64px] text-[#b9c7e4]" style={{fontFamily: 'Hanken Grotesk'}}>Ready to scale securely?</h2>
            <p className="text-[18px] text-[#c5c6cd] max-w-2xl mx-auto leading-[1.6]" style={{fontFamily: 'Inter'}}>Join the forward-thinking enterprises leveraging the Silicon Savannah's most robust AI suite.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <button className="bg-[#ffb690] text-[#341100] px-10 py-4 rounded-lg font-bold text-lg shadow-xl shadow-[#ffb690]/20 hover:scale-105 transition-transform">Get Started Today</button>
              <button className="border border-[#7bd0ff] text-[#7bd0ff] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#7bd0ff]/10 transition-colors">Request a Demo</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
