import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WaveDivider from './components/WaveDivider';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="App">
      <Navbar onContactClick={openContactModal} />
      <Hero />
      <WaveDivider />
      <Services />
      <WaveDivider flip={true} />
      <About />
      <WaveDivider />
      <Stats />
      <WaveDivider flip={true} />
      <FAQ />
      <WaveDivider />
      <Newsletter />
      <WaveDivider flip={true} />
      <Footer onContactClick={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}

export default App;
