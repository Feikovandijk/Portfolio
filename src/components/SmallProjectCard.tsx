import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

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
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isStreamlinedMastermind = project.id === "small-1";
  const isAztech = project.id === "small-2";
  const isDemonsHeaven = project.id === "small-3";

  const getVideoSrc = () => {
    if (isStreamlinedMastermind) return "assets/StreamlinedMastermindTrailer.mp4";
    if (isAztech) return "assets/AztechTrailer.mp4";
    if (isDemonsHeaven) return "assets/DemonsHeavenTrailer.mp4";
    return "";
  };

  const getThumbnailSrc = () => {
    if (isStreamlinedMastermind) return "assets/Streamlined.png";
    if (isAztech) return "assets/Aztech.png";
    if (isDemonsHeaven) return "assets/DemonsHeaven.png";
    return project.imageUrl;
  };

  const getItchLink = () => {
    if (isStreamlinedMastermind) return "https://buas.itch.io/streamlinedmastermind";
    if (isAztech) return "https://feikovandijk.itch.io/aztech";
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
      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
    >
      {(isStreamlinedMastermind || isAztech || isDemonsHeaven) ? (
        <div className="mb-4 aspect-video overflow-hidden rounded-lg relative">
          {showVideo ? (
            <video
              ref={videoRef}
              src={getVideoSrc()}
              title={project.title}
              className="w-full h-full object-cover"
              controls
              muted
              autoPlay
              playsInline
            />
          ) : (
            <>
              <img
                src={getThumbnailSrc()}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                  <Play size={32} className="text-gray-900 ml-1" />
                </div>
              </button>
            </>
          )}
        </div>
      ) : project.imageUrl ? (
        <div className="mb-4 aspect-video overflow-hidden rounded-lg">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : null}
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
      <div className="mt-auto">
        {(isStreamlinedMastermind || isAztech) && (
          <div className="flex justify-center">
            <a
              href={getItchLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-['Arial'] tracking-wide"
            >
              <span>Play on itch.io</span>
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
} 