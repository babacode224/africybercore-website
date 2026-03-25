import { Shield, Zap, Code, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const FourPillars = () => {
  const pillars = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      subtitle: 'The Foundation',
      description: 'Security Audits, VAPT, Cloud Security, and Compliance (ISO/NDPR).',
      color: 'from-blue-500 to-blue-600',
      delay: 0
    },
    {
      icon: Zap,
      title: 'Business Automation',
      subtitle: 'The Engine',
      description: 'CRM setups, AI Chatbots, Zapier/Make workflows, and Auto-Invoicing.',
      color: 'from-yellow-500 to-orange-500',
      delay: 0.2
    },
    {
      icon: Code,
      title: 'No-Code Web Dev',
      subtitle: 'The Interface',
      description: 'MVPs, SaaS platforms, and Dashboards using Bubble, Webflow, or FlutterFlow.',
      color: 'from-purple-500 to-pink-500',
      delay: 0.4
    },
    {
      icon: BookOpen,
      title: 'Training Academy',
      subtitle: 'The Future',
      description: 'Corporate workshops and individual bootcamps on No-Code and AI tools.',
      color: 'from-green-500 to-emerald-600',
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const pillarVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    }),
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: (delay) => ({
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay + 0.3,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Four Pillars of Service
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A comprehensive approach to digital transformation: Security, Automation, Development, and Education
          </motion.p>
        </div>

        {/* Pillars with Animated Lines */}
        <div className="relative">
          {/* Animated Connection Lines */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-1 z-0">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={`line-${index}`}
                className="absolute h-1 bg-gradient-to-r from-primary to-accent"
                style={{
                  left: `${(index + 1) * 25}%`,
                  width: '20%',
                  top: '-2px',
                  originX: 0,
                }}
                custom={index}
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            ))}
          </div>

          {/* Pillars Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  custom={pillar.delay}
                  variants={pillarVariants}
                  className="group"
                >
                  <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    {/* Icon Container */}
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm font-medium text-accent mb-3">
                      {pillar.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {pillar.description}
                    </p>

                    {/* Animated Arrow */}
                    <motion.div
                      className="flex items-center text-primary font-semibold text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Build Your Digital Future?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our integrated approach ensures every pillar works together to accelerate your growth while maintaining enterprise-grade security.
            </p>
            <a href="#consulting">
              <Button size="lg" className="gradient-bg cursor-pointer">
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FourPillars;
