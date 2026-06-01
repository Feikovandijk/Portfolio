import { Link } from 'react-router-dom';
import { Project } from '../types/index';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  const isArid = project.id === "arid";
  const isQuantum = project.id === "quantum";

  const getVideoSrc = () => {
    if (isArid) return "/assets/AridBlockD.mp4";
    if (isQuantum) return "/assets/quantum.mp4";
    return "";
  };

  const hasVideo = isArid || isQuantum;

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play();
    }
  }, [showVideo]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card h-full"
    >
      <div className="card-media">
        {hasVideo ? (
          showVideo ? (
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
              <img src={project.imageUrl} alt={project.title} />
              <button
                onClick={() => setShowVideo(true)}
                className="card-play"
                aria-label="Play video"
              >
                <div className="disc">
                  <Play size={24} fill="currentColor" style={{ marginLeft: 2 }} />
                </div>
              </button>
            </>
          )
        ) : (
          <Link to={`/project/${project.id}`} className="block w-full h-full">
            <img src={project.imageUrl} alt={project.title} />
          </Link>
        )}
        
        {project.status && (
          <span className={`pill on-media`}>
            <span className={`dot tone-${project.status.tone}`}></span>
            {project.status.label}
          </span>
        )}
      </div>

      <div className="card-body">
        <div className="card-kick">{project.mainRole}</div>
        <h3 className="card-title">
          <Link to={`/project/${project.id}`} className="hover:text-[var(--primary)] transition-colors">
            {project.title}
          </Link>
        </h3>
        <p className="card-desc">{project.description}</p>
        
        <div className="card-tags">
          {project.tags?.slice(0, 3).map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        
        <div className="card-rule"></div>
        
        <div className="card-foot">
          <span className="card-year">{project.timeline}</span>
          <Link to={`/project/${project.id}`} className="card-more">
            View project <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}