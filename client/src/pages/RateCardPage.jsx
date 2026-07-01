import React, { useState } from 'react';
import { Zap, Code, Smartphone, Database, Shield, Layers } from 'lucide-react';
import RateCard from '../components/RateCard';

const RateCardPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'frontend-web',
      title: 'Frontend Web Development',
      subtitle: 'UI Layout, Responsiveness, Animations',
      price: 200000,
      idealFor: 'Portfolios, Event landing pages, Small Business Showcases',
      icon: Code,
      iconBg: 'bg-blue-600',
      fullDescription: 'Professional frontend development focusing on stunning UI/UX, responsive design, and smooth animations. Perfect for creating impressive digital first impressions.',
      included: [
        'Responsive design (mobile, tablet, desktop)',
        'Modern UI/UX with animations',
        'SEO optimization',
        'Performance optimization',
        'Cross-browser compatibility',
        '2 weeks delivery timeline'
      ],
      examples: 'Portfolio websites, Event landing pages, Corporate showcases, Product landing pages'
    },
    {
      id: 'fullstack-website',
      title: 'Full-Stack Website',
      subtitle: 'Frontend + Backend, Database, CMS Admin',
      price: 450000,
      idealFor: 'Membership sites, Blogs with user dashboards, Custom directories',
      icon: Layers,
      iconBg: 'bg-purple-600',
      fullDescription: 'Complete web solution with user authentication, database integration, and admin panel. Ideal for platforms requiring user management and content control.',
      included: [
        'Full-stack development (React + Node.js)',
        'User authentication & authorization',
        'Database design & integration',
        'Admin dashboard for content management',
        'Email notifications',
        'User profile management',
        '4 weeks delivery timeline'
      ],
      examples: 'Membership platforms, Blog systems with user dashboards, Online directories, SaaS applications'
    },
    {
      id: 'web-app-standard',
      title: 'Web Application (Standard)',
      subtitle: 'Dynamic database, API workflows, User dashboards',
      price: 750000,
      idealFor: 'Food Vendors (Online ordering, delivery routing & tracking)',
      icon: Database,
      iconBg: 'bg-orange-600',
      fullDescription: 'Powerful web application with complex workflows, real-time data processing, and role-based user dashboards. Perfect for multi-vendor platforms.',
      included: [
        'Complex database architecture',
        'RESTful API development',
        'Role-based access control',
        'Real-time data updates',
        'Payment gateway integration',
        'Analytics dashboard',
        'Vendor management system',
        '6 weeks delivery timeline'
      ],
      examples: 'Food delivery platforms, E-commerce marketplaces, Vendor management systems, Booking platforms'
    },
    {
      id: 'web-app-advanced',
      title: 'Web Application (Advanced)',
      subtitle: 'High-security, Real-time processing, Complex logic',
      price: 1200000,
      idealFor: 'Medical Companies (Virtual consultations, Appointment booking, Telehealth)',
      icon: Shield,
      iconBg: 'bg-red-600',
      fullDescription: 'Enterprise-grade web application with advanced security, real-time processing, and complex operational logic. Built for mission-critical systems.',
      included: [
        'Enterprise security architecture',
        'HIPAA/GDPR compliance ready',
        'Real-time video/audio integration',
        'Advanced scheduling systems',
        'Multi-timezone support',
        'Automated workflow automation',
        'Advanced analytics & reporting',
        'Disaster recovery planning',
        '8 weeks delivery timeline'
      ],
      examples: 'Telehealth platforms, Medical appointment systems, Healthcare management systems, Financial platforms'
    },
    {
      id: 'mobile-app',
      title: 'Mobile Application',
      subtitle: 'Native or Cross-Platform iOS & Android',
      price: 1500000,
      idealFor: 'Businesses looking for direct-to-device customer engagement',
      icon: Smartphone,
      iconBg: 'bg-green-600',
      fullDescription: 'Native or cross-platform mobile app development for iOS and Android. Optimized for performance, user experience, and App Store publishing.',
      included: [
        'Cross-platform development (React Native/Flutter)',
        'Native iOS & Android builds',
        'App Store & Google Play optimization',
        'Push notifications',
        'Offline functionality',
        'Camera & location services',
        'In-app payments',
        'App analytics integration',
        '8 weeks delivery timeline'
      ],
      examples: 'Customer engagement apps, Delivery apps, Social platforms, Fitness & wellness apps'
    },
    {
      id: 'hybrid-ecosystem',
      title: 'Hybrid Ecosystem Bundle',
      subtitle: 'Full-Stack Web + Connected Mobile App',
      price: 2300000,
      idealFor: 'Scalable startups, Multi-platform on-demand delivery apps',
      icon: Zap,
      iconBg: 'bg-indigo-600',
      fullDescription: 'Complete digital ecosystem combining web and mobile applications sharing the same backend. Perfect for scaling startups requiring omnichannel presence.',
      included: [
        'Full-stack web application',
        'Native iOS & Android apps',
        'Unified backend infrastructure',
        'Real-time synchronization',
        'Admin dashboard',
        'Advanced analytics',
        'Multi-platform user management',
        'Scalable cloud infrastructure',
        'Push notifications across platforms',
        '12 weeks delivery timeline'
      ],
      examples: 'On-demand delivery platforms, Marketplace ecosystems, Ride-sharing apps, Multi-platform SaaS'
    }
  ];

  const handleBookNow = (serviceId) => {
    setSelectedService(serviceId);
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Service Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your project. Click any card to flip and see full details, then book your service.
          </p>
        </div>

        {/* Rate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 w-full max-w-7xl mx-auto">
          {services.map((service) => (
            <RateCard
              key={service.id}
              service={service}
              onBookNow={handleBookNow}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center border border-border w-full max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Not sure which package is right for you?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you choose the perfect solution for your business needs. Get a free consultation today.
          </p>
          <button
            onClick={() => {
              const consultingSection = document.getElementById('consulting');
              if (consultingSection) {
                consultingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateCardPage;
