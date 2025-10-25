import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "S.A. Pharmaceuticals – Website Redesign & Digital Presence",
      description: "Delivered a modern corporate website with professional UI/UX, SEO structure, and CMS integration to enhance brand credibility and user experience.",
      tools: "React.js, TailwindCSS, Framer Motion",
      impact: "Enhanced brand credibility and improved user engagement.",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "MR Plastic Grocery – Custom E-Commerce Platform",
      description: "Developed a fully responsive grocery website using React.js with integrated product management, secure checkout, and customer account features.",
      tools: "React.js, Node.js, Stripe API",
      impact: "Streamlined online ordering and improved customer experience.",
      color: "from-secondary/20 to-secondary/5",
    },
    {
      title: "CryptoVerse Exchange – Blockchain-Powered Platform",
      description: "Created a secure cryptocurrency exchange dashboard with blockchain connectivity, real-time trading analytics, and wallet functionality.",
      tools: "React.js, Web3.js, Blockchain Integration",
      impact: "Secure and efficient crypto trading platform.",
      color: "from-accent/20 to-accent/5",
    },
    {
      title: "Elite Builders – Real Estate Website & Digital Marketing",
      description: "Launched a property listing website with lead management, SEO optimization, and a Meta Ads campaign that increased conversion by 35%.",
      tools: "Next.js, TailwindCSS, Meta Pixel",
      impact: "35% increase in lead conversion.",
      color: "from-primary/20 to-secondary/5",
    },
    {
      title: "EduSmart LMS – Online Learning Management System",
      description: "Built a scalable LMS with course management, student progress tracking, and teacher dashboards — ideal for e-learning platforms.",
      tools: "React.js, Node.js, MongoDB",
      impact: "Improved learning experience and administrative efficiency.",
      color: "from-secondary/20 to-accent/5",
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
                <Card className={`border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group cursor-pointer bg-gradient-to-br ${project.color}`}>
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

                      <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0 ml-4" />
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
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 hover:border-primary/50 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
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
