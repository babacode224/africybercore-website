import { MessageSquare, Clock, Shield, CheckCircle, Loader2, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Consulting = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    interest: '',
    needs: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
      setFormData({ name: '', business: '', email: '', phone: '', interest: '', needs: '' });
    } catch (err) {
      console.error(err);
      alert("❌ Could not send request.");
    }
    finally {
      setLoading(false); // stop loading
    }
  };


  const interestOptions = [
    'Cybersecurity',
    'Software Development',
    'AI Product Integration',
    'Digital Transformation',
    'General Inquiry'
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24-Hour Response',
      description: 'Get a reply within 24 hours from our expert consultants'
    },
    {
      icon: Shield,
      title: 'Confidential Consultation',
      description: 'Your business information is protected with enterprise-grade security'
    },
    {
      icon: CheckCircle,
      title: 'Tailored Solutions',
      description: 'Custom recommendations based on your specific African market needs'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+234 (0) 810 681 8560 or +234 (0) 816 720 5221',
      description: 'Mon-Fri 9AM-6PM WAT'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@africybercore.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Lagos, Nigeria',
      description: 'Serving all of Africa'
    }
  ];

  return (
    <section id="consulting" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Book a Consultation with Our Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to secure your business and build tech tailored to your market.
            Fill out the form and get a reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Let's Discuss Your Project
              </h3>
              <p className="text-muted-foreground">
                Tell us about your challenges and goals. Our experts will provide personalized recommendations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Business */}
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                  Business/Organization *
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="Your company or organization name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="your.email@company.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="+234 (0) 123 456 7890"
                />
              </div>

              {/* Area of Interest */}
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                  Area of Interest *
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                >
                  <option value="">Select an area of interest</option>
                  {interestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Needs Description */}
              <div>
                <label htmlFor="needs" className="block text-sm font-medium text-foreground mb-2">
                  Describe Your Needs *
                </label>
                <textarea
                  id="needs"
                  name="needs"
                  value={formData.needs}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground resize-none"
                  placeholder="Tell us about your current challenges, goals, and what you're looking to achieve..."
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full gradient-bg">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Book a Consultation
                    <MessageSquare className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-8">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                What to Expect
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-muted/50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Other Ways to Reach Us
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{contact.value}</p>
                        <p className="text-sm text-muted-foreground">{contact.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Closing Message */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Ready to Get Started?
              </h4>
              <p className="text-muted-foreground mb-4">
                "At AfriCyberCore, we don't just consult—we co-create solutions for lasting impact."
              </p>
              <div className="flex items-center space-x-2 text-sm text-primary">
                <CheckCircle className="w-4 h-4" />
                <span>Free initial consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;

