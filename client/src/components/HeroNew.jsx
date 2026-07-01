import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroNew = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Slideshow images
  const slideImages = [
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DQBwdAxCTG93UJH3XBNzP9/hero-tech-6bChTajZfThXp9WFuyfu2g.webp',
      alt: 'Tech Workspace'
    },
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DQBwdAxCTG93UJH3XBNzP9/hero-team-dmvLDakHmC3rLD9ai4urFL.webp',
      alt: 'Professional Team'
    },
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DQBwdAxCTG93UJH3XBNzP9/hero-product-2K7ZGwxQ3ySSTrrNKmYMxC.webp',
      alt: 'Product Dashboard'
    },
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DQBwdAxCTG93UJH3XBNzP9/hero-abstract-m3W7PawnsDx5qSmkbUURJo.webp',
      alt: 'Abstract Tech'
    }
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideImages.length]);

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Tech Pattern Background - Left Side */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <defs>
            <pattern id="tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-primary" />
              <path d="M 20 0 L 20 40 M 0 20 L 40 20" stroke="currentColor" strokeWidth="0.5" className="text-primary" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-40 left-1/4 w-1 h-1 bg-primary rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/3 w-3 h-3 bg-accent/50 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-2 h-2 bg-primary/50 rounded-full"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Main Content - Two Division Layout */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Section - 60% */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-2xl">
              {/* Main Headline - Professional Font */}
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight tracking-tight"
                style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif" }}
                variants={itemVariants}
              >
                Your Digital{' '}
                <motion.span 
                  className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  Transformation
                </motion.span>
                <br />
                Partner
              </motion.h1>

              {/* Tagline */}
              <motion.div 
                className="flex flex-col gap-3 mb-8"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">
                    Secure.
                  </p>
                </div>
                <div className="flex items-center gap-3 ml-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">
                    Fast.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">
                    Smart.
                  </p>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
                variants={itemVariants}
              >
                We help businesses launch digital products in weeks, not months, using AI and No-Code, while ensuring enterprise-grade security is baked into every line of logic.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href='#consulting' className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white font-bold px-8 py-4 rounded-xl text-lg hover:shadow-xl transition-all duration-300">
                    Book Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href='#products'
                    className="inline-flex items-center justify-center bg-foreground/10 hover:bg-foreground/20 text-foreground font-bold px-8 py-4 rounded-xl text-lg border-2 border-foreground/20 transition-all duration-300"
                  >
                    <Play className="mr-2 w-4 h-4" />
                    Explore Our AI Products
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - 40% - Animated Slideshow */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-96 md:h-full md:min-h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20">
              {/* Image Slideshow */}
              <div className="relative w-full h-full">
                {slideImages.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image.url}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                  />
                ))}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent pointer-events-none" />

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {slideImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 z-20"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Live Demo</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-3 bg-foreground rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroNew;
