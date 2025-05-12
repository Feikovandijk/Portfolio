import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ScrollDownButton() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      onClick={scrollToBottom}
      className="fixed bottom-8 right-8 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
      aria-label="Scroll to bottom"
    >
      <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
    </motion.button>
  );
} 