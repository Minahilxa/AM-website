import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "The Future of 360° Digital Solutions – Why Businesses Need an Integrated Approach",
      excerpt: "Discover how combining web development, marketing, and automation can transform your business operations and customer reach.",
      date: "August 2025",
      color: "from-primary/20 to-primary/5"
    },
    {
      title: "Top 5 Web Design Trends in 2025",
      excerpt: "From AI-driven personalization to minimalist UX, here's what's shaping the future of web design and development.",
      date: "September 2025",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      title: "How Blockchain is Revolutionizing Business Transparency",
      excerpt: "Explore how blockchain technology is being adopted by digital agencies and e-commerce businesses to ensure data integrity and secure payments.",
      date: "October 2025",
      color: "from-accent/20 to-accent/5"
    },
    {
      title: "SEO in 2025: The New Rules for Ranking",
      excerpt: "Learn how evolving search algorithms are changing the SEO landscape — and what strategies you can use to stay ahead.",
      date: "October 2025",
      color: "from-primary/20 to-secondary/5"
    },
    {
      title: "Why Consistent Branding Builds Trust",
      excerpt: "A strong brand isn't just about visuals — it's about storytelling, tone, and consistency across all digital touchpoints.",
      date: "September 2025",
      color: "from-secondary/20 to-accent/5"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--background))_100%)]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              📰 Recent Blog Posts
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Insights, trends, and strategies for digital success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant group bg-gradient-to-br ${post.color}`}>
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start justify-between gap-6">
                      <div className="space-y-4 flex-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                          <span>Read More</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
