import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import ShrimpsPage from './pages/ShrimpsPage';
import FishesPage from './pages/FishesPage';
import CephalopodsPage from './pages/CephalopodsPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import QualityAssurancePage from './pages/QualityAssurancePage';
import GlobalMarketsPage from './pages/GlobalMarketsPage';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen bg-white selection:bg-brand-secondary selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/quality-assurance" element={<QualityAssurancePage />} />
          <Route path="/global-markets" element={<GlobalMarketsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/shrimps" element={<ShrimpsPage />} />
          <Route path="/products/fishes" element={<FishesPage />} />
          <Route path="/products/cephalopods" element={<CephalopodsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
