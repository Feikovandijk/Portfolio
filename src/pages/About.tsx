import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Flag } from 'lucide-react';
import { aboutContent } from '../data/content';

export default function About() {
  const bioParagraphs = [
    "I'm a Kubernetes & DevOps engineer who loves turning hard systems into reliable, legible ones. For years that meant games: leading technical design on Arid and shipping a handful of titles. These days it means clusters, pipelines and GitOps, with the same systems thinking underneath.",
    "I'm naturally curious, whether I'm debugging a failing deploy or diving into hands-on projects like car builds and home renovations (occasionally 'fixing' something that wasn't broken keeps life interesting). Every unconventional project is a chance to learn something new.",
    "My Master's thesis explored how multiplayer integration changes the emotional core of singleplayer survival games: rigorous, qualitative work that sharpened how I reason about complex systems and trade-offs.",
    "I value collaboration and believe good systems, like good games, are built by teams who share ideas and back each other up. When I'm not in a terminal, you'll likely find me outdoors, climbing rocks."
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="section wrap pt-24"
    >
      <div className="kicker">About</div>
      <h1 className="sec-title" style={{ fontSize: 48, marginBottom: 36 }}>Hello.</h1>
      
      <div className="about-grid">
        <div>
          <div className="about-bio">
            {bioParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "var(--fg-1)", margin: "32px 0 16px" }}>
            Skills
          </h3>
          <div className="skills">
            {aboutContent.skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
          
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "var(--fg-1)", margin: "32px 0 14px" }}>
            Contact
          </h3>
          <div className="footer-links" style={{ marginLeft: -12 }}>
            <a className="footer-link" href={`mailto:${aboutContent.contact.email}`}>
              <Mail size={17} /> {aboutContent.contact.email}
            </a>
            {aboutContent.contact.linkedin && (
              <a
                className="footer-link"
                href={aboutContent.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
            )}
            {aboutContent.contact.ctftime && (
              <a
                className="footer-link"
                href={aboutContent.contact.ctftime}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flag size={17} /> CTFTime
              </a>
            )}
            <a
              className="footer-link"
              href={aboutContent.contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={17} /> GitHub
            </a>
          </div>
        </div>

        <div className="about-photos">
          <img src="/assets/feikoclimb.jpg" alt="Climbing" />
          <img src="/assets/feikoballs.jpg" alt="" />
          <img src="/assets/feikofancy.jpg" alt="" />
        </div>
      </div>
    </motion.div>
  );
}