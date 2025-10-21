import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const floatingIcons = [
    { Icon: Sparkles, delay: 0, position: "top-20 left-[10%]" },
    { Icon: Zap, delay: 0.2, position: "top-40 right-[15%]" },
    { Icon: TrendingUp, delay: 0.4, position: "bottom-40 left-[20%]" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <img
          src={heroBg}
          alt="Digital technology background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{
            delay,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2,
          }}
          className={`absolute ${position} hidden lg:block`}
        >
          <div className="p-4 bg-card/50 backdrop-blur-sm rounded-2xl shadow-glow">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full text-sm font-medium border border-primary/20 shadow-elegant">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="gradient-text">Your 360° Digital Partner</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Your
              <br />
              <span className="gradient-text">Digital Presence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              We craft stunning websites, drive targeted traffic, and scale your business with data-driven digital strategies
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-glow text-lg h-14 px-8 group"
              asChild
            >
              <a href="#quiz" className="flex items-center gap-2">
                Get Free Digital Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 text-lg h-14 px-8 hover:bg-card"
              asChild
            >
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
              <span>100+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
              <span>50+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
              <span>5★ Rated Agency</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
