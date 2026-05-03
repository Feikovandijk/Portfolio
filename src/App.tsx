import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ProjectDetails from './pages/ProjectDetails';
import { useEffect } from 'react';

// Component to handle Umami page view tracking on route changes
function UmamiPageTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.umami) {
      // Umami's track() function, when called with a URL or path, logs a page view.
      window.umami.track(location.pathname + location.search);
    }
  }, [location.pathname, location.search]);

  return null;
}

function App() {
  useEffect(() => {
    // Global click listener for link clicks
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      if (link && window.umami) {
        window.umami.track('Link Click', { url: link.href });
      }
    };

    // Tab visibility tracking
    const handleVisibilityChange = () => {
      if (window.umami) {
        if (document.hidden) {
          window.umami.track('Tab Hidden');
        } else {
          window.umami.track('Tab Visible');
        }
      }
    };

    // Theme toggle tracking
    const handleThemeChange = () => {
      if (window.umami) {
        const isDark = document.documentElement.classList.contains('dark');
        window.umami.track('Theme Toggle', { theme: isDark ? 'dark' : 'light' });
      }
    };

    // Video interaction tracking
    const handleVideoInteraction = (event: Event) => {
      if (!window.umami) return;
      const video = event.target as HTMLVideoElement;
      const videoId = video.id || video.getAttribute('data-video-id') || 'unknown';
      switch (event.type) {
        case 'play': window.umami.track('Video Play', { videoId }); break;
        case 'pause': window.umami.track('Video Pause', { videoId }); break;
        case 'ended': window.umami.track('Video Complete', { videoId }); break;
      }
    };

    // Navigation menu tracking
    const handleNavInteraction = (event: MouseEvent) => {
      if (!window.umami) return;
      const target = event.target as HTMLElement;
      const navItem = target.closest('[data-nav-item]');
      if (navItem) {
        const itemName = navItem.getAttribute('data-nav-item');
        window.umami.track('Nav Interaction', { item: itemName });
      }
    };

    document.addEventListener('click', handleLinkClick);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('click', handleNavInteraction);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') handleThemeChange();
      });
    });
    observer.observe(document.documentElement, { attributes: true });

    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.addEventListener('play', handleVideoInteraction);
      video.addEventListener('pause', handleVideoInteraction);
      video.addEventListener('ended', handleVideoInteraction);
    });

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      document.removeEventListener('click', handleLinkClick);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('click', handleNavInteraction);
      videos.forEach(video => {
        video.removeEventListener('play', handleVideoInteraction);
        video.removeEventListener('pause', handleVideoInteraction);
        video.removeEventListener('ended', handleVideoInteraction);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <UmamiPageTracker />
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