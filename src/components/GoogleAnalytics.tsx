import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    const loadGoogleAnalytics = async () => {
      try {
        // Load the gtag script
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-K0RDBKYRZP';
        script.async = true;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() {
          window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', 'G-K0RDBKYRZP');
      } catch (error) {
        console.error('Error loading Google Analytics:', error);
      }
    };

    loadGoogleAnalytics();
  }, []);

  useEffect(() => {
    // Track page views
    if (window.gtag) {
      window.gtag('config', 'G-K0RDBKYRZP', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
} 