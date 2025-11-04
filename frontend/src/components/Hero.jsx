import React, { useState, useEffect } from 'react';
import { siteContent } from '../mock';

const Hero = () => {
  const { hero } = siteContent;
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < hero.title.length) {
      const timeout = setTimeout(() => {
        setDisplayedTitle(prev => prev + hero.title[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150); // 150ms delay between each character

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, hero.title]);

  return (
    <section id="home" className="hero-section">
      {/* Neon Particles */}
      <div className="neon-particles">
        <div className="neon-particle"></div>
        <div className="neon-particle"></div>
        <div className="neon-particle"></div>
        <div className="neon-particle"></div>
        <div className="neon-particle"></div>
      </div>
      
      {/* Neon Streaks */}
      <div className="neon-streak"></div>
      <div className="neon-streak"></div>
      <div className="neon-streak"></div>
      <div className="neon-streak"></div>
      <div className="neon-streak vertical"></div>
      <div className="neon-streak vertical"></div>
      <div className="neon-streak vertical"></div>
      
      <div className="container">
        <div className="hero-content fade-in-up">
          <p className="tagline">{hero.tagline}</p>
          <h1>
            {displayedTitle}
            <span className="typing-cursor">|</span>
          </h1>
          <p className="tagline">{hero.subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
