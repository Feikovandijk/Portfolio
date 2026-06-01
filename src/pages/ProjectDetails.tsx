import React, { useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Award } from 'lucide-react';
import { projects, achievements } from '../data/content';

export default function ProjectDetails(): React.ReactElement {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
        <h1 className="t-h1" style={{ marginBottom: 16 }}>Project not found</h1>
        <Link to="/portfolio" className="btn btn-primary">
          Return to Portfolio
        </Link>
      </div>
    );
  }

  const s = project.projectStats;
  const isArid = project.id === 'arid';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="section wrap pt-24"
    >
      <Link to="/portfolio" className="detail-back">
        <ArrowLeft size={15} /> back to work
      </Link>

      <div className="detail-hero">
        <img src={project.imageUrl} alt={project.title} />
        <div className="detail-hero-body">
          <div className="kicker" style={{ color: 'rgba(255,255,255,.7)' }}>{project.mainRole}</div>
          <h1 className="detail-title">{project.title}</h1>
        </div>
      </div>

      <div className="detail-grid">
        <div>
          <div className="card-tags" style={{ marginBottom: 24 }}>
            {project.tags?.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <div className="detail-narr">{project.mainNarrative}</div>

          {project.quote && project.quote.text ? (
            <blockquote className="quote">
              <p>“{project.quote.text}”</p>
              <cite>{project.quote.source}</cite>
            </blockquote>
          ) : null}

          {project.keyContributions && project.keyContributions.length > 0 && (
            <div style={{ marginTop: 32 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: 'var(--fg-1)', margin: '0 0 16px' }}>
                Key contributions
              </h3>
              <ul className="contrib">
                {project.keyContributions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Awards and Recognition on Detail Page */}
          {isArid && (
            <div style={{ marginTop: 48 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: 'var(--fg-1)', margin: '0 0 20px' }}>
                Awards & Recognition
              </h3>
              <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                {achievements
                  .filter(achievement => achievement.title.toLowerCase().includes('arid'))
                  .map((achievement) => (
                    <div className="ach" key={achievement.id}>
                      <div className="ach-ico">
                        <Award size={18} />
                      </div>
                      <div>
                        <div className="ach-title">{achievement.title}</div>
                        <div className="ach-desc">{achievement.description}</div>
                        <span className="ach-year">{achievement.year}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Links Section */}
          <div className="flex flex-wrap gap-4" style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border-1)' }}>
            {project.links.steam && (
              <a
                href={project.links.steam}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={16} /> Visit Steam Page
              </a>
            )}
            {project.links.researchgate && (
              <a
                href={project.links.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={16} /> View on ResearchGate
              </a>
            )}
            {project.links.blog && (
              <a
                href={project.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Read Blog Post
              </a>
            )}
          </div>
        </div>

        {/* Sidebar Project Spec */}
        <aside>
          {s && (
            <div className="statbox">
              <h4>Project spec</h4>
              <div className="statrow">
                <span className="k">role</span>
                <span className="v">{project.mainRole}</span>
              </div>
              <div className="statrow">
                <span className="k">years</span>
                <span className="v">{project.timeline}</span>
              </div>
              <div className="statrow">
                <span className="k">team</span>
                <span className="v">{s.teamSize}</span>
              </div>
              <div className="statrow">
                <span className="k">duration</span>
                <span className="v">{s.duration}</span>
              </div>
              {project.status && (
                <div className="statrow">
                  <span className="k">state</span>
                  <span className="v">{project.status.label}</span>
                </div>
              )}
              {s.platforms && s.platforms.length > 0 && (
                <div className="statrow">
                  <span className="k">platforms</span>
                  <span className="v">{s.platforms.join(' · ')}</span>
                </div>
              )}
            </div>
          )}

          {s?.technologies && s.technologies.length > 0 && (
            <div className="statbox" style={{ marginTop: 18 }}>
              <h4>Stack</h4>
              <div className="card-tags">
                {s.technologies.map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </motion.div>
  );
}