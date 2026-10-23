export const profile = {
  name: "Anas Abdur",
  profession: "Full Stack Web Developer",
  email: "anas.abdrohim@gmail.com",
  location: "Indonesia",
  linkedin: {
    link: "https://www.linkedin.com/in/anasabdur/",
    user: "Anas Abdur"
  },
  github: "anasark",
  repository: "https://github.com/anasark/portfolio",
  resume: "/Anas-Abdur-Rohim-Resume.pdf",
  summary: [
    "Full-stack developer with 8+ years of experience building web applications with PHP (Laravel, CodeIgniter, Yii2) and JavaScript (Vue, React). I built automation bots and bank integration services for Flip, spent 4+ years on Niagahoster's hosting platform (now Hostinger), and ship products end to end, including AI features.",
    "Recently I built eco-commerce.id, a multi-vendor marketplace for a village community, and CatatDuit, a personal finance app with an AI assistant that works with any LLM provider. Based in Indonesia (UTC+7) and open to remote work."
  ],
  points: [
    {
      title: "Backend & APIs",
      description: "Laravel, CodeIgniter and Go services with documented REST APIs.",
      icon: "CodeBracketIcon"
    },
    {
      title: "Frontend & PWA",
      description: "Vue, React and Livewire interfaces that install on phones as PWAs.",
      icon: "GlobeAltIcon"
    },
    {
      title: "AI integration",
      description: "LLM features with OpenAI, Anthropic, Gemini and OpenRouter: chat, structured output and receipt scanning.",
      icon: "CubeTransparentIcon"
    },
    {
      title: "Integrations",
      description: "Bank, payment and third-party integrations, including bank-statement automation.",
      icon: "CubeTransparentIcon"
    },
    {
      title: "Testing & CI",
      description: "Automated tests with Pest, PHPUnit, Vitest and Playwright, plus CI pipelines.",
      icon: "BugAntIcon"
    },
    {
      title: "Deploy & maintain",
      description: "Docker, cloud and shared-hosting deployments, and long-term maintenance.",
      icon: "WrenchScrewdriverIcon"
    }
  ]
};

