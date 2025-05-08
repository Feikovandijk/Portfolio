import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { aboutContent } from '../data/content';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{aboutContent.name}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">{aboutContent.title}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{aboutContent.bio}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {aboutContent.skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${aboutContent.contact.email}`}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Mail size={20} />
            <span>{aboutContent.contact.email}</span>
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
          {aboutContent.contact.twitter && (
            <a
              href={aboutContent.contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Twitter size={20} />
              <span>Twitter</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}