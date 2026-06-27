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
    nav: { home: "Home", stack: "Stack", projects: "Projects", experiences: "Experiences", contact: "Contact" },
    header: { subtitle: "Full-Stack Web & Mobile Developer" },

    // ── Home ──
    home: {
      hero: {
        eyebrow: "Enchanted",
        nameLine1: "Chames Eddine",
        nameLine2: "Dhibi",
        subtitle: "Full-stack web & mobile developer",
        body: "I'm a full-stack web & mobile developer who turns ideas into shipped products. 15+ projects built, 5-star client reviews, and a track record of reliable delivery.",
        location: "Based in Tunisia",
        ctaPrimary: "View work",
        ctaSecondary: "Get in touch",
      },
      story: {
        sectionTitle: "My Story",
        heading: "A bit about Chames Eddine",
        paragraphs: [
          "I'm a full-stack web and mobile developer from Gafsa, Tunisia, building products with Next.js, Flutter, Node.js, and AI. I care about clean architecture, reliable execution, and outcomes that feel intentional from the first interaction.",
          "From product launches and web platforms to mobile apps and backend systems, I bring the whole stack together — so the final result is never just designed, but fully built and ready to ship.",
        ],
      },
      profile: {
        title: "Information",
        nameLabel: "Name",
        baseLabel: "Base",
        stackLabel: "Stack",
        emailLabel: "Email",
      },
      stats: [
        { label: "Jobs" },
        { label: "Satisfaction" },
        { label: "Rating" },
      ],
      projects: {
        sectionTitle: "Projects",
        viewAll: "View all projects →",
      },
      stack: {
        sectionTitle: "Stack",
        items: [
          {
            name: "Next.js",
            category: "Frontend",
            desc: "Full-stack web apps, landing pages, and SSR products built with React and TypeScript.",
            related: ["TypeScript", "Tailwind CSS", "Vercel"],
          },
          {
            name: "Flutter",
            category: "Mobile",
            desc: "Cross-platform iOS & Android apps from a single Dart codebase.",
            related: ["Dart", "Firebase", "REST APIs"],
          },
          {
            name: "Node.js",
            category: "Backend",
            desc: "REST APIs, real-time systems, and server-side architecture that ship reliably.",
            related: ["Elysia", "Express", "Supabase"],
          },
          {
            name: "React",
            category: "UI",
            desc: "Component-driven interfaces, SPAs, and interactive web apps.",
            related: ["Vite", "TypeScript", "TailwindCSS"],
          },
        ],
      },
      faq: {
        sectionTitle: "Common questions",
        items: [
          {
            question: "What kind of projects do you take on?",
            answer:
              "I work on web apps, mobile apps, REST APIs, dashboards, and AI-powered products. Most of my projects involve taking an idea from early concept to a shipped product.",
          },
          {
            question: "What is your tech stack?",
            answer:
              "I primarily use Next.js, React, TypeScript, and Tailwind CSS for the web; Flutter and Dart for mobile; and Node.js, Supabase, or Firebase for backends and APIs.",
          },
          {
            question: "Do you work with international clients?",
            answer:
              "Yes. I collaborate with founders, teams, and agencies across Europe, the US, the MENA region, and beyond. I'm comfortable working asynchronously and across time zones.",
          },
          {
            question: "How do we start a project together?",
            answer:
              "Send me an email with a short description of what you need. I'll reply within a day to schedule a call, clarify scope, and outline the next steps.",
          },
        ],
      },
      contact: {
        sectionTitle: "Say Hi",
        servicesTitle: "Services",
        socialTitle: "Stay connected",
        projectTitle: "Start a project",
        projectBody: "Available for freelance projects and collaborations.",
        aboutTitle: "About",
        aboutBody: "Full-stack developer from Gafsa, Tunisia. Feel free to get in touch.",
        emailLabel: "Email",
        githubLabel: "GitHub",
        upworkLabel: "Upwork",
      },
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

    // ── Home: CTA ──
    cta: {
      eyebrow: "Next step",
      title: "Let's build the next product well.",
      body: "Open to web apps, mobile apps, APIs, dashboards, and product sites.",
      button: "Start a project",
    },

    // ── Experiences ──
    experiences: {
      eyebrow: "Experiences",
      h1Start: "Path &",
      h1Outline: "experience",
      h1End: "building products.",
      body: "Background across computer science, freelance work, certifications, and production internships.",
    },

    // ── Experience timeline ──
    // Titles and places are NOT translated (proper nouns / achievements)
    experience: [
      { period: "2022", title: "Full Stack Python Developer", place: "Go My Code", details: "Built full-stack apps, backend systems, and APIs in a practical training environment." },
      { period: "2023", title: "Baccalaureate in Mathematics", place: "Tunisia", details: "High-school diploma focused on mathematics." },
      { period: "2023 - June 2026", title: "Bachelor of Computer Science", place: "Universite de Gafsa", details: "Computer science studies focused on web, mobile, backend, and AI foundations." },
      { period: "Feb 2025", title: "TOEFL iBT 84/120", place: "ETS", details: "English proficiency certification." },
      { period: "2025 - May 2026", title: "Web Development Intern", place: "CPG (Compagnie des Phosphates de Gafsa)", details: "Built internal web tools and gained hands-on production experience." },
      { period: "2025 - Present", title: "Freelance Full-Stack Developer", place: "Independent", details: "Built web and mobile projects across Next.js, Flutter, Node.js, Express, Elysia, and Supabase." },
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
      formTitle: "Send a message",
      formBody: "Tell me what you're building, what you need, and when you're aiming to ship.",
      nameLabel: "Name",
      emailLabel: "Email",
      subjectLabel: "Subject",
      messageLabel: "Message",
      messagePlaceholder: "Project scope, timeline, or anything else I should know...",
      sendButton: "Send message",
      sendingButton: "Sending...",
      successMessage: "Message sent. I'll get back to you soon.",
      errorMessage: "Something went wrong. Please try again.",
      replyHint: "Usually replies within 24 hours.",
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
      frames: "Frames",
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
    nav: { home: "Accueil", stack: "Stack", projects: "Projets", experiences: "Expériences", contact: "Contact" },
    header: { subtitle: "Développeur Full-Stack Web & Mobile" },

    // ── Home ──
    home: {
      hero: {
        eyebrow: "Enchanted",
        nameLine1: "Chames Eddine",
        nameLine2: "Dhibi",
        subtitle: "Développeur full-stack web & mobile",
        body: "Je suis un développeur full-stack web & mobile qui transforme les idées en produits livrés. 15+ projets réalisés, avis clients 5 étoiles et une livraison fiable.",
        location: "Basé en Tunisie",
        ctaPrimary: "Voir les projets",
        ctaSecondary: "Me contacter",
      },
      story: {
        sectionTitle: "Mon Histoire",
        heading: "Un peu sur Chames Eddine",
        paragraphs: [
          "Je suis développeur full-stack web et mobile de Gafsa, Tunisie. Je crée des produits avec Next.js, Flutter, Node.js et l'IA. Je m'attache à une architecture propre, une exécution fiable et des résultats qui semblent intentionnels dès la première interaction.",
          "Du lancement de produits et plateformes web aux applications mobiles et systèmes backend, je rassemble toute la stack — pour que le résultat final ne soit pas seulement conçu, mais entièrement construit et prêt à livrer.",
        ],
      },
      profile: {
        title: "Informations",
        nameLabel: "Nom",
        baseLabel: "Base",
        stackLabel: "Stack",
        emailLabel: "Email",
      },
      stats: [
        { label: "Missions" },
        { label: "Satisfaction" },
        { label: "Note" },
      ],
      projects: {
        sectionTitle: "Projets",
        viewAll: "Voir tous les projets →",
      },
      stack: {
        sectionTitle: "Stack",
        items: [
          {
            name: "Next.js",
            category: "Frontend",
            desc: "Applications web full-stack, pages d'accueil et produits SSR avec React et TypeScript.",
            related: ["TypeScript", "Tailwind CSS", "Vercel"],
          },
          {
            name: "Flutter",
            category: "Mobile",
            desc: "Applications iOS & Android cross-platform depuis une seule base de code Dart.",
            related: ["Dart", "Firebase", "REST APIs"],
          },
          {
            name: "Node.js",
            category: "Backend",
            desc: "APIs REST, systèmes temps réel et architecture serveur fiable.",
            related: ["Elysia", "Express", "Supabase"],
          },
          {
            name: "React",
            category: "UI",
            desc: "Interfaces composants, SPA et applications web interactives.",
            related: ["Vite", "TypeScript", "TailwindCSS"],
          },
        ],
      },
      faq: {
        sectionTitle: "Questions fréquentes",
        items: [
          {
            question: "Quels types de projets acceptez-vous ?",
            answer:
              "Je travaille sur des applications web, des applications mobiles, des APIs REST, des tableaux de bord et des produits IA. La plupart des projets consistent à passer d'une idée initiale à un produit livré.",
          },
          {
            question: "Quelle est votre stack technique ?",
            answer:
              "J'utilise principalement Next.js, React, TypeScript et Tailwind CSS pour le web ; Flutter et Dart pour le mobile ; Node.js, Supabase ou Firebase pour les backends et les APIs.",
          },
          {
            question: "Travaillez-vous avec des clients internationaux ?",
            answer:
              "Oui. Je collabore avec des fondateurs, des équipes et des agences en Europe, aux États-Unis, au Maghreb et au-delà. Je suis à l'aise avec le travail asynchrone et les décalages horaires.",
          },
          {
            question: "Comment démarrer un projet ensemble ?",
            answer:
              "Envoyez-moi un email avec une brève description de votre besoin. Je réponds dans la journée pour planifier un appel, clarifier le périmètre et définir les prochaines étapes.",
          },
        ],
      },
      contact: {
        sectionTitle: "Dites Bonjour",
        servicesTitle: "Services",
        socialTitle: "Rester connecté",
        projectTitle: "Démarrer un projet",
        projectBody: "Disponible pour des projets freelance et collaborations.",
        aboutTitle: "À propos",
        aboutBody: "Développeur full-stack de Gafsa, Tunisie. N'hésitez pas à me contacter.",
        emailLabel: "Email",
        githubLabel: "GitHub",
        upworkLabel: "Upwork",
      },
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

    // ── Home: CTA ──
    cta: {
      eyebrow: "Prochaine étape",
      title: "Construisons le prochain produit ensemble.",
      body: "Disponible pour les apps web, mobile, APIs, tableaux de bord et sites produit.",
      button: "Démarrer un projet",
    },

    // ── Experiences ──
    experiences: {
      eyebrow: "Expériences",
      h1Start: "Parcours et",
      h1Outline: "expérience",
      h1End: "de construction de produits.",
      body: "Formation en informatique, travail freelance, certifications et stages en production.",
    },

    // ── Experience timeline ──
    // Titles and places are NOT translated (proper nouns / achievements)
    experience: [
      { period: "2022", title: "Full Stack Python Developer", place: "Go My Code", details: "Construction d'applications full-stack, systèmes backend et APIs dans un environnement de formation pratique." },
      { period: "2023", title: "Baccalauréat Mathématiques", place: "Tunisie", details: "Diplôme de fin d'études secondaires axé sur les mathématiques." },
      { period: "2023 - juin 2026", title: "Bachelor of Computer Science", place: "Universite de Gafsa", details: "Études en informatique axées sur le web, le mobile, le backend et les fondamentaux de l'IA." },
      { period: "fév 2025", title: "TOEFL iBT 84/120", place: "ETS", details: "Certification de compétence en anglais." },
      { period: "2025 - mai 2026", title: "Web Development Intern", place: "CPG (Compagnie des Phosphates de Gafsa)", details: "Construction d'outils web internes et acquisition d'expérience pratique en production." },
      { period: "2025 - Présent", title: "Freelance Full-Stack Developer", place: "Indépendant", details: "Construction de projets web et mobile avec Next.js, Flutter, Node.js, Express, Elysia et Supabase." },
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
      formTitle: "Envoyer un message",
      formBody: "Parlez-moi de ce que vous construisez, de vos besoins et de votre échéance visée.",
      nameLabel: "Nom",
      emailLabel: "Email",
      subjectLabel: "Sujet",
      messageLabel: "Message",
      messagePlaceholder: "Périmètre du projet, délais ou toute information utile...",
      sendButton: "Envoyer le message",
      sendingButton: "Envoi...",
      successMessage: "Message envoyé. Je vous réponds bientôt.",
      errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
      replyHint: "Réponse généralement sous 24 heures.",
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
      frames: "Captures",
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
