import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
            Lantiex
          </a>
        </div>
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, '#home')}>
            SGBR
          </a>
          <a href="#newsletter" className="nav-link" onClick={(e) => handleNavClick(e, '#newsletter')}>
            Newsletter
          </a>
          <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>
            Contact
          </a>
        </div>
        <div className="nav-toggle" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
