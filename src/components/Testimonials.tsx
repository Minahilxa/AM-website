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
      name: "Emma Rodriguez",
      role: "Marketing Director, BlueWave Technologies, Spain",
      content: "We partnered with AM Enterprises to revamp our corporate website and enhance our digital marketing strategy. Their team not only delivered on time but also exceeded expectations with creative design and user-friendly features. The communication was smooth, and the project management was highly professional.",
      rating: 5,
    },
    {
      name: "John Miller",
      role: "CEO, Innovexa Digital, USA",
      content: "From branding to website design and SEO optimization, AM Enterprises handled everything perfectly. Their strategic approach helped us increase our online visibility and boost our monthly sales significantly. Truly a one-stop digital partner!",
      rating: 5,
    },
    {
      name: "Hira Qureshi",
      role: "Founder, Hira's Clothing Studio, Pakistan",
      content: "We worked with AM Enterprises for social media marketing and graphic design. The designs were creative, consistent, and aligned with our brand identity. Excellent teamwork and reliable delivery.",
      rating: 5,
    },
    {
      name: "Ali Hassan",
      role: "Managing Director, ShopEase.pk",
      content: "Our e-commerce platform was built by AM Enterprises, and I must say — the results were outstanding. The website runs fast, looks modern, and is fully optimized for all devices.",
      rating: 5,
    },
    {
      name: "Dr. Sana Malik",
      role: "Consultant, HealthConnect Systems, UK",
      content: "AM Enterprises truly understands what the client needs. Their technical knowledge and design sense are impressive. They don't just complete a project — they build relationships.",
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
              <Card className="h-full border-2 hover:border-primary/50 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-glow transition-all duration-300 group bg-card cursor-pointer">
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
