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
  photo: "assets/profile.jpg",

  bio: [
    "I'm a software engineer who likes building things end to end — from the database and API to the interface people actually use.",
    "I graduated from UC Davis with a B.S. in Computer Science and I'm now pursuing an M.S. in Computer Science at Georgia Tech, specializing in artificial intelligence. At Apple, I build full-stack internal tools and test automation, from FastAPI services and single sign-on to Kubernetes deployments.",
  ],

  links: {
    github: "https://github.com/jimmynguyen0313",
    linkedin: "https://www.linkedin.com/in/jimmynguyen0313",
    email: "jimmynguyen0765@gmail.com",
    // Drop a PDF at assets/resume.pdf and set this to "assets/resume.pdf".
    resume: "assets/Jimmy_Nguyen_Resume.pdf",
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
    date: "Jan 2026 · updated Nov 2026",
    description:
      "A full-stack portfolio tracker for sealed Pokémon TCG products: what you paid, what it's worth today, and how its value has changed over time.",
    highlights: [
      "Portfolio analytics: unrealized gain/loss, per-item return, allocation and a 24-month value history from a price-history model",
      "Cut API latency at 10,000 holdings by up to 4× (74 → 19 ms) by moving aggregation into SQL and grouping holdings before valuing them",
      "99% backend and 90% frontend test coverage (46 tests), enforced in GitHub Actions CI",
      "React dashboard with hand-built SVG charts; Lighthouse 100 in all four categories",
    ],
    tags: ["React", "Python", "FastAPI", "SQLite", "GitHub Actions"],
    images: [
      { src: "assets/projects/pokemon-dashboard.webp", alt: "Portfolio totals and value-over-time chart" },
      { src: "assets/projects/pokemon-holdings.webp", alt: "Allocation, top movers and sortable holdings table" },
    ],
    demo: "https://jimmynguyen0313.github.io/pokemon-inventory",
    repo: "https://github.com/jimmynguyen0313/pokemon-inventory",
    note: "The demo's API runs on a free tier, so the first load can take about 30 seconds.",
  },
  {
    name: "Credit Score Explorer",
    date: "Mar 2025 · rebuilt 2026",
    description:
      "An interactive ML app that predicts a credit score band, explains which inputs drive it, and finds the smallest change that would improve it. Started as a team project I led and later rebuilt end to end.",
    highlights: [
      "Ordinal gradient-boosting model with monotonic constraints, so more debt or late payments can never improve a prediction",
      "Model-agnostic explanations and what-if search, e.g. \"debt $3,400 → $1,200 moves you to Standard\"",
      "66% accuracy on held-out customers vs. a 53% baseline, evaluated with a customer-level split to avoid leakage",
      "Data cleaning for a deliberately messy 100k-row dataset, with unit tests and a reproducible training pipeline",
    ],
    tags: ["Python", "scikit-learn", "Streamlit", "pandas"],
    images: [
      { src: "assets/projects/credit-explore.webp", alt: "Prediction, drivers and improvement suggestions for a sample profile" },
      { src: "assets/projects/credit-model.webp", alt: "Model comparison table and confusion matrix" },
    ],
    demo: "https://credit-score-project-jphbcd7a8zune8hfdjizno.streamlit.app",
    repo: "https://github.com/jimmynguyen0313/Credit-Score-Project",
    note: "The demo sleeps when idle, so it can take a few seconds to wake up.",
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
    // Optional: a single-color SVG, drawn in the text color so it suits both themes. Delete to hide.
    logo: "assets/logos/apple.svg",
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
