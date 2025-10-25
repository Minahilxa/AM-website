import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What does '360° Digital Solution' mean?",
      answer: "It means we handle everything — from website creation, branding, SEO, and marketing to automation and blockchain development, offering an all-in-one digital service hub."
    },
    {
      question: "How long does a typical project take?",
      answer: "It depends on complexity. Most websites take 2–4 weeks, while larger branding or marketing projects may require more time."
    },
    {
      question: "Can you create blockchain or cryptocurrency projects?",
      answer: "Yes! Our blockchain team builds crypto exchanges, smart contracts, and decentralized web apps with top-level security."
    },
    {
      question: "What is your approach to client communication?",
      answer: "We ensure transparent updates, milestone reports, and open communication throughout the project lifecycle."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely. We've successfully served clients from Pakistan, UAE, UK, USA, and Europe across multiple industries."
    },
    {
      question: "What industries does AM Enterprises specialize in?",
      answer: "We've successfully worked with businesses across multiple sectors including E-commerce, Healthcare, Real Estate, Education, Finance, and Technology. Our adaptable approach allows us to tailor every project according to the specific goals and audience of each industry."
    },
    {
      question: "Do you provide content writing or copywriting services as part of your packages?",
      answer: "Yes, we offer complete content creation services — from website copy and product descriptions to SEO blogs and ad campaigns. Our content team ensures that every word aligns with your brand voice and improves online visibility."
    },
    {
      question: "How does AM Enterprises ensure project quality?",
      answer: "Quality assurance is built into every stage of our workflow. Each project goes through a 3-step QA process: design review, functionality testing, and final optimization. We also perform cross-device checks to guarantee flawless user experience across all platforms."
    },
    {
      question: "Can you integrate third-party tools or APIs into existing systems?",
      answer: "Absolutely. Our development team is skilled in integrating payment gateways, CRMs, email automation, APIs, and analytics tools to enhance system performance and functionality without compromising security."
    },
    {
      question: "What post-project support do you offer?",
      answer: "After project delivery, we provide technical assistance, content updates, bug fixes, and performance optimization. Clients can choose from our monthly or quarterly maintenance plans depending on their needs."
    }
  ];

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Everything you need to know about AM Enterprises
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
