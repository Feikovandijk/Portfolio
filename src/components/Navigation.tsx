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
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/portfolio" className="text-xl font-semibold text-gray-900 dark:text-white" data-nav-item="Logo">
              Feiko van Dijk - Technical & Game Designer
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-8">
            <Link
              to="/portfolio"
              className={`${
                isActive('/portfolio') 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              } transition-colors duration-200`}
              data-nav-item="Home"
            >
              Home
            </Link>
            <a
              href="https://blog.feikovandijk.com"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              data-nav-item="Blog"
            >
              Blog
            </a>
            <Link
              to="/about"
              className={`${
                isActive('/about') 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              } transition-colors duration-200`}
              data-nav-item="About"
            >
              About
            </Link>
            <ThemeToggle />
          </div>

          <div className="sm:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              data-nav-item="Menu Toggle"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/portfolio"
                className={`block px-3 py-2 rounded-md ${
                  isActive('/portfolio')
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
                data-nav-item="Mobile Home"
              >
                Home
              </Link>
              <a
                href="https://blog.feikovandijk.com"
                className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                onClick={() => setIsMenuOpen(false)}
                data-nav-item="Mobile Blog"
              >
                Blog
              </a>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md ${
                  isActive('/about')
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
                data-nav-item="Mobile About"
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}