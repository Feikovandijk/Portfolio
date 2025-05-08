import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Stamp as Steam, Youtube } from 'lucide-react';
import { projects } from '../data/content';

interface Project {
  id: string;
  title: string;
  imageUrl: string;
  mainRole: string;
  supportingRole?: string;
  timeline: string;
  description: string;
  process: {
    challenge: string;
    solution: string;
    outcome: string;
  };
  links?: {
    steam?: string;
    youtube?: string;
  };
}

export default function ProjectDetails(): React.ReactElement {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Project not found</h1>
        <Link to="/portfolio" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-4 inline-block">
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
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>

        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full aspect-video object-cover rounded-xl mb-8"
        />

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h1>
              <div className="space-y-1">
                <p className="text-lg font-medium text-gray-900 dark:text-white">Main Role: {project.mainRole}</p>
                {project.supportingRole && (
                  <p className="text-lg text-gray-600 dark:text-gray-300">Supporting Role: {project.supportingRole}</p>
                )}
              </div>
            </div>
            <span className="text-base text-gray-500 dark:text-gray-400">{project.timeline}</span>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h2>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">{project.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">The Challenge</h2>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">{project.process.challenge}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Solution</h2>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">{project.process.solution}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Outcome</h2>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">{project.process.outcome}</p>
            </div>
          </div>

          {(project.links?.steam || project.links?.youtube) && (
            <div className="flex gap-6 mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
              {project.links?.steam && (
                <a
                  href={project.links.steam}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Steam size={20} />
                  <span>View on Steam</span>
                </a>
              )}
              {project.links?.youtube && (
                <a
                  href={project.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Youtube size={20} />
                  <span>Watch on YouTube</span>
                </a>
              )}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}