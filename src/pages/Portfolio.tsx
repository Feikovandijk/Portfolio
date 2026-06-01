import { motion } from 'framer-motion';
import { ArrowDown, Github, PenLine, Award, Server, Library, GitBranch, Boxes, Archive, Map } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import SmallProjectCard from '../components/SmallProjectCard';
import ScrollButtons from '../components/ScrollButtons';
import { aboutContent, projects, infra, achievements, smallProjects } from '../data/content';
import type { InfraItem } from '../types/index';

function getInfraIcon(iconName: string) {
  switch (iconName) {
    case 'server': return <Server size={20} />;
    case 'library': return <Library size={20} />;
    case 'git-branch': return <GitBranch size={20} />;
    case 'boxes': return <Boxes size={20} />;
    case 'archive': return <Archive size={20} />;
    case 'map': return <Map size={20} />;
    default: return <Github size={20} />;
  }
}

function InfraCard({ item }: { item: InfraItem }) {
  return (
    <a className="infra" href={item.link} target="_blank" rel="noreferrer">
      <div className="infra-head">
        <div className="infra-ico">{getInfraIcon(item.icon)}</div>
        <div className="infra-name">{item.title}</div>
      </div>
      <div className="infra-desc">{item.desc}</div>
      <div className="card-tags">
        {item.tags.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <div className="infra-foot">
        <span className="infra-repo">
          <Github size={13} /> View repository
        </span>
      </div>
    </a>
  );
}

export default function Portfolio() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero gridbg">
        <div className="wrap hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="kicker">Kubernetes engineer · game designer</div>
            <h1>
              Hi, I'm <span className="accent">Feiko.</span>
            </h1>
            <p className="hero-tagline">I build infrastructure for worlds, real and virtual.</p>
            <p className="hero-bio">
              I'm a <strong>Kubernetes & DevOps engineer</strong> and a <strong>game designer</strong> from the Netherlands. 
              I've led technical design on Arid, a survival game that hit 200k downloads in its first month, and I bring 
              that same systems thinking to clusters, pipelines and GitOps. I hold an MSc in Games Research and a BSc 
              in Game Development. Below: the worlds I've built, and the engineering behind them.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={scrollToWork}>
                View work <ArrowDown size={16} />
              </button>
              <a 
                className="btn btn-secondary" 
                href={aboutContent.contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github size={16} /> GitHub
              </a>
              <a 
                className="btn btn-ghost" 
                href={aboutContent.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <PenLine size={16} /> Blog
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="portrait-wrap"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="portrait-ring"></div>
            <img className="portrait" src="/assets/feikohome.png" alt="Feiko van Dijk" />
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      {aboutContent.stats && (
        <div className="wrap" style={{ marginTop: -28, position: 'relative', zIndex: 2 }}>
          <motion.div 
            className="stats"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {aboutContent.stats.map(s => (
              <div className="stat" key={s.k}>
                <div className="stat-v">{s.v}</div>
                <div className="stat-k">{s.k}</div>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Game Systems Section */}
      <section className="section" id="work" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="kicker">Selected work</div>
              <h2 className="sec-title">Game systems</h2>
              <p className="sec-sub">Shipped titles, research, and the teams behind them.</p>
            </div>
          </div>
          <div className="grid-2">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="kicker">Engineering &amp; infrastructure</div>
              <h2 className="sec-title">What I run them on</h2>
              <p className="sec-sub">Kubernetes, backends and the tools I build around games. All open source.</p>
            </div>
          </div>
          <div className="grid-3">
            {infra.map(item => (
              <InfraCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Recognition / Awards Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="kicker">Recognition</div>
              <h2 className="sec-title">Awards</h2>
            </div>
          </div>
          <div className="grid-2">
            {achievements.map(a => (
              <div className="ach" key={a.id}>
                <div className="ach-ico">
                  <Award size={18} />
                </div>
                <div>
                  <div className="ach-title">{a.title}</div>
                  <div className="ach-desc">{a.description}</div>
                  <span className="ach-year">{a.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="kicker">Also built</div>
              <h2 className="sec-title">Other projects</h2>
            </div>
          </div>
          <div className="grid-3">
            {smallProjects.map(project => (
              <SmallProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <ScrollButtons />
    </div>
  );
}