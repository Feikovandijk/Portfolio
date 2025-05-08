import { Link } from 'react-router-dom';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { Stamp as Steam, Youtube } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
    >
      <Link to={`/project/${project.id}`}>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <Link
              to={`/project/${project.id}`}
              className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {project.title}
            </Link>
            <div className="mt-2 space-y-1">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Main Role: {project.mainRole}</p>
              {project.supportingRole && (
                <p className="text-sm text-gray-600 dark:text-gray-300">Supporting Role: {project.supportingRole}</p>
              )}
            </div>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">{project.timeline}</span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>

        <div className="flex justify-between items-center">
          <Link
            to={`/project/${project.id}`}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
          >
            View Details
          </Link>

          <div className="flex gap-4">
            {project.links?.steam && (
              <a
                href={project.links.steam}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                title="Available on Steam"
              >
                <Steam size={24} />
              </a>
            )}
            {project.links?.youtube && (
              <a
                href={project.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Youtube size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}