import React, { useEffect, useRef, useState } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    downloads: 0,
    apps: 0,
    rating: 0,
    team: 0
  });
  const sectionRef = useRef(null);

  const stats = [
    { key: 'downloads', label: 'Downloads', target: 15000000, suffix: '+' },
    { key: 'apps', label: 'Apps Shipped', target: 12, suffix: '' },
    { key: 'rating', label: 'Avg Rating', target: 4.7, suffix: '', isDecimal: true },
    { key: 'team', label: 'Team Size', target: 5, suffix: '' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach(stat => {
      let current = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setCounts(prev => ({
          ...prev,
          [stat.key]: stat.isDecimal ? current.toFixed(1) : Math.floor(current)
        }));
      }, interval);
    });
  }, [isVisible]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + 'M';
    }
    return num.toLocaleString();
  };

  return (
    <section id="stats" className="stats-section" ref={sectionRef}>
      <div className="container">
        <h2>Numbers</h2>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.key} className="stat-card">
              <div className="stat-number">
                {stat.key === 'downloads' 
                  ? formatNumber(counts[stat.key])
                  : counts[stat.key]}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
