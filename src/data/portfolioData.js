// portfolioData.js
// Source of truth synchronized strictly with Subasree M's resume and verified project materials.

export const portfolioData = {
  personal: {
    name: "Subasree M",
    title: "Software Engineer & AI Application Developer",
    institution: "SRM IST - Ramapuram",
    degree: "B.Tech in Computer Science and Engineering (Big Data Analytics)",
    cgpa: "9.12 / 10",
    graduationYear: "2027",
    summary:
      "Final-year Computer Science and Engineering undergraduate specializing in Big Data Analytics, with hands-on experience in Python, JavaScript, AI application development, and full-stack engineering. Experienced in building AI-powered learning applications, REST APIs, and web applications. Passionate about Generative AI, LLM integration, software engineering, and developing reliable, practical technology solutions.",
    email: "subasree24june@gmail.com",
    academicEmail: "sm2444@srmist.edu.in",
    phone: "+91 9344571578",
    location: "Chennai, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/subasree-m-a445942a2",
    github: "https://github.com/suba-2406",
    resumeUrl: "/Subasree_Resume.pdf",
    photoUrl: "/profile.jpg",
  },

  hero: {
    tagline: "Building intelligent, scalable, and user-centered digital applications.",
    description:
      "Final-year Computer Science and Engineering undergraduate specializing in Big Data Analytics, with hands-on experience in Python, JavaScript, AI application development, and full-stack engineering. Specializing in AI applications, FastAPI backends, and full-stack solutions.",
  },

  skills: {
    categories: [
      {
        title: "Programming Languages",
        description: "Core languages for systems, algorithms, and application development",
        skills: [
          { name: "Python", highlight: true },
          { name: "JavaScript", highlight: true },
          { name: "SQL", highlight: true },
        ],
      },
      {
        title: "AI, ML & Generative AI",
        description: "Intelligent systems, NLP modeling, and context retrieval",
        skills: [
          { name: "Machine Learning", highlight: true },
          { name: "Natural Language Processing (NLP)", highlight: true },
          { name: "Generative AI", highlight: true },
          { name: "Large Language Models (LLMs)", highlight: true },
          { name: "Retrieval-Augmented Generation (RAG)", highlight: true },
          { name: "Vector Search", highlight: true },
        ],
      },
      {
        title: "Frontend & UI/UX Design",
        description: "Modern web architecture, component systems, and design thinking",
        skills: [
          { name: "React.js", highlight: true },
          { name: "Tailwind CSS", highlight: true },
          { name: "HTML5 & CSS3", highlight: false },
          { name: "UI/UX Design Thinking", highlight: true },
          { name: "Figma Prototyping", highlight: false },
          { name: "Responsive Design", highlight: false },
        ],
      },
      {
        title: "Backend & REST APIs",
        description: "Server architecture, API workflows, and microservices",
        skills: [
          { name: "FastAPI", highlight: true },
          { name: "Node.js", highlight: true },
          { name: "Express.js", highlight: true },
          { name: "Flask", highlight: false },
          { name: "REST APIs", highlight: true },
          { name: "API Integration", highlight: false },
        ],
      },
      {
        title: "Databases & Storage",
        description: "Relational, document, and vector database management",
        skills: [
          { name: "PostgreSQL", highlight: true },
          { name: "MongoDB", highlight: true },
          { name: "MySQL", highlight: false },
          { name: "Vector Stores", highlight: false },
        ],
      },
      {
        title: "Data Analytics, Cloud & Tools",
        description: "Analytics pipelines, version control, and cloud platforms",
        skills: [
          { name: "Pandas & NumPy", highlight: true },
          { name: "AWS Cloud Foundations", highlight: true },
          { name: "Power BI", highlight: false },
          { name: "Docker", highlight: true },
          { name: "Git & GitHub", highlight: false },
          { name: "Excel Analytics", highlight: false },
        ],
      },
    ],
    coreFundamentals: [
      "Data Structures and Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Debugging & System Optimization",
      "Problem Solving & Analytical Thinking",
    ],
  },

  projects: [
    {
      id: "aviora",
      priority: 1,
      title: "Aviora — AI Personalized Learning Platform",
      category: "AI Application · EdTech",
      shortDescription:
        "An AI-driven personalized education platform built to provide tailored concept clarification, study planning, and real-time student assistance.",
      fullDescription:
        "Aviora is an intelligent learning environment developed to solve educational stagnation by analyzing individual learner pacing. It integrates machine learning classifiers for real-time topic recognition and query assistance.",
      contribution:
        "Engineered the core AI chatbot using NLP (TF-IDF vectorization and Naive Bayes) for precise topic identification. Designed responsive user interfaces, question-answering workflows, and clean study navigation to reduce cognitive load.",
      tech: ["Python", "NLP", "Machine Learning", "TF-IDF", "Naive Bayes", "React.js", "Tailwind CSS"],
      github: "https://github.com/suba-2406",
      demo: null,
      status: "Implemented & Evaluated",
      highlights: [
        "Chatbot topic classification using TF-IDF & Naive Bayes",
        "Adaptive student guidance and personalized learning flows",
        "Clean, accessible interface designed for focused studying",
      ],
      caseStudy: {
        problem:
          "Traditional digital learning resources offer generic, one-size-fits-all content. Students frequently struggle with topic disorientation and lack immediate, tailored clarification when tackling complex concepts.",
        targetUsers:
          "University and secondary school students seeking individualized study guidance, self-paced learning support, and rapid concept lookup.",
        goals: [
          "Deliver dynamic concept identification from natural language queries.",
          "Provide personalized learning recommendations based on student queries.",
          "Design a distraction-free, accessible study interface suitable for extended sessions.",
        ],
        designDecisions: [
          "Information Architecture: Placed conversational assistance side-by-side with syllabus modules to eliminate context switching.",
          "Typography & Contrast: Selected warm neutral surfaces and legible typography to minimize eye strain during long study periods.",
          "Feedback Indicators: Provided explicit system state feedback while processing natural language queries.",
        ],
        technicalArchitecture:
          "Python backend with scikit-learn NLP pipeline utilizing TF-IDF vectorization and a Naive Bayes classifier. Frontend built with React.js and modular CSS for fluid user interaction.",
        challenges: [
          "Challenge: Ambiguous short queries leading to classification misfires. Solution: Preprocessed queries with n-gram tokenization and domain-specific stopwords.",
        ],
      },
    },
    {
      id: "mnemo",
      priority: 2,
      title: "MNEMO — AI-Powered Context Engine",
      category: "AI Architecture & Backend Systems",
      shortDescription:
        "A high-performance context retrieval and storage engine supporting backend AI workflows, vector search, and structured data ingestion.",
      fullDescription:
        "MNEMO serves as an intelligent backend infrastructure layer that indexes unstructured documents and powers context-aware LLM retrieval with low latency.",
      contribution:
        "Contributed to backend API development using Python and FastAPI. Engineered data ingestion pipelines, vector embeddings indexing, user authentication, and PostgreSQL integration in a Docker-containerized environment.",
      tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "Embeddings", "Vector Search", "REST APIs"],
      github: "https://github.com/suba-2406",
      demo: null,
      status: "Active Engineering Contribution",
      highlights: [
        "Asynchronous FastAPI REST endpoints for high throughput",
        "Containerized with Docker for modular service isolation",
        "PostgreSQL persistence with vector embeddings indexing",
        "Secure token authentication and ingestion pipelines",
      ],
      caseStudy: {
        problem:
          "Generative AI models suffer from hallucinations and context limits when queried across private, heterogeneous organizational data without a dedicated retrieval architecture.",
        targetUsers:
          "Developers, LLM applications, and automated workflows requiring rapid, validated semantic retrieval over proprietary datasets.",
        goals: [
          "Build robust data ingestion endpoints supporting diverse document payloads.",
          "Facilitate semantic vector similarity search with millisecond latency.",
          "Ensure secure multi-tenant access through role-based JWT authentication.",
        ],
        designDecisions: [
          "API Design: Followed strict OpenAPI specifications with Pydantic schema validation for predictable developer onboarding.",
          "Error Ergonomics: Formatted API error responses with actionable remediation suggestions.",
        ],
        technicalArchitecture:
          "FastAPI asynchronous framework orchestrating data ingestion, text chunking, and vector embedding generation, connected to PostgreSQL and executed via Docker Compose.",
        challenges: [
          "Challenge: Handling concurrent ingestion requests without blocking search endpoints. Solution: Leveraged Python asyncio and non-blocking database connections.",
        ],
      },
    },
    {
      id: "jwt-auth",
      priority: 3,
      title: "JWT Authentication & Protected Routes",
      category: "Full-Stack Web Engineering & Security",
      shortDescription:
        "A secure, end-to-end full-stack authentication system featuring bcrypt password hashing, token validation, and protected frontend-backend route guards.",
      fullDescription:
        "A complete authentication architecture built to protect sensitive user records, provide secure credential validation, and handle stateless session lifecycles gracefully.",
      contribution:
        "Built the full-stack authentication system from scratch: user registration, login, logout, bcrypt password hashing, JWT generation, HTTP middleware verification, MongoDB schema design, and client-side route protection.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Tailwind CSS"],
      github: "https://github.com/suba-2406",
      demo: null,
      status: "Completed & Verified",
      highlights: [
        "Bcrypt salted password hashing with secure salt rounds",
        "JWT signature generation and validation middleware",
        "Protected React router guards with automated expiry redirects",
        "Sanitized MongoDB schema inputs preventing injection vulnerabilities",
      ],
      caseStudy: {
        problem:
          "Modern web applications require secure, frictionless user authentication that guards private data without frustrating users with clunky login loops.",
        targetUsers:
          "Web application end-users requiring secure self-service account management, and frontend client apps consuming protected API resources.",
        goals: [
          "Implement zero-trust route protection across both client and server boundaries.",
          "Eliminate plaintext credential vulnerabilities with modern cryptographic hashing.",
          "Deliver responsive, accessible login and registration interfaces.",
        ],
        designDecisions: [
          "Form Ergonomics: Inline validation with accessible ARIA labels and immediate user error feedback.",
          "Session States: Seamless redirects to intended destination post-login with friendly expiration notices.",
        ],
        technicalArchitecture:
          "Express.js REST API with custom auth middleware, MongoDB Atlas for user persistence, and React Context API for global authentication state management.",
        challenges: [
          "Challenge: Secure token storage avoiding XSS and CSRF exposure. Solution: Enforced strict payload verification and structured token authorization headers.",
        ],
      },
    },
    {
      id: "retail-analytics",
      priority: 4,
      title: "Retail Sales Analysis & Predictive Modeling",
      category: "Data Analytics & Machine Learning",
      shortDescription:
        "An end-to-end analytics and prediction project analyzing retail sales patterns, seasonality, and demand forecasting.",
      fullDescription:
        "A data science pipeline that preprocesses multi-year retail transactions, analyzes seasonal sales dynamics, and trains predictive models to anticipate inventory requirements.",
      contribution:
        "Performed data cleaning, missing value imputation, and exploratory data analysis. Built predictive regression models using Python, Scikit-Learn, and Pandas, and generated visual performance reports.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Data Visualization", "Power BI / Matplotlib"],
      github: "https://github.com/suba-2406",
      demo: null,
      status: "Completed",
      highlights: [
        "Comprehensive exploratory data analysis and outlier treatment",
        "Feature engineering including lag variables and moving averages",
        "Model evaluation using RMSE, MAE, and R² metrics",
        "Clear analytical charts communicating business trends",
      ],
      caseStudy: {
        problem:
          "Retail businesses experience revenue losses and inventory stockouts due to inaccurate demand forecasting and unoptimized supply stocking.",
        targetUsers:
          "Retail inventory managers, operations analysts, and business decision-makers.",
        goals: [
          "Identify seasonal trends and revenue drivers across product categories.",
          "Train baseline and optimized regression models for forward demand forecasting.",
          "Deliver intuitive visualizations for non-technical stakeholders.",
        ],
        designDecisions: [
          "Visual Hierarchy: Prioritized high-impact metrics (total revenue, seasonal variance) at the top of the analytics dashboard.",
          "Accessible Charts: Chosen colorblind-friendly warm palettes with high data-ink ratios.",
        ],
        technicalArchitecture:
          "Jupyter analytics pipeline utilizing Pandas and NumPy for feature transformations, Scikit-Learn for model fitting, and Matplotlib/Power BI for visual reporting.",
        challenges: [
          "Challenge: Severe seasonal skew during holiday cycles. Solution: Applied log transformations and engineered holiday-flag features to stabilize variance.",
        ],
      },
    },
    {
      id: "uiux-design-system",
      priority: 5,
      title: "AI Interface Design & Component System",
      category: "UI/UX Engineering & Design Systems",
      shortDescription:
        "A component design system and interaction framework tailored specifically for AI-powered web applications and cognitive accessibility.",
      fullDescription:
        "A design exploration focused on solving user experience friction in AI applications: managing streaming latency, AI confidence indicators, and human-in-the-loop validation.",
      contribution:
        "Designed wireframes, UI components, interaction flows, and a cohesive design token architecture (Terracotta & Sand) emphasizing readability and reduced cognitive load.",
      tech: ["UI/UX Design", "Figma", "Design Tokens", "Responsive Layouts", "Accessibility (WCAG)", "CSS Architecture"],
      github: "https://github.com/suba-2406",
      demo: null,
      status: "Implemented in Portfolio",
      highlights: [
        "Consistent Terracotta & Sand warm neutral color token system",
        "Accessible contrast ratios exceeding WCAG AA standards",
        "Predictable layout patterns for AI chat, prompt inputs, and cards",
        "Fluid responsive design across mobile, tablet, and desktop viewports",
      ],
      caseStudy: {
        problem:
          "Many AI products use dark, neon-heavy, or cluttered templates that cause visual fatigue and obscure actual functionality. AI tools require clear mental models for uncertainty, latency, and outputs.",
        targetUsers:
          "Professionals, students, and recruiters interacting with intelligent web products.",
        goals: [
          "Establish an editorial-grade design system balancing warm aesthetics and engineering rigor.",
          "Ensure 100% responsive ergonomics across all screen breakpoints.",
          "Eliminate jarring transitions in favor of purposeful, subtle feedback.",
        ],
        designDecisions: [
          "Warm Neutral Foundation: Replaced harsh pure darks with `#FAF5EF` and `#49352D` for high readability and warmth.",
          "Terracotta Accentuation: Used `#A85F45` deliberately for key calls-to-action to establish visual hierarchy without sensory overload.",
          "Component Reusability: Built modular cards, badges, and drawers with unified spacing variables.",
        ],
        technicalArchitecture:
          "Tailwind CSS custom configuration mapped to semantic tokens, coupled with modular React components and accessible HTML5 semantics.",
        challenges: [
          "Challenge: Balancing high contrast with a soft, warm aesthetic. Solution: Validated all typography pairings against WCAG 2.1 AA contrast standards.",
        ],
      },
    },
    {
      id: "sportify",
      priority: 6,
      title: "SPORTIFY — Athlete Networking & Analytics Platform",
      category: "Full-Stack Web & Real-Time Support",
      shortDescription:
        "A dedicated professional networking platform designed for athletes, featuring interactive analytics dashboards and a real-time support chatbot.",
      fullDescription:
        "SPORTIFY connects athletes, coaches, and sports organizations. Built with React.js frontend and Flask REST API backend, it delivers profile management, performance visualization dashboards, and an automated assistant with 90% query accuracy.",
      contribution:
        "Engineered the full-stack architecture with React.js, Flask, and MySQL. Integrated analytics dashboards for user profile management, resulting in 30% improved user engagement, and developed a real-time support chatbot achieving 90% query accuracy.",
      tech: ["React.js", "Flask", "Python", "MySQL", "REST APIs", "Tailwind CSS"],
      github: "https://github.com/suba-2406",
      demo: null,
      status: "Completed & Verified",
      highlights: [
        "Full-stack React.js client integrated with Python Flask REST endpoints",
        "Interactive dashboards for athletic profile management and performance metrics",
        "90% query accuracy chatbot for real-time user assistance and communication",
        "Relational MySQL schema design with normalized tables and fast lookups",
      ],
      caseStudy: {
        problem:
          "Athletes lack specialized networking ecosystems to showcase verified performance metrics, discover opportunities, and connect directly with scouts and teams.",
        targetUsers:
          "Athletes, sports trainers, athletic organizations, and talent scouts seeking structured performance portfolios.",
        goals: [
          "Provide customizable athletic profile dashboards with visual performance metrics.",
          "Deliver responsive, low-latency REST APIs for profile updates and search.",
          "Integrate an automated conversational assistant for rapid member support.",
        ],
        designDecisions: [
          "Profile Ergonomics: Card-based athletic stat blocks allowing scouts to scan key metrics in seconds.",
          "Conversational Drawer: Embedded assistance drawer accessible across all screens without interrupting navigation.",
        ],
        technicalArchitecture:
          "Modular React.js frontend communicating via Axios with a Python Flask REST API server, backed by MySQL database storage for profiles, stats, and messages.",
        challenges: [
          "Challenge: Dynamic aggregation of heterogeneous athletic statistics across sports disciplines. Solution: Designed flexible relational schemas with normalized attribute tables.",
        ],
      },
    },
    {
      id: "crop-disease-prediction",
      priority: 7,
      title: "Crop Disease Prediction System for Smart Agriculture",
      category: "Computer Vision & Machine Learning",
      shortDescription:
        "An AI-powered computer vision system that classifies agricultural crop diseases from leaf images to enable rapid diagnosis and intervention.",
      fullDescription:
        "A smart agriculture machine learning tool designed to diagnose crop pathology early. Utilizing OpenCV for image preprocessing and feature extraction combined with supervised classifiers, it delivers prompt diagnosis for agricultural health management.",
      contribution:
        "Developed the end-to-end image classification pipeline in Python. Used OpenCV for preprocessing, contour detection, and feature extraction (improving detection accuracy by 15%), and built model evaluation workflows for rapid field diagnosis.",
      tech: ["Python", "Machine Learning", "OpenCV", "Scikit-Learn", "NumPy", "Image Processing"],
      github: "https://github.com/suba-2406",
      demo: null,
      status: "Completed & Evaluated",
      highlights: [
        "OpenCV preprocessing pipeline with adaptive thresholding and contour extraction",
        "15% improvement in pathological feature detection accuracy",
        "Automated leaf pathology classification enabling prompt agricultural intervention",
        "Reproducible data pipeline for diverse leaf disease datasets",
      ],
      caseStudy: {
        problem:
          "Agricultural crop diseases often go unnoticed until irreversible leaf damage occurs, resulting in severe crop yield loss and economic hardship for farmers.",
        targetUsers:
          "Farmers, agronomists, and agricultural extension officers requiring rapid, accessible crop disease diagnosis.",
        goals: [
          "Build an automated image processing pipeline for diseased leaf feature extraction.",
          "Train accurate classification models capable of distinguishing subtle disease patterns.",
          "Enable accessible, fast diagnostic outputs for early treatment intervention.",
        ],
        designDecisions: [
          "Visual Feedback: Color-coded severity indicators showing affected leaf surface areas clearly.",
          "Practical Diagnostics: Paired disease classification with clear, non-technical treatment guidelines.",
        ],
        technicalArchitecture:
          "Python pipeline utilizing OpenCV for color-space transformation (RGB to HSV), noise reduction, and edge detection, followed by feature extraction and Scikit-Learn classification.",
        challenges: [
          "Challenge: Variable ambient lighting and background clutter in field photos. Solution: Applied adaptive histogram equalization (CLAHE) and background segmentation.",
        ],
      },
    },
  ],

  experience: [
    {
      company: "Excelencia",
      role: "AI Engineer",
      type: "Part-time",
      period: "Sep 2026 – Nov 2026",
      location: "Chennai, India",
      summary:
        "Contributing to backend API workflows and data architecture for a context-engine application.",
      responsibilities: [
        "Contributing to the development of a context-engine application using Python and FastAPI, supporting backend API workflows.",
        "Working with data ingestion, search, embeddings, authentication, and PostgreSQL within a Docker-based development environment.",
        "Collaborating on database schema design and endpoint performance optimization.",
      ],
      skills: ["Python", "FastAPI", "PostgreSQL", "Docker", "Embeddings", "Vector Search", "REST APIs"],
    },
    {
      company: "Thiranex",
      role: "Data Science Intern",
      type: "Internship",
      period: "June 2026 – Aug 2026",
      location: "Chennai, India",
      summary:
        "Built and tested predictive machine learning models and developed data preprocessing workflows.",
      responsibilities: [
        "Built and evaluated predictive machine learning models using statistical tools, Scikit-Learn, and Python.",
        "Developed data preprocessing and feature engineering pipelines using Pandas and NumPy to prepare datasets for model training.",
        "Analyzed feature correlations, cleaned complex datasets, and evaluated model performance across standard evaluation metrics.",
      ],
      skills: ["Python", "Data Science", "Machine Learning", "Pandas", "NumPy", "Scikit-Learn"],
    },
    {
      company: "Upstride",
      role: "AI Engineer",
      type: "Part-time",
      period: "Jan 2026 – Mar 2026",
      location: "Chennai, India",
      summary:
        "Developed and evaluated AI/ML models using Python for real-world application workflows.",
      responsibilities: [
        "Developed and evaluated AI/ML models using Python for real-world applications.",
        "Built and optimized data preprocessing workflows to improve model reliability and efficiency.",
        "Analyzed feature correlations and model validation metrics to support algorithmic decisions.",
      ],
      skills: ["Python", "Machine Learning", "Data Preprocessing", "Model Evaluation", "Scikit-Learn"],
    },
  ],

  education: [
    {
      institution: "SRM IST - Ramapuram",
      degree: "B.Tech in Computer Science and Engineering",
      specialization: "Specialization in Big Data Analytics",
      period: "Aug 2023 – May 2027",
      score: "CGPA: 9.12 / 10",
      status: "Final-Year Undergraduate",
      coursework: [
        "Data Structures and Algorithms (DSA)",
        "Database Management Systems (DBMS)",
        "Big Data Analytics",
        "Object-Oriented Programming (OOP)",
        "Web Technologies",
        "Artificial Intelligence & Machine Learning",
      ],
    },
    {
      institution: "Vani Vidyalaya Senior Secondary and Junior College",
      degree: "Higher Secondary Certificate (Class XII - CBSE)",
      specialization: "MPC (Mathematics, Physics, Chemistry)",
      period: "Jan 2022 – Jan 2023",
      score: "Percentage: 63.8%",
      status: "Completed",
      coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    },
    {
      institution: "Vani Vidyalaya Senior Secondary and Junior College",
      degree: "Secondary School Examination (Class X - CBSE)",
      specialization: "All Subjects",
      period: "Jan 2020 – Jan 2021",
      score: "Percentage: 85.8%",
      status: "Completed",
      coursework: ["Mathematics", "Science", "Social Science", "English", "Language"],
    },
  ],

  certifications: [
    {
      title: "1st Prize – Aurex’26 Hackathon",
      track: "LSM Track Winner",
      issuer: "Aurex’26",
      year: "2026",
      type: "Award / Competition",
      description:
        "Secured First Prize in the competitive LSM Track for architecting and presenting an innovative AI-driven software solution under hackathon time constraints.",
      credentialUrl: null,
    },
    {
      title: "Research Paper Presentation",
      track: "ICECT 2026",
      issuer: "International Conference on Emerging Trends (ICECT)",
      year: "2026",
      type: "Research / Publication",
      description:
        "Presented technical research at ICECT 2026, demonstrating algorithmic problem formulation and analytical experimentation.",
      credentialUrl: null,
    },
    {
      title: "AWS Academy Graduate — AWS Academy Cloud Foundations",
      track: "Cloud Computing & Infrastructure",
      issuer: "Amazon Web Services (AWS)",
      year: "Verified",
      type: "Professional Certification",
      description:
        "Comprehensive training in AWS Cloud architecture, compute services, IAM security, storage solutions, and global cloud economics.",
      credentialUrl: null,
    },
    {
      title: "Database Management Systems (DBMS)",
      track: "NPTEL Certified",
      issuer: "NPTEL / IIT",
      year: "Academic Certification",
      type: "Academic Certification",
      description:
        "Rigorous verification of relational database architecture, SQL query design, relational algebra, schema normalization, and ACID transaction semantics.",
      credentialUrl: null,
    },
  ],

  achievements: [
    {
      title: "1st Prize Winner — Aurex’26 Hackathon (LSM Track)",
      category: "Hackathon",
      detail:
        "Won First Prize among multidisciplinary engineering teams for building an intelligent solution under rigorous evaluation criteria.",
    },
    {
      title: "Research Paper Presentation — ICECT 2026",
      category: "Research",
      detail:
        "Presented original research paper at the International Conference on Emerging Trends (ICECT 2026).",
    },
    {
      title: "Shortlisted for Centre of Excellence (CoE)",
      category: "Department Merit",
      detail:
        "Selected for the specialized Centre of Excellence under the Computer Science & Engineering Department at SRM IST.",
    },
    {
      title: "High Academic Standing (CGPA: 9.12 / 10)",
      category: "Academics",
      detail:
        "Maintained consistent top-tier academic excellence across all semesters of B.Tech CSE (Big Data Analytics).",
    },
  ],

  designFocus: {
    heading: "AI Generalist: The Intersection of Design & Engineering",
    subheading: "Creating AI products that users can actually understand, trust, and love to use.",
    pillars: [
      {
        title: "User-Centered AI Interactions",
        description:
          "Designing conversational and generative interfaces that handle latency, streaming outputs, and ambiguity with clear system status and feedback.",
      },
      {
        title: "Design Systems & Accessibility",
        description:
          "Crafting unified design token systems (like Terracotta & Sand) with strict WCAG AA contrast, consistent typography, and responsive ergonomics.",
      },
      {
        title: "Frontend Engineering Rigor",
        description:
          "Transforming Figma wireframes into performant, clean React and Tailwind CSS components with zero unnecessary re-renders or layout shifts.",
      },
      {
        title: "Cognitive Load Reduction",
        description:
          "Structuring dense data and AI analytical outputs into digestible visual hierarchies that guide user decisions without cognitive overload.",
      },
    ],
  },
};
