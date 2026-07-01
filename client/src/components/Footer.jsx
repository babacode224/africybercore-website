import { Shield, Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import PdfModal from './PdfModal'; // <-- use the reusable component

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  
  const [modalConfig, setModalConfig] = useState({
    open: false,
    title: '',
    fileUrl: '',
  });

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#consulting' },
  ];

  const services = [
    { name: 'Cybersecurity Consulting', href: '#cybersecurity' },
    { name: 'Software Development', href: '#software' },
    { name: 'AI Solutions', href: '#ai' },
    { name: 'Digital Transformation', href: '#digital' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/africybercore/' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/africybercore' },
    { name: 'GitHub', icon: Github, href: '#' },
  ];


  const handleSubscribe = async () => {
  if (!email) return;

  try {
    setStatus("loading");

    const res = await fetch(`${import.meta.env.VITE_API_URL}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      throw new Error("Failed to subscribe");
    }

    setStatus("success");
    setEmail("");
  } catch (err) {
    console.error(err);
    setStatus("error");
  }
};


  return (
    <footer className="bg-dark-navy text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="AfriCyberCore Logo" className='w-8 h-8' />
              </div>
              <span className="text-xl font-semibold">AfriCyberCore</span>
            </div>
            <p className="text-foreground mb-6 leading-relaxed">
              Empowering Africa's digital future through cybersecurity consulting and custom software solutions tailored for the African market.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary transition-colors duration-200 text-white"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-foreground transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
      <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
      <p className="text-foreground mb-4">
        Subscribe to our newsletter for the latest insights on cybersecurity and tech in Africa.
      </p>

      <div className="flex flex-col space-y-2">
        <div className="relative overflow-hidden bg-gray-800 rounded-lg w-[95%]">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 bg-gray-800 rounded-l-lg focus:outline-none relative text-white placeholder-gray-400"
          />
          <Button
            onClick={handleSubscribe}
            disabled={status === "loading"}
            className="rounded-none cursor-pointer w-[15%] right-0 absolute top-0 gradient-bg h-full"
          >
            {status === "loading" ? "..." : <Mail className="w-4 h-4" />}
          </Button>
        </div>
        {status === "success" && (
          <p className="text-xs text-green-400">🎉 Subscribed successfully!</p>
        )}
        {status === "error" && (
          <p className="text-xs text-red-400">❌ Something went wrong. Try again.</p>
        )}
        <p className="text-xs text-gray-400">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>



        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 AfriCyberCore. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button
              onClick={() =>
                setModalConfig({
                  open: true,
                  title: "Privacy Policy",
                  fileUrl: "/privacy-policy.txtpdf",
                })
              }
              className="text-gray-400 hover:text-[#1D4ED8] text-sm transition-colors duration-200"
            >
              Privacy Policy
            </button>
            <button
              onClick={() =>
                setModalConfig({
                  open: true,
                  title: "Terms of Service",
                  fileUrl: "/terms_of_service.txtpdf",
                })
              }
              className="text-gray-400 hover:text-[#1D4ED8] text-sm transition-colors duration-200"
            >
              Terms of Service
            </button>
            <button
              onClick={() =>
                setModalConfig({
                  open: true,
                  title: "Cookie Policy",
                  fileUrl: "/cookies.pdf",
                })
              }
              className="text-gray-400 hover:text-[#1D4ED8] text-sm transition-colors duration-200"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      {/* Reusable Modal */}
      <PdfModal
        open={modalConfig.open}
        onClose={() => setModalConfig({ ...modalConfig, open: false })}
        title={modalConfig.title}
        fileUrl={modalConfig.fileUrl}
      />
    </footer>
  );
};

export default Footer;
