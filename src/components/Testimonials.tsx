import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "AM Enterprises transformed our online presence completely. Our website traffic increased by 300% and conversions doubled within 3 months. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoShop",
      content: "The e-commerce solution they built for us is phenomenal. Sales are up 250%, and the UI is so intuitive that our customers love it. Best investment we made!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, HealthCare Plus",
      content: "Their Meta and Google Ads campaigns delivered incredible ROI. We went from spending money with no results to getting quality leads daily. True professionals!",
      rating: 5,
    },
    {
      name: "David Kumar",
      role: "Owner, Legal Associates",
      content: "From strategy to execution, AM Enterprises handled everything perfectly. Our website ranks on page 1 for all our target keywords. Outstanding work!",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Director, Fashion Hub",
      content: "The design team is incredibly talented. They captured our brand essence perfectly and created a website that converts visitors into customers consistently.",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      role: "CEO, Global Trade Co",
      content: "Professional, responsive, and results-driven. They delivered beyond our expectations and continue to support us with excellent service. 10/10!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses we've helped grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name}>
              <Card className="h-full border-2 hover:border-primary/50 transition-smooth hover:shadow-elegant group bg-card">
                <CardContent className="p-6 space-y-4">
                  {/* Quote Icon */}
                  <div className="flex items-start justify-between">
                    <Quote className="w-10 h-10 text-primary/20 group-hover:text-primary/40 transition-smooth" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-border">
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
