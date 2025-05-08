import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects, achievements } from '../data/content';

export default function Portfolio() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white dark:bg-gray-800 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6">
                Hi, I'm Your Name
              </h1>
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                I'm a Technical & Game Designer from the Netherlands, passionate about creating engaging & moving experiences that bring people together.
                With over 2 years of industry experience, I hold a BSc in Game Development and an MSc in Games Research. Below, you can find my portfolio, highlighting some of my work.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Portfolio Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-50 dark:bg-gray-900 py-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A showcase of my game design projects and process
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white dark:bg-gray-800 py-12"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Achievements & Recognitions</h2>
          </div>

          <div className="space-y-4">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-medium text-gray-900 dark:text-white">{achievement.title}</h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{achievement.year}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}