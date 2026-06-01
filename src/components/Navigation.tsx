import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/portfolio') {
      return location.pathname === '/portfolio' || location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link to="/portfolio" className="brand" data-nav-item="Logo">
          <div style={{ textAlign: 'left' }}>
            <div className="brand-name">Feiko van Dijk</div>
            <div className="brand-role">kubernetes engineer · game designer</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center space-x-2">
          <Link
            to="/portfolio"
            className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}
            data-nav-item="Home"
          >
            Work
          </Link>
          <a
            href="https://blog.feikovandijk.com"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            data-nav-item="Blog"
          >
            Blog
          </a>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            data-nav-item="About"
          >
            About
          </Link>
          <div style={{ marginLeft: 6 }}>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="icon-btn"
            aria-label="Toggle menu"
            data-nav-item="Menu Toggle"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Links Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden border-t border-[var(--border-1)] bg-[var(--bg-1)] py-3 px-6 space-y-1">
          <Link
            to="/portfolio"
            className={`block px-3 py-2 rounded-md font-medium transition-colors ${
              isActive('/portfolio')
                ? 'bg-[var(--primary-tint)] text-[var(--fg-1)]'
                : 'text-[var(--fg-2)] hover:bg-[var(--bg-2)] hover:text-[var(--fg-1)]'
            }`}
            onClick={() => setIsMenuOpen(false)}
            data-nav-item="Mobile Home"
          >
            Work
          </Link>
          <a
            href="https://blog.feikovandijk.com"
            className="block px-3 py-2 rounded-md font-medium text-[var(--fg-2)] hover:bg-[var(--bg-2)] hover:text-[var(--fg-1)] transition-colors"
            onClick={() => setIsMenuOpen(false)}
            data-nav-item="Mobile Blog"
          >
            Blog
          </a>
          <Link
            to="/about"
            className={`block px-3 py-2 rounded-md font-medium transition-colors ${
              isActive('/about')
                ? 'bg-[var(--primary-tint)] text-[var(--fg-1)]'
                : 'text-[var(--fg-2)] hover:bg-[var(--bg-2)] hover:text-[var(--fg-1)]'
            }`}
            onClick={() => setIsMenuOpen(false)}
            data-nav-item="Mobile About"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}