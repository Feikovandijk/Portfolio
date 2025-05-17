import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ProjectDetails from './pages/ProjectDetails';
import { useEffect } from 'react';

declare global {
  interface Window {
    umami?: { // Use optional chaining in case the script hasn't loaded yet
      track: (name: string, data?: object) => void;
    };
  }
}

function App() {
  useEffect(() => {
    // Umami analytics script loading
    const script = document.createElement('script');
    script.src = 'https://analytics.feiko.org/script.js';
    script.defer = true;
    script.setAttribute('data-website-id', '65ba0a72-ac69-4f2b-a2f6-8383a1f6589f');
    document.body.appendChild(script);

    // Global click listener for link clicks
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      if (link && window.umami) {
        window.umami.track('Link Click', { url: link.href });
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      // Clean up the script and event listener
      document.body.removeChild(script);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <Navigation />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/portfolio" replace />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;