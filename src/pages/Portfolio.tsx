import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "BrandRevamp – Digital Rebranding & Web Design",
      description: "We redesigned BrandRevamp's complete digital identity — from logo to website — delivering a modern, responsive interface and 3× faster load times.",
      tools: "Next.js, Tailwind CSS, Framer Motion",
      impact: "60% boost in engagement within 2 months.",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "TechTrack – Enterprise Management System",
      description: "A full-scale internal management dashboard for a construction enterprise, enabling real-time project tracking, employee management, and data analytics.",
      tools: "React.js, Node.js, MongoDB, Express.js",
      impact: "Reduced manual reporting time by 70%.",
      color: "from-secondary/20 to-secondary/5",
    },
    {
      title: "BloomWear – E-Commerce Experience for Modern Fashion",
      description: "We developed a dynamic fashion e-commerce platform with seamless cart experience, secure payments, and custom admin dashboard for product management.",
      tools: "Next.js, Stripe API, Cloudinary",
      impact: "40% increase in online sales in the first quarter.",
      color: "from-accent/20 to-accent/5",
    },
    {
      title: "Voiced Platform – AI-Driven Content Analytics",
      description: "An AI-integrated content management system that helps organizations measure audience sentiment and reach insights faster.",
      tools: "NestJS, GraphQL, React Query",
      impact: "Cut reporting time from 4 hours to 15 minutes.",
      color: "from-primary/20 to-accent/5",
    },
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
              💼 Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Transforming Ideas into Powerful Digital Experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-6 mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              At <strong className="text-foreground">AM Digital Enterprise</strong>, every project tells a story of innovation, 
              collaboration, and measurable impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From startups finding their digital footing to established brands scaling with technology — 
              we've helped businesses build smarter, faster, and more engaging digital experiences.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-8 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">🌟 Featured Projects</h2>
            
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant group bg-gradient-to-br ${project.color}`}>
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-4 flex-1">
                        <div className="flex items-start gap-3">
                          <span className="text-3xl font-bold text-primary/30">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {project.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3 pl-14">
                          <div className="flex items-start gap-2">
                            <span className="text-sm font-semibold text-foreground/70">Tools:</span>
                            <span className="text-sm text-muted-foreground">{project.tools}</span>
                          </div>
                          
                          <div className="flex items-start gap-2">
                            <TrendingUp className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-semibold text-secondary">{project.impact}</span>
                          </div>
                        </div>
                      </div>

                      <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground">
                  Let's discuss how we can transform your digital presence and drive real results for your business.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
