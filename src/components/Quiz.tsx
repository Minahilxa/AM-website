import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Quiz = () => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Do you currently have a website?",
      options: ["Yes, and it's modern", "Yes, but it needs updating", "No, I need one"],
    },
    {
      question: "Are you running paid ads?",
      options: ["Yes, Meta & Google", "Yes, but only one platform", "No, not yet"],
    },
    {
      question: "How's your search engine ranking?",
      options: ["Page 1 on Google", "Page 2-3", "Not sure / Not ranked"],
    },
    {
      question: "What's your monthly digital marketing budget?",
      options: ["$500 - $2000", "$2000 - $5000", "$5000+"],
    },
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
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
      if (answer.includes("modern") || answer.includes("Meta & Google") || answer.includes("Page 1")) {
        score += 3;
      } else if (answer.includes("updating") || answer.includes("only one") || answer.includes("Page 2-3")) {
        score += 2;
      } else {
        score += 1;
      }
    });
    return score;
  };

  const getRecommendation = () => {
    const score = calculateScore();
    if (score <= 6) {
      return {
        title: "Let's Build Your Digital Foundation",
        message: "You need a comprehensive digital strategy. We recommend starting with website development and SEO basics.",
        services: ["Website Design", "Basic SEO", "Social Media Setup"],
      };
    } else if (score <= 9) {
      return {
        title: "Time to Scale Your Digital Presence",
        message: "You have a good start! Let's optimize and expand your digital marketing efforts.",
        services: ["Website Redesign", "Advanced SEO", "Paid Ads Management"],
      };
    } else {
      return {
        title: "Maximize Your Digital ROI",
        message: "You're doing great! Let's fine-tune your strategy for maximum performance.",
        services: ["Conversion Optimization", "Advanced Analytics", "Full-Stack Digital Management"],
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
                          onClick={() => handleAnswer(option)}
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
