import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface SmallProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    imageUrl?: string;
  };
}

export default function SmallProjectCard({ project }: SmallProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      {project.imageUrl && (
        <div className="mb-4 aspect-video overflow-hidden rounded-lg">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <h3 className="text-lg font-medium text-gray-900 dark:text-white font-['Helvetica_Neue'] tracking-wide mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 font-['Arial'] tracking-wide mb-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full font-['Arial'] tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-['Arial'] tracking-wide"
        >
          <span>View Project</span>
          <ExternalLink size={14} className="ml-1" />
        </a>
      )}
    </motion.div>
  );
} 