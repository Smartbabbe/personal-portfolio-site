import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import VAPage from './pages/VAPage';
import Web3Page from './pages/Web3Page';
import DevelopmentPage from './pages/DevelopmentPage';
import ContactSection from './components/ContactSection';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen text-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'va' && <VAPage onNavigate={handleNavigate} />}
      {currentPage === 'web3' && <Web3Page />}
      {currentPage === 'development' && <DevelopmentPage />}
      {currentPage === 'contact' && (
        <div className="pt-20">
          <ContactSection />
        </div>
      )}
    </div>
  );
}

export default App;
