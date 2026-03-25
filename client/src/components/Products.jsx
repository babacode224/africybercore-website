import { Brain, Shield, Leaf, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
  const products = [
  {
    id: "zolahealth",
    name: "Zola Health",
    subtitle: "AI Health Assistant",
    description:
      "Zola Health is an AI-driven health technology solution that acts as your first point of contact for health concerns. It listens to your symptoms, analyzes responses with AI trained on vast paramedical data, and connects you to the right healthcare specialist near you.",
    features: [
      "Voice-enabled AI for natural health conversations",
      "Trained with extensive paramedical data for accurate guidance",
      "Provides preliminary insights on health concerns",
      "Schedules appointments with relevant specialists nearby",
      "24/7 availability for quick health assistance",
    ],
    useCases: [
      "Virtual healthcare triage",
      "Patient engagement",
      "Telemedicine support",
      "Healthcare accessibility",
    ],
    icon: Shield,
    color: "from-red-500 to-red-600",
    badge: "HealthTech",
  },
  {
    id: "ansaai",
    name: "ANSA.AI",
    subtitle: "AI Customer Service",
    description:
      "ANSA.AI transforms how businesses handle customer service by providing instant, human-like AI conversations that scale. It responds instantly, resolves issues using company knowledge, and engages with hundreds of customers at once.",
    features: [
      "Human-like AI conversations for natural customer interactions",
      "Instant responses powered by company-specific FAQs and data",
      "Scalable support that handles hundreds of calls at the same time",
      "Always-on availability — no waiting, no fatigue, no hold times",
      "Consistent solutions delivered with accuracy and clarity",
    ],
    useCases: [
      "Customer support automation",
      "High-volume call handling",
      "FAQ and knowledge base integration",
      "24/7 customer service",
    ],
    icon: Brain,
    color: "from-blue-500 to-blue-600",
    badge: "Enterprise",
  },
  {
    id: "afriagrocore",
    name: "AfriAgroCore",
    subtitle: "AI AgriTech Platform",
    description:
      "AfriAgroCore empowers farmers with intelligence, speed, and tools to farm smarter. It detects crop diseases early, provides real-time guidance, and connects farmers directly to markets, resources, and financial services.",
    features: [
      "AI Voice-Enabled Chatbot with local language support",
      "Agricultural supply marketplace for trusted vendors",
      "Predictive weather and pest forecasts",
      "Direct-to-market connections for farmers",
      "Sustainable farming guides and best practices",
      "Expert consultation and community forum",
      "Financial services with microloans and crop insurance",
    ],
    useCases: [
      "Crop disease detection",
      "Market access for farmers",
      "Sustainable farming",
      "Agricultural risk reduction",
    ],
    icon: Leaf,
    color: "from-green-500 to-green-600",
    badge: "AgriTech",
  },
];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI-Powered Tools Designed for Africa's Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our suite of AI-powered products tailored to solve local challenges and scale African businesses. 
            Built with deep understanding of African markets and global technology standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group bg-card rounded-2xl border border-border hover-lift transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {product.badge && (
                      <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-primary font-semibold mb-4">{product.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.useCases.map((useCase, index) => (
                        <span
                          key={index}
                          className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-8 pb-8">
                  <div className="flex space-x-3">
                    {/* <Button variant="outline" className="flex-1">
                      Request Demo
                    </Button> */}
                    <a href='#consulting' className="text-white bg-primary text-sm font-semibold px-4 py-2 rounded-lg flex-1 text-center">
                      Contact Sales
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="bg-gradient-to-r from-dark-navy to-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-current" />
                ))}
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join over 500 African businesses already using our AI-powered solutions to drive growth, 
              improve efficiency, and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-navy">
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-dark-navy font-semibold">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-6">
              No credit card required • 30-day free trial • Cancel anytime
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Products;

