import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useLocation } from 'wouter';

const RateCard = ({ service, onBookNow }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [, setLocation] = useLocation();

  const handleBookNow = () => {
    // Scroll to consulting section with service pre-filled
    onBookNow(service.id);
    // Scroll to consulting section
    const consultingSection = document.getElementById('consulting');
    if (consultingSection) {
      consultingSection.scrollIntoView({ behavior: 'smooth' });
      // Set the service in localStorage for the form to pick up
      localStorage.setItem('selectedService', service.id);
    }
  };

  return (
    <div className="h-96 cursor-pointer perspective" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100, damping: 15 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <motion.div
          className="absolute w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-border shadow-lg flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.iconBg}`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{service.subtitle}</p>
            <p className="text-xs text-muted-foreground line-clamp-3">{service.idealFor}</p>
          </div>

          <div>
            <div className="text-3xl font-bold text-primary mb-2">₦{service.price.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Base Price</p>
            <div className="mt-4 flex items-center text-primary text-sm font-medium">
              Click to learn more <ChevronRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute w-full h-full bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 border border-primary/20 shadow-lg flex flex-col justify-between text-white overflow-y-auto"
          style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
        >
          <div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>

            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2 opacity-90">Description</h4>
              <p className="text-xs leading-relaxed opacity-90">{service.fullDescription}</p>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2 opacity-90">What's Included</h4>
              <ul className="text-xs space-y-1 opacity-90">
                {service.included.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2 opacity-90">Examples</h4>
              <p className="text-xs opacity-90">{service.examples}</p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleBookNow();
            }}
            className="w-full bg-white text-primary font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            Book Now
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RateCard;
