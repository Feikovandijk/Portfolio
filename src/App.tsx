import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ProjectDetails from './pages/ProjectDetails';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://analytics.feiko.org/script.js';
    script.defer = true;
    script.setAttribute('data-website-id', '65ba0a72-ac69-4f2b-a2f6-8383a1f6589f');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
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