/** Blog posts. Order matches the blog listing; the first two are shown as large cards. */

export type BlogBlock = { type: 'heading' | 'paragraph'; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** Short label on the listing card. */
  badge: string;
  /** Eyebrow above the title on the article page. */
  category: string;
  description: string;
  image: string;
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'lessons-for-designers',
    title: 'Lessons For Designers',
    badge: 'Popular',
    category: 'Popular Insight',
    description:
      'Thoughts, perspectives, and practical insights on design, creativity, and building digital experiences that connect with users and create meaningful impact.',
    image: '/images/blog/lessons-for-designers.webp',
    body: [
      { type: 'heading', text: 'Learning From Real Design Work' },
      {
        type: 'paragraph',
        text: '\nGreat design rarely happens by accident. It comes from observation, experimentation, and continuous improvement. Every project provides lessons about users, problems, and how thoughtful design decisions shape meaningful digital experiences.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: '\nCase Study: Brand Transformation' },
      {
        type: 'paragraph',
        text: '\nA growing startup needed a clearer visual identity and better product experience. Through research, simplified UI structures, and refined branding, the product became easier to use and stronger in market perception.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: '\nCase Study: Product Experience' },
      {
        type: 'paragraph',
        text: '\nAnother project focused on improving user interaction and usability. By redesigning navigation, improving content hierarchy, and simplifying workflows, the product achieved higher engagement and improved user satisfaction.\n“Great design is not just about visuals, but about solving problems and creating meaningful user experiences.”',
      },
      { type: 'heading', text: '' },
      { type: 'heading', text: '\nConclusion' },
      {
        type: 'paragraph',
        text: '\nDesign is a continuous journey of learning, testing ideas, and improving solutions. The more designers observe users and refine their work, the more impactful their creations become.',
      },
    ],
  },
  {
    slug: 'lessons-for-designers-popular',
    title: 'Lessons For Designers',
    badge: 'Popular',
    category: 'Popular Insight',
    description:
      'Thoughts, perspectives, and practical insights on design, creativity, and building digital experiences that connect with users and create meaningful impact.',
    image: '/images/blog/lessons-for-designers-popular.webp',
    body: [
      { type: 'heading', text: 'Learning From Real Design Work' },
      {
        type: 'paragraph',
        text: '\nGreat design rarely happens by accident. It comes from observation, experimentation, and continuous improvement. Every project provides lessons about users, problems, and how thoughtful design decisions shape meaningful digital experiences.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: '\nCase Study: Brand Transformation' },
      {
        type: 'paragraph',
        text: '\nA growing startup needed a clearer visual identity and better product experience. Through research, simplified UI structures, and refined branding, the product became easier to use and stronger in market perception.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: '\nCase Study: Product Experience' },
      {
        type: 'paragraph',
        text: '\nAnother project focused on improving user interaction and usability. By redesigning navigation, improving content hierarchy, and simplifying workflows, the product achieved higher engagement and improved user satisfaction.\n“Great design is not just about visuals, but about solving problems and creating meaningful user experiences.”',
      },
      { type: 'heading', text: '' },
      { type: 'heading', text: '\nConclusion' },
      {
        type: 'paragraph',
        text: '\nDesign is a continuous journey of learning, testing ideas, and improving solutions. The more designers observe users and refine their work, the more impactful their creations become.',
      },
    ],
  },
  {
    slug: 'design-principles',
    title: 'Design Principles',
    badge: 'Featured',
    category: 'Featured Insight',
    description:
      'Core ideas, essential guidelines, and practical approaches to design, helping creators build better interfaces, improve usability, and deliver experiences that feel intuitive and effective.',
    image: '/images/blog/design-principles.webp',
    body: [
      { type: 'heading', text: 'Applying Principles In Real Projects' },
      {
        type: 'paragraph',
        text: 'Strong design never depends only on visuals. It develops through clear thinking, structured approaches, and consistent refinement. Every project teaches valuable lessons about balance, usability, and how design principles guide better decisions.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Case Study: Visual Consistency' },
      {
        type: 'paragraph',
        text: 'A growing product needed a more unified design system and clearer interface structure. By applying consistent spacing, typography, and color rules, the experience became more cohesive and easier for users to understand.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Case Study: Usability Enhancement' },
      {
        type: 'paragraph',
        text: 'Another project focused on improving usability and reducing user confusion. By simplifying layouts, improving visual hierarchy, and aligning interactions, the product achieved smoother navigation and increased user confidence.\n“Good design is guided by principles that bring clarity, consistency, and purpose to every user interaction.”',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Conclusion' },
      {
        type: 'paragraph',
        text: 'Design principles create a strong foundation for building effective solutions. The more designers apply structure and refine their work, the more reliable and impactful their designs become.',
      },
    ],
  },
  {
    slug: 'ux-insights',
    title: 'UX Insights',
    badge: 'Trending',
    category: 'Trending Insight',
    description:
      'Practical ideas, observations, and actionable insights on user experience, helping designers understand behavior, improve usability, and create products that feel simple, useful, and engaging.',
    image: '/images/blog/ux-insights.webp',
    body: [
      { type: 'heading', text: 'Learning From User Behavior Patterns' },
      {
        type: 'paragraph',
        text: 'Great user experience rarely comes from assumptions. It grows through research, testing, and continuous iteration. Every interaction reveals insights about user needs, expectations, and how thoughtful decisions improve overall product usability.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Case Study: Interaction Improvement' },
      {
        type: 'paragraph',
        text: 'A growing platform needed smoother interactions and clearer user flows. Through usability testing, simplified actions, and refined interface feedback, the experience became more intuitive and easier for users to navigate.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Case Study: Engagement Optimization' },
      {
        type: 'paragraph',
        text: 'Another project focused on increasing engagement and reducing drop-offs. By improving onboarding, refining content flow, and minimizing friction, the product achieved higher retention and better overall user satisfaction.\n“User experience is not just about ease of use, but about creating journeys that feel natural and rewarding.”',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Conclusion' },
      {
        type: 'paragraph',
        text: 'UX is an ongoing process of understanding users, testing ideas, and refining experiences. The more designers focus on real behavior and feedback, the more meaningful and effective their products become.',
      },
    ],
  },
  {
    slug: 'brand-strategy',
    title: 'Brand Strategy',
    badge: 'New',
    category: 'New Insight',
    description:
      'Clear direction, positioning, and actionable strategies for building strong brands, helping businesses stand out, connect with audiences, and create lasting impressions in competitive markets.',
    image: '/images/blog/brand-strategy.webp',
    body: [
      { type: 'heading', text: 'Building Strong Brand Foundations' },
      {
        type: 'paragraph',
        text: 'Successful brands rarely grow without direction. They develop through research, positioning, and consistent execution. Every strategy reveals insights about audience perception, messaging, and how clear branding decisions shape long-term business growth.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Case Study: Brand Positioning' },
      {
        type: 'paragraph',
        text: 'A growing company needed a more defined market position and stronger brand voice. Through audience research, messaging clarity, and visual alignment, the brand became more recognizable and impactful in its space.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Case Study: Market Differentiation' },
      {
        type: 'paragraph',
        text: 'Another project focused on standing out in a competitive landscape. By refining value propositions, improving communication, and aligning brand identity, the business achieved stronger differentiation and increased customer trust.\n“Strong brands are not just seen, but remembered through clear positioning and consistent meaningful communication.”',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Conclusion' },
      {
        type: 'paragraph',
        text: 'Brand strategy is a continuous process of defining, testing, and refining direction. The more businesses understand their audience and strengthen their positioning, the more powerful and lasting their brand becomes.',
      },
    ],
  },
  {
    slug: 'product-design',
    title: 'Product Design',
    badge: 'Featured',
    category: 'Featured Insight',
    description:
      'Ideas, methods, and practical insights on product design, helping teams create useful solutions, improve user experience, and build products that deliver value and solve real problems.',
    image: '/images/blog/product-design.webp',
    body: [
      { type: 'heading', text: 'Designing Products That Solve Problems' },
      {
        type: 'paragraph',
        text: 'Great products rarely come from random ideas. They evolve through research, iteration, and continuous learning. Every product teaches lessons about user needs, functionality, and how thoughtful design decisions create valuable experiences.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Case Study: Feature Simplification' },
      {
        type: 'paragraph',
        text: 'A growing product needed a clearer feature set and improved usability. Through research, removing unnecessary elements, and refining core functions, the product became easier to use and more effective for users.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Case Study: Workflow Optimization' },
      {
        type: 'paragraph',
        text: 'Another project focused on improving workflows and overall efficiency. By redesigning processes, organizing features, and simplifying user paths, the product achieved faster interactions and better user satisfaction.\n“Effective product design is not just about features, but about solving real problems and delivering meaningful value.”',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Conclusion' },
      {
        type: 'paragraph',
        text: 'Product design is a continuous journey of testing ideas, refining solutions, and improving usability. The more teams understand users and enhance their products, the more successful and impactful their solutions become.',
      },
    ],
  },
  {
    slug: 'visual-systems',
    title: 'Visual Systems',
    badge: 'Popular',
    category: 'Popular Insight',
    description:
      'Structured approaches, consistent elements, and practical guidelines for visual systems, helping teams create cohesive designs, improve clarity, and build interfaces that feel unified and easy to use.',
    image: '/images/blog/visual-systems.webp',
    body: [
      { type: 'heading', text: 'Creating Consistency Across Design Systems' },
      {
        type: 'paragraph',
        text: 'Strong visual systems rarely happen without intention. They develop through structure, alignment, and continuous refinement. Every system provides clarity about layout, components, and how consistent design decisions improve overall user experience.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Case Study: Design System Setup' },
      {
        type: 'paragraph',
        text: 'A growing product needed a more consistent visual language and scalable components. Through defining styles, standardizing elements, and organizing patterns, the interface became more cohesive and easier to maintain.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Case Study: Interface Alignment' },
      {
        type: 'paragraph',
        text: 'Another project focused on improving visual alignment and reducing inconsistencies. By refining spacing, typography, and component usage, the product achieved better clarity and a more polished overall experience.\n“Effective visual systems are not just about consistency, but about creating clarity and harmony across every interface element.”',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Conclusion' },
      {
        type: 'paragraph',
        text: 'Visual systems are a continuous process of defining standards, testing patterns, and improving consistency. The more teams align their designs and refine their systems, the more scalable and effective their products become.',
      },
    ],
  },
  {
    slug: 'user-experience',
    title: 'User Experience',
    badge: 'Trending',
    category: 'Trending Insight',
    description:
      'Practical insights, proven methods, and thoughtful approaches to user experience, helping teams understand users, improve usability, and create products that feel intuitive, efficient, and satisfying.',
    image: '/images/blog/user-experience.webp',
    body: [
      { type: 'heading', text: 'Understanding Users Through Real Interactions' },
      {
        type: 'paragraph',
        text: 'Great user experience rarely comes from assumptions. It develops through observation, testing, and continuous improvement. Every interaction reveals insights about user behavior, expectations, and how thoughtful decisions shape meaningful product experiences.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Case Study: Navigation Clarity' },
      {
        type: 'paragraph',
        text: 'A growing platform needed clearer navigation and better user flow. Through user research, simplified menus, and improved structure, the experience became easier to understand and more efficient to use.',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Case Study: Usability Refinement' },
      {
        type: 'paragraph',
        text: 'Another project focused on reducing friction and improving usability. By refining layouts, improving feedback, and simplifying interactions, the product achieved smoother experiences and increased user satisfaction.\n“User experience is not just about usability, but about creating interactions that feel natural and truly meaningful.”',
      },
      { type: 'paragraph', text: '' },
      { type: 'heading', text: 'Conclusion' },
      {
        type: 'paragraph',
        text: 'User experience is a continuous journey of learning, testing ideas, and refining interactions. The more teams understand users and improve usability, the more effective and impactful their products become.',
      },
    ],
  },
];

/** Number of posts shown before "Load More". */
export const BLOG_PAGE_SIZE = 5;

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
