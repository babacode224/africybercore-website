import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Why African Startups Can\'t Ignore Cybersecurity in 2025',
      summary: 'As African startups scale rapidly, cybersecurity becomes critical for protecting customer data, maintaining trust, and ensuring sustainable growth in the digital economy.',
      author: 'Dr. Amara Okafor',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'AI for Africa: Hype or Hope?',
      summary: 'Examining the real potential of artificial intelligence in solving African challenges, from healthcare to agriculture, and separating genuine innovation from marketing hype.',
      author: 'Prof. Kwame Asante',
      date: '2024-12-10',
      readTime: '12 min read',
      category: 'AI & Innovation',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      title: 'Building Software for African Markets: 5 Key Things to Know',
      summary: 'Essential insights for developers and businesses creating software solutions that truly serve African users, from connectivity challenges to cultural considerations.',
      author: 'Sarah Mwangi',
      date: '2024-12-05',
      readTime: '6 min read',
      category: 'Software Development',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      title: 'The Rise of Fintech Security in West Africa',
      summary: 'How financial technology companies across West Africa are implementing robust security measures to protect millions of users and build trust in digital payments.',
      author: 'Ibrahim Diallo',
      date: '2024-11-28',
      readTime: '10 min read',
      category: 'Fintech',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 5,
      title: 'Digital Identity Solutions for Rural Communities',
      summary: 'Exploring innovative approaches to providing secure digital identity services in rural African communities, overcoming infrastructure and literacy challenges.',
      author: 'Dr. Fatima Al-Rashid',
      date: '2024-11-20',
      readTime: '9 min read',
      category: 'Digital Identity',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 6,
      title: 'Blockchain Beyond Cryptocurrency in Africa',
      summary: 'Real-world applications of blockchain technology across African industries, from supply chain management to land registry and healthcare records.',
      author: 'Michael Ochieng',
      date: '2024-11-15',
      readTime: '7 min read',
      category: 'Blockchain',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const categories = ['All', 'Cybersecurity', 'AI & Innovation', 'Software Development', 'Fintech', 'Digital Identity', 'Blockchain'];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AfriCyberCore Blog: Tech, Security & Innovation in Africa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay ahead with insights on cybersecurity, AI, and local software development trends. 
            Expert perspectives on technology's role in Africa's digital transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              size="sm"
              className={category === 'All' ? 'gradient-bg' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-card rounded-2xl border border-border overflow-hidden hover-lift transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Tag className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">Featured Article Image</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-dark-navy text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    {featuredPost.summary}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{featuredPost.author}</p>
                        <p className="text-sm text-muted-foreground">Senior Security Analyst</p>
                      </div>
                    </div>

                    <Button className="gradient-bg">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card rounded-2xl border border-border overflow-hidden hover-lift transition-all duration-300 group"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Tag className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-xs">Article Image</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.summary}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Stay Updated with African Tech Insights
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest trends in cybersecurity, 
              AI, and software development across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="gradient-bg">
                Subscribe to Our Insights
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                Read More Posts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

