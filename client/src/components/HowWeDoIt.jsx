import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Code, Zap, Shield, Rocket, ChevronDown } from 'lucide-react';

const HowWeDoIt = () => {
  const [expandedStep, setExpandedStep] = useState(0);

  const steps = [
    {
      icon: Lightbulb,
      number: '01',
      title: 'Concept & Strategy',
      description: 'We begin by understanding your vision, market, and goals. Our team conducts a deep dive into your requirements to craft a strategic roadmap.',
      details: [
        'Requirements gathering and analysis',
        'Market research and competitive analysis',
        'Technology stack recommendation',
        'Project timeline and resource planning'
      ],
      color: 'bg-blue-600'
    },
    {
      icon: Code,
      number: '02',
      title: 'No-Code Build',
      description: 'Using cutting-edge no-code platforms like Bubble, Webflow, and FlutterFlow, we rapidly prototype and build your MVP.',
      details: [
        'UI/UX design and prototyping',
        'No-code platform development',
        'Database architecture setup',
        'Integration with third-party services'
      ],
      color: 'bg-purple-600'
    },
    {
      icon: Zap,
      number: '03',
      title: 'Automation Integration',
      description: 'We integrate intelligent automation workflows using AI chatbots, Zapier, Make, and custom automation logic to streamline operations.',
      details: [
        'AI chatbot implementation',
        'Workflow automation setup',
        'CRM integration',
        'Data synchronization and auto-invoicing'
      ],
      color: 'bg-orange-600'
    },
    {
      icon: Shield,
      number: '04',
      title: 'Security Hardening',
      description: 'Our cybersecurity experts conduct penetration testing, security audits, and implement enterprise-grade security measures.',
      details: [
        'Penetration testing and VAPT',
        'Security audit and compliance check',
        'Data encryption implementation',
        'Access control and authentication setup'
      ],
      color: 'bg-red-600'
    },
    {
      icon: Rocket,
      number: '05',
      title: 'Launch & Scale',
      description: 'We deploy your solution to production, monitor performance, and provide ongoing optimization and support for scaling.',
      details: [
        'Production deployment',
        'Performance monitoring setup',
        'User training and documentation',
        'Ongoing support and optimization'
      ],
      color: 'bg-green-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    }),
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How We Do It
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven 5-step process transforms your idea into a market-ready, secure, and scalable digital product
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isExpanded = expandedStep === index;

            return (
              <motion.div
                key={step.number}
                custom={index}
                variants={stepVariants}
                className="relative"
              >
                {/* Timeline Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute left-8 top-24 w-1 h-12 bg-blue-600"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                )}

                {/* Step Card */}
                <motion.div
                  className="bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
                  whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                >
                  {/* Header - Always Visible */}
                  <button
                    onClick={() => setExpandedStep(isExpanded ? -1 : index)}
                    className="w-full p-6 flex items-start gap-6 hover:bg-accent/5 transition-colors duration-300 text-left"
                  >
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-sm font-bold text-primary">{step.number}</span>
                        <h3 className="text-2xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    {/* Expand Icon */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <ChevronDown className="w-6 h-6 text-primary" />
                    </motion.div>
                  </button>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border"
                      >
                        <div className="p-6 bg-accent/5">
                          <h4 className="font-semibold text-foreground mb-4">Key Deliverables:</h4>
                          <ul className="space-y-3">
                            {step.details.map((detail, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <div className={`w-2 h-2 ${step.color} rounded-full mt-2 flex-shrink-0`} />
                                <span className="text-muted-foreground">{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your transformation journey?
          </p>
          <a href="#consulting" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Book a Consultation
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
