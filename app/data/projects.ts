export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  year: string;
  industry: string;
  sprint: string;
  event: string;
  award: string;
  category: 'cs' | 'other';
  badge?: string;
  github?: string;
  url?: string;
  article?: string;
  telegram?: string;
  devpost?: string;
  cover: string;
  image?: string;
  gallery?: { type: 'image' | 'video'; src: string; label: string; speed?: number; startTime?: number }[];
};

export const projects: Project[] = [
  {
    slug: 'agent-hive',
    title: 'agent hive.',
    subtitle: 'multi-agent platform',
    description: 'multi-agent platform that lets you build and orchestrate AI agents to create your own opportunities — from generating websites to automating complex workflows.',
    tech: ['Next.js', 'React', 'TypeScript', 'AI Agents', 'HextaUI'],
    year: '2025',
    industry: 'ai agents / developer tools',
    event: 'QuackHacks 2, University of Oregon',
    sprint: 'full-stack development',
    award: 'Best Use of Gemini API · Top 5 overall / 41 projects & 161 participants',
    category: 'cs',
    badge: 'QuackHacks 2',
    github: 'https://github.com/AzizAkturin/AgentHive',
    cover: '#0d0d1f',
    image: '/projects/agent-hive.png',
    gallery: [
      { type: 'video' as const, src: '/projects/agent-hive-demo.mp4', label: 'demo', speed: 4, startTime: 180 },
      { type: 'image' as const, src: '/projects/agent-hive-ss1.png', label: 'dashboard' },
      { type: 'image' as const, src: '/projects/agent-hive-ss2.png', label: 'team' },
      { type: 'image' as const, src: '/projects/agent-hive-ss3.png', label: 'presentation' },
    ],
  },
  {
    slug: 'auto-ab',
    title: 'auto ab.',
    subtitle: 'ux agent',
    description: 'autonomous pipeline that monitors user behavior on websites and ships targeted code fixes via pull requests — no dashboards, just merged improvements.',
    tech: ['Next.js', 'React', 'InsForge', 'Devin AI', 'Nia', 'Playwright', 'Octokit'],
    year: '2026',
    industry: 'developer tools / ai agents',
    sprint: 'autonomous ux analysis / PR generation',
    event: 'Nozomio Hackathon, San Francisco',
    award: 'Best Use of Tensorlake, Top 2 Best Use of InsForge, Top 8 overall / 70+ teams & 170+ participants',
    category: 'cs',
    badge: 'Nozomio Hackathon',
    github: 'https://github.com/AzizAkturin/TeamSnorlax-UX-Agent',
    cover: '#0f1a0f',
    image: '/projects/auto-ab-v3.png',
    gallery: [
      { type: 'image' as const, src: '/projects/auto-ab-ss1.png', label: 'Devin AI dashboard' },
      { type: 'image' as const, src: '/projects/auto-ab-ss2.png', label: 'GitHub PR' },
      { type: 'image' as const, src: '/projects/auto-ab-hackathon.png', label: 'Nozomio Hackathon' },
      { type: 'video' as const, src: '/projects/auto-ab-demo.mp4', label: 'demo' },
    ],
  },
  {
    slug: 'quackhacks',
    title: 'quackhacks.',
    subtitle: 'website',
    description: 'official website for QuackHacks — a student-run hackathon at the University of Oregon with 500+ applicants, $10k+ in prizes, and sponsors including Google, Pipeworks, Base44, Emberex, Codex, Red Bull, Celsius, and the University of Oregon.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    year: '2026',
    industry: 'hackathon / community',
    event: 'QuackHacks, University of Oregon',
    sprint: 'Senior Software Engineer',
    award: '500+ applicants · $10k+ in prizes',
    category: 'cs',
    url: 'https://www.quackhacks.org/',
    cover: '#0a1a2e',
    image: '/projects/quackhacks.png',
    gallery: [
      { type: 'image' as const, src: '/projects/quackhacks-ss1.png', label: 'website' },
      { type: 'image' as const, src: '/projects/quackhacks-ss2.png', label: 'website' },
    ],
  },
  {
    slug: 'synrax',
    title: 'synrax.',
    subtitle: 'software delivery platform',
    description: 'ship startup software with confidence. AI-assisted code review, GitHub Actions test tracking, and real-time delivery dashboards — built for engineering teams that move fast.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'GitHub Actions', 'GitHub API'],
    year: '2026',
    industry: 'developer tools / devops',
    event: 'Synrax, Eugene Oregon',
    sprint: 'full-stack development',
    award: '',
    category: 'cs',
    url: 'https://synrax.org/',
    cover: '#1a0f2e',
    image: '/projects/synrax.png',
    gallery: [
      { type: 'video' as const, src: '/projects/synrax-demo.mp4', label: 'demo' },
      { type: 'image' as const, src: '/projects/synrax-ss1.png', label: 'dashboard' },
      { type: 'image' as const, src: '/projects/synrax-ss2.png', label: 'code review' },
      { type: 'image' as const, src: '/projects/synrax-ss3.png', label: 'analytics' },
    ],
  },
  {
    slug: 'lockify',
    title: 'lockify.',
    subtitle: 'productivity app',
    description: 'a smart todo and calendar app for iOS — voice-powered task creation, priority scheduling, and a unified calendar view to keep your day on track.',
    tech: ['React Native', 'TypeScript', 'iOS'],
    year: '2025',
    industry: 'productivity / mobile',
    event: 'BeaverHacks, Oregon State University',
    sprint: 'mobile development',
    award: '',
    category: 'cs',
    badge: 'BeaverHacks',
    github: 'https://github.com/AzizAkturin/Lockify',
    devpost: 'https://devpost.com/software/lockiy',
    cover: '#1a0e00',
    image: '/projects/lockify-cover.png',
    gallery: [
      { type: 'image' as const, src: '/projects/lockify-app-ss1.png', label: 'todo list' },
      { type: 'image' as const, src: '/projects/lockify-app-ss2.png', label: 'calendar' },
    ],
  },
  {
    slug: 'locky',
    title: 'locky.',
    subtitle: 'focus app',
    description: 'a robot that physically takes your phone and hides it somewhere in the room — keeps you from getting distracted by making it inconvenient to retrieve.',
    tech: ['Raspberry Pi', 'Python', 'React Native', 'TypeScript', 'Motor Control'],
    year: '2025',
    industry: 'productivity / robotics',
    event: 'MakeMIT, Cambridge MA',
    sprint: 'hardware + software',
    award: '',
    category: 'cs',
    badge: 'MakeMIT x Harvard',
    devpost: 'https://devpost.com/software/locky-ktn7yu',
    cover: '#0d1a0d',
    image: '/projects/lockify.png',
    gallery: [
      { type: 'video' as const, src: '/projects/lockify-demo.mp4', label: 'demo' },
      { type: 'image' as const, src: '/projects/lockify-ss2.png', label: 'MakeMIT' },
      { type: 'image' as const, src: '/projects/lockify-ss3.png', label: 'building' },
      { type: 'image' as const, src: '/projects/lockify-ss4.png', label: 'hardware' },
    ],
  },
  {
    slug: 'monte-carlo',
    title: 'monte carlo.',
    subtitle: 'risk engine',
    description: 'python-based risk engine that simulates 20,000+ correlated multi-asset price paths using Cholesky decomposition, computing VaR and CVaR metrics from real Binance historical data.',
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Binance API', 'yFinance'],
    year: '2025',
    industry: 'quantitative finance / risk analysis',
    event: 'personal project',
    sprint: 'statistical modeling / risk visualization',
    award: '',
    category: 'other',
    github: 'https://github.com/AzizAkturin/Monte-Carlo-Risk-Engine',
    article: 'https://medium.com/@azizakturin',
    cover: '#0a0a1a',
    image: '/projects/monte-carlo.png',
    gallery: [
      { type: 'image' as const, src: '/projects/monte-carlo-ss1.png', label: 'portfolio dashboard' },
      { type: 'image' as const, src: '/projects/monte-carlo-ss2.png', label: 'regime comparison' },
      { type: 'image' as const, src: '/projects/monte-carlo-ss3.png', label: 'rolling VaR' },
      { type: 'image' as const, src: '/projects/monte-carlo-ss4.png', label: 'simulation' },
    ],
  },
  {
    slug: 'college-mentor-quest',
    title: 'college mentor quest.',
    subtitle: 'edtech / mentorship',
    description: 'founded a profitable college admissions mentorship with 680+ subscribers and $2000+ revenue. coordinated 81 students across 12 countries — 12 achieved 700+ SAT Math, 2 reached a perfect 800, average boost of +230 points, with acceptances to Lumiere Education Research Program and Stanford Pre-College.',
    tech: ['Telegram', 'Content Creation', 'Curriculum Design'],
    year: '2023',
    industry: 'education / entrepreneurship',
    event: 'self-founded',
    sprint: 'founder · mentor · curriculum designer',
    award: '680+ subscribers · $2000+ revenue · 81 students · 12 countries',
    category: 'other',
    telegram: 'https://t.me/+roFKcO5gW95jNTdi',
    cover: '#1a1000',
    image: '/projects/cmq.jpg',
    gallery: [
      { type: 'video' as const, src: '/projects/cmq-demo.mp4', label: 'my life in the us' },
      { type: 'image' as const, src: '/projects/cmq-ss1.png', label: 'college admissions guide' },
    ],
  },
];
