import { Linkedin, Github, Flag, Mail } from 'lucide-react';
import { aboutContent } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 dark:text-gray-300">
            Feiko van Dijk - Cloud Engineer & Game Designer
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${aboutContent.contact.email}`}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            {aboutContent.contact.linkedin && (
              <a
                href={aboutContent.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            )}
            {aboutContent.contact.ctftime && (
              <a
                href={aboutContent.contact.ctftime}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Flag size={20} />
                <span>CTFTime</span>
              </a>
            )}
            <a
              href={aboutContent.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}