import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ScrollDownButton() {
  const [sections, setSections] = useState<HTMLElement[]>([]);

  useEffect(() => {
    // Get all sections
    const sectionElements = Array.from(document.querySelectorAll('section'));
    setSections(sectionElements);
  }, []);

  const scrollToNextSection = () => {
    if (sections.length === 0) return;

    // Find the current section
    const currentScroll = window.scrollY + window.innerHeight / 2;
    const currentIndex = sections.findIndex(section => {
      const rect = section.getBoundingClientRect();
      return rect.top + window.scrollY <= currentScroll && 
             rect.bottom + window.scrollY >= currentScroll;
    });

    // Calculate next section index
    const nextIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0;
    const nextSection = sections[nextIndex];

    // Scroll to next section
    nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      onClick={scrollToNextSection}
      className="fixed bottom-8 right-8 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
      aria-label="Scroll to next section"
    >
      <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
    </motion.button>
  );
} 