const fallbackSiteUrl = "https://v1.chames.dhibi.tn";

export type NavItem = {
  href: string;
  label: string;
};

export type Capability = {
  title: string;
  body: string;
};

export type TrustSignal = {
  label: string;
  value: string;
  body: string;
};

export type HeroStat = {
  label: string;
  value: string;
  number?: number;
  suffix?: string;
};

export type ProcessStep = {
  label: string;
  title: string;
  body: string;
};

export type Principle = {
  title: string;
  body: string;
};

export type ExperienceItem = {
  period: string;
  title: string;
  place: string;
  details: string;
};

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  heroImage: string;
  previewMode?: "cover" | "scroll";
  gallery: string[];
  roles: string[];
  featured?: boolean;
  externalLink?: string;
  intro: string;
  problem: string;
  creativeApproach: string;
  outcome: string;
  metrics?: ProjectMetric[];
  quote: string;
};

export const siteConfig = {
  name: "Dhibi Chames Eddine",
  shortName: "Chames Eddine",
  title: "Dhibi Chames Eddine | Full-Stack Web & Mobile Developer",
  description:
    "Portfolio of Dhibi Chames Eddine, a full-stack web and mobile developer from Tunisia building products with Next.js, Flutter, Node.js, and AI.",
  location: "Gafsa, Tunisia",
  email: "dhibichams@gmail.com",
  siteUrl: import.meta.env.PUBLIC_SITE_URL ?? fallbackSiteUrl,
  ogImage: "/opengraph-image.png",
  locale: "en_US",
} as const;

export function getCanonicalUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export const heroStats: HeroStat[] = [
  { label: "Projects shipped", value: "15+", number: 15, suffix: "+" },
  { label: "Core stack", value: "Next.js / Flutter / Node.js" },
  { label: "Base", value: "Gafsa, Tunisia" },
];

export const homeIntro = {
  eyebrow: "Full-stack web and mobile developer",
  headline: "Building web, mobile, and backend-powered products that ship.",
  body:
    "I build web, mobile, and backend-powered products with clean architecture and reliable execution.",
  ctaLabel: "See selected work",
  secondaryCtaLabel: "Start a conversation",
};

export const homeNarrative = [
  "I come from shipping full-stack products across web and mobile, so the design work is never detached from content structure, responsiveness, backend flow, or what actually survives in production.",
  "That makes the final result clearer and harder to ignore: stronger visual presence, cleaner hierarchy, and products that still feel intentional across Next.js, Flutter, and Node.js builds.",
];

export const capabilities: Capability[] = [
  {
    title: "Product launches",
    body: "Launch-ready pages and products built to explain value fast.",
  },
  {
    title: "Web platforms",
    body: "Web apps and sites built to be fast, clear, and dependable.",
  },
  {
    title: "Full-stack systems",
    body: "Frontend, APIs, and data flow built as one system.",
  },
  {
    title: "UX structure",
    body: "Cleaner flows for products that need less friction.",
  },
];

export const trustSignals: TrustSignal[] = [
  {
    label: "Working style",
    value: "Product + backend thinking",
    body: "Architecture and usability are shaped together from the start.",
  },
  {
    label: "Background",
    value: "Web + mobile + AI",
    body: "Built across web, mobile, backend systems, and AI features.",
  },
  {
    label: "Best fit",
    value: "Products that need shipping",
    body: "Best for products that need clear UX and real functionality.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    label: "01",
    title: "Find the friction",
    body: "Identify what feels unclear and what needs to improve first.",
  },
  {
    label: "02",
    title: "Set the structure",
    body: "Organize the page around what users need to understand quickly.",
  },
  {
    label: "03",
    title: "Build for the browser",
    body: "Keep the UI distinctive, but practical enough to ship cleanly.",
  },
  {
    label: "04",
    title: "Refine",
    body: "Tighten the details until the product feels fast and finished.",
  },
];

