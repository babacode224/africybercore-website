import { motion } from 'framer-motion';
import { BookOpen, Users, Award, ArrowRight, Check, Mail, Phone, Code, Zap, Brain, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function TrainingAcademy() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const courses = [
    {
      icon: Code,
      title: 'No-Code Web Development',
      description: 'Learn to build professional web applications without writing code using Bubble, Webflow, and FlutterFlow.',
      duration: '6 weeks',
      level: 'Beginner to Intermediate',
      topics: ['Bubble Basics', 'Webflow Design', 'Database Design', 'API Integration', 'Deployment'],
      price: '$299'
    },
    {
      icon: Zap,
      title: 'Business Automation Mastery',
      description: 'Master workflow automation, AI chatbots, and business process optimization using Zapier, Make, and AI tools.',
      duration: '4 weeks',
      level: 'Intermediate',
      topics: ['Zapier Workflows', 'Make Automation', 'AI Chatbots', 'CRM Setup', 'Data Integration'],
      price: '$199'
    },
    {
      icon: Shield,
      title: 'Security for Builders',
      description: 'Understand cybersecurity fundamentals, penetration testing, and how to build secure applications from the ground up.',
      duration: '5 weeks',
      level: 'All Levels',
      topics: ['Security Basics', 'VAPT', 'Data Protection', 'Compliance', 'Secure Coding'],
      price: '$249'
    },
    {
      icon: Brain,
      title: 'AI Integration Bootcamp',
      description: 'Learn to integrate AI agents, machine learning models, and intelligent automation into your applications.',
      duration: '6 weeks',
      level: 'Intermediate to Advanced',
      topics: ['AI Fundamentals', 'Chatbots', 'ML Models', 'Data Analysis', 'Prompt Engineering'],
      price: '$349'
    }
  ];

  const successStories = [
    {
      name: 'Amara Okonkwo',
      role: 'Startup Founder',
      company: 'TechHub Nigeria',
      quote: 'The training transformed my ability to launch products quickly. I built my MVP in 3 weeks instead of 3 months!',
      image: '👩‍💼'
    },
    {
      name: 'Kwame Asante',
      role: 'Business Owner',
      company: 'Digital Solutions Ghana',
      quote: 'Learning automation saved my business 40 hours per week. The ROI was immediate and incredible.',
      image: '👨‍💼'
    },
    {
      name: 'Zainab Hassan',
      role: 'Career Changer',
      company: 'Now Tech Developer',
      quote: 'I went from zero coding knowledge to building production apps. This academy is a game-changer for African tech talent.',
      image: '👩‍🎓'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              AfriCyberCore Training Academy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Build the next generation of African tech talent. Master No-Code, Automation, Security, and AI through hands-on, industry-led training.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="gradient-bg cursor-pointer">
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Course Catalog
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive training programs designed for professionals, entrepreneurs, and organizations
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={course.title}
                  variants={itemVariants}
                  className="bg-card rounded-2xl border border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {course.title}
                  </h3>

                  <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={16} />
                      {course.level}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 flex-grow">
                    {course.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3">Topics Covered:</p>
                    <ul className="space-y-2">
                      {course.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check size={16} className="text-accent" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <Button variant="outline">Enroll Now</Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real transformations from our academy graduates
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                variants={itemVariants}
                className="bg-card rounded-2xl border border-border p-8 text-center"
              >
                <div className="text-5xl mb-4">{story.image}</div>
                <p className="text-lg italic text-muted-foreground mb-6">
                  "{story.quote}"
                </p>
                <p className="font-semibold text-foreground">{story.name}</p>
                <p className="text-sm text-accent">{story.role}</p>
                <p className="text-sm text-muted-foreground">{story.company}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Skills?
            </h2>
            <p className="text-xl text-muted-foreground">
              Get in touch with our academy team to discuss the right course for you
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl border border-border p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+234 (0) 123 456 7890"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Interested Course
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course.title} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tell us about your goals and experience level..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              Send Inquiry
            </motion.button>
          </motion.form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-muted-foreground">academy@africybercore.com</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <p className="text-muted-foreground">+234 (0) 123 456 7890</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


