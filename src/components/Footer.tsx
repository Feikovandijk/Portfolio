import { Linkedin, Github, Flag, Mail } from 'lucide-react';
import { aboutContent } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-name">{aboutContent.name} · {aboutContent.title}</div>
        <div className="footer-links">
          <a className="footer-link" href={`mailto:${aboutContent.contact.email}`}>
            <Mail size={17} /> Email
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
    </footer>
  );
}