export const resume = {
  education: [
    {
      date: "2013 - 2018",
      level: "Bachelor's Degree in Informatics Engineering (Teknik Informatika)",
      school: "Maulana Malik Ibrahim State Islamic University",
      location: "Malang, Indonesia"
    }
  ],
  experience: [
    {
      date: "Sept 2025 - Now",
      company: "Integra Teknologi Solusi",
      position: "Full Stack Developer",
      location: "Surabaya, Indonesia",
      description: [
        "Built a URL-shortener module with CodeIgniter 4 and PostgreSQL.",
        "Migrated a legacy database to a new schema and fixed data and application issues after the migration.",
        "Develop new backend endpoints and improve existing features while keeping the application stable for daily use."
      ]
    },
    {
      date: "2024 - Now",
      company: "Self-employed",
      position: "Freelance Full Stack Developer",
      location: "Remote",
      description: [
        "Designed, built and deployed eco-commerce.id as the sole developer.",
        "Build features on call for returning clients, scoped per feature: e-ujian.id, client.morclinic.id and Ratson Inventory."
      ]
    },
    {
      date: "Sept 2024 - March 2025",
      company: "Skyshi Digital Indonesia (placed at Flip)",
      position: "Full Stack Developer (Contract)",
      location: "Jakarta, Indonesia",
      description: [
        "Built browser-automation bots that collect bank statements from multiple Indonesian banks and upload them into Flip's system (JavaScript, Shell).",
        "Developed INT Parsing Service, a Go microservice that parses bank-statement CSV files into structured records for reconciliation.",
        "Developed BNI Adapter, a Go service that connects Flip with Bank BNI's API for requests and transactions.",
        "Developed features in Flip Server, the core backend (Yii2, MySQL, Redis, Docker), and in Bangkokok, the internal dashboard staff use to manage transactions (Next.js)."
      ]
    },
    {
      date: "Jun 2024 - Sept 2024",
      company: "IVOJI",
      position: "Full Stack Developer",
      location: "Jakarta, Indonesia",
      description: [
        "Developed features for a Laravel + Vue.js PWA that also served as the company's mobile app, and for its Laravel + Vue.js admin system.",
        "Maintained the application infrastructure on Alibaba Cloud."
      ]
    },
    {
      date: "Sept 2023 - Jan 2024",
      company: "Oceanhoster",
      position: "Full Stack Developer (Contract)",
      location: "Yogyakarta, Indonesia",
      description: [
        "Revamped the customer client area.",
        "Built new features under per-feature contracts and optimized them for performance and responsiveness."
      ]
    },
    {
      date: "Mar 2019 - Aug 2023",
      company: "Niagahoster (now Hostinger)",
      position: "Full Stack Developer",
      location: "Yogyakarta, Indonesia",
      description: [
        "Built and maintained the landing pages and order flow customers use to buy hosting products.",
        "Developed the admin area and client area of the BoxBilling billing system.",
        "Developed Niagahoster Partner and its WordPress plugin.",
        "Worked on internal services for domain and VPS products (cApi, hDomain, hVps), including REST APIs and third-party integrations.",
        "Connected Niagahoster's systems with Hostinger's and fixed issues on the Hostinger side.",
        "Named Best Team Member of Engineering twice (Q3 2020, Q2 2022)."
      ]
    },
    {
      date: "Feb 2018 - Jan 2019",
      company: "PT. Spora Optima Global",
      position: "Web Developer",
      location: "Malang, Indonesia",
      description: [
        "Designed, built and maintained websites, including performance tuning and bug fixes."
      ]
    },
    {
      date: "Dec 2015 - Jan 2016",
      company: "PT. PLN (Persero)",
      position: "Web Developer (Internship)",
      location: "Malang, Indonesia",
      description: [
        "Developed new features and fixed bugs."
      ]
    }
  ],
  skill: ["PHP", "Go", "JavaScript", "TypeScript", "SQL", "Python", "HTML", "CSS"],
  skills: {
    "Languages": "PHP, JavaScript, TypeScript, Go, SQL, HTML, CSS, Shell",
    "Backend": "Laravel, Livewire, CodeIgniter 4, Yii2, Go Fiber, Node.js, REST API design, OpenAPI / Swagger",
    "Frontend": "Vue 3, Nuxt, Pinia, React, Next.js, Ember.js, Tailwind CSS, Bootstrap, jQuery, PWA",
    "Data & messaging": "MySQL, PostgreSQL, MariaDB, Redis, Memcached, Elasticsearch, RabbitMQ, Google Pub/Sub",
    "DevOps & cloud": "Docker, Git, GitHub Actions, Jenkins, Kibana, Alibaba Cloud, Google Cloud Platform, Linux servers, cPanel",
    "Testing": "Pest, PHPUnit, Vitest, Playwright",
    "AI": "LLM APIs (OpenAI, Anthropic, Google Gemini, OpenRouter), structured output, vision"
  },
  knowledge: [
    "Laravel", "Livewire", "CodeIgniter", "Yii2", "Go Fiber", "Vue.js", "Nuxt", "React", "Next.js", "Ember.js",
    "Tailwind CSS", "PWA", "REST APIs", "OpenAPI", "Microservices", "MySQL", "PostgreSQL", "Redis",
    "Elasticsearch", "Kibana", "RabbitMQ", "Google Pub/Sub", "Docker", "GitHub Actions", "Jenkins",
    "Alibaba Cloud", "Google Cloud Platform", "cPanel", "PM2", "PHPUnit", "Pest", "Vitest", "Playwright",
    "LLM APIs", "SASS", "NoSQL"
  ]
};

