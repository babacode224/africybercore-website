import { useState } from 'react';

export default function ContactDesign() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    inquiryType: 'Cybersecurity Audit',
    message: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message transmission initiated...');
  };

  return (
    <div className="min-h-screen bg-background text-on-background overflow-x-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 -z-10 cyber-grid pointer-events-none"></div>

      <main className="relative pt-32 pb-section-padding">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          {/* Hero Header */}
          <div className="mb-section-padding text-center md:text-left">
            <span className="font-label-caps text-label-caps text-secondary mb-stack-sm block">GET IN TOUCH</span>
            <h1 className="font-display-lg text-display-lg mb-stack-md">
              Let's Secure Your <span className="text-tertiary">Digital Future</span>.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Connect with the Silicon Savannah's leading cybersecurity and automation experts to fortress your operations.
            </p>
          </div>

          {/* Split Layout: Left (Cards + Map) | Right (Form) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* LEFT COLUMN: Contact Info & Map */}
            <div className="space-y-12">
              {/* Contact Cards - Single Column */}
              <div className="space-y-stack-lg">
                {/* Call Card */}
                <div className="bg-surface-card border border-surface-border p-8 rounded-lg hover:shadow-[0_0_20px_rgba(123,208,255,0.2)] hover:border-secondary transition-all duration-300">
                  <span className="material-symbols-outlined text-secondary block mb-stack-md" style={{ fontSize: '40px' }}>phone_in_talk</span>
                  <h3 className="font-headline-md text-[24px] mb-stack-sm text-on-surface">Direct Line</h3>
                  <p className="font-body-md text-on-surface-variant">+254 700 000 000</p>
                  <p className="font-body-md text-on-surface-variant">+254 200 000 000</p>
                </div>

                {/* Email Card */}
                <div className="bg-surface-card border border-surface-border p-8 rounded-lg hover:shadow-[0_0_20px_rgba(123,208,255,0.2)] hover:border-secondary transition-all duration-300">
                  <span className="material-symbols-outlined text-secondary block mb-stack-md" style={{ fontSize: '40px' }}>alternate_email</span>
                  <h3 className="font-headline-md text-[24px] mb-stack-sm text-on-surface">Email Support</h3>
                  <p className="font-body-md text-on-surface-variant">contact@africybercore.com</p>
                  <p className="font-body-md text-on-surface-variant">secure@africybercore.com</p>
                </div>
              </div>

              {/* Location Section */}
              <div className="space-y-stack-lg">
                <div className="flex items-start gap-stack-md">
                  <span className="material-symbols-outlined text-tertiary mt-1" style={{ fontSize: '24px' }}>location_on</span>
                  <div>
                    <h3 className="font-headline-md text-[24px] mb-stack-sm text-on-surface">Headquarters</h3>
                    <p className="font-body-md text-on-surface-variant">Nairobi Tech Hub, Westlands, Kenya</p>
                    <p className="font-body-md text-on-surface-variant">Level 4, Innovation Building</p>
                  </div>
                </div>

                {/* Map */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-surface-border shadow-2xl group">
                  <div className="absolute inset-0 bg-primary-container/40 z-10 pointer-events-none group-hover:bg-primary-container/20 transition-colors duration-500"></div>
                  <div 
                    className="absolute inset-0 z-0 bg-cover bg-center" 
                    style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTHgjiTpLcqKw4q2UE2rwpQqPuly9KZe0YSxJw3zuMRlJqCk8AX_if-uHeKRQ1zQt3_zesKLRtbMJI3ctAv50N1BpIJH84vAGsGWNrkMCuawLMW9TPHX2aku-yWN_Gkon08ZL10bMQk22WwTjVWK5pkvEXojBs8GDBvvRPbH8X86db4tMnqLpuqhpjQipQyOctN6AwYAMmCJM3NB1w4goL4yoqu945XGCkvefusNJghevb0EHj04S3_K9srMimX7_lILoVlNJrMuw')"}}
                  ></div>
                  <div className="absolute bottom-6 left-6 z-20 bg-surface-container-lowest/80 backdrop-blur-md px-6 py-4 rounded-lg border border-surface-border">
                    <span className="font-label-caps text-[12px] text-tertiary">Nairobi Office</span>
                    <p className="font-body-md font-bold text-on-surface">1.2635° S, 36.8041° E</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="bg-surface-card border border-surface-border p-8 md:p-12 rounded-xl relative overflow-hidden h-fit">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <h2 className="font-headline-md text-headline-md mb-stack-lg relative z-10 text-on-surface">Secure Transmission</h2>
              
              <form className="space-y-stack-lg relative z-10" onSubmit={handleSubmit}>
                {/* Full Name & Email - 2 Column */}
                <div className="grid grid-cols-1 grid-cols-1 md:grid-cols-2 gap-stack-md">
                  <div className="space-y-stack-sm">
                    <label className="font-label-caps text-label-caps text-on-surface-variant text-xs">Full Name</label>
                    <input 
                      className="w-full bg-surface-container-lowest border border-surface-border rounded-lg p-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-outline text-on-surface text-sm" 
                      placeholder="John Doe" 
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-stack-sm">
                    <label className="font-label-caps text-label-caps text-on-surface-variant text-xs">Corporate Email</label>
                    <input 
                      className="w-full bg-surface-container-lowest border border-surface-border rounded-lg p-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-outline text-on-surface text-sm" 
                      placeholder="john@company.com" 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Subject / Inquiry Type */}
                <div className="space-y-stack-sm">
                  <label className="font-label-caps text-label-caps text-on-surface-variant text-xs">Subject / Inquiry Type</label>
                  <select 
                    className="w-full bg-surface-container-lowest border border-surface-border rounded-lg p-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all text-on-surface text-sm"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                  >
                    <option>Cybersecurity Audit</option>
                    <option>Business Automation</option>
                    <option>Custom Software Development</option>
                    <option>Consulting Request</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>

                {/* Message Detail */}
                <div className="space-y-stack-sm">
                  <label className="font-label-caps text-label-caps text-on-surface-variant text-xs">Message Detail</label>
                  <textarea 
                    className="w-full bg-surface-container-lowest border border-surface-border rounded-lg p-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-outline resize-none text-on-surface text-sm" 
                    placeholder="How can we fortify your business today?" 
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3 py-stack-sm">
                  <input 
                    className="rounded bg-surface-container-lowest border border-surface-border text-tertiary focus:ring-tertiary/20 cursor-pointer mt-1" 
                    id="consent" 
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                  <label className="font-body-md text-on-surface-variant text-sm cursor-pointer" htmlFor="consent">
                    I consent to secure processing of my data according to the Privacy Policy.
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  className="w-full bg-tertiary text-on-tertiary-fixed font-button-text py-5 rounded-lg font-bold flex items-center justify-center gap-stack-sm hover:opacity-90 active:scale-95 transition-all" 
                  type="submit"
                >
                  Send Secure Message
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
