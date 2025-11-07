import React from 'react';
import { siteContent } from '../mock';

const Footer = ({ onContactClick }) => {
  const { footer } = siteContent;

  const handleClick = (e, href, label) => {
    e.preventDefault();
    
    // If it's the Contact link, open the modal
    if (label === 'Contact') {
      onContactClick();
      return;
    }
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          {footer.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => handleClick(e, link.href, link.label)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="footer-copyright">{footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
