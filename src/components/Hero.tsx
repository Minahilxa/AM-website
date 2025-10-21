import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import heroBg from "@/assets/hero-bg.jpg";
import ParticlesBackground from "./ParticlesBackground";
import ScrollIndicator from "./ScrollIndicator";
import { fadeInUp, slideInFromTop, buttonHover } from "@/lib/animations";

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
      {/* Background with gradient overlay and particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90 animate-gradient" />
        <img
          src={heroBg}
          alt="Digital technology background"
          className="w-full h-full object-cover opacity-30"
        />
        <ParticlesBackground />
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
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full text-sm font-medium border border-primary/20 shadow-elegant">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-accent" />
              </motion.div>
              <span className="gradient-text">Your 360° Digital Partner</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              Transform Your
              <br />
              <motion.span 
                className="gradient-text inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "backOut" }}
              >
                Digital Presence
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We craft stunning websites, drive targeted traffic, and scale your business with data-driven digital strategies
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-glow text-lg h-14 px-8 group relative overflow-hidden"
                asChild
              >
                <a href="#quiz" className="flex items-center gap-2">
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Get Free Digital Audit</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg h-14 px-8 transition-smooth"
                asChild
              >
                <a href="#services">Explore Services</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators with Animated Numbers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 pt-8 text-white/90"
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-2 h-2 bg-secondary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span>
                <CountUp end={100} duration={2} delay={1.5} />+ Projects Delivered
              </span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-2 h-2 bg-accent rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
              <span>
                <CountUp end={50} duration={2} delay={1.5} />+ Happy Clients
              </span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              />
              <span>
                <CountUp end={5} duration={2} delay={1.5} decimals={1} />★ Rated Agency
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
