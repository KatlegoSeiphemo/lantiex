import React from 'react';
import { siteContent } from '../mock';

const Hero = () => {
  const { hero } = siteContent;

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content fade-in-up">
          <p className="tagline">{hero.tagline}</p>
          <h1>{hero.title}</h1>
          <p className="tagline">{hero.subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
