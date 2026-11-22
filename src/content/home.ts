/** Copy for the home page sections. */

export const hero = {
  /** Large outlined word behind the portrait (spelling kept from the original design). */
  backdropWord: 'Desinger',
  greeting: 'Hey, I’m MyLink',
  title: 'Product, UI/UX & Brand Design',
  floatingTag: 'Web design',
  portrait: { src: '/images/home/hero-portrait.webp', alt: 'Portrait of Tran Thi My Linh' },
};

export type Stat = { label: string; value: number; suffix: string };

/** Counter cards that travel from the hero into the About section while scrolling. */
export const heroStats: Stat[] = [
  { label: 'Years Crafting Digital Products', value: 3, suffix: '+' },
  { label: 'Successful Client Partnerships', value: 20, suffix: '+' },
];

export const about = {
  tag: 'About Me',
  title:
    'Apply professional design expertise to create visually appealing products with strong user experience.',
  portrait: { src: '/images/home/about-portrait.webp', alt: 'Tran Thi My Linh holding a phone' },
  satisfaction: { value: '120+', label: 'Client Satisfaction Score', rating: '4.8' },
  avatars: { src: '/images/home/client-avatars.webp', alt: 'Client avatars' },
  strengths: {
    title: 'Strategic Thinking, Clean Execution.',
    tags: ['Interface Design', 'Product Strategy', 'No code development'],
    tiltedTag: 'Branding',
  },
};

export const portfolioIntro = {
  tag: 'My Portfolio',
  title: 'Projects That Delivered Real Impact',
};

export const services = {
  tag: 'Core Services',
  title: 'Design Solutions Built For Growth',
  brand: {
    title: 'Brand Identity',
    text: 'Strategic brand systems built for clarity and growth.',
  },
  web: {
    title: 'Web Experience',
    text: 'We create logos that impress and communicate values.',
    images: [
      '/images/home/web-experience-1.webp',
      '/images/home/web-experience-2.webp',
      '/images/home/web-experience-3.webp',
    ],
  },
  uiux: {
    title: 'UI/UX Design',
    text: 'We create logos that impress and communicate values.',
    image: '/images/home/uiux-showcase.webp',
  },
  development: {
    title: 'Development',
    text: 'We create logos that impress and communicate values.',
    image: '/images/home/development-tools.webp',
  },
  impact: {
    tag: 'Trusted By Global Partners',
    title: 'Let’s Create Impact',
    text: 'Let’s create meaningful and lasting digital impact.',
    cta: 'Start A Project',
  },
};

export const experience = {
  tag: 'Work Experience',
  title: 'My Professional Journey',
  summary: {
    label: 'Work Experience',
    amount: '3 Years',
    text: '3 years of experience in building digital products, with a focus on UI/UX and delivering user-centered experiences.',
    listTitle: 'Key Highlights:',
    items: [
      'UI/UX design for websites and applications',
      'Building and maintaining design systems',
      'Cross-functional collaboration with Product & Developers',
      'User research and insights gathering',
      'Proposing and implementing UX improvements',
      'Tested (AI & Manual) all projects at Sofin',
    ],
  },
  role: {
    label: 'Most Recent Role',
    title: 'UI/UX Designer',
    period: '03/2023 – Present',
    text: 'Responsible for designing user experiences and product interfaces, ensuring design solutions align with business goals and user needs.',
    listTitle: 'Key Achievements:',
    items: [
      'Designed and delivered interfaces for 3+ major features',
      'Optimized user flows, improving conversion rate by 28%',
      'Built and maintained a consistent design system across the product',
      'Collaborated effectively with Product, Development, and Marketing teams',
      'Supported user testing and analyzed user insights',
    ],
  },
};

export const branding = {
  tag: 'Visual identity & Branding',
  title: 'Where creativity meets identity.',
  gallery: [
    { src: '/images/branding/lift-id-card.webp', alt: 'LIFT employee ID card' },
    { src: '/images/branding/lift-polo-shirt.webp', alt: 'LIFT polo shirt' },
    { src: '/images/branding/lift-stationery.webp', alt: 'LIFT stationery' },
    { src: '/images/branding/lift-brochure.webp', alt: 'LIFT company brochure' },
    { src: '/images/branding/lift-shopping-bag.webp', alt: 'LIFT shopping bag packaging' },
    { src: '/images/branding/lift-folder.webp', alt: 'LIFT presentation folder' },
  ],
};

export const faq = {
  tag: 'FAQ Questions',
  title: 'Got questions about working together?',
  items: [
    {
      question: 'What design services do you specialize in?',
      answer:
        'I specialize in UI/UX design for websites, mobile applications, dashboards, and AI-powered platforms. My work focuses on intuitive interfaces, visual consistency, and seamless user experiences.',
    },
    {
      question: 'What is your design process?',
      answer:
        'My process includes understanding project requirements, researching user needs, creating wireframes, developing high-fidelity designs, and refining solutions through feedback and testing.',
    },
    {
      question: 'What tools do you use for design?',
      answer:
        'I primarily use Figma for UI/UX design, wireframing, prototyping, and design systems, alongside Adobe Photoshop and Illustrator for visual and graphic design.',
    },
    {
      question: 'Are you available for freelance projects?',
      answer:
        'Yes, I am open to freelance opportunities and creative collaborations. I enjoy working with teams and businesses to transform ideas into thoughtful digital experiences.',
    },
  ],
};
