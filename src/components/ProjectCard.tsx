import { Link } from 'react-router-dom';
import { Project } from '../types/index';
import { motion } from 'framer-motion';
import { Stamp as Steam, Youtube, ArrowRight, Play, BookOpen } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isArid = project.id === "project-2";
  const isQuantum = project.id === "project-4";

  const getVideoSrc = () => {
    if (isArid) return "/assets/AridBlockD.mp4";
    if (isQuantum) return "/assets/quantum.mp4";
    return "";
  };

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play();
    }
  }, [showVideo]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative">
        {(isArid || isQuantum) ? (
          showVideo ? (
            <video
              ref={videoRef}
              src={getVideoSrc()}
              title={project.title}
              className="w-full h-56 object-cover"
              controls
              muted
              autoPlay
              playsInline
            />
          ) : (
            <div className="relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors z-10"
              >
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                  <Play size={32} className="text-gray-900 ml-1" />
                </div>
              </button>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )
        ) : (
          <Link to={`/project/${project.id}`} className="block relative">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
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

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full font-['Arial'] tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center mt-auto pt-4">
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
            {project.links?.researchgate && (
              <a
                href={project.links.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d0a1] text-white rounded-lg hover:bg-[#00b38f] transition-colors font-medium"
                title="View on ResearchGate"
              >
                <BookOpen size={20} />
                <span>ResearchGate</span>
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