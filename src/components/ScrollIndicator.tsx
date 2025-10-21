import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
      onClick={() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <span className="text-sm text-white/70">Scroll to explore</span>
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
      >
        <motion.div
          animate={{
            opacity: [1, 0],
            y: [0, 20],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-1 h-2 bg-white/70 rounded-full"
        />
      </motion.div>
      <ChevronDown className="w-5 h-5 text-white/70" />
    </motion.div>
  );
};

export default ScrollIndicator;
