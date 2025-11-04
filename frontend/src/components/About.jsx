import React from 'react';
import { siteContent } from '../mock';

const About = () => {
  const { about } = siteContent;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>{about.title}</h2>
        {about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
