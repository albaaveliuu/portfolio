import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import './styles/App.scss';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
