import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Quiz from "@/components/Quiz";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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
              🌐 Discover Your Digital Health Score
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Is Your Business Digitally Fit for the Future?
            </p>
          </motion.div>
        </div>
      </section>

      {/* CEO's Message */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-center">
                    CEO's Message – From the Desk of Moez Rehman
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      At AM Enterprises, our purpose goes beyond creating websites or running marketing campaigns — 
                      we build meaningful digital experiences that help businesses grow and stay competitive in a fast-moving digital world.
                    </p>
                    
                    <p>
                      Over the past three years, we've grown from a passionate startup to a fully established 360° digital agency, 
                      serving clients locally and internationally. This journey has been powered by innovation, creativity, 
                      and our relentless commitment to excellence.
                    </p>
                    
                    <p>
                      Every client we work with becomes a part of our story. We don't just deliver projects — 
                      we deliver trust, quality, and measurable results.
                    </p>
                    
                    <p>
                      I am proud of the talented professionals at AM Enterprises who bring ideas to life every single day — 
                      turning challenges into opportunities and visions into success stories.
                    </p>
                    
                    <p className="font-semibold text-foreground">
                      Together, we are redefining the meaning of digital transformation.
                    </p>
                  </div>
                  
                  <div className="text-right border-t border-primary/20 pt-6 mt-6">
                    <p className="font-bold text-lg">— Moez Rehman</p>
                    <p className="text-sm text-muted-foreground">Founder & CEO, AM Enterprises</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-2 border-secondary/20">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl font-bold">🔷 Our History – How We Began</h2>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Founded in 2022, AM Enterprises started with a single goal — to provide complete 360° business solutions under one roof.
                    </p>
                    
                    <p>
                      What began as a small creative team handling local design and development projects quickly evolved 
                      into a full-service digital agency trusted by clients worldwide.
                    </p>
                    
                    <p>
                      With each project, we expanded our expertise — from web design and development to SEO, 
                      social media marketing, branding, and automation systems.
                    </p>
                    
                    <p>
                      Today, AM Enterprises stands as a recognized digital brand with a strong client base in Pakistan, 
                      the Middle East, and Europe. Our history is built on passion, teamwork, and a promise to deliver more than what's expected.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* About Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-2 border-accent/20">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl font-bold">🔷 About Us – Who We Are</h2>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    AM Enterprises is a full-service digital transformation agency offering complete 360° business solutions.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    We specialize in building, designing, and promoting brands that are ready for the future. 
                    Whether you're launching a startup, scaling an enterprise, or revamping your online presence — 
                    we create digital strategies that deliver measurable growth.
                  </p>
                  
                  <h3 className="text-2xl font-bold mt-6">Our Core Expertise</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: "🌐", text: "Web Design & Development: Custom, responsive, and high-performance websites." },
                      { icon: "🎨", text: "Graphic Design & Branding: Creative visuals that communicate your brand story effectively." },
                      { icon: "📈", text: "SEO & Digital Marketing: Boosting visibility, engagement, and conversions with data-driven campaigns." },
                      { icon: "📱", text: "Social Media Management: Strategic content, consistent growth, and impactful online presence." },
                      { icon: "⚙️", text: "Business Automation & CRM: Streamlining operations through smart, automated systems." },
                      { icon: "⛓️", text: "Blockchain & Web3 Solutions: Building secure and modern crypto, fintech, and blockchain-based platforms." }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-muted-foreground text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-foreground font-semibold mt-6">
                    At AM Enterprises, we don't just complete projects — we build partnerships that help businesses evolve with confidence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* 3 Years of Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl font-bold">🔷 3 Years of Consistent Growth and Excellence</h2>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Since our inception in 2022, AM Enterprises has earned a strong reputation for delivering 
                    high-quality results through innovation and consistency.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { label: "Years of Experience", value: "3+" },
                      { label: "Projects Completed", value: "100+" },
                      { label: "Industries Served", value: "IT, Real Estate, Health, Education, E-commerce, Finance, Blockchain" },
                      { label: "Team Strength", value: "Skilled mix of developers, designers, marketers, and automation experts" },
                      { label: "Client Satisfaction Rate", value: "98%" }
                    ].map((stat, index) => (
                      <div key={index} className="space-y-2">
                        <p className="font-bold text-primary">{stat.label}</p>
                        <p className="text-muted-foreground">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground italic mt-4">
                    Our success is defined not just by numbers but by the trust, satisfaction, 
                    and repeat collaborations we've earned from our clients.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Digital Health Quiz Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                In today's fast-paced world, your digital presence defines your brand's strength. 
                At <strong className="text-foreground">AM Digital Enterprise</strong>, we help businesses like yours 
                identify where they stand — and how far they can go.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Take our quick <strong className="text-foreground">2-minute quiz</strong> to discover your 
                Digital Health Score and receive a personalized estimate of your digital transformation budget.
              </p>
            </motion.div>

            {/* Why Take Quiz */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl font-bold">🧭 Why Take the Digital Health Quiz?</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Identify your current digital maturity level",
                      "Understand which areas need the most improvement",
                      "Get a budget range tailored to your business goals",
                      "Receive a free consultation recommendation from our team"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* What You'll Learn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="border-2 border-accent/20 bg-gradient-to-br from-card to-accent/5">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl font-bold">💡 What You'll Learn</h2>
                  
                  <ul className="space-y-3">
                    {[
                      "How strong your online presence really is",
                      "Where you stand in terms of digital tools and automation",
                      "Your customer engagement effectiveness",
                      "The next steps to grow your brand digitally"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Ready Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center space-y-6 pt-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold">🚀 Ready to Begin?</h2>
              <p className="text-xl text-muted-foreground">
                Take the quiz now and find out how digitally healthy your business is.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-lg h-14 px-8"
                onClick={() => {
                  document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start the Quiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz />

      <Footer />
    </div>
  );
};

export default About;
