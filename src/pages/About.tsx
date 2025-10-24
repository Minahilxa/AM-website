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

      {/* Intro Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
