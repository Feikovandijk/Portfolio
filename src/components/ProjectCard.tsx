import { Link } from 'react-router-dom';
import { Project } from '../types/index';
import { motion } from 'framer-motion';
import { Stamp as Steam, Youtube, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/project/${project.id}`} className="block relative">
        <div className="relative overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <Link
              to={`/project/${project.id}`}
              className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"
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
        
        <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">{project.description}</p>

        <div className="flex justify-between items-center">
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium group-hover:gap-3"
          >
            View Details
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <div className="flex gap-4">
            {project.links?.steam && (
              <a
                href={project.links.steam}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#171a21] text-white rounded-lg hover:bg-[#2a475e] transition-colors font-medium"
                title="Available on Steam"
              >
                <Steam size={20} />
                <span>Steam</span>
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