import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import WaveDivider from './components/WaveDivider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WaveDivider />
      <About />
      <WaveDivider flip={true} />
      <Newsletter />
      <WaveDivider />
      <Footer />
    </div>
  );
}

export default App;
