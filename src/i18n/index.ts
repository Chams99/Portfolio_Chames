// ──────────────────────────────────────────────────────────
// i18n/index.ts — Full EN/FR translation dictionary
// ──────────────────────────────────────────────────────────
// Rules:
//   ✅ Translate all UI strings, labels, descriptions, body copy
//   ❌ Do NOT translate: personal name, project names, framework/tool names, achievement titles
// ──────────────────────────────────────────────────────────

export const translations = {
  en: {
    // ── Nav & Header ──
    nav: { home: "Home", about: "About", work: "Work", contact: "Contact" },
    header: { subtitle: "Full-Stack Web & Mobile Developer" },

    // ── Home: Hero ──
    home: {
      eyebrow: "Full-stack web and mobile developer",
      h1Line1: "Building",
      h1Line2: "web apps",
      h1Line3: "and systems",
      h1Line4: "that ship.",
      body: "I build web, mobile, and backend-powered products with clean architecture and reliable execution.",
      cta: "Open projects",
      ctaSecondary: "Start a conversation",
      coreStack: "Core stack",
      focus: "Focus",
      focusBody: "Web apps, mobile apps, APIs, dashboards",
    },

    // ── Home: Stats ──
    heroStats: [
      { label: "Projects shipped" },
      { label: "Core stack" },
      { label: "Base" },
    ],

    // ── Home: Selected Work ──
    selectedWork: {
      eyebrow: "Selected work",
      title: "Selected",
      titleRest: "projects built",
      titleOutline: "for real use",
      titleEnd: "and shipping.",
      openFirst: "Open the first project",
    },

    // ── Home: Capabilities ──
    capabilities: {
      eyebrow: "Capabilities",
      title: "More than front-end only.",
      items: [
        { title: "Product launches", body: "Launch-ready pages and products built to explain value fast." },
        { title: "Web platforms", body: "Web apps and sites built to be fast, clear, and dependable." },
        { title: "Full-stack systems", body: "Frontend, APIs, and data flow built as one system." },
        { title: "UX structure", body: "Cleaner flows for products that need less friction." },
      ],
    },

    // ── Home: Trust / Proof ──
    proof: {
      eyebrow: "Why this lands",
      h2Line1: "Strong products",
      h2Line2: "with solid",
      h2Outline: "implementation",
      h2End: "to ship.",
      items: [
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
      ],
    },

    // ── Home: CTA ──
    cta: {
      eyebrow: "Next step",
      title: "Let's build the next product well.",
      body: "Open to web apps, mobile apps, APIs, dashboards, and product sites.",
      button: "Start a project",
    },

    // ── About ──
    about: {
      eyebrow: "About",
      h1Start: "Building products that stay",
      h1Outline: "usable",
      h1End: "fast, and reliable.",
      body1: "I work across frontend, backend, and mobile, so the product work is always tied to real implementation.",
      body2: "That comes from current computer science studies at Universite de Gafsa and ongoing freelance work across web, mobile, and APIs.",
      currentDirection: "Current direction",
      currentDirectionBody: "Next.js, Flutter, Node.js, and products built for real users.",
      whatMatters: "What matters most",
      whatMattersBody: "The product should be clear, stable, and ready to ship.",
      principlesLabel: "Principles",
      experienceLabel: "Experience",
      processEyebrow: "How I work",
      processTitle: "Clear process.",
      processOutline: "Better result.",
    },

    // ── About: Principles ──
    principles: [
      { title: "Clarity first", body: "The work should be easy to understand and easy to trust." },
      { title: "Systems that ship", body: "Good ideas only matter if they hold up in real implementation." },
      { title: "Polish with control", body: "Strong visuals work better when the structure stays disciplined." },
    ],

    // ── About: Process Steps ──
    processSteps: [
      { label: "01", title: "Find the friction", body: "Identify what feels unclear and what needs to improve first." },
      { label: "02", title: "Set the structure", body: "Organize the page around what users need to understand quickly." },
      { label: "03", title: "Build for the browser", body: "Keep the UI distinctive, but practical enough to ship cleanly." },
      { label: "04", title: "Refine", body: "Tighten the details until the product feels fast and finished." },
    ],

    // ── About: Experience ──
    // Titles and places are NOT translated (proper nouns / achievements)
    experience: [
      { period: "2023 - 2026", title: "Bachelor of Computer Science", place: "Universite de Gafsa", details: "Computer science studies focused on web, mobile, backend, and AI foundations." },
      { period: "2022", title: "Full Stack Python Developer", place: "Go My Code", details: "Built full-stack apps, backend systems, and APIs in a practical training environment." },
      { period: "2025 - Present", title: "Freelance Full-Stack Developer", place: "Independent", details: "Built web and mobile projects across Next.js, Flutter, Node.js, Express, Elysia, and Supabase." },
      { period: "2025 - 2026", title: "Web Development Intern", place: "CPG (Compagnie des Phosphates de Gafsa)", details: "Built internal web tools and gained hands-on production experience." },
    ],

    // ── Contact ──
    contact: {
      eyebrow: "Contact",
      h1Start: "For projects that need",
      h1Outline: "clean builds",
      h1End: "and solid execution.",
      body: "Open to web apps, Flutter work, APIs, internal tools, and backend-powered products that need clean execution and reliable foundations.",
      bestFit: "Best fit",
      bestFitTitle: "Launch-ready product work.",
      bestFitBody: "Best for web apps, mobile apps, APIs, internal tools, and product sites that need clear execution.",
      primaryContact: "Primary contact",
    },

    // ── Contact: Channel labels ──
    contactLabels: {
      email: "Email",
      github: "GitHub",
      upwork: "Upwork",
      linkedin: "LinkedIn",
      x: "X",
    },

    // ── Work Archive ──
    work: {
      eyebrow: "Archive",
      h1Start: "Selected work with a",
      h1Outline: "sharper presence",
      body: "Websites, tools, and apps built for clarity, presence, and real use.",
    },

    // ── Case Study ──
    caseStudy: {
      back: "Back to work",
      openingNote: "Opening note",
      coreIdea: "Core idea",
      visit: "Visit project",
      problem: "Problem",
      creativeApproach: "Creative approach",
      outcome: "Outcome",
      relatedWork: "Related work",
      moreCaseStudies: "More case studies",
      returnToArchive: "Return to archive",
    },

    // ── Footer ──
    footer: {
      closingNote: "Closing note",
      closingTitle: "Built for products that need clean code and clear UX.",
      closingBody: "Full-stack work across web, mobile, backend, and product sites.",
      navigate: "Navigate",
      connect: "Connect",
      copyright: "Copyright",
    },

    // ── 404 ──
    notFound: {
      title: "Page not found.",
      body: "The page you are looking for does not exist or has moved.",
      back: "Back home",
    },
  },

  fr: {
    // ── Nav & Header ──
    nav: { home: "Accueil", about: "À propos", work: "Projets", contact: "Contact" },
    header: { subtitle: "Développeur Full-Stack Web & Mobile" },

    // ── Home: Hero ──
    home: {
      eyebrow: "Développeur full-stack web et mobile",
      h1Line1: "Je construis",
      h1Line2: "des apps web",
      h1Line3: "et des systèmes",
      h1Line4: "qui livrent.",
      body: "Je crée des produits web, mobile et backend avec une architecture propre et une exécution fiable.",
      cta: "Voir les projets",
      ctaSecondary: "Démarrer une conversation",
      coreStack: "Stack principal",
      focus: "Spécialités",
      focusBody: "Apps web, apps mobile, APIs, tableaux de bord",
    },

    // ── Home: Stats ──
    heroStats: [
      { label: "Projets livrés" },
      { label: "Stack principal" },
      { label: "Localisation" },
    ],

    // ── Home: Selected Work ──
    selectedWork: {
      eyebrow: "Travaux sélectionnés",
      title: "Projets",
      titleRest: "sélectionnés construits",
      titleOutline: "pour un usage réel",
      titleEnd: "et la mise en production.",
      openFirst: "Ouvrir le premier projet",
    },

    // ── Home: Capabilities ──
    capabilities: {
      eyebrow: "Compétences",
      title: "Bien plus que du front-end.",
      items: [
        { title: "Lancement de produits", body: "Pages et produits prêts au lancement, conçus pour expliquer la valeur rapidement." },
        { title: "Plateformes web", body: "Apps et sites web conçus pour être rapides, clairs et fiables." },
        { title: "Systèmes full-stack", body: "Frontend, APIs et flux de données construits comme un seul système." },
        { title: "Structure UX", body: "Des parcours plus fluides pour des produits avec moins de friction." },
      ],
    },

    // ── Home: Trust / Proof ──
    proof: {
      eyebrow: "Pourquoi ça fonctionne",
      h2Line1: "Des produits solides",
      h2Line2: "avec une",
      h2Outline: "implémentation",
      h2End: "fiable.",
      items: [
        {
          label: "Style de travail",
          value: "Pensée produit + backend",
          body: "L'architecture et l'utilisabilité sont façonnées ensemble dès le départ.",
        },
        {
          label: "Parcours",
          value: "Web + mobile + IA",
          body: "Construit à travers le web, le mobile, les systèmes backend et les fonctionnalités IA.",
        },
        {
          label: "Idéal pour",
          value: "Des produits à livrer",
          body: "Idéal pour les produits qui ont besoin d'une UX claire et de fonctionnalités réelles.",
        },
      ],
    },

    // ── Home: CTA ──
    cta: {
      eyebrow: "Prochaine étape",
      title: "Construisons le prochain produit ensemble.",
      body: "Disponible pour les apps web, mobile, APIs, tableaux de bord et sites produit.",
      button: "Démarrer un projet",
    },

    // ── About ──
    about: {
      eyebrow: "À propos",
      h1Start: "Des produits qui restent",
      h1Outline: "utilisables",
      h1End: "rapides et fiables.",
      body1: "Je travaille sur le frontend, le backend et le mobile — le travail produit est toujours lié à l'implémentation réelle.",
      body2: "Cela vient de mes études en informatique à l'Université de Gafsa et de mon travail freelance sur le web, le mobile et les APIs.",
      currentDirection: "Direction actuelle",
      currentDirectionBody: "Next.js, Flutter, Node.js, et des produits construits pour de vrais utilisateurs.",
      whatMatters: "Ce qui compte le plus",
      whatMattersBody: "Le produit doit être clair, stable et prêt à être livré.",
      principlesLabel: "Principes",
      experienceLabel: "Expérience",
      processEyebrow: "Comment je travaille",
      processTitle: "Un processus clair.",
      processOutline: "Un meilleur résultat.",
    },

    // ── About: Principles ──
    principles: [
      { title: "La clarté d'abord", body: "Le travail doit être facile à comprendre et facile à croire." },
      { title: "Des systèmes qui livrent", body: "Les bonnes idées ne comptent que si elles tiennent dans l'implémentation réelle." },
      { title: "Finition maîtrisée", body: "Un visuel fort fonctionne mieux quand la structure reste disciplinée." },
    ],

    // ── About: Process Steps ──
    processSteps: [
      { label: "01", title: "Trouver la friction", body: "Identifier ce qui manque de clarté et ce qui doit être amélioré en premier." },
      { label: "02", title: "Définir la structure", body: "Organiser la page autour de ce que l'utilisateur doit comprendre rapidement." },
      { label: "03", title: "Construire pour le navigateur", body: "Garder l'UI distinctive, mais assez pratique pour être livrée proprement." },
      { label: "04", title: "Affiner", body: "Peaufiner les détails jusqu'à ce que le produit soit rapide et fini." },
    ],

    // ── About: Experience ──
    // Titles and places are NOT translated (proper nouns / achievements)
    experience: [
      { period: "2023 - 2026", title: "Bachelor of Computer Science", place: "Universite de Gafsa", details: "Études en informatique axées sur le web, le mobile, le backend et les fondamentaux de l'IA." },
      { period: "2022", title: "Full Stack Python Developer", place: "Go My Code", details: "Construction d'applications full-stack, systèmes backend et APIs dans un environnement de formation pratique." },
      { period: "2025 - Présent", title: "Freelance Full-Stack Developer", place: "Indépendant", details: "Construction de projets web et mobile avec Next.js, Flutter, Node.js, Express, Elysia et Supabase." },
      { period: "2025 - 2026", title: "Web Development Intern", place: "CPG (Compagnie des Phosphates de Gafsa)", details: "Construction d'outils web internes et acquisition d'expérience pratique en production." },
    ],

    // ── Contact ──
    contact: {
      eyebrow: "Contact",
      h1Start: "Pour les projets qui ont besoin de",
      h1Outline: "builds propres",
      h1End: "et d'une exécution solide.",
      body: "Disponible pour les apps web, Flutter, APIs, outils internes et produits backend nécessitant une exécution propre et des bases fiables.",
      bestFit: "Idéal pour",
      bestFitTitle: "Du travail produit prêt au lancement.",
      bestFitBody: "Idéal pour les apps web, mobile, APIs, outils internes et sites produit nécessitant une exécution claire.",
      primaryContact: "Contact principal",
    },

    // ── Contact: Channel labels ──
    contactLabels: {
      email: "Email",
      github: "GitHub",
      upwork: "Upwork",
      linkedin: "LinkedIn",
      x: "X",
    },

    // ── Work Archive ──
    work: {
      eyebrow: "Archives",
      h1Start: "Travaux sélectionnés avec une",
      h1Outline: "présence affirmée",
      body: "Sites web, outils et applications construits pour la clarté, la présence et l'usage réel.",
    },

    // ── Case Study ──
    caseStudy: {
      back: "Retour aux projets",
      openingNote: "Note d'ouverture",
      coreIdea: "Idée centrale",
      visit: "Visiter le projet",
      problem: "Problème",
      creativeApproach: "Approche créative",
      outcome: "Résultat",
      relatedWork: "Projets connexes",
      moreCaseStudies: "Plus d'études de cas",
      returnToArchive: "Retour aux archives",
    },

    // ── Footer ──
    footer: {
      closingNote: "Note de clôture",
      closingTitle: "Construit pour des produits qui ont besoin de code propre et d'UX claire.",
      closingBody: "Travail full-stack sur le web, le mobile, le backend et les sites produit.",
      navigate: "Navigation",
      connect: "Connexion",
      copyright: "Droits d'auteur",
    },

    // ── 404 ──
    notFound: {
      title: "Page introuvable.",
      body: "La page que vous recherchez n'existe pas ou a été déplacée.",
      back: "Retour à l'accueil",
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type Translations = (typeof translations)["en"];

export function t(locale: string | undefined) {
  const loc = (locale === "fr" ? "fr" : "en") as Locale;
  return translations[loc];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split("/");
  return segment === "fr" ? "fr" : "en";
}

export function localizedPath(path: string, locale: Locale): string {
  if (locale === "en") return path;
  return `/fr${path === "/" ? "" : path}`;
}
