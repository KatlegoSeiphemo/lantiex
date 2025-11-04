import React from 'react';
import { Phone, Code, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Phone size={28} />,
      title: 'Native Apps',
      description: 'High-performance apps tuned for each platform — buttery animations, offline-ready.'
    },
    {
      icon: <Code size={28} />,
      title: 'Tooling & APIs',
      description: 'Solid backend tooling and APIs for syncing data safely and fast.'
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Product Design',
      description: 'Simple interfaces, accessible flows, purposeful micro-interactions.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>What We Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <div className="service-title">{service.title}</div>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