export const portfolio = [
  {
    name: "EcoCommerce",
    url: "https://eco-commerce.id/",
    status: "live",
    type: "Laravel",
    project: "Web Application",
    framework: "Laravel, VueJS, PWA",
    images: [
      "/images/portfolio/ecocommerce/1.png",
      "/images/portfolio/ecocommerce/2.png"
    ],
    description: [
      "Multi-vendor marketplace where community groups in Rejoagung village sell farm produce, organic fertilizer and recycled crafts. Built and deployed as the sole developer.",
      "Designed the Laravel 13 REST API with a controller → service → repository architecture, per-group roles and permissions (Spatie Permission with teams), token auth (Sanctum) and OpenAPI docs.",
      "Built ordering with QRIS, bank transfer or cash; delivery or pickup with distance-based shipping on a map; PDF invoices; recurring product subscriptions; and scheduled reminders by email and web push.",
      "Built circular-economy tracking from waste deposit to compost to harvest, with printable QR codes on packaging that show where a product came from.",
      "Built the Vue 3 + TypeScript SPA (Vite, Pinia, Tailwind CSS), installable as a PWA, with admin and seller dashboards.",
      "Wrote 800+ automated tests (Pest, Vitest, Playwright) running in GitHub Actions CI."
    ]
  },
  {
    name: "CatatDuit",
    url: "https://catatduit.anasabdur.com/",
    status: "live",
    type: "Laravel",
    project: "Web Application",
    framework: "Laravel, Livewire, PWA, AI",
    images: [
      "/images/portfolio/catatduit/1.png",
      "/images/portfolio/catatduit/2.png",
      "/images/portfolio/catatduit/3.png",
      "/images/portfolio/catatduit/4.png"
    ],
    description: [
      "Personal and household finance app: accounts, income, expenses, transfers, budgets, bill reminders by web push and monthly reports. Installable as a PWA. In development.",
      "AI assistant that turns typed or spoken sentences and receipt photos into transactions, with a confirmation step before anything is saved.",
      "Provider-agnostic LLM layer with adapters for OpenAI, Anthropic, Google Gemini, OpenRouter and any OpenAI-compatible API, with encrypted keys, key rotation with failover and usage quotas.",
      "700+ PHPUnit tests, PHPStan level 7 and CI on GitHub Actions."
    ]
  },
  {
    name: "Narrvio — Media Monitoring Dashboard",
    url: "https://narrvio.ctx.co.id/dashboard",
    status: "live",
    type: "Laravel",
    project: "Web Application (team prototype)",
    framework: "Laravel, VueJs, PostgreSQL, Docker",
    images: [
      "/images/portfolio/monitoring/1.png",
      "/images/portfolio/monitoring/2.png"
    ],
    description: [
      "Team prototype that tracks public sentiment across Indonesia from Facebook, Instagram, TikTok and X. Teammates collect the data and load it into PostgreSQL.",
      "Built the dashboard (Vue 3, Chart.js, Leaflet): sentiment by platform, trend charts, engagement metrics, a province heat map, word clouds, keyword filters and Excel export.",
      "Built the Laravel API with SQL-side aggregation and pagination.",
      "Deployed both apps to a VPS with Docker and Nginx."
    ]
  },
  {
    name: "Shorten Integra",
    url: "https://shorten.integrasolusi.com",
    status: "live",
    type: "CodeIgniter",
    project: "Web Application",
    framework: "CodeIgniter, Bootstrap",
    images: [
      "/images/portfolio/shorten/1.png",
      "/images/portfolio/shorten/2.png"
    ],
    description: [
      "Built an internal URL-shortener web application with CodeIgniter 4 and PostgreSQL."
    ]
  },
  {
    name: "Niagahoster",
    url: "https://niagahoster.co.id",
    status: "live",
    type: "Laravel",
    project: "Web Application",
    framework: "Native PHP, Laravel, VueJS",
    images: [
      "/images/portfolio/niagahoster/1.jpeg"
    ],
    description: [
      "Built and maintained the landing pages and order flow for hosting products.",
      "Developed the BoxBilling admin area and client area.",
      "Developed Niagahoster Partner and its WordPress plugin.",
      "Built REST APIs and third-party integrations.",
      "Connected Niagahoster's systems with Hostinger's and fixed issues on the Hostinger side."
    ]
  },
  {
    name: "E-Ujian",
    url: "https://e-ujian.id",
    status: "live",
    type: "CodeIgniter",
    project: "Web Application",
    framework: "CodeIgniter, Go Fiber, Redis",
    images: [
      "/images/portfolio/eujian/1.png",
      "/images/portfolio/eujian/2.png"
    ],
    description: [
      "Integrated Google Gemini so teachers can generate learning materials, question banks and student assignments.",
      "Built features in the Go (Fiber) student app: exams through Google Forms, e-learning materials, assignments and practice, dynamic menus, and exam re-entry limits with access tracking.",
      "Built a public question bank that other schools can browse and clone.",
      "Added civil-service (CPNS) exam types.",
      "Built per-school custom backgrounds.",
      "Implemented Redis for the exam module.",
      "Improved data reports.",
      "Integrated with e-absensi."
    ]
  },
  {
    name: "E-Absensi",
    url: "https://e-ujian.id/",
    status: "live",
    type: "Laravel",
    project: "Web Application",
    framework: "Laravel, Blade",
    images: [
      "/images/portfolio/eabsensi/1.png",
      "/images/portfolio/eabsensi/2.png"
    ],
    description: [
      "Built a student-attendance web application with Laravel, integrated with e-ujian.id."
    ]
  },
  {
    name: "Morclinic",
    url: "https://client.morclinic.id",
    status: "live",
    type: "Laravel",
    project: "Web Application",
    framework: "Laravel, VueJS",
    images: [
      "/images/portfolio/morclinic/1.png",
      "/images/portfolio/morclinic/2.png"
    ],
    description: [
      "Built the referral feature on the backend.",
      "Built the referral feature on the frontend.",
      "Wrote the API documentation."
    ]
  },
  {
    name: "Point.RED",
    url: "https://point.red/",
    status: "live",
    type: "Laravel",
    project: "Web Application",
    framework: "Laravel, VueJS",
    images: [
      "/images/portfolio/point/1.jpeg",
      "/images/portfolio/point/2.jpeg"
    ],
    description: [
      "Built the delivery-note feature end to end: create, show, edit, approval, export, delete, email, print and history.",
      "Improved sales-visit filtering.",
      "Wrote the API documentation.",
      "Wrote unit tests."
    ]
  },
  {
    name: "Ratson Inventory",
    url: "https://inventory.ratson.com",
    status: "archived",
    type: "Laravel",
    project: "Web Application",
    framework: "Laravel, Blade",
    images: [
      "/images/portfolio/ratson/1.jpeg",
      "/images/portfolio/ratson/2.jpeg"
    ],
    description: [
      "Built the master product feature.",
      "Built the purchase order feature.",
      "Built the stock inventory feature.",
      "Built the reports.",
      "Added three user roles (owner, admin, staff)."
    ]
  },
  {
    name: "Super Caderization",
    url: "https://supercaderization.com/",
    status: "archived",
    type: "Laravel",
    project: "Web Application",
    framework: "Laravel, Livewire",
    images: [
      "/images/portfolio/supercaderization/1.png",
      "/images/portfolio/supercaderization/2.png"
    ],
    description: [
      "Built a simple job portal for recruiters and job seekers."
    ]
  },
  {
    name: "DMentor College",
    url: "https://dmentorcollege.com",
    status: "archived",
    type: "Laravel",
    project: "Web Application",
    framework: "Laravel, Blade",
    images: [
      "/images/portfolio/vhs/1.jpeg",
      "/images/portfolio/vhs/2.jpeg"
    ],
    description: []
  },
  {
    name: "UPT Pengembangan Benih Hortikultura",
    url: "http://pbh.pertanian.jatimprov.go.id/",
    status: "live",
    type: "WordPress",
    project: "Company Profile",
    framework: "WordPress",
    images: [
      "/images/portfolio/upt-pbh/1.jpeg",
      "/images/portfolio/upt-pbh/2.jpeg"
    ],
    description: ["Built a company profile site with WordPress."]
  },
  {
    name: "Sanko",
    url: "https://isolasi.co.id/",
    status: "archived",
    type: "WordPress",
    project: "Company Profile",
    framework: "WordPress",
    images: [
      "/images/portfolio/sanko/1.jpeg",
      "/images/portfolio/sanko/2.jpeg"
    ],
    description: ["Built a company profile site with WordPress."]
  },
  {
    name: "Toko Rohani",
    url: "https://jualsouvenirkatolik.com/",
    status: "archived",
    type: "WordPress",
    project: "Online Store",
    framework: "WordPress",
    images: [
      "/images/portfolio/souvenir/1.jpeg",
      "/images/portfolio/souvenir/2.jpeg"
    ],
    description: ["Built a simple online store with WordPress and WooCommerce."]
  }
];
