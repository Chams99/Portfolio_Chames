const fallbackSiteUrl = "https://portfolio-v3.local";

export const siteConfig = {
  name: "Chames Dhibi",
  shortName: "Portfolio v3",
  title: "Chames Dhibi | Portfolio v3",
  description: "Bold portfolio experiment focused on product-style presentation, speed, and strong hierarchy.",
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

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export const heroStats = [
  { label: "Launches", value: "15+" },
  { label: "Stack", value: "React / Next / Flutter" },
  { label: "Base", value: "Tunisia" },
];

export const projects = [
  {
    slug: "ai-story-video",
    title: "AI Story Video",
    year: "2026",
    type: "Interactive Product",
    image: "/images/project-1.png",
    summary: "AI-assisted storyboarding and cinematic scene generation wrapped in a high-contrast product experience.",
    challenge: "Translate a technically dense AI tool into a product surface that feels immediate and cinematic.",
    outcome: "Built a faster narrative around concept, output, and usability so the project reads as a product, not a demo.",
  },
  {
    slug: "cleanfile-agency",
    title: "Cleanfile Agency",
    year: "2026",
    type: "Agency System",
    image: "/images/project-2.png",
    summary: "A sharper agency presence with clear service framing, modular sections, and conversion-driven pacing.",
    challenge: "Give the site enough edge to stand apart while still making the service offer instantly legible.",
    outcome: "Created a stronger hierarchy, modular service rhythm, and more decisive visual pacing.",
  },
  {
    slug: "lumina-it",
    title: "Lumina IT",
    year: "2025",
    type: "Company Website",
    image: "/images/project-3.png",
    summary: "Structured corporate storytelling built around trust, motion, and a cleaner technical hierarchy.",
    challenge: "Balance technical credibility with a warmer, more approachable first impression.",
    outcome: "Reframed the site around confidence, service clarity, and a more modern brand posture.",
  },
];

export const capabilities = [
  "Full-stack web apps",
  "Product interfaces",
  "Design systems",
  "Landing pages",
  "Mobile experiences",
  "API-driven builds",
  "Motion-forward UI",
  "Rapid prototypes",
];

export const manifesto = [
  "Design should feel immediate, not over-explained.",
  "Every block on the page should either persuade, orient, or convert.",
  "The best portfolio is not softer. It is clearer, faster, and harder to ignore.",
];

export const principles = [
  {
    title: "Signal over filler",
    body: "I reduce decorative noise and make the important parts obvious fast.",
  },
  {
    title: "Systems with edge",
    body: "Strong spacing, repeatable components, and visual restraint keep bold ideas usable.",
  },
  {
    title: "Ship-ready thinking",
    body: "The goal is not a pretty mockup. It is a site or product that can survive real users.",
  },
];

export const experience = [
  {
    period: "2022",
    title: "Full Stack Python Developer",
    place: "Go My Code",
    details: "Built full-stack apps, REST APIs, and practical systems with strong backend foundations.",
  },
  {
    period: "2022 - now",
    title: "Freelance Developer",
    place: "Independent",
    details: "Shipped websites, landing pages, and product interfaces across web and mobile stacks.",
  },
  {
    period: "2026",
    title: "Portfolio v3",
    place: "Current direction",
    details: "Pushing the portfolio toward a bolder, more authored visual language with clearer product framing.",
  },
];

export const contactChannels = [
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
    label: "LinkedIn",
    value: "linkedin.com/in/dhibi-chams-827146344",
    href: "https://www.linkedin.com/in/dhibi-chams-827146344/",
  },
  {
    label: "X",
    value: "x.com/ChamesDhibi",
    href: "https://x.com/ChamesDhibi",
  },
];
