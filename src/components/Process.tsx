import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { Lightbulb, FileText, Code, Rocket, BarChart, Repeat } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const steps = timelineRef.current.querySelectorAll('.process-step');
    
    steps.forEach((step, index) => {
      gsap.fromTo(
        step,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery & Strategy",
      description: "We understand your business goals, target audience, and competitive landscape to create a winning strategy.",
      color: "bg-primary",
    },
    {
      icon: FileText,
      title: "Planning & Design",
      description: "Detailed wireframes, user flows, and stunning UI designs that align with your brand identity.",
      color: "bg-secondary",
    },
    {
      icon: Code,
      title: "Development",
      description: "Clean, efficient code using the latest technologies. Fast, secure, and scalable solutions.",
      color: "bg-accent",
    },
    {
      icon: Rocket,
      title: "Launch & Deploy",
      description: "Thorough testing, optimization, and a smooth launch with full support and training.",
      color: "bg-primary",
    },
    {
      icon: BarChart,
      title: "Monitor & Analyze",
      description: "Track performance metrics, user behavior, and ROI with comprehensive analytics.",
      color: "bg-secondary",
    },
    {
      icon: Repeat,
      title: "Optimize & Scale",
      description: "Continuous improvements based on data insights to maximize your digital success.",
      color: "bg-accent",
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={ref} className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            How We Transform Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers results every time
          </p>
        </div>

        <div className="max-w-5xl mx-auto" ref={timelineRef}>
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="process-step relative mb-12 last:mb-0"
            >
              {/* Connecting line with animation */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block overflow-hidden"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "top" }}
                />
              )}

              <div className={`flex flex-col md:flex-row gap-6 items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                {/* Icon with pulse animation */}
                <motion.div 
                  className="flex-shrink-0"
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-elegant`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className={`flex-1 bg-card p-6 rounded-2xl border-2 border-border hover:border-primary/50 transition-smooth group hover:shadow-elegant ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}>
                  <div className="space-y-2">
                    <div className="text-sm font-bold text-muted-foreground">
                      STEP {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
