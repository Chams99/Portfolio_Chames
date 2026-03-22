const fallbackSiteUrl = "https://chames.youssef.tn";

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
    "Editorial portfolio for Dhibi Chames Eddine, a full-stack web and mobile developer from Tunisia building backend-powered products with Next.js, Flutter, Node.js, and AI integration.",
  location: "Gafsa, Tunisia",
  email: "dhibichams@gmail.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl,
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
  headline: "Designing products and interfaces with atmosphere, clarity, and intent.",
  body:
    "I build launch-ready web, mobile, and backend-powered products with interface quality, clean architecture, and real-world usability in mind. The work has to feel sharp on the surface and solid underneath.",
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
    body: "Landing pages, web apps, and digital products shaped to explain value quickly, convert cleanly, and hold up beyond the front end.",
  },
  {
    title: "Portfolio redesigns",
    body: "Personal and studio sites with stronger hierarchy, clearer storytelling, and a more memorable first impression.",
  },
  {
    title: "Full-stack systems",
    body: "Frontend and backend decisions shaped together, from UI flow to APIs, auth, data handling, and production-ready architecture.",
  },
  {
    title: "UX structure",
    body: "Flows, pacing, and product logic that make technically dense tools feel easier to understand, navigate, and trust.",
  },
];

export const trustSignals: TrustSignal[] = [
  {
    label: "Working style",
    value: "UI + backend thinking",
    body: "The visual language, product logic, and implementation quality are shaped together, so the final result does not lose intent between concept and code.",
  },
  {
    label: "Background",
    value: "Web + mobile + AI",
    body: "Computer science student at Universite de Gafsa building products across web, mobile, backend systems, and AI integration for real users and real client work.",
  },
  {
    label: "Best fit",
    value: "Products that need both",
    body: "Best for products and websites that need clearer positioning, stronger UI, and backend foundations that are ready to scale.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    label: "01",
    title: "Find the real friction",
    body: "Start by identifying what feels unclear, generic, or too technical in the current experience and what the new first impression needs to change.",
  },
  {
    label: "02",
    title: "Reshape the story",
    body: "Build the page rhythm around what the visitor has to understand first, what should feel convincing next, and where the interface should create momentum.",
  },
  {
    label: "03",
    title: "Design for the browser",
    body: "Push typography, layout, and imagery hard enough to feel distinctive, but keep the system realistic enough to ship cleanly across screens.",
  },
  {
    label: "04",
    title: "Refine the final feel",
    body: "Polish motion, spacing, and interaction details until the product feels coherent, fast, and deliberate instead of merely finished.",
  },
];

export const principles: Principle[] = [
  {
    title: "Clarity before noise",
    body: "The strongest interfaces do not hide behind decoration. They earn attention by making the offer feel immediate and easy to trust.",
  },
  {
    title: "Systems that ship",
    body: "A concept only matters if it survives implementation. I design with real constraints in mind from the first pass.",
  },
  {
    title: "Personality with control",
    body: "Bold work lands better when hierarchy, readability, and interaction design stay disciplined underneath the atmosphere.",
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "2023 - 2026",
    title: "Bachelor of Computer Science",
    place: "Universite de Gafsa",
    details: "Current degree path in computer science and engineering, shaping the technical foundation behind the portfolio work in web, mobile, backend, and AI.",
  },
  {
    period: "2022",
    title: "Full Stack Python Developer",
    place: "Go My Code",
    details: "Built full-stack web applications, backend systems, and APIs while learning how product decisions hold up under real implementation pressure.",
  },
  {
    period: "2025 - Present",
    title: "Freelance Full-Stack Developer",
    place: "Independent",
    details: "Delivered web and mobile projects across Next.js, Flutter, Node.js, Express, Elysia, and Supabase, from landing pages to dashboards, APIs, and service platforms.",
  },
  {
    period: "2025 - 2026",
    title: "Web Development Intern",
    place: "CPG (Compagnie des Phosphates de Gafsa)",
    details: "Built web applications and internal digital tools while strengthening practical experience with production workflows and business-facing software.",
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
      `${input.title} started as a clear product idea, but it needed stronger structure and a more convincing digital presentation to feel complete.`,
    problem:
      input.problem ??
      "The core challenge was turning the concept into something people could understand faster, trust sooner, and navigate without friction.",
    creativeApproach:
      input.creativeApproach ??
      "I focused on hierarchy, pacing, and a cleaner interface direction so the value of the project could land quickly without losing personality.",
    outcome:
      input.outcome ??
      "The result is a more confident experience that feels clearer in use, stronger in presentation, and better aligned with the product behind it.",
  };
}

