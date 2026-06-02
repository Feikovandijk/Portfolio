import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import SmallProjectCard from '../components/SmallProjectCard';
import { projects, achievements, smallProjects, experiences } from '../data/content';
import { Award } from 'lucide-react';
import ScrollButtons from '../components/ScrollButtons';

export default function Portfolio() {
  return (
    <div className="pt-16">
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white dark:bg-gray-800 py-32 sm:py-40"
        >
          <div className="mx-auto max-w-7xl px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6 font-['Helvetica_Neue'] tracking-wide">
                  Hi, I'm Feiko.
                </h1>
                <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 font-['Arial'] tracking-wide">
                  I'm a <strong>Kubernetes Engineer & Game Designer</strong> from the Netherlands. I run production Kubernetes platforms and I've shipped commercial games with over 200,000 downloads.
                  I have a MSc in Games Research and a BSc in Game Development, and I've found the two worlds overlap a lot more than most people expect. <strong>My portfolio is below.</strong>
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <img
                    src="/assets/feikohome.png"
                    alt="Profile"
                    className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-50 dark:bg-gray-900 py-32"
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-['Helvetica_Neue'] tracking-wide">Portfolio</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-['Arial'] tracking-wide">
                A showcase of my development projects
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
              {projects.map((project) => (
                <div key={project.id} className="h-full">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 py-16"
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-['Helvetica_Neue'] tracking-wide">Achievements & Recognitions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                    <Award className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900 dark:text-white font-['Helvetica_Neue'] tracking-wide">{achievement.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-['Arial'] tracking-wide">{achievement.description}</p>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-['Arial'] tracking-wide">{achievement.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gray-50 dark:bg-gray-900 py-24"
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 font-['Helvetica_Neue'] tracking-wide">Experience</h2>
              <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 space-y-10">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative pl-8">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-400 dark:border-gray-500" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                      <div>
                        <span className="text-base font-semibold text-gray-900 dark:text-white font-['Helvetica_Neue']">{exp.title}</span>
                        <span className="text-gray-500 dark:text-gray-400 font-['Arial'] ml-2">@ {exp.company}</span>
                      </div>
                      <span className="text-sm text-gray-400 dark:text-gray-500 font-['Arial'] shrink-0">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-['Arial'] text-sm leading-relaxed mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full font-['Arial']">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-['Helvetica_Neue'] tracking-wide">Other Projects</h2>
              <p className="text-base text-gray-600 dark:text-gray-300 font-['Arial'] tracking-wide">
                Smaller projects and experiments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {smallProjects.map((project) => (
                <SmallProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <ScrollButtons />
    </div>
  );
}