import { ChevronUp, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ScrollButtons() {
  const [sections, setSections] = useState<HTMLElement[]>([]);

  useEffect(() => {
    // Get all sections
    const sectionElements = Array.from(document.querySelectorAll('section'));
    setSections(sectionElements);
  }, []);

  const scrollToSection = (direction: 'up' | 'down') => {
    if (sections.length === 0) return;

    // Find the current section
    const currentScroll = window.scrollY + window.innerHeight / 2;
    const currentIndex = sections.findIndex(section => {
      const rect = section.getBoundingClientRect();
      return rect.top + window.scrollY <= currentScroll && 
             rect.bottom + window.scrollY >= currentScroll;
    });

    // Calculate next section index
    let nextIndex;
    if (direction === 'down') {
      nextIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0;
    } else {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1;
    }
    
    const nextSection = sections[nextIndex];

    // Scroll to next section
    nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-2">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollToSection('up')}
        className="icon-btn"
        style={{ width: '44px', height: '44px', borderRadius: '50%' }}
        aria-label="Scroll to previous section"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollToSection('down')}
        className="icon-btn"
        style={{ width: '44px', height: '44px', borderRadius: '50%' }}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </div>
  );
} 