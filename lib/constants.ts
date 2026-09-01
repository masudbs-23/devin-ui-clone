// Site-wide constants and configuration

export const SITE_NAME = 'Puku';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://puku.dev';

// Container widths (max-width values for responsive layouts)
export const CONTAINER_WIDTHS = {
  OUTER: '1905px',         // Outer container for 2xl devices
  NAVBAR: '1440px',        // Navbar content area
  HERO_IMAGE: '1790px',    // Hero section figure image
  CONTENT: '1490px',       // Content sections (Usecases, LearnWork)
  WIDE_CONTENT: '1790px',  // Wide content sections (BuildMore, Clients)
} as const;

// Navigation
export const NAV_ITEMS = [
  { label: 'Product', hasMenu: true, href: '/product' },
  { label: 'Solutions', hasMenu: true, href: '/solutions' },
  { label: 'Customers', hasMenu: false, href: '/customers' },
  { label: 'Resources', hasMenu: true, href: '/resources' },
  { label: 'Pricing', hasMenu: false, href: '/pricing' },
] as const;

// Social links
export const SOCIAL_LINKS = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/puku', icon: 'linkedin' },
  { platform: 'X (Twitter)', url: 'https://twitter.com/puku', icon: 'twitter' },
  { platform: 'GitHub', url: 'https://github.com/puku', icon: 'github' },
] as const;

// Legal links
export const LEGAL_LINKS = [
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Terms of service', href: '/terms' },
  { label: 'Your privacy choices', href: '/privacy-choices' },
] as const;

// Clients (placeholder data - replace with real client data)
export const CLIENTS = [
  { name: 'Company 1', logo: '/company1.png' },
  { name: 'Company 2', logo: '/company2.png' },
  { name: 'Company 3', logo: '/company3.png' },
  { name: 'Company 4', logo: '/company4.png' },
  { name: 'Company 5', logo: '/company5.png' },
  { name: 'Company 6', logo: '/company6.png' },
] as const;

// Image URLs (replace with actual Puku images)
export const IMAGES = {
  HERO: 'https://devin.ai/_next/image?url=%2Fassets%2Fimages%2Fhome-hero%2Fhero_new.webp&w=3840&q=75',
  USECASE_REVIEW: 'https://devin.ai/_next/image?url=%2Fassets%2Fimages%2Fhome-hero%2Fhero_usecase_2.webp&w=3840&q=75',
  USECASE_CHORES: 'https://devin.ai/_next/image?url=%2Fassets%2Fimages%2Fhome-hero%2Fhero_usecase_1.webp&w=3840&q=75',
  USECASE_TRIAGE: 'https://devin.ai/_next/image?url=%2Fassets%2Fimages%2Fhome-hero%2Fhero_usecase_3.webp&w=3840&q=75',
  BENTO_KNOWLEDGE: 'https://devin.ai/_next/image?url=%2F_next%2Fstatic%2Fimmutable%2Fmedia%2Fbento01.1zvwdjd4189o_.png&w=3840&q=75',
  BENTO_COLLAB: 'https://devin.ai/_next/image?url=%2F_next%2Fstatic%2Fimmutable%2Fmedia%2Fwork-team-collaborate.41ww-s530784u.png&w=3840&q=75',
} as const;

// Use cases data
export const USECASES = [
  {
    id: 'pr-review',
    title: 'PR review & visual QA',
    items: [
      'Automatically identify and resolve bugs',
      'Visual QA with full browser and desktop use',
      'Intelligently organize code diffs for review',
    ],
    link: 'Learn about Devin Review',
    image: IMAGES.USECASE_REVIEW,
    gridPosition: { col: 1, row: 1, rowSpan: 2 },
  },
  {
    id: 'documentation',
    title: 'Documentation',
    items: [
      'Auto-generate documentation and system diagrams for legacy codebases.',
      "Comprehensive visibility into systems that your team hasn't built.",
    ],
    link: 'Learn more about DeepWiki',
    image: undefined,
    gridPosition: { col: 1, row: 3, rowSpan: 1 },
  },
  {
    id: 'code-migration',
    title: 'Code migration + refactors',
    items: [
      'Assign a fleet of agents to migrate all repos in parallel',
      'Accelerate all modernizations — COBOL, .NET, Talend, legacy ETL, and more.',
      'Complete audibility at each step.',
    ],
    link: undefined,
    image: undefined,
    gridPosition: { col: 2, row: 1, rowSpan: 1 },
  },
  {
    id: 'scheduled-chores',
    title: 'Scheduled chores and application development',
    items: [
      'Schedule daily QA and release notes',
      'Continuously review and address user feedback',
      'Maintain documentation',
    ],
    link: undefined,
    image: IMAGES.USECASE_CHORES,
    gridPosition: { col: 2, row: 2, rowSpan: 2 },
  },
  {
    id: 'issue-triage',
    title: 'Issue triage + bug fixing',
    items: [
      'Investigate Datadog incidents immediately',
      'Intelligently route Slack bug reports',
      'Automatically fix CI failures',
    ],
    link: undefined,
    image: IMAGES.USECASE_TRIAGE,
    gridPosition: { col: 3, row: 1, rowSpan: 2 },
  },
  {
    id: 'others',
    title: 'And many others',
    items: [
      'Automated ticket resolution',
      'Unit and E2E testing',
      'Performance optimization',
      'Web research and scraping',
      'Repetitive browser task automation',
    ],
    link: undefined,
    image: undefined,
    gridPosition: { col: 3, row: 3, rowSpan: 1 },
  },
];

// Project task examples for LearnWorkSection
export const PROJECT_TASKS = [
  { title: 'Migrate icons batch 1/19 (43 files)', tasks: '3/3 tasks', pr: '#21253' },
  { title: 'Migrate icons batch 2/19 (20 files)', tasks: '2/2 tasks', pr: '#21257' },
  { title: 'Migrate icons batch 3/19 (13 files)', tasks: '1/1 tasks', pr: '#21261' },
] as const;
