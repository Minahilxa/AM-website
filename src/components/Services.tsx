import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Globe,
  Palette,
  Megaphone,
  Search,
  ShoppingCart,
  Code,
  BarChart,
  Smartphone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Stunning, responsive websites that convert visitors into customers",
      color: "text-primary",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love to interact with",
      color: "text-secondary",
    },
    {
      icon: Megaphone,
      title: "Meta & Google Ads",
      description: "Targeted campaigns that maximize ROI and drive quality leads",
      color: "text-accent",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Rank higher on Google and attract organic traffic that converts",
      color: "text-primary",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Complete online stores with payment integration and inventory management",
      color: "text-secondary",
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored web applications built with cutting-edge technologies",
      color: "text-accent",
    },
    {
      icon: BarChart,
      title: "Analytics & Tracking",
      description: "Data-driven insights to optimize your digital performance",
      color: "text-primary",
    },
    {
      icon: Smartphone,
      title: "Social Media Marketing",
      description: "Build your brand and engage audiences across all platforms",
      color: "text-secondary",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Complete Digital Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From strategy to execution, we provide everything you need to succeed online
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
