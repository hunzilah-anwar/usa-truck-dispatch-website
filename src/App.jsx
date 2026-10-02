import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import Modal from "./components/Modal";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import FactoringPage from "./pages/FactoringPage";

import ServiceDetail from "./pages/ServiceDetail";
import CoursePage from "./pages/CoursePage";
import ContactPage from "./pages/ContactPage";

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function MainApp() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalData, setQuoteModalData] = useState({});

  const handleOpenQuote = (customData = {}) => {
    setQuoteModalData(customData);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col">
      <ScrollToTop />

      {/* ThemeREX Clean Light Header */}
      <Header
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Multi-Page Routes */}
      <main className="flex-1 bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenQuote={handleOpenQuote}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                onOpenQuote={handleOpenQuote}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onOpenQuote={handleOpenQuote}
              />
            }
          />
          <Route
            path="/services/:slug"
            element={
              <ServiceDetail
                onOpenQuote={handleOpenQuote}
              />
            }
          />
          <Route
            path="/factoring"
            element={<FactoringPage onOpenQuote={handleOpenQuote} />}
          />

          <Route path="/course" element={<CoursePage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback to Home */}
          <Route
            path="*"
            element={
              <HomePage
                onOpenQuote={handleOpenQuote}
              />
            }
          />
        </Routes>
      </main>

      {/* ThemeREX Clean Light Footer */}
      <Footer
        onOpenQuote={handleOpenQuote}
      />

      {/* Floating WhatsApp Widget with Pulsing Radar Rings */}
      <WhatsApp />

      {/* Interactive Modals */}
      <Modal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialData={quoteModalData}
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
