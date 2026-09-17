// ──────────────────────────────────────────────────────────
// i18n/index.ts · Full EN/FR translation dictionary
// ──────────────────────────────────────────────────────────
// Rules:
//   ✅ Translate all UI strings, labels, descriptions, body copy
//   ❌ Do NOT translate: personal name, project names, framework/tool names, achievement titles
// ──────────────────────────────────────────────────────────

export const translations = {
  en: {
    // ── Nav & Header ──
    nav: { home: "Home", stack: "Skills", projects: "Projects", experiences: "Experiences", contact: "Contact" },
    header: { subtitle: "Full-Stack Developer & Software Engineer", menuLabel: "Toggle navigation" },

    // ── Home ──
    home: {
      hero: {
        eyebrow: "Full-stack developer based in Gafsa",
        nameLine1: "Web, mobile,",
        nameLine2: "built to ship.",
        subtitle: "Full-Stack Developer & Software Engineer",
        body: "Computer Science graduate specialized in Software Engineering. I build software products, AI applications, and data-driven systems from interface to backend.",
        location: "Gafsa, Tunisia",
        ctaPrimary: "View selected work",
        ctaSecondary: "Start a project",
      },
      story: {
        sectionTitle: "My Story",
        heading: "A bit about Chames Eddine",
        paragraphs: [
          "I'm a Computer Science graduate specialized in Software Engineering, with academic and practical experience in software development, artificial intelligence applications, and database systems.",
          "I’m interested in advanced computer science topics, including artificial intelligence, software systems, and data-driven applications, and I enjoy turning them into dependable products.",
        ],
      },
      profile: {
        title: "Information",
        nameLabel: "Name",
        baseLabel: "Base",
        stackLabel: "Stack",
        emailLabel: "Email",
      },
      projects: {
        sectionTitle: "My projects",
        intro: "Six products I designed and built from interface to delivery.",
        selectedLabel: "6 selected projects",
        featuredLabel: "Featured build",
        viewAll: "View all projects →",
        openProject: "Visit project →",
        archiveLabel: "More work",
      },
      stack: {
        sectionTitle: "My skills",
        titleLine1: "My",
        titleLine2: "Skills",
        intro: "The tools I use to design, build, and ship reliable software.",
        categoryLabels: {
          languages: "Programming Languages",
          frontend: "Frontend Technologies",
          backend: "Backend Technologies",
          databases: "Databases",
          tools: "Dev Tools & Platforms",
          hardware: "Hardware & IoT",
        },
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
        marker: "05",
        titleLine1: "Get in",
        titleLine2: "Touch",
        body: "Ready to get started? Reach out through any of these channels.",
        profileAction: "View profile",
        sectionTitle: "Say Hi",
        servicesTitle: "Services",
        socialTitle: "Stay connected",
        projectTitle: "Start a project",
        projectBody: "Available for freelance projects and collaborations.",
        aboutTitle: "About",
        aboutBody: "Full-stack developer from Gafsa, Tunisia. Feel free to get in touch.",
        emailLabel: "Email",
        phoneLabel: "Phone",
        githubLabel: "GitHub",
        linkedinLabel: "LinkedIn",
        upworkLabel: "Upwork",
      },
    },

    // ── Home: Capabilities ──
    capabilities: {
      eyebrow: "Skills",
      title: "My skills.",
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
      eyebrow: "Experience & education",
      h1Start: "Experience &",
      h1Outline: "education",
      h1End: "behind the work.",
      body: "A record of the work, education, and credentials behind the products.",
      experienceLabel: "Experience",
      educationLabel: "Education",
      credentialsTitle: "A little more about me",
      credentialsBody: "The certifications, languages, interests, and working habits behind the work.",
      workItems: [
        { period: "Mar 2026 - May 2026", title: "Final Year Project Intern (PFE) · Software Engineering", place: "Compagnie des Phosphates de Gafsa (CPG)", details: "Completed my final year project internship and developed a software solution as part of my graduation project." },
        { period: "Jul 2025 - Present", title: "Full-Stack Developer (Freelance)", place: "Upwork", details: "Worked as a freelance full-stack developer for international clients, implementing frontend and backend solutions, APIs, and database integrations." },
        { period: "Jun 2025 - Aug 2025", title: "Software Development & Cybersecurity Intern", place: "Compagnie des Phosphates de Gafsa (CPG)", details: "Developed software solutions under the supervision of a Cybersecurity Engineer and gained practical exposure to secure software development practices." },
      ],
      educationItems: [
        { period: "Sep 2023 - Jun 2026", title: "Licence in Computer Science · Software Engineering", place: "Faculté des Sciences de Gafsa, Tunisia", details: "Bachelor's degree focused on software development, databases, artificial intelligence, and web technologies. Final grade: 14/20." },
        { period: "September 2022 - June 2023", title: "Baccalaureate in Mathematics", place: "Houcine Bouzaiene High School of Gafsa (L.H.B.G)", details: "Completed in 2023." },
      ],
      credentials: [
        { label: "IELTS Academic", value: "Band score 7.0 · September 2026" },
        { label: "TOEFL iBT", value: "84/120 · 2025" },
        { label: "Full Python Course", value: "GoMyCode · 2022" },
        { label: "Achievement", value: "Upwork Rising Talent · 100% Job Success Score · 2026", badge: "Rising Talent", href: "https://www.upwork.com/freelancers/~01ec2dc27e0c617399" },
        { label: "Languages", value: "Arabic · English · French · German" },
        { label: "Activity", value: "Member · Bionic Brains Robotics Club · 2025-2026" },
      ],
    },

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
      validationRequired: "Please fill in all fields.",
      validationEmail: "Please enter a valid email address.",
      validationName: "Please enter your name.",
      validationSubject: "Please enter a subject.",
      validationMessage: "Please add a little more detail.",
      rateLimitError: "Too many messages. Please try again later or use the email link.",
      unavailableError: "The form is temporarily unavailable. Please use the email link instead.",
      timeoutError: "The request took too long. Please try again.",
      unexpectedResponse: "Unexpected response.",
      networkError: "Network error. Please try again.",
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
      eyebrow: "Work",
      h1Start: "Selected",
      h1Outline: "work",
      body: "Products, websites, and tools built from Gafsa.",
      featuredEyebrow: "Selected projects",
      featuredTitle: "A closer look.",
      featuredBody: "Three projects, end to end.",
      archiveEyebrow: "More projects",
      archiveTitle: "The directory",
      archiveBody: "More products, tools, and experiments.",
      backToPortfolio: "Back to portfolio",
      groups: {
        products: "Products & platforms",
        commerce: "Commerce & service",
        experiments: "Experiments & interfaces",
      },
      projectsLabel: "projects",
      rolesLabel: "Contribution",
      openProject: "Open project",
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
      closingNote: "CD / Gafsa, TN",
      closingTitle: "From first interface to final deploy.",
      closingBody: "Software products, AI applications, and data-driven systems built with care from Gafsa, Tunisia.",
      contactCta: "Start a conversation",
      backToTop: "Back to top",
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
    nav: { home: "Accueil", stack: "Compétences", projects: "Projets", experiences: "Expériences", contact: "Contact" },
    header: { subtitle: "Développeur full-stack & ingénieur logiciel", menuLabel: "Ouvrir la navigation" },

    // ── Home ──
    home: {
      hero: {
        eyebrow: "Développeur full-stack basé à Gafsa",
        nameLine1: "Web, mobile,",
        nameLine2: "prêts à livrer.",
        subtitle: "Développeur full-stack & ingénieur logiciel",
        body: "Diplômé en informatique, spécialisé en génie logiciel. Je développe des produits logiciels, des applications d'IA et des systèmes orientés données, de l'interface au backend.",
        location: "Gafsa, Tunisie",
        ctaPrimary: "Voir les projets sélectionnés",
        ctaSecondary: "Démarrer un projet",
      },
      story: {
        sectionTitle: "Mon Histoire",
        heading: "Un peu sur Chames Eddine",
        paragraphs: [
          "Je suis diplômé en informatique, spécialisé en génie logiciel, avec une expérience académique et pratique en développement logiciel, applications d'intelligence artificielle et systèmes de bases de données.",
          "Je m'intéresse aux sujets avancés de l'informatique, notamment l'intelligence artificielle, les systèmes logiciels et les applications orientées données, avec l'objectif d'en faire des produits fiables.",
        ],
      },
      profile: {
        title: "Informations",
        nameLabel: "Nom",
        baseLabel: "Base",
        stackLabel: "Stack",
        emailLabel: "Email",
      },
      projects: {
        sectionTitle: "Mes projets",
        intro: "Six produits que j'ai conçus et développés, de l'interface à la livraison.",
        selectedLabel: "6 projets sélectionnés",
        featuredLabel: "Projet phare",
        viewAll: "Voir tous les projets →",
        openProject: "Visiter le projet →",
        archiveLabel: "Autres projets",
      },
      stack: {
        sectionTitle: "Mes compétences",
        titleLine1: "Mes",
        titleLine2: "compétences",
        intro: "Les outils que j'utilise pour concevoir, développer et livrer des logiciels fiables.",
        categoryLabels: {
          languages: "Langages de programmation",
          frontend: "Technologies frontend",
          backend: "Technologies backend",
          databases: "Bases de données",
          tools: "Outils & plateformes",
          hardware: "Matériel & IoT",
        },
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
        marker: "05",
        titleLine1: "Me",
        titleLine2: "contacter",
        body: "Prêt à commencer ? Écrivez-moi par l’un de ces canaux.",
        profileAction: "Voir le profil",
        sectionTitle: "Dites Bonjour",
        servicesTitle: "Services",
        socialTitle: "Rester connecté",
        projectTitle: "Démarrer un projet",
        projectBody: "Disponible pour des projets freelance et collaborations.",
        aboutTitle: "À propos",
        aboutBody: "Développeur full-stack de Gafsa, Tunisie. N'hésitez pas à me contacter.",
        emailLabel: "Email",
        phoneLabel: "Téléphone",
        githubLabel: "GitHub",
        linkedinLabel: "LinkedIn",
        upworkLabel: "Upwork",
      },
    },

    // ── Home: Capabilities ──
    capabilities: {
      eyebrow: "Compétences",
      title: "Mes compétences.",
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
      eyebrow: "Expérience & formation",
      h1Start: "Expérience &",
      h1Outline: "formation",
      h1End: "derrière le travail.",
      body: "Un aperçu du travail, de la formation et des qualifications qui soutiennent les produits livrés.",
      experienceLabel: "Expérience",
      educationLabel: "Formation",
      credentialsTitle: "Un peu plus sur moi",
      credentialsBody: "Les certifications, les langues, les intérêts et les habitudes de travail derrière mes projets.",
      workItems: [
        { period: "mars 2026 - mai 2026", title: "Stagiaire PFE · Génie logiciel", place: "Compagnie des Phosphates de Gafsa (CPG)", details: "Réalisation de mon stage de projet de fin d'études et développement d'une solution logicielle dans le cadre du projet de diplôme." },
        { period: "juil. 2025 - présent", title: "Développeur full-stack (freelance)", place: "Upwork", details: "Développement full-stack freelance pour des clients internationaux, avec implémentation de solutions frontend et backend, d'APIs et d'intégrations de bases de données." },
        { period: "juin 2025 - août 2025", title: "Stagiaire en développement logiciel & cybersécurité", place: "Compagnie des Phosphates de Gafsa (CPG)", details: "Développement de solutions logicielles sous la supervision d'un ingénieur cybersécurité et découverte pratique du développement logiciel sécurisé." },
      ],
      educationItems: [
        { period: "sept. 2023 - juin 2026", title: "Licence en informatique · Génie logiciel", place: "Faculté des Sciences de Gafsa, Tunisie", details: "Formation axée sur le développement logiciel, les bases de données, l'intelligence artificielle et les technologies web. Note finale : 14/20." },
        { period: "septembre 2022 - juin 2023", title: "Baccalauréat en mathématiques", place: "Lycée Houcine Bouzaiene de Gafsa (L.H.B.G)", details: "Diplôme obtenu en 2023." },
      ],
      credentials: [
        { label: "IELTS Academic", value: "Score 7,0 · septembre 2026" },
        { label: "TOEFL iBT", value: "84/120 · 2025" },
        { label: "Full Python Course", value: "GoMyCode · 2022" },
        { label: "Réussite", value: "Upwork Rising Talent · Job Success Score de 100 % · 2026", badge: "Rising Talent", href: "https://www.upwork.com/freelancers/~01ec2dc27e0c617399" },
        { label: "Langues", value: "Arabe · Anglais · Français · Allemand" },
        { label: "Activité", value: "Membre · Bionic Brains Robotics Club · 2025-2026" },
      ],
    },

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
      validationRequired: "Veuillez remplir tous les champs.",
      validationEmail: "Veuillez saisir une adresse email valide.",
      validationName: "Veuillez saisir votre nom.",
      validationSubject: "Veuillez saisir un sujet.",
      validationMessage: "Veuillez ajouter un peu plus de détails.",
      rateLimitError: "Trop de messages. Réessayez plus tard ou utilisez le lien email.",
      unavailableError: "Le formulaire est temporairement indisponible. Utilisez plutôt le lien email.",
      timeoutError: "La requête a pris trop de temps. Veuillez réessayer.",
      unexpectedResponse: "Réponse inattendue.",
      networkError: "Erreur réseau. Veuillez réessayer.",
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
      eyebrow: "Projets",
      h1Start: "Projets",
      h1Outline: "sélectionnés",
      body: "Produits, sites et outils développés depuis Gafsa.",
      featuredEyebrow: "Projets sélectionnés",
      featuredTitle: "Un regard plus proche.",
      featuredBody: "Trois projets, de bout en bout.",
      archiveEyebrow: "Autres projets",
      archiveTitle: "Le répertoire",
      archiveBody: "D'autres produits, outils et expériences.",
      backToPortfolio: "Retour au portfolio",
      groups: {
        products: "Produits & plateformes",
        commerce: "Commerce & services",
        experiments: "Expériences & interfaces",
      },
      projectsLabel: "projets",
      rolesLabel: "Contribution",
      openProject: "Ouvrir le projet",
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
      closingNote: "CD / Gafsa, TN",
      closingTitle: "De la première interface à la mise en ligne.",
      closingBody: "Produits logiciels, applications d'IA et systèmes orientés données, développés avec soin depuis Gafsa, en Tunisie.",
      contactCta: "Démarrer une conversation",
      backToTop: "Retour en haut",
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

type ProjectCopyOverrides = {
  category?: string;
  summary?: string;
  roles?: string[];
  contribution?: string;
};

const frenchProjectCopy: Record<string, ProjectCopyOverrides> = {
  "lumina-it": {
    category: "Cybersécurité",
    summary: "Un site de cybersécurité conçu pour inspirer confiance dès le premier regard.",
    roles: ["Direction web", "Direction de marque", "Développement front-end"],
    contribution: "J'ai défini la direction de marque et développé le front-end Next.js responsive autour d'une hiérarchie plus nette.",
  },
  "ai-story-video": {
    category: "Produit IA",
    summary: "Un produit de narration assistée par IA pensé pour rester visuel et simple à explorer.",
    roles: ["Design produit", "Développement front-end", "Parcours IA"],
    contribution: "J'ai transformé le workflow IA en expérience visuelle et développé l'interface pour les créateurs et les storytellers.",
  },
  "webgrade-analyzer": {
    category: "Outil web",
    summary: "Un outil d'audit qui rend les contrôles de performance et de SEO plus lisibles.",
    roles: ["Stratégie produit", "UX design", "Développement JavaScript"],
    contribution: "J'ai structuré le parcours autour des contrôles performance, SEO et sécurité, puis développé l'interface JavaScript.",
  },
  "modern-estate-vision": { category: "Immobilier", summary: "Une plateforme immobilière premium avec une présence pensée pour les investisseurs.", roles: ["Design web", "Développement front-end", "Structure de contenu"] },
  "cleanfile-agency": { category: "Système d'agence", summary: "Une plateforme d'agence structurée pour gagner en crédibilité et préparer l'automatisation.", roles: ["Design dashboard", "Pensée système", "Développement front-end"] },
  "photo-printing-order": { category: "E-commerce", summary: "Un parcours de commande photo avec davantage de contrôle lors de l'édition.", roles: ["UX design", "Interface interactive", "Développement React"] },
  "dent-dental-clinic": { category: "Santé", summary: "Un site de cabinet dentaire conçu pour être calme, clair et rassurant.", roles: ["Design web", "Développement Next.js", "Présentation des services"] },
  "ecommerce-platform": { category: "E-commerce", summary: "Une boutique en ligne moderne centrée sur la rapidité et la fluidité du parcours d'achat.", roles: ["Interface e-commerce", "Développement full-stack", "Parcours d'achat"] },
  "fitlite-ai-fitness": { category: "Application fitness", summary: "Une landing page fitness assistée par IA, conçue pour transmettre de l'énergie et du mouvement.", roles: ["Design de landing page", "Motion design", "Développement front-end"] },
  "ftball-ecommerce": { category: "Commerce sportif", summary: "Une boutique de football conçue pour faciliter la navigation et renforcer la marque.", roles: ["Design de boutique", "Interface commerce", "Développement front-end"] },
  "la-cuisine-restaurant": { category: "Site de restaurant", summary: "Un site de restaurant au rythme élégant, organisé autour de la réservation.", roles: ["Design web", "UX one-page", "Finition interactive"] },
  "lolchat-gaming": { category: "Application IA", summary: "Un chatbot IA basé sur des modèles de langage, avec une interface web et des APIs IA pour des conversations interactives.", roles: ["Développement full-stack", "Intégration d'APIs IA", "Interface web"] },
  "property-investment": { category: "Plateforme d'investissement", summary: "Une landing page d'investissement conçue pour renforcer la confiance et les prises de contact.", roles: ["Design génération de leads", "Structure UI", "Parcours de conversion"] },
  "speed-typer-game": { category: "Jeu", summary: "Un jeu de frappe avec feedback en direct et interface orientée performance.", roles: ["UI de jeu", "Logique interactive", "Feedback de performance"] },
  "sspace-star-map": { category: "Outil interactif", summary: "Une application web d'astronomie intégrant Stellarium Web Engine pour visualiser les objets célestes et explorer les données spatiales.", roles: ["Développement full-stack", "Visualisation de données", "Interface interactive"] },
  "unit-converter": { category: "Outil utilitaire", summary: "Un convertisseur d'unités en temps réel, simple et rapide à utiliser.", roles: ["UX utilitaire", "Design d'outil", "Développement JavaScript"] },
  "wallpaper-generator": { category: "Outil créatif", summary: "Un générateur de fonds d'écran ludique centré sur l'expérimentation visuelle.", roles: ["Creative coding", "Interface interactive", "Expérimentation front-end"] },
  "epic-chicken-adventure": { category: "Jeu", summary: "Une expérience de jeu navigateur allégée et remise en forme pour plus de finition.", roles: ["Présentation de jeu", "Développement Next.js", "UI responsive"] },
};

const englishProjectContributions: Record<string, string> = {
  "lumina-it": "I shaped the brand direction and built the responsive Next.js front end around sharper hierarchy and contrast.",
  "ai-story-video": "I framed the AI workflow as a visual product and built the front end for creators and storytellers.",
  "webgrade-analyzer": "I structured the audit flow around performance, SEO, and security checks, then built the JavaScript UI.",
};

export function getProjectCopy(
  locale: Locale,
  project: { slug: string; title: string; category: string; summary: string; roles: string[] },
) {
  const overrides = locale === "fr" ? frenchProjectCopy[project.slug] : undefined;
  const roles = overrides?.roles ?? project.roles;
  return {
    category: overrides?.category ?? project.category,
    summary: overrides?.summary ?? project.summary,
    roles,
    contribution:
      overrides?.contribution ??
      englishProjectContributions[project.slug] ??
      roles.slice(0, 2).join(" · "),
    alt: locale === "fr" ? `Aperçu du projet ${project.title}` : `Preview of ${project.title}`,
  };
}
