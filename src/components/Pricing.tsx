import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Pricing = () => {
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$999",
      period: "one-time",
      description: "Perfect for small businesses getting started",
      features: [
        "5-Page Responsive Website",
        "Basic SEO Setup",
        "Mobile Optimization",
        "Contact Form Integration",
        "1 Month Support",
        "Social Media Links",
      ],
      color: "border-primary/50",
      buttonVariant: "outline" as const,
    },
    {
      name: "Professional",
      icon: Crown,
      price: "$2,499",
      period: "one-time + $199/mo",
      description: "For growing businesses that need more",
      features: [
        "10-Page Custom Website",
        "Advanced SEO Optimization",
        "E-Commerce Integration",
        "Meta & Google Ads Setup",
        "Analytics Dashboard",
        "3 Months Support",
        "Content Management System",
        "Live Chat Integration",
      ],
      popular: true,
      color: "border-accent shadow-glow",
      buttonVariant: "default" as const,
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: "Custom",
      period: "contact us",
      description: "Full-stack solutions for serious growth",
      features: [
        "Unlimited Pages",
        "Custom Web Application",
        "Full Digital Marketing",
        "Dedicated Account Manager",
        "Priority Support",
        "Advanced Analytics",
        "API Integrations",
        "Custom Features",
        "White-Label Solutions",
      ],
      color: "border-secondary/50",
      buttonVariant: "outline" as const,
    },
  ];

  const handleSelectPlan = (planName: string) => {
    toast({
      title: `${planName} Plan Selected! 🎉`,
      description: "We'll contact you shortly to discuss the details.",
    });
  };

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Choose Your Growth Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Scale as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={plan.popular ? "lg:scale-105" : ""}
            >
              <Card className={`h-full border-2 ${plan.color} relative overflow-hidden group hover:shadow-elegant transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-accent text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                
                <CardHeader className="text-center space-y-4 pb-8 pt-8">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${
                    plan.popular ? "bg-gradient-accent" : "bg-gradient-primary"
                  }`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold gradient-text">{plan.price}</div>
                    <div className="text-sm text-muted-foreground mt-1">{plan.period}</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleSelectPlan(plan.name)}
                    variant={plan.buttonVariant}
                    className={`w-full h-12 ${
                      plan.popular ? "bg-gradient-accent hover:opacity-90" : ""
                    }`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-card to-primary/5 border-2 border-primary/30">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold">Need a Custom Package?</h3>
              <p className="text-muted-foreground">
                Tell us your requirements and we'll create a tailored solution just for you
              </p>
              <Button className="bg-gradient-primary hover:opacity-90" size="lg">
                Build Custom Package
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
