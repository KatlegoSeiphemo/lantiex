import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does it take to build an app?',
      answer: 'Typical timelines start at 4–8 weeks for focused utilities. Larger platforms require more time depending on complexity and features.'
    },
    {
      question: 'Do you publish to app stores?',
      answer: 'Yes, we handle submission to App Store & Play Store and follow all store guidelines to ensure your app gets approved smoothly.'
    },
    {
      question: 'What platforms do you support?',
      answer: 'We build native apps for both iOS and Android, ensuring optimal performance and user experience on each platform.'
    },
    {
      question: 'How do you handle app updates?',
      answer: 'We provide ongoing support and maintenance packages. Regular updates are released to keep your app secure, compatible with the latest OS versions, and feature-rich.'
    },
    {
      question: 'What about privacy and data security?',
      answer: 'Privacy is our priority. We collect minimal data, avoid invasive tracking, and follow best practices for data encryption and security compliance.'
    },
    {
      question: 'Do you offer design services?',
      answer: 'Absolutely! We provide complete product design services including UI/UX design, prototyping, and creating beautiful, accessible interfaces.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2>Common Questions</h2>
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}
                />
              </button>
              <div 
                className="faq-answer"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? '1' : '0'
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
