import { Shield, Code, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatWeDo = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive security assessments, threat analysis, and protection strategies tailored for African businesses and infrastructure.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Code,
      title: 'Custom Software Solutions',
      description: 'Bespoke software development designed to address unique challenges and opportunities in African markets.',
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Systems', 'API Development'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Brain,
      title: 'AI Innovations for Africa',
      description: 'Cutting-edge artificial intelligence solutions that understand and serve the diverse needs of African communities.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We combine deep African market knowledge with world-class technology expertise to deliver 
            solutions that drive digital transformation across the continent.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 border border-border hover-lift transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="#consulting">
                  <Button 
                  variant="link" 
                  className="group-hover:bg-primary group-hover:text-white transition-all duration-300 w-full justify-between"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of African businesses that trust AfriCyberCore for their digital transformation journey.
            </p>
            <a href="#consulting">
              <Button size="lg" className="gradient-bg cursor-pointer">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

