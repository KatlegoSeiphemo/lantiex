import React, { useState } from 'react';
import { siteContent, mockNewsletter } from '../mock';

const Newsletter = () => {
  const { newsletter } = siteContent;
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      setIsSuccess(false);
      return;
    }

    const result = mockNewsletter.subscribe(email);
    setMessage(result.message);
    setIsSuccess(result.success);
    
    if (result.success) {
      setEmail('');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <section id="newsletter" className="newsletter-section">
      <div className="container">
        <h2>{newsletter.title}</h2>
        <p>{newsletter.description}</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
        {message && (
          <p className={isSuccess ? 'newsletter-success' : 'newsletter-error'}
             style={{ color: isSuccess ? '#10b981' : '#ef4444', marginTop: '16px' }}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
