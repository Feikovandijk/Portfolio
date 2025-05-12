import React, { useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Youtube, Award } from 'lucide-react';
import { projects, achievements } from '../data/content';
import { Project } from '../types/index';

export default function ProjectDetails(): React.ReactElement {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-['Helvetica_Neue'] tracking-wide">Project not found</h1>
        <Link to="/portfolio" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-4 inline-block font-['Arial'] tracking-wide">
          Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 pt-24">
        <Link
          to="/portfolio"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          <span className="font-['Arial'] tracking-wide">Back to Portfolio</span>
        </Link>

        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full aspect-video object-cover rounded-xl mb-8"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-['Helvetica_Neue'] tracking-wide">Project Details</h2>
              <div className="space-y-4">
                {project.projectStats?.teamSize && (
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-['Arial'] tracking-wide">{project.projectStats.teamSize}</p>
                )}
                {project.projectStats?.duration && (
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-['Arial'] tracking-wide">{project.projectStats.duration}</p>
                )}
                {project.projectStats?.platforms && project.projectStats.platforms.length > 0 && (
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-['Arial'] tracking-wide">Released on {project.projectStats.platforms.join(' & ')}</p>
                )}
                {project.projectStats?.technologies && project.projectStats.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.projectStats.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {project.id === "project-3" && (
                  <div className="flex gap-4 mt-4">
                    {project.links?.researchgate && (
                      <a
                        href={project.links.researchgate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors text-sm font-medium"
                      >
                        <span className="font-['Arial'] tracking-wide">View on ResearchGate</span>
                      </a>
                    )}
                    {project.links?.blog && (
                      <a
                        href={project.links.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                      >
                        <span className="font-['Arial'] tracking-wide">Read blog post</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-['Helvetica_Neue'] tracking-wide">Key Contributions</h2>
              <div className="space-y-4">
                <p className="text-lg font-medium text-gray-900 dark:text-white font-['Arial'] tracking-wide">Main Roles: {project.mainRole}</p>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-['Arial'] tracking-wide">Secondary Roles: {project.supportingRole}</p>
                {project.keyContributions && project.keyContributions.length > 0 && (
                  <ul className="list-disc list-inside space-y-2">
                    {project.keyContributions.map((contribution, index) => (
                      <li key={index} className="text-base text-gray-700 dark:text-gray-300 font-['Arial'] tracking-wide">{contribution}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-['Helvetica_Neue'] tracking-wide">Overview</h2>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 font-['Arial'] tracking-wide whitespace-pre-line">{project.mainNarrative}</p>
            </div>

            {project.id === "project-2" && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-['Helvetica_Neue'] tracking-wide">Awards & Recognition</h2>
                <div className="space-y-4">
                  {achievements
                    .filter(achievement => achievement.title.includes("ARID"))
                    .map((achievement) => (
                      <div key={achievement.id} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <Award className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white font-['Arial'] tracking-wide">{achievement.title}</h3>
                          <p className="text-gray-700 dark:text-gray-300 font-['Arial'] tracking-wide">{achievement.description}</p>
                          <span className="text-sm text-gray-500 dark:text-gray-400 font-['Arial'] tracking-wide">{achievement.year}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          {(project.links?.steam || project.links?.youtube || project.links?.blog || project.links?.researchgate) && (
            <div className="flex gap-6 mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
              {project.links?.steam && (
                <a
                  href={project.links.steam}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <span className="font-['Arial'] tracking-wide">Steam Page</span>
                </a>
              )}
              {project.links?.youtube && (
                <a
                  href={project.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  <Youtube size={20} />
                  <span className="font-['Arial'] tracking-wide">Watch on YouTube</span>
                </a>
              )}
              {project.links?.blog && (
                <a
                  href={project.links.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  <span className="font-['Arial'] tracking-wide">Read blog post</span>
                </a>
              )}
              {project.links?.researchgate && (
                <a
                  href={project.links.researchgate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-medium"
                >
                  <span className="font-['Arial'] tracking-wide">View on ResearchGate</span>
                </a>
              )}
            </div>
          )}

          {project.developmentPhases && (
            <div className="mt-12 space-y-16">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 font-['Helvetica_Neue'] tracking-wide">Development Process</h2>
              
              {/* Concepting Phase */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white font-['Helvetica_Neue'] tracking-wide">Concepting</h3>
                {project.developmentPhases.concepting.videoUrl && (
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={project.developmentPhases.concepting.videoUrl}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 font-['Arial'] tracking-wide">
                  {project.developmentPhases.concepting.description}
                </p>
                {project.developmentPhases.concepting.screenshots.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.developmentPhases.concepting.screenshots.map((screenshot: string, index: number) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`Concepting phase screenshot ${index + 1}`}
                        className="w-full aspect-video object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Pre-Production Phase */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white font-['Helvetica_Neue'] tracking-wide">Pre-Production</h3>
                {project.developmentPhases.preProduction.videoUrl && (
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={project.developmentPhases.preProduction.videoUrl}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 font-['Arial'] tracking-wide">
                  {project.developmentPhases.preProduction.description}
                </p>
                {project.developmentPhases.preProduction.screenshots.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.developmentPhases.preProduction.screenshots.map((screenshot: string, index: number) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`Pre-production phase screenshot ${index + 1}`}
                        className="w-full aspect-video object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Production Phase */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white font-['Helvetica_Neue'] tracking-wide">Production</h3>
                {project.developmentPhases.production.videoUrl && (
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={project.developmentPhases.production.videoUrl}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 font-['Arial'] tracking-wide">
                  {project.developmentPhases.production.description}
                </p>
                {project.developmentPhases.production.screenshots.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.developmentPhases.production.screenshots.map((screenshot: string, index: number) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`Production phase screenshot ${index + 1}`}
                        className="w-full aspect-video object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Release Phase */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white font-['Helvetica_Neue'] tracking-wide">Release</h3>
                {project.developmentPhases.release.videoUrl && (
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={project.developmentPhases.release.videoUrl}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 font-['Arial'] tracking-wide">
                  {project.developmentPhases.release.description}
                </p>
                {project.developmentPhases.release.screenshots.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.developmentPhases.release.screenshots.map((screenshot: string, index: number) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`Release phase screenshot ${index + 1}`}
                        className="w-full aspect-video object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              <span className="font-['Arial'] tracking-wide">Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}