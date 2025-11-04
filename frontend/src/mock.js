// Mock data for Lantiex landing page

export const mockNewsletter = {
  subscribe: (email) => {
    // Mock subscription - stores in localStorage for demo
    const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    
    if (subscribers.includes(email)) {
      return {
        success: false,
        message: 'You are already subscribed!'
      };
    }
    
    subscribers.push(email);
    localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
    
    return {
      success: true,
      message: 'Successfully subscribed!'
    };
  },
  
  getSubscribers: () => {
    return JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
  }
};

export const siteContent = {
  hero: {
   
    title: 'Lantiex',
    subtitle: 'Small app studio making simple, useful apps'
  },
  about: {
    title: "Who Are We",
    paragraphs: [
      "Lantiex is a small app studio making simple, useful apps.",
     
    ]
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Occasional updates about new apps and meaningful improvements. No spam.'
  },
  footer: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', href: '#terms' }
    ],
    copyright: '2025 Lantiex'
  }
};
