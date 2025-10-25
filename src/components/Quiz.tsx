import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Quiz = () => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Current Digital Presence: How would you describe your current online presence?",
      options: [
        "🟢 We have a fully functional website and active social media profiles.",
        "🟡 We have a basic website but it needs improvement.",
        "🔴 We only have social media pages — no website yet.",
        "⚪ We don't have any online presence."
      ]
    },
    {
      question: "Technology & Tools: What tools or platforms do you currently use to manage your business?",
      options: [
        "🟢 Integrated CRM, ERP, and marketing tools.",
        "🟡 A few digital tools (e.g. Google Workspace, WhatsApp, Excel).",
        "🔴 Mostly manual processes with minimal digital tools.",
        "⚪ Not sure / none."
      ]
    },
    {
      question: "Customer Engagement: How do you currently engage with your customers online?",
      options: [
        "🟢 Through automated marketing, chatbots, and data-driven campaigns.",
        "🟡 Regular posts and manual responses on social media.",
        "🔴 Occasionally respond to messages — no structured plan.",
        "⚪ We don't use digital platforms to engage customers."
      ]
    },
    {
      question: "Business Goals: What's your primary goal for digital transformation?",
      options: [
        "🚀 Scale and automate operations.",
        "💻 Build or redesign our website and digital presence.",
        "📊 Improve customer experience and analytics.",
        "💬 Just exploring options / not sure yet."
      ]
    },
    {
      question: "Budget Readiness: What's your estimated investment range for digital growth in the next 6–12 months?",
      options: [
        "💰 $10,000+ — ready for a complete digital revamp.",
        "💸 $5,000–$10,000 — want a solid upgrade.",
        "💼 $1,000–$5,000 — looking for phased improvements.",
        "🔍 Under $1,000 — just exploring possibilities."
      ]
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer) => {
      if (answer === 0) score += 4;
      else if (answer === 1) score += 3;
      else if (answer === 2) score += 2;
      else score += 1;
    });
    return score;
  };

  const getRecommendation = () => {
    const score = calculateScore();
    if (score >= 16) {
      return {
        title: "🚀 Digitally Advanced!",
        message: "Your business has a strong digital foundation. You're ready for advanced automation and scaling solutions.",
        services: ["Advanced Analytics & AI", "Marketing Automation", "Custom Enterprise Solutions"],
        budget: "$10,000+"
      };
    } else if (score >= 12) {
      return {
        title: "💼 Digitally Growing!",
        message: "You have good basics but there's significant room to optimize and grow your digital presence.",
        services: ["Website Redesign", "CRM Integration", "Digital Marketing Campaigns"],
        budget: "$5,000 - $10,000"
      };
    } else if (score >= 8) {
      return {
        title: "🌟 Getting Started!",
        message: "You have a foundation but need structured improvements to compete effectively in the digital space.",
        services: ["Website Development", "SEO & Content Strategy", "Social Media Management"],
        budget: "$1,000 - $5,000"
      };
    } else {
      return {
        title: "🌱 Time to Build Your Digital Presence!",
        message: "Let's start from the ground up! Building a strong digital foundation is crucial for your business growth.",
        services: ["Website Creation", "Brand Identity Design", "Digital Strategy Planning"],
        budget: "Under $1,000 (Starter Phase)"
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const handleContact = () => {
    toast({
      title: "Let's Talk! 🎉",
      description: "We'll contact you shortly to discuss your digital strategy.",
    });
  };

  return (
    <section id="quiz" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Interactive Quiz
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Discover Your Digital Health Score
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Answer a few questions to get personalized recommendations
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="shadow-elegant border-2">
                  <CardContent className="p-8 space-y-6">
                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Question {currentQuestion + 1} of {questions.length}</span>
                        <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

                    {/* Question */}
                    <h3 className="text-2xl font-bold text-foreground">
                      {questions[currentQuestion].question}
                    </h3>

                    {/* Options */}
                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full p-4 text-left border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-smooth group"
                        >
                          <span className="text-foreground group-hover:text-primary font-medium">
                            {option}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-glow border-2 border-primary/50 bg-gradient-to-br from-card to-primary/5">
                  <CardContent className="p-8 space-y-6">
                    <div className="text-center space-y-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="inline-flex w-20 h-20 bg-gradient-primary rounded-full items-center justify-center"
                      >
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-3xl font-bold gradient-text">
                        {getRecommendation().title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {getRecommendation().message}
                      </p>
                    </div>

                    {/* Recommended Services */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Recommended Services:</h4>
                      {getRecommendation().services.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border"
                        >
                          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span className="text-foreground">{service}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button
                        onClick={handleContact}
                        className="flex-1 bg-gradient-primary hover:opacity-90 h-12 group"
                      >
                        Get Custom Proposal
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
                      </Button>
                      <Button
                        onClick={resetQuiz}
                        variant="outline"
                        className="flex-1 h-12"
                      >
                        Retake Quiz
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
