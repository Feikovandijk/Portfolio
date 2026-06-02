import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import SmallProjectCard from '../components/SmallProjectCard';
import { projects, achievements, smallProjects, experiences, aboutContent } from '../data/content';
import { Award, Github, ArrowDown, PenTool } from 'lucide-react';
import ScrollButtons from '../components/ScrollButtons';

export default function Portfolio() {
  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16">
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white dark:bg-gray-800 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className="lg:col-span-7">
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-4 font-sans">
                  Hi, I'm <span className="text-blue-600 dark:text-blue-400">Feiko.</span>
                </h1>

                <p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-8 max-w-2xl font-sans">
                  I'm a <strong>Cloud Engineer & Game Designer</strong> from the Netherlands. I run production Kubernetes platforms and I've shipped commercial games with over 200,000 downloads.
                  I have a MSc in Games Research and a BSc in Game Development, and I've found the two worlds overlap a lot more than most people expect. <strong>See my portfolio below.</strong>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 items-center">
                  <button
                    onClick={scrollToPortfolio}
                    className="inline-flex items-center justify-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-200 gap-2 text-sm sm:text-base cursor-pointer"
                  >
                    <span>View work</span>
                    <ArrowDown size={18} />
                  </button>

                  <a
                    href={aboutContent.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold rounded-lg shadow-sm transition-all duration-200 gap-2 text-sm sm:text-base"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://blog.feikovandijk.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-semibold transition-all duration-200 gap-1.5 text-sm sm:text-base"
                  >
                    <PenTool size={16} />
                    <span>Blog</span>
                  </a>
                </div>
              </div>

              {/* Right column: Image with dashed concentric border */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-dashed border-gray-300 dark:border-gray-700 pointer-events-none" />
                  <div className="w-[88%] h-[88%] rounded-full overflow-hidden shadow-xl relative border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-800">
                    <img
                      src="/assets/feikohome.png"
                      alt="Profile"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="portfolio">
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