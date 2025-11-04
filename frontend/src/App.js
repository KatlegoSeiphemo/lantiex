import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WaveDivider from './components/WaveDivider';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WaveDivider />
      <Services />
      <WaveDivider flip={true} />
      <About />
      <WaveDivider />
      <Stats />
      <WaveDivider flip={true} />
      <Newsletter />
      <WaveDivider />
      <Footer />
    </div>
  );
}

export default App;
