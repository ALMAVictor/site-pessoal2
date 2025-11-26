// Centralized project data with detailed information
export const projectsData = [
  {
    id: 'gamers-code',
    title: 'Gamers Code',
    category: 'ecommerce',
    market: 'br', // Brazilian market
    description: 'Tech product recommendation platform powered by Google Gemini AI for intelligent curation. Built as a SPA/PWA with React and Tailwind CSS, featuring Mercado Livre affiliate integration and real-time tracking.',
    fullDescription: 'Gamers Code is a tech product recommendation platform that leverages Google Gemini AI to intelligently curate and recommend gaming tech products. The platform integrates with Mercado Livre affiliate program, providing real-time tracking and conversion optimization. Built as a Single Page Application (SPA) with Progressive Web App (PWA) capabilities, ensuring fast loading and app-like experience on mobile devices.',
    challenge: 'Create a scalable affiliate recommendation platform that combines AI-powered curation with seamless user experience and real-time conversion tracking.',
    solution: 'Developed a React-based SPA/PWA with Google Gemini AI integration for intelligent product recommendations, Tailwind CSS for rapid UI development, and optimized CRO architecture for maximum affiliate conversions.',
    duration: '6 weeks',
    techStack: ['React', 'PWA', 'Tailwind CSS', 'Google Gemini AI', 'SPA Architecture', 'Mercado Livre API'],
    results: '1.7% increase in checkout rate through CRO optimization',
    image: '/gamerscode1.png',
    videoId: '', // YouTube video ID (if available)
    demo: 'https://gamerscode.com.br',
    github: '#',
    featured: true,
  },
  {
    id: 'landing-pages-v4',
    title: 'High-Performance Landing Pages',
    category: 'landing',
    market: 'us', // US market
    description: 'Designed, programmed (Next.js/React), and optimized multiple landing pages for Paid Traffic campaigns (Meta/Google Ads). Applied behavioral psychology principles and A/B testing strategies.',
    fullDescription: 'A collection of high-converting landing pages built specifically for Paid Traffic campaigns on Meta Ads and Google Ads. Each landing page was designed using behavioral psychology principles (Cialdini, Fogg, Kahneman) including social proof, scarcity, and persuasion triggers. Implemented comprehensive A/B testing strategy to optimize conversion rates and reduce CPA.',
    challenge: 'Create landing pages that convert at scale for paid traffic campaigns, reducing CPA while maintaining high conversion rates.',
    solution: 'Developed Next.js/React landing pages with behavioral psychology principles embedded in the design, comprehensive A/B testing infrastructure, and real-time analytics integration for continuous optimization.',
    duration: '2-3 weeks per landing page',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'A/B Testing Tools', 'Google Analytics', 'Hotjar'],
    results: '12.5% increase in conversion rate, 22% reduction in CPA',
    image: 'https://placehold.co/1200x675/png?text=Landing+Pages',
    videoId: '', // YouTube video ID (if available)
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    id: 'cro-platform',
    title: 'A/B Testing & CRO Platform',
    category: 'sites',
    market: 'us', // US market
    description: 'Led platform A/B testing strategy, applying behavioral psychology principles and rewriting UI copywriting. Implemented Growth tool stack for end-to-end funnel analysis.',
    fullDescription: 'Comprehensive CRO platform with built-in A/B testing infrastructure. Led the strategy applying behavioral psychology principles (social proof, scarcity, authority) and completely rewrote UI copywriting for maximum conversion. Implemented full Growth tool stack including Analytics, Pixels, and Hotjar for complete funnel visibility.',
    challenge: 'Optimize user activation and retention through data-driven A/B testing and behavioral psychology application.',
    solution: 'Created a React/TypeScript component library with A/B testing capabilities, integrated comprehensive analytics stack, and applied behavioral psychology principles to UI/UX design and copywriting.',
    duration: '8 weeks',
    techStack: ['React', 'TypeScript', 'VWO', 'Google Optimize', 'Mixpanel', 'Hotjar', 'Component Library'],
    results: '2.4% uplift in new user activation, 4% increase in retention',
    image: 'https://placehold.co/1200x675/png?text=A+B+Testing+Platform',
    videoId: '', // YouTube video ID (if available)
    demo: '#',
    github: '#',
    featured: true,
  },
];

export const categories = [
  { id: 'all', label: 'All Projects', icon: '📁' },
  { id: 'landing', label: 'Landing Pages', icon: '🚀' },
  { id: 'sites', label: 'Websites', icon: '🌐' },
  { id: 'ecommerce', label: 'E-commerce', icon: '🛒' },
];

export const markets = [
  { id: 'all', label: 'All Markets', flag: '🌍' },
  { id: 'br', label: 'Brazil', flag: '🇧🇷' },
  { id: 'us', label: 'United States', flag: '🇺🇸' },
];

// Helper function to get market info
export const getMarketInfo = (market) => {
  return markets.find(m => m.id === market) || markets[0];
};

