import React from 'react';
import { siteContent } from '../mock';

const Footer = () => {
  const { footer } = siteContent;

  const handleClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-links">
          {footer.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
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
