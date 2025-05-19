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

    // Scroll depth tracking
    const trackScrollDepth = () => {
      if (!window.umami) return;

      const scrollPercent = Math.round(
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100
      );

      // Track at 25%, 50%, 75%, and 100% scroll depth
      if (scrollPercent >= 25 && scrollPercent < 50) {
        window.umami.track('Scroll Depth', { depth: '25%' });
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        window.umami.track('Scroll Depth', { depth: '50%' });
      } else if (scrollPercent >= 75 && scrollPercent < 100) {
        window.umami.track('Scroll Depth', { depth: '75%' });
      } else if (scrollPercent >= 100) {
        window.umami.track('Scroll Depth', { depth: '100%' });
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
        case 'play':
          window.umami.track('Video Play', { videoId });
          break;
        case 'pause':
          window.umami.track('Video Pause', { videoId });
          break;
        case 'ended':
          window.umami.track('Video Complete', { videoId });
          break;
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

    // Add event listeners
    document.addEventListener('click', handleLinkClick);
    document.addEventListener('scroll', trackScrollDepth);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('click', handleNavInteraction);

    // Observe theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          handleThemeChange();
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });

    // Add video event listeners to all videos
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.addEventListener('play', handleVideoInteraction);
      video.addEventListener('pause', handleVideoInteraction);
      video.addEventListener('ended', handleVideoInteraction);
    });

    return () => {
      // Clean up all event listeners
      document.body.removeChild(script);
      document.removeEventListener('click', handleLinkClick);
      document.removeEventListener('scroll', trackScrollDepth);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('click', handleNavInteraction);
      
      // Clean up video listeners
      videos.forEach(video => {
        video.removeEventListener('play', handleVideoInteraction);
        video.removeEventListener('pause', handleVideoInteraction);
        video.removeEventListener('ended', handleVideoInteraction);
      });
      
      // Clean up theme observer
      observer.disconnect();
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