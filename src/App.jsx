import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ThemeRexHeader from './components/ThemeRexHeader';
import ThemeRexFooter from './components/ThemeRexFooter';
import WhatsAppWidget from './components/WhatsAppWidget';
import QuoteModal from './components/QuoteModal';
import LoadRequestModal from './components/LoadRequestModal';
import CarrierOnboardModal from './components/CarrierOnboardModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import RatesPage from './pages/RatesPage';
import FactoringPage from './pages/FactoringPage';

import ServiceDetailPage from './pages/ServiceDetailPage';
import RegisterPage from './pages/RegisterPage';
import DispatchCoursePage from './pages/DispatchCoursePage';
import ContactPage from './pages/ContactPage';

import './App.css';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function MainApp() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalData, setQuoteModalData] = useState({});

  const [loadRequestModalOpen, setLoadRequestModalOpen] = useState(false);
  const [defaultEquipmentForLoad, setDefaultEquipmentForLoad] = useState('');

  const [carrierOnboardModalOpen, setCarrierOnboardModalOpen] = useState(false);

  const handleOpenQuote = (customData = {}) => {
    setQuoteModalData(customData);
    setQuoteModalOpen(true);
  };

  const handleOpenLoadRequest = (equipment = '') => {
    setDefaultEquipmentForLoad(equipment);
    setLoadRequestModalOpen(true);
  };

  const handleOpenOnboard = () => {
    setCarrierOnboardModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col">
      <ScrollToTop />

      {/* ThemeREX Clean Light Header */}
      <ThemeRexHeader
        onOpenQuote={() => handleOpenQuote()}
        onOpenLoadRequest={() => handleOpenLoadRequest()}
        onOpenOnboard={handleOpenOnboard}
      />

      {/* Multi-Page Routes */}
      <main className="flex-1 bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenQuote={handleOpenQuote}
                onOpenLoadRequest={handleOpenLoadRequest}
                onOpenOnboard={handleOpenOnboard}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                onOpenQuote={handleOpenQuote}
                onOpenOnboard={handleOpenOnboard}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onOpenQuote={handleOpenQuote}
                onOpenLoadRequest={handleOpenLoadRequest}
                onOpenOnboard={handleOpenOnboard}
              />
            }
          />
          <Route
            path="/services/:slug"
            element={
              <ServiceDetailPage
                onOpenQuote={handleOpenQuote}
                onOpenOnboard={handleOpenOnboard}
              />
            }
          />
          <Route
            path="/rates"
            element={
              <RatesPage
                onOpenQuote={handleOpenQuote}
                onOpenLoadRequest={handleOpenLoadRequest}
              />
            }
          />
          <Route
            path="/factoring"
            element={
              <FactoringPage
                onOpenQuote={handleOpenQuote}
              />
            }
          />

          <Route
            path="/register"
            element={
              <RegisterPage />
            }
          />
          <Route
            path="/course"
            element={
              <DispatchCoursePage />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage />
            }
          />
          {/* Fallback to Home */}
          <Route
            path="*"
            element={
              <HomePage
                onOpenQuote={handleOpenQuote}
                onOpenLoadRequest={handleOpenLoadRequest}
                onOpenOnboard={handleOpenOnboard}
              />
            }
          />
        </Routes>
      </main>

      {/* ThemeREX Clean Light Footer */}
      <ThemeRexFooter
        onOpenLoadRequest={() => handleOpenLoadRequest()}
        onOpenOnboard={handleOpenOnboard}
      />

      {/* Floating WhatsApp Widget with Pulsing Radar Rings */}
      <WhatsAppWidget />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialData={quoteModalData}
      />

      <LoadRequestModal
        isOpen={loadRequestModalOpen}
        onClose={() => setLoadRequestModalOpen(false)}
        defaultEquipment={defaultEquipmentForLoad}
      />

      <CarrierOnboardModal
        isOpen={carrierOnboardModalOpen}
        onClose={() => setCarrierOnboardModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}
