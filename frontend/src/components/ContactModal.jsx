import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const subjectOptions = [
    'General Inquiry',
    'App Development',
    'Bug Report',
    'Feature Request',
    'Partnership',
    'Feedback',
    'Other'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setStatus('Thank you for your message! We will be in touch.');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setTimeout(() => {
          onClose();
          setStatus('');
        }, 3000);
      } else {
        setStatus('Failed to send');
      }
    } catch (error) {
      setStatus('Error occurred');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h2>Contact Us</h2>
        
        <div className="contact-info">
          <p>Email: <a href="mailto:hello@lantiex.com">hello@lantiex.com</a></p>
          <p>Phone: <a href="tel:+27657235793">+27 65 723 5793</a></p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          >
            <option value="">Select a subject</option>
            {subjectOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="5"
          />

          {status && <p className="status-message">{status}</p>}

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
