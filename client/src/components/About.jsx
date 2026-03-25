import { Target, Eye, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import africanTechImage from '../assets/images/african-tech.jpg';
import Teams from './Teams';

const About = () => {
  const approach = [
    {
      step: '01',
      title: 'Consult',
      description: 'Deep analysis of digital needs',
      details: 'We begin with comprehensive consultation to understand your unique challenges, market position, and digital transformation goals.',
      icon: Target
    },
    {
      step: '02',
      title: 'Build',
      description: 'Tailored software creation',
      details: 'Our expert team develops custom solutions using cutting-edge technology, designed specifically for African market requirements.',
      icon: CheckCircle
    },
    {
      step: '03',
      title: 'Protect',
      description: 'End-to-end cybersecurity assurance',
      details: 'We implement robust security measures and ongoing protection to ensure your digital assets remain safe and compliant.',
      icon: Users
    }
  ];

  const values = [
    'Africa-first thinking',
    'Local insight + global tech',
    'Secure, scalable systems',
    'Dedicated experts'
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About AfriCyberCore
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are reimagining Africa's digital space through security and local software innovation, 
            building the foundation for a digitally empowered continent.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Reimagining Africa's digital space through security and local software innovation. 
                We bridge the gap between global technology standards and African market needs, 
                creating solutions that truly serve our communities.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be Africa's leading force in digital resilience and homegrown innovation. 
                We envision a continent where every business, regardless of size, has access to 
                world-class cybersecurity and software solutions.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Who We Are</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Expert team of African cybersecurity professionals, engineers, and innovators. 
                Our diverse backgrounds span across the continent, bringing together local insights 
                with international expertise.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={africanTechImage} 
                alt="African Technology Innovation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/60 to-transparent"></div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h4 className="text-xl font-semibold mb-2">Empowering African Innovation</h4>
              <p className="text-sm opacity-90">
                Building technology solutions that understand and serve African communities
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Approach</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful digital transformation for African businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approach.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative">
                  {/* Connection Line */}
                  {index < approach.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent z-0"></div>
                  )}
                  
                  <div className="relative bg-card rounded-2xl p-8 border border-border hover-lift transition-all duration-300 z-10">
                    {/* Step Number */}
                    <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                    
                    {/* Icon */}
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-primary font-medium mb-3">{item.description}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why AfriCyberCore */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Why AfriCyberCore?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We bring together the best of African innovation and global technology standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium">{value}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="#consulting">
              <Button size="lg" className="gradient-bg cursor-pointer">
              Learn More About Our Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            </a>
          </div>
        </div>
        <Teams />
      </div>
    </section>
  );
};

export default About;