export const projects: Project[] = [
  buildProject({
    slug: "lumina-it",
    title: "Lumina IT Solutions",
    year: "2026",
    category: "Cybersecurity",
    summary:
      "A brutalist company website for a cybersecurity provider, designed to turn technical credibility into a sharper, more commanding first impression.",
    heroImage: "/images/projects/lumina-it-full.png",
    gallery: [
      "/images/projects/lumina-it-full.png",
      "/images/projects/lumina-it-details.png",
      "/images/projects/lumina-it-features.png",
    ],
    roles: ["Web design", "Brand direction", "Front-end development"],
    featured: true,
    externalLink: "https://lumina-it.vercel.app/",
    intro:
      "Lumina started from a common problem in technical service businesses: the expertise was real, but the website still looked too safe to carry that authority.",
    problem:
      "A cybersecurity brand cannot afford to feel generic. It needed to communicate strength, speed, and operational confidence without reading like another template-led IT brochure.",
    creativeApproach:
      "I pushed the interface toward a brutalist, terminal-inspired system with sharper typography, colder contrast, and a tone that felt decisive from the first screen. The goal was not polish for its own sake. It was presence.",
    outcome:
      "The final direction gave the company a stronger digital stance. It felt more technical, more deliberate, and more aligned with the high-trust service it was trying to sell.",
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
      "A text-to-video concept that reframes AI storytelling as a cinematic, easy-to-enter product experience instead of a technical workflow.",
    heroImage: "/images/projects/ai-story-video-full.png",
    gallery: [
      "/images/projects/ai-story-video-full.png",
      "/images/projects/ai-story-video-details.png",
      "/images/projects/ai-story-video-features.png",
    ],
    roles: ["Product design", "Front-end development", "AI workflow framing"],
    featured: true,
    externalLink: "https://ai-story-video.vercel.app/",
    intro:
      "The product promise was strong from the start: turn written stories into video. What it needed was an interface that made that promise feel exciting before the mechanics took over.",
    problem:
      "AI tools often ask people to understand the system before they can feel the outcome. For a story-led product, that kills momentum fast. The experience had to feel visual and inviting on first contact.",
    creativeApproach:
      "I treated the product like an opening scene rather than a dashboard. The visual direction leaned into storytelling cues, cleaner hierarchy, and clearer feature framing so the workflow felt less mechanical and more imaginative.",
    outcome:
      "The concept became easier to trust and easier to want. Instead of presenting AI as complexity, the product started to present it as creative leverage with a much clearer emotional payoff.",
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
      "A website grading tool that turns performance, SEO, accessibility, and security checks into a faster, clearer product experience.",
    heroImage: "/images/projects/webgrade-analyzer-full.png",
    gallery: [
      "/images/projects/webgrade-analyzer-full.png",
      "/images/projects/website-grading-v0.png",
    ],
    roles: ["Product strategy", "UX design", "JavaScript development"],
    featured: true,
    externalLink: "https://webgrade.pages.dev/",
    intro:
      "Website audits are useful, but they often feel heavier than they need to. WebGrade was built to make diagnosis feel immediate and understandable for more than just technical users.",
    problem:
      "Performance and SEO tools can overwhelm people with raw scores, scattered terminology, and too little sense of what to fix first. The product needed to make complex checks feel actionable in seconds.",
    creativeApproach:
      "I kept the interface stripped back and purposeful, then framed the output around graded clarity: what is working, what is weak, and where the next improvement lives. The product had to read fast, not just compute accurately.",
    outcome:
      "The result is a tool that feels calmer and more useful under pressure. Developers, agencies, and site owners get a clearer path from diagnosis to action instead of another wall of metrics.",
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
      "A premium real estate investment platform with a darker visual language, investor-focused storytelling, and a more exclusive digital posture.",
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
      "A service platform for agencies that needed a more professional dashboard presence and clearer foundations for future automation.",
    heroImage: "/images/projects/cleanfile-agency-full.png",
    gallery: [
      "/images/projects/cleanfile-agency-full.png",
      "/images/projects/cleanfile-agency-details.png",
      "/images/projects/cleanfile-agency-features.png",
    ],
    roles: ["Dashboard design", "System thinking", "Front-end development"],
    externalLink: "https://mahdi-ydm2.vercel.app/",
    intro:
      "CleanFile was less about visual reinvention and more about creating a platform foundation that already felt credible before the deeper automation layer arrived.",
    problem:
      "Service businesses need trust fast. The platform had to feel organized, reliable, and extensible enough to support future modules without looking unfinished in the present.",
    creativeApproach:
      "I focused on restraint: clean panels, clear status surfaces, and a UI structure that could hold more complexity later without collapsing. It needed to feel calm, not empty.",
    outcome:
      "The result was a more believable service platform, with a stronger operational feel and enough clarity to support both current client work and future product expansion.",
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
      "A photo printing ordering experience with custom editing controls, smarter zoom behavior, and a smoother path from upload to checkout.",
    heroImage: "/images/projects/photo-printing-full.png",
    gallery: [
      "/images/projects/photo-printing-full.png",
      "/images/projects/photo-printing-details.png",
      "/images/projects/photo-printing-features.png",
    ],
    roles: ["UX design", "Interactive UI", "React development"],
    externalLink: "https://photo-printing-order.vercel.app/",
    intro:
      "Ordering photo prints sounds simple until customization gets involved. This product had to make detailed editing feel easy enough for everyday users.",
    problem:
      "Photo printing tools can become frustrating the moment zoom, crop, text, and sticker placement stop behaving predictably. The experience needed tighter control without feeling intimidating.",
    creativeApproach:
      "I leaned into interaction clarity: smarter zoom correction, more stable drag behavior, and a cleaner editing flow that helped people adjust prints without losing confidence in the result.",
    outcome:
      "The ordering journey became smoother and more trustworthy. Instead of fighting the editor, users could focus on personalizing the print and moving forward with less hesitation.",
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
      "A premium dental clinic website built to present high-end care services with more trust, clarity, and polish across the patient journey.",
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
      "A modern e-commerce platform with authentication, a streamlined shopping flow, and a cleaner retail interface built to feel fast and dependable.",
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
      "A landing page for an AI-powered fitness app with theme switching, motion, and a more energetic product presentation.",
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
      "A football merchandise store designed to organize team gear, create clearer product discovery, and support a stronger retail identity.",
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
      "A fine-dining restaurant website with elegant pacing, interactive menu sections, and a cleaner reservation-led experience.",
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
      "A League of Legends themed chat interface that mixes gaming aesthetics with cleaner web interaction and responsive UI behavior.",
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
      "A premium real estate investment experience aimed at high-net-worth users with stronger lead generation and clearer investor guidance.",
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
      "A typing speed game with live WPM feedback, difficulty levels, and a more engaging, performance-led interface.",
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
      "A web-based star map that combines real-time sky rendering with a more explorable, visually immersive interface.",
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
      "A real-time unit converter with history tracking, dark mode support, and a cleaner utility-first interface.",
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
      "A dynamic pattern and wallpaper generator built around playful interaction, customization, and a more expressive visual output.",
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
      "A browser game experience rebuilt in Next.js with stronger visual presentation, responsive behavior, and a more playful front-end shell.",
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
