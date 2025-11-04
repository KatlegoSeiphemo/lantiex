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
    tagline: 'SGBR',
    title: 'Lantiex',
    subtitle: 'Small app studio making simple, useful apps'
  },
  about: {
    title: "Who's We?",
    paragraphs: [
      "Lantiex is a small app studio making simple, useful apps.",
      "Creativity is for everyone. Great ideas don't start with perfect plans—they start with curiosity and a sense of wonder. We build with that spirit: small, focused, and shipped. Each release is designed to remove friction, do one thing exceptionally well, and feel great in your hand.",
      "We're a small team based in Cape Town, South Africa. Our apps have been downloaded more than 15 million times across the App Store and Google Play. We keep our team lean so we can move quickly, make thoughtful decisions, and stay close to the people who actually use our products.",
      "Our approach is simple: clarity over clutter. Interfaces are calm, copy is clear, and performance comes first. We obsess over the small details—snappy interactions, readable type, reliable offline behavior—because the best tool is the one you don't have to think about.",
      "Privacy matters. We collect as little data as possible and avoid invasive tracking. Your information stays your information. Our responsibility is to build fast, dependable software not ad tech.",
      "We ship regularly, listen carefully, and iterate. Whether you're on iOS or Android, our goal is the same: simple, focused apps that help you get something done and get on with your day.",
      "It's time to make. Follow your curiosity."
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
    copyright: '2025 Lantiox'
  }
};
