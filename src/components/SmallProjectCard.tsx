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
  
  const isStreamlined = project.id === "streamlined";
  const isAztech = project.id === "aztech";
  const isDemons = project.id === "demons";

  const getVideoSrc = () => {
    if (isStreamlined) return "/assets/StreamlinedMastermindTrailer.mp4";
    if (isAztech) return "/assets/AztechTrailer.mp4";
    if (isDemons) return "/assets/DemonsHeavenTrailer.mp4";
    return "";
  };

  const hasVideo = isStreamlined || isAztech || isDemons;

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play();
    }
  }, [showVideo]);

  return (
    <div className="card h-full">
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
                aria-label="Play trailer"
              >
                <div className="disc">
                  <Play size={24} fill="currentColor" style={{ marginLeft: 2 }} />
                </div>
              </button>
            </>
          )
        ) : project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} />
        ) : null}
      </div>

      <div className="card-body">
        <h3 className="card-title" style={{ fontSize: 18 }}>
          {project.title}
        </h3>
        <p className="card-desc">
          {project.description}
        </p>
        
        <div className="card-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {project.link && (
          <div className="card-foot" style={{ marginTop: 'auto', paddingTop: 12 }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-more"
              style={{ fontSize: '13px' }}
            >
              Play on itch.io <ExternalLink size={13} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}