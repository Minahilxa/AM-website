import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lightbulb, FileText, Code, Rocket, BarChart, Repeat } from "lucide-react";

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            How We Transform Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers results every time
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
              )}

              <div className={`flex flex-col md:flex-row gap-6 items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-elegant`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

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
