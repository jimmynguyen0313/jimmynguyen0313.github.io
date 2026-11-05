// ─────────────────────────────────────────────────────────────
//  Site content. Edit this file to update the portfolio —
//  no HTML changes needed.
// ─────────────────────────────────────────────────────────────

window.SITE = {
  name: "Jimmy Nguyen",
  title: "Software Engineer",
  location: "San Jose, CA",

  // Put a square photo at assets/profile.jpg and set this to "assets/profile.jpg".
  // While it's null, your initials are shown instead.
  photo: null,

  bio: [
    "I'm a software engineer who likes building things end to end — from the database and API to the interface people actually use.",
    "I graduated from UC Davis with a B.S. in Computer Science and I'm now pursuing an M.S. in Computer Science at Georgia Tech, specializing in artificial intelligence. At Apple, I build full-stack internal tools and test automation, from FastAPI services and single sign-on to Kubernetes deployments.",
  ],

  links: {
    github: "https://github.com/jimmynguyen0313",
    linkedin: "https://www.linkedin.com/in/jimmynguyen0313",
    email: "jimmynguyen0765@gmail.com",
    // Drop a PDF at assets/resume.pdf and set this to "assets/resume.pdf".
    resume: null,
  },
};

// ─────────────────────────────────────────────────────────────
//  Projects — shown in this order. Every field except
//  name and description is optional:
//    images: screenshots (shown as a gallery)
//    demo:   live demo URL ("Live Demo" button)
//    repo:   source code URL ("Code" button)
//    note:   small caption under the buttons
// ─────────────────────────────────────────────────────────────

window.PROJECTS = [
  {
    name: "Pokémon Sealed Inventory Tracker",
    date: "Jan 2026",
    description:
      "A full-stack app for tracking a Pokémon sealed-product collection: quantities, purchase prices and market value, all in one dashboard.",
    highlights: [
      "FastAPI REST backend with inventory CRUD and category management",
      "Caches market prices from an external pricing API for portfolio valuation",
      "SQLite schema with indexes for fast search and aggregation",
      "React frontend for product search, inventory updates and value tracking",
    ],
    tags: ["React", "Python", "FastAPI", "SQLite"],
    images: [
      { src: "assets/projects/pokemon-search.webp", alt: "Portfolio value summary and product search results" },
      { src: "assets/projects/pokemon-inventory.webp", alt: "Inventory cards showing purchase price, market value and totals" },
    ],
    demo: "https://jimmynguyen0313.github.io/pokemon-inventory",
    repo: "https://github.com/jimmynguyen0313/pokemon-inventory",
    note: "The demo's API runs on a free tier, so the first load can take about 30 seconds.",
  },
  {
    name: "Credit Score Evaluation",
    date: "Mar 2025",
    description:
      "A machine learning model that predicts credit scores from financial and demographic data, presented on a web page built by a team of five that I led.",
    highlights: [
      "Engineered features combining financial history, demographics and other credit signals",
      "Trained and compared scikit-learn models, including multinomial logistic regression",
      "Evaluated models on F1-score, precision and recall; the final model reached 95% accuracy",
    ],
    tags: ["Python", "scikit-learn", "HTML/CSS", "JavaScript"],
  },
];

// ─────────────────────────────────────────────────────────────
//  Experience & education
// ─────────────────────────────────────────────────────────────

window.EXPERIENCE = [
  {
    role: "Software Support Engineer",
    org: "Apple",
    detail: "Career Experience",
    date: "Jun 2026 – Present",
    points: [
      "Designed and built a full-stack internal web app (Python, FastAPI, PostgreSQL) used across retail locations to provision hardware devices, replacing a manual process with self-service.",
      "Implemented OAuth/OIDC single sign-on with role-based access control and deployed to Kubernetes through automated CI/CD and GitOps-style delivery.",
      "Resolved production reliability issues, including a memory-exhaustion crash and a gateway-timeout failure, with concurrency controls and infrastructure fixes.",
      "Built a Python QA automation framework with AI-driven visual validation to test iOS/iPadOS apps across 10+ locales.",
    ],
  },
];

window.EDUCATION = [
  {
    school: "Georgia Institute of Technology",
    degree: "M.S. Computer Science · Artificial Intelligence",
    date: "Expected Jun 2028",
  },
  {
    school: "University of California, Davis",
    degree: "B.S. Computer Science",
    date: "Jun 2024",
  },
];

window.SKILLS = {
  Languages: ["Python", "JavaScript", "TypeScript", "C/C++", "Java", "HTML/CSS", "Erlang", "MATLAB"],
  "Frameworks & Tools": ["React", "FastAPI", "TensorFlow", "scikit-learn", "Playwright", "Docker", "Kubernetes", "Git"],
  "Data & Infra": ["PostgreSQL", "SQLite", "REST APIs", "CI/CD", "OAuth/OIDC"],
};
