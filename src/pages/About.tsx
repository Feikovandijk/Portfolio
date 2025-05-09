import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { aboutContent } from '../data/content';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-[70%] mx-auto px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
        <div className="md:col-span-3">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-['Helvetica_Neue'] tracking-wide">Hello!</h1>
          <div className="space-y-4 mb-12">
            {aboutContent.bio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed font-['Arial'] tracking-wide">
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-['Helvetica_Neue'] tracking-wide">Contact</h2>
            <p className="text-gray-700 dark:text-gray-300 font-['Arial'] tracking-wide">
              Please reach out to me at {aboutContent.contact.email}
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex justify-center">
              <div className="w-4/5 aspect-square rounded-full overflow-hidden shadow-lg">
                <img
                  src={aboutContent.images[0].url}
                  alt={aboutContent.images[0].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-4/5 aspect-square rounded-full overflow-hidden shadow-lg">
                <img
                  src={aboutContent.images[1].url}
                  alt={aboutContent.images[1].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-4/5 aspect-square rounded-full overflow-hidden shadow-lg">
              <img
                src={aboutContent.images[2].url}
                alt={aboutContent.images[2].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-['Helvetica_Neue'] tracking-wide">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {aboutContent.skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-['Arial'] tracking-wide"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${aboutContent.contact.email}`}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-['Arial'] tracking-wide"
          >
            <Mail size={20} />
            <span>{aboutContent.contact.email}</span>
          </a>
          {aboutContent.contact.linkedin && (
            <a
              href={aboutContent.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-['Arial'] tracking-wide"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          )}
          <a
            href="https://github.com/Feikovandijk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-['Arial'] tracking-wide"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}