export const principles: Principle[] = [
  {
    title: "Clarity first",
    body: "The work should be easy to understand and easy to trust.",
  },
  {
    title: "Systems that ship",
    body: "Good ideas only matter if they hold up in real implementation.",
  },
  {
    title: "Polish with control",
    body: "Strong visuals work better when the structure stays disciplined.",
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "2023 - 2026",
    title: "Bachelor of Computer Science",
    place: "Universite de Gafsa",
    details: "Computer science studies focused on web, mobile, backend, and AI foundations.",
  },
  {
    period: "2022",
    title: "Full Stack Python Developer",
    place: "Go My Code",
    details: "Built full-stack apps, backend systems, and APIs in a practical training environment.",
  },
  {
    period: "2025 - Present",
    title: "Freelance Full-Stack Developer",
    place: "Independent",
    details: "Built web and mobile projects across Next.js, Flutter, Node.js, Express, Elysia, and Supabase.",
  },
  {
    period: "2025 - 2026",
    title: "Web Development Intern",
    place: "CPG (Compagnie des Phosphates de Gafsa)",
    details: "Built internal web tools and gained hands-on production experience.",
  },
];

export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "GitHub",
    value: "github.com/Chams99",
    href: "https://github.com/Chams99",
  },
  {
    label: "Upwork",
    value: "upwork.com/freelancers/~01ec2dc27e0c617399",
    href: "https://www.upwork.com/freelancers/~01ec2dc27e0c617399",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dhibi-chames-eddine-827146344",
    href: "https://www.linkedin.com/in/dhibi-chames-eddine-827146344/",
  },
  {
    label: "X",
    value: "x.com/ChamesDhibi",
    href: "https://x.com/ChamesDhibi",
  },
];

export const helloMarquee = [
  "Hello",
  "Hola",
  "Hallo",
  "Bonjour",
  "Ciao",
  "مرحبا",
];

const projectOrder = [
  "fitlite-ai-fitness",
  "la-cuisine-restaurant",
  "sspace-star-map",
  "dent-dental-clinic",
  "webgrade-analyzer",
  "ftball-ecommerce",
  "lumina-it",
  "ai-story-video",
  "photo-printing-order",
  "lolchat-gaming",
  "wallpaper-generator",
  "modern-estate-vision",
  "cleanfile-agency",
  "ecommerce-platform",
  "property-investment",
  "epic-chicken-adventure",
  "speed-typer-game",
] as const;

type ProjectInput = Omit<Project, "intro" | "problem" | "creativeApproach" | "outcome" | "gallery"> & {
  gallery?: string[];
  intro?: string;
  problem?: string;
  creativeApproach?: string;
  outcome?: string;
};

function buildProject(input: ProjectInput): Project {
  return {
    ...input,
    gallery: input.gallery?.length ? input.gallery : [input.heroImage],
    intro:
      input.intro ??
      `${input.title} needed a clearer, stronger digital presence.`,
    problem:
      input.problem ??
      "The core challenge was making the product easier to understand and trust quickly.",
    creativeApproach:
      input.creativeApproach ??
      "I focused on hierarchy, pacing, and a cleaner interface direction.",
    outcome:
      input.outcome ??
      "The result feels clearer, stronger, and more aligned with the product behind it.",
  };
}

export const projects: Project[] = [
  buildProject({
    slug: "lumina-it",
    title: "Lumina IT Solutions",
    year: "2026",
    category: "Cybersecurity",
    summary:
      "A cybersecurity website shaped to feel sharper, more direct, and more trusted.",
    heroImage: "/images/projects/lumina-it-full.png",
    previewMode: "scroll",
    gallery: [
      "/images/projects/lumina-it-full.png",
      "/images/projects/lumina-it-details.png",
      "/images/projects/lumina-it-features.png",
    ],
    roles: ["Web design", "Brand direction", "Front-end development"],
    featured: true,
    externalLink: "https://lumina-it.vercel.app/",
    intro:
      "Lumina needed a digital presence that felt as credible as the service behind it.",
    problem:
      "The brand looked too generic for a cybersecurity company that needed instant trust.",
    creativeApproach:
      "I pushed the interface toward a colder, sharper system with stronger contrast and more command.",
    outcome:
      "The result feels more technical, more deliberate, and more believable.",
    metrics: [
      { label: "Direction", value: "Brutalist + cybersecurity" },
      { label: "Built with", value: "Next.js + custom CSS" },
    ],
    quote: "Technical credibility lands harder when the brand looks deliberate.",
  }),
  buildProject({
    slug: "ai-story-video",
    title: "AI Story Video Generator",
    year: "2024",
    category: "AI Product",
    summary:
      "An AI storytelling product framed to feel visual, simple, and cinematic.",
    heroImage: "/images/projects/ai-story-video-full.png",
    previewMode: "scroll",
    gallery: [
      "/images/projects/ai-story-video-full.png",
      "/images/projects/ai-story-video-details.png",
      "/images/projects/ai-story-video-features.png",
    ],
    roles: ["Product design", "Front-end development", "AI workflow framing"],
    featured: true,
    externalLink: "https://ai-story-video.vercel.app/",
    intro:
      "The idea was strong. The product needed to feel exciting before the workflow appeared.",
    problem:
      "The experience had to feel creative first, not technical first.",
    creativeApproach:
      "I framed it like a story-led product, with clearer hierarchy and more visual momentum.",
    outcome:
      "The concept became easier to understand, trust, and want.",
    metrics: [
      { label: "Built for", value: "Creators + storytellers" },
      { label: "Core shift", value: "Technical to cinematic" },
    ],
    quote: "When the promise is cinematic, the interface cannot feel mechanical.",
  }),
  buildProject({
    slug: "webgrade-analyzer",
    title: "WebGrade Analyzer",
    year: "2025",
    category: "Web Tool",
    summary:
      "A website audit tool designed to make performance and SEO checks clearer.",
    heroImage: "/images/projects/webgrade-analyzer-full.png",
    previewMode: "scroll",
    gallery: [
      "/images/projects/webgrade-analyzer-full.png",
      "/images/projects/website-grading-v0.png",
    ],
    roles: ["Product strategy", "UX design", "JavaScript development"],
    featured: true,
    externalLink: "https://webgrade.pages.dev/",
    intro:
      "WebGrade was built to make audits feel fast, clear, and usable.",
    problem:
      "Most audit tools overwhelm people before they help them.",
    creativeApproach:
      "I stripped the interface back and organized the results around what matters first.",
    outcome:
      "The tool feels calmer, clearer, and more actionable.",
    metrics: [
      { label: "Audits", value: "Performance + SEO + security" },
      { label: "Audience", value: "Developers, agencies, owners" },
    ],
    quote: "A diagnostic tool earns trust when the answer feels clearer than the problem.",
  }),
  buildProject({
    slug: "modern-estate-vision",
    title: "Meridian Capital",
    year: "2025",
    category: "Real Estate",
    summary:
      "A premium real estate platform with a darker, investor-led digital presence.",
    heroImage: "/images/optimized/meridian-large.webp",
    roles: ["Web design", "Front-end development", "Content structure"],
    externalLink: "https://modern-estate-vision.vercel.app/",
    quote: "Premium positioning only works when the experience feels composed from the first second.",
  }),
  buildProject({
    slug: "cleanfile-agency",
    title: "CleanFile Agency",
    year: "2025",
    category: "Agency System",
    summary:
      "A cleaner agency platform built for credibility, clarity, and future automation.",
    heroImage: "/images/projects/cleanfile-agency-full.png",
    gallery: [
      "/images/projects/cleanfile-agency-full.png",
      "/images/projects/cleanfile-agency-details.png",
      "/images/projects/cleanfile-agency-features.png",
    ],
    roles: ["Dashboard design", "System thinking", "Front-end development"],
    externalLink: "https://mahdi-ydm2.vercel.app/",
    intro:
      "CleanFile needed to feel credible before the deeper system arrived.",
    problem:
      "The platform had to look organized, reliable, and ready to grow.",
    creativeApproach:
      "I focused on restraint, status clarity, and a system that could expand cleanly.",
    outcome:
      "The result feels more operational, more believable, and easier to scale.",
    metrics: [
      { label: "Primary goal", value: "Clarity + credibility" },
      { label: "Direction", value: "Dashboard-ready foundation" },
    ],
    quote: "A service platform should look organized before it ever claims efficiency.",
  }),
  buildProject({
    slug: "photo-printing-order",
    title: "Photo Printing Order System",
    year: "2024",
    category: "E-Commerce",
    summary:
      "A photo printing flow with better editing control and a smoother path to order.",
    heroImage: "/images/projects/photo-printing-full.png",
    gallery: [
      "/images/projects/photo-printing-full.png",
      "/images/projects/photo-printing-details.png",
      "/images/projects/photo-printing-features.png",
    ],
    roles: ["UX design", "Interactive UI", "React development"],
    externalLink: "https://photo-printing-order.vercel.app/",
    intro:
      "The flow had to make detailed print edits feel simple enough for everyday users.",
    problem:
      "Customization breaks fast when zoom, crop, and placement stop feeling predictable.",
    creativeApproach:
      "I tightened the editor around control, stability, and a clearer ordering flow.",
    outcome:
      "The experience became smoother, easier to trust, and easier to finish.",
    metrics: [
      { label: "Focus", value: "Editing flow + precision" },
      { label: "Built with", value: "React interaction logic" },
    ],
    quote: "Good customization tools feel precise without making people work too hard for control.",
  }),
  buildProject({
    slug: "dent-dental-clinic",
    title: "Dent Dental Clinic",
    year: "2024",
    category: "Healthcare",
    summary:
      "A premium dental website designed to feel calm, clear, and trusted.",
    heroImage: "/images/optimized/dent-showcase.png",
    roles: ["Website design", "Next.js development", "Service presentation"],
    externalLink: "https://dent-phi.vercel.app/",
    quote: "Healthcare sites earn confidence when every detail feels calm and credible.",
  }),
  buildProject({
    slug: "ecommerce-platform",
    title: "ChamsShop",
    year: "2025",
    category: "E-Commerce",
    summary:
      "A modern e-commerce build focused on speed, flow, and dependable shopping.",
    heroImage: "/images/optimized/ecommerce-large.webp",
    roles: ["E-commerce UI", "Full-stack development", "Shopping flow"],
    externalLink: "https://chames.youssef.tn/ChamsShop/Public/core/",
    quote: "Retail interfaces work best when speed and clarity feel built into the surface.",
  }),
  buildProject({
    slug: "fitlite-ai-fitness",
    title: "FitLite",
    year: "2025",
    category: "Fitness App",
    summary:
      "An AI fitness landing page with sharper motion and stronger energy.",
    heroImage: "/images/optimized/Fitness-large.webp",
    roles: ["Landing page design", "Motion styling", "Front-end development"],
    externalLink: "https://chames.youssef.tn/fitness_app",
    quote: "Energetic products need a landing page that feels alive before the first click.",
  }),
  buildProject({
    slug: "ftball-ecommerce",
    title: "FTBall Store",
    year: "2024",
    category: "Sports Commerce",
    summary:
      "A football storefront built for clearer browsing and stronger brand presence.",
    heroImage: "/images/optimized/FTBALL-large.webp",
    roles: ["Storefront design", "Commerce UI", "Front-end build"],
    externalLink: "https://ftball-ten.vercel.app/",
    quote: "Merchandise sells better when the storefront already feels like part of the fandom.",
  }),
  buildProject({
    slug: "la-cuisine-restaurant",
    title: "La Cuisine",
    year: "2025",
    category: "Restaurant Website",
    summary:
      "A restaurant website with elegant pacing and a cleaner booking-led experience.",
    heroImage: "/images/optimized/restaurents-large.webp",
    roles: ["Web design", "Single-page UX", "Interaction polish"],
    externalLink: "https://chames.youssef.tn/restaurents/",
    quote: "Hospitality sites should set the tone before the customer ever arrives.",
  }),
  buildProject({
    slug: "lolchat-gaming",
    title: "LolChat",
    year: "2025",
    category: "Gaming Interface",
    summary:
      "A gaming-themed chat UI that balances atmosphere with cleaner usability.",
    heroImage: "/images/optimized/lol-large.webp",
    roles: ["Interface design", "Thematic UI", "Responsive development"],
    externalLink: "https://lolchat.vercel.app/",
    quote: "Themed interfaces work when the atmosphere stays sharp without breaking usability.",
  }),
  buildProject({
    slug: "property-investment",
    title: "Property Investment Platform",
    year: "2025",
    category: "Investment Platform",
    summary:
      "A premium investment landing page designed for clearer trust and stronger leads.",
    heroImage: "/images/projects/property-consultation.png",
    roles: ["Lead generation design", "UI structure", "Conversion flow"],
    externalLink: "https://chames.youssef.tn/Property/",
    quote: "High-trust financial experiences need structure that feels premium and direct at once.",
  }),
  buildProject({
    slug: "speed-typer-game",
    title: "Speed Typer",
    year: "2025",
    category: "Game",
    summary:
      "A typing game with live feedback and a cleaner performance-first interface.",
    heroImage: "/images/optimized/typing-game-large.webp",
    roles: ["Game UI", "Interactive logic", "Performance feedback"],
    externalLink: "https://chames.youssef.tn/typing-game/",
    quote: "Simple games feel better when the feedback loop is immediate and satisfying.",
  }),
  buildProject({
    slug: "sspace-star-map",
    title: "Sspace Star Map",
    year: "2025",
    category: "Interactive Tool",
    summary:
      "An interactive star map designed to feel immersive, curious, and easier to explore.",
    heroImage: "/images/optimized/sspace-large.webp",
    roles: ["Interactive design", "Data visualization", "Front-end development"],
    externalLink: "https://space-seven-fawn.vercel.app/",
    quote: "Exploration tools land best when the interface feels curious, not complicated.",
  }),
  buildProject({
    slug: "unit-converter",
    title: "Universal Unit Converter",
    year: "2024",
    category: "Utility Tool",
    summary:
      "A real-time unit converter with a simpler, faster utility-first interface.",
    heroImage: "/images/projects/unit-converter-full.png",
    roles: ["Utility UX", "Tool design", "JavaScript development"],
    externalLink: "https://unit-converter-sq3u.vercel.app/",
    quote: "Utility products feel premium when speed and simplicity are obvious from the first interaction.",
  }),
  buildProject({
    slug: "wallpaper-generator",
    title: "Wallpaper Generator",
    year: "2025",
    category: "Creative Tool",
    summary:
      "A playful wallpaper generator built around fast experimentation and visual output.",
    heroImage: "/images/optimized/wallpaper-large.webp",
    roles: ["Creative coding", "Interactive UI", "Front-end experimentation"],
    externalLink: "https://chames.youssef.tn/wallpaper/",
    quote: "Creative tools earn attention when the interface itself feels generative.",
  }),
  buildProject({
    slug: "epic-chicken-adventure",
    title: "Epic Chicken Adventure",
    year: "2025",
    category: "Game",
    summary:
      "A browser game shell rebuilt to feel cleaner, lighter, and more polished.",
    heroImage: "/images/optimized/chicken-large.webp",
    roles: ["Game presentation", "Next.js build", "Responsive UI"],
    externalLink: "/chicken/index.html",
    quote: "Even playful projects feel stronger when the surrounding experience is properly designed.",
  }),
].sort((a, b) => {
  const aIndex = projectOrder.indexOf(a.slug as (typeof projectOrder)[number]);
  const bIndex = projectOrder.indexOf(b.slug as (typeof projectOrder)[number]);

  if (aIndex === -1 && bIndex === -1) {
    return Number(b.year) - Number(a.year);
  }

  if (aIndex === -1) {
    return 1;
  }

  if (bIndex === -1) {
    return -1;
  }

  return aIndex - bIndex;
});

export const featuredProjects = projects.slice(0, 3);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const projectSlugs = projects.map((project) => project.slug);
