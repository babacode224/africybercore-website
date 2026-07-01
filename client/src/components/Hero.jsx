import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  // Slideshow images - Tech, Team, Product, Abstract (newly generated)
  const slideImages = [
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DQBwdAxCTG93UJH3XBNzP9/hero-tech-diverse-kTjAFgxX62WCypUKrGBeQo.webp',
      alt: 'Tech Workspace - Diverse Team'
    },
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DQBwdAxCTG93UJH3XBNzP9/hero-team-diverse-QkNNMFKZbwqzpvoKvGT3pR.webp',
      alt: 'Professional Team Collaboration'
    },
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DQBwdAxCTG93UJH3XBNzP9/hero-product-diverse-emrBX5jtHeDtZE4F79fSo4.webp',
      alt: 'Product Dashboard Presentation'
    },
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DQBwdAxCTG93UJH3XBNzP9/hero-tech-workspace-hQk5YAgECd9bBm4VDGgESb.webp',
      alt: 'Tech Operations Center'
    }
  ];

  const taglines = ['Secure.', 'Fast.', 'Smart.', 'AI-Powered.'];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, [slideImages.length]);

  // Auto-rotate taglines every 2 seconds
  useEffect(() => {
    const taglineInterval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 2000);
    return () => clearInterval(taglineInterval);
  }, [taglines.length]);

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
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f5f7fa 100%)',
      backgroundImage: `
        repeating-linear-gradient(0deg, rgba(59, 130, 246, 0.03) 0px, rgba(59, 130, 246, 0.03) 1px, transparent 1px, transparent 2px),
        repeating-linear-gradient(90deg, rgba(59, 130, 246, 0.03) 0px, rgba(59, 130, 246, 0.03) 1px, transparent 1px, transparent 2px)
      `,
      backgroundSize: '50px 50px, 50px 50px'
    }}>
      {/* Tech Circuit Pattern Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" style={{ opacity: 0.08 }}>
          <defs>
            <pattern id="circuit" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#3b82f6" />
              <circle cx="100" cy="20" r="2" fill="#3b82f6" />
              <circle cx="60" cy="60" r="2" fill="#3b82f6" />
              <circle cx="20" cy="100" r="2" fill="#3b82f6" />
              <circle cx="100" cy="100" r="2" fill="#3b82f6" />
              <path d="M 20 20 L 100 20" stroke="#3b82f6" strokeWidth="0.5" />
              <path d="M 100 20 L 60 60" stroke="#3b82f6" strokeWidth="0.5" />
              <path d="M 60 60 L 20 100" stroke="#3b82f6" strokeWidth="0.5" />
              <path d="M 20 100 L 100 100" stroke="#3b82f6" strokeWidth="0.5" />
              <path d="M 100 100 L 60 60" stroke="#3b82f6" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="0.8" fill="#3b82f6" opacity="0.6" />
              <circle cx="80" cy="60" r="0.8" fill="#3b82f6" opacity="0.6" />
              <circle cx="50" cy="80" r="0.8" fill="#3b82f6" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-40 left-1/4 w-1 h-1 bg-blue-600 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/3 w-3 h-3 bg-orange-400 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-2 h-2 bg-blue-500 rounded-full"
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
              {/* Main Headline - Professional Font - SOLID BLUE */}
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight tracking-tight"
                style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif" }}
                variants={itemVariants}
              >
                Your Digital
                <br />
                <span className="text-blue-600 dark:text-blue-400">Transformation</span>
                <br />
                Partner
              </motion.h1>

              {/* Rotating Tagline - NO LINE BARS, NO GRADIENTS */}
              <motion.div 
                className="mb-8 h-16 flex items-center"
                variants={itemVariants}
              >
                <motion.p 
                  key={currentTaglineIndex}
                  className="text-4xl md:text-5xl font-bold text-orange-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {taglines[currentTaglineIndex]}
                </motion.p>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
                variants={itemVariants}
              >
                We help businesses launch digital products in weeks, not months, using AI-powered solutions and No-Code, while ensuring enterprise-grade security is baked into every line of logic.
              </motion.p>

              {/* CTA Buttons - SOLID BLUE, NO GRADIENT */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href='#consulting' className="inline-flex items-center justify-center bg-blue-600 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition-all duration-300">
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
                    className="inline-flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold px-8 py-4 rounded-xl text-lg border-2 border-gray-300 dark:border-gray-600 transition-all duration-300"
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
            <div className="relative w-full h-80 sm:h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-300 bg-gray-100">
              {/* Image Slideshow Container */}
              <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
                {slideImages && slideImages.length > 0 && slideImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="eager"
                      onError={(e) => {
                        console.error(`Failed to load image: ${image.url}`);
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {slideImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white w-8 h-2' 
                        : 'bg-white/50 hover:bg-white/75 w-2 h-2'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>


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
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
