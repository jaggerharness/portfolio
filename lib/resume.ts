export type Job = {
  company: string;
  title: string;
  range: string;
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type CredentialLine = {
  title: string;
  detail?: string;
  description?: string;
};

export const resume = {
  name: "Jagger Harness",
  title: "Senior Full-Stack Engineer",
  summaryParagraphs: [
    "Senior Full-Stack Engineer with 5+ years building and modernizing web, mobile, and cloud-native systems, including enterprise conversational AI and multi-tenant client platforms.",
    "Deep experience in TypeScript, React, Node.js, Flutter, Laravel, and Google Cloud Platform (GCP), plus system design, Terraform, containerized workloads, and CI/CD.",
    "Known for architecture ownership, clear stakeholder communication, and raising standards in testing, developer tooling, and AI-assisted development.",
  ],
  contact: {
    email: "jagger.dev@gmail.com",
    site: {
      label: "jaggerharness.dev",
      href: "https://www.jaggerharness.dev",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/jaggerharness",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jaggerharness/",
    },
  },
  experience: [
    {
      company: "Strategic Education, Inc.",
      title: "Developer, Full-Stack (AI)",
      range: "January 2025 – Present",
      bullets: [
        "Led backend and infrastructure development for enterprise Dialogflow CX chatbot platforms, building distributed TypeScript microservices on Cloud Run and Cloud Run functions with a React frontend.",
        "Upgraded 100+ microservices on Cloud Run functions to the latest Node.js runtime and later consolidated them into approximately eight to twelve Cloud Run services, reducing cold starts and operational overhead; met internal SLO targets during the transition through query optimization, targeted redesigns, and expanded caching.",
        "Provisioned and operated Google Cloud Platform (GCP) infrastructure with Terraform for containerized workloads, including IAM and Workload Identity Federation; raised automated test coverage above 90% on priority services; improved GitLab CI/CD pipelines for testing, deployments, accessibility validation, and Node.js runtime upgrades.",
        "Upgraded a legacy Salesforce Live Agent integration in the custom chatbot stack to a current, supported release with a full production cutover, keeping assistants available through the migration and rebuilding Looker Studio reporting one-to-one so analytics and leadership dashboards stayed equivalent.",
        "Reviewed code for a large contractor engineering team, keeping changes aligned with business requirements and internal engineering standards; worked with product owners and business analysts to add technical acceptance criteria, edge cases, and dependencies to Jira issues so delivery remained traceable to requirements.",
        "Partnered with geographically distributed engineers across multiple time zones on shared roadmaps, aligning delivery from planning through production releases.",
        "Architected systems to satisfy Cloud Architecture Review Board requirements and represented engineering in principal-level technical forums; presented regularly on architecture, tooling, and delivery to engineering and leadership audiences.",
        "Served as a Cursor Champion for AI-assisted development with shared documentation and practices; partnered with other teams to spot where agentic workflows could help, ran hands-on Cursor training, and coached safer agent-assisted coding.",
      ],
    },
    {
      company: "AceOne Technologies",
      title: "Full Stack Software Developer",
      range: "July 2021 – January 2025",
      bullets: [
        "Owned full-stack delivery for multiple client engagements from discovery through production, coordinating 5–6 onsite and 10–12 offshore developers, unblocking work, promoting stronger implementation and testing practices, and keeping releases on schedule.",
        "Facilitated client meetings across discovery, delivery, and support, maintained trusted relationships with customer stakeholders, and partnered with client-side technical staff on shared initiatives from planning through release.",
        "Improved a legacy API by 50–70% average response time through tooling upgrades, query optimization, and database-focused refactors.",
        "Led a multi-month migration of a 10+ year PHP monolith to Laravel, preserving core business logic while restructuring around Laravel conventions, improving maintainability, security, and performance.",
        "Built a city-scale traffic-camera analytics web application (four cities, scheduled email ingestion every twelve hours, 1M+ database records), owning architecture and implementation end-to-end with selective delegation.",
        "Shipped a Flutter fuel-delivery app to both major app stores with Stripe billing and a Laravel admin interface for operations; implemented subscription sync and feature gating so entitlements stayed consistent with Stripe state.",
        "Delivered a conveyor and IoT operator app integrating with hardware; implemented Bluetooth Low Energy in C/C++ on the device module alongside an electrical engineer, reducing reliance on traditional PLC programming for standard workflows.",
      ],
    },
    {
      company: "AceOne Technologies",
      title: "Junior Software Development Intern",
      range: "June 2021 – July 2021",
      bullets: [
        "Investigated and resolved client-reported defects across multiple websites and applications while performing routine maintenance on varied technology stacks.",
        "Collaborated with project management and engineering to estimate work and ship features according to specifications.",
        "Assisted with quality assurance testing to validate that the completed work matched the acceptance criteria of Jira card.",
      ],
    },
  ] satisfies Job[],
  skillGroups: [
    {
      label: "Languages",
      items: [
        "TypeScript",
        "Dart",
        "C#",
        "C/C++",
        "Python",
        "PHP",
        "SQL",
        "YAML",
        "CSS",
      ],
    },
    {
      label: "Frameworks & platforms",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Flutter",
        "Firebase",
        "Laravel",
        "REST APIs",
        "Stripe",
        "Dialogflow CX",
        "TensorFlow",
      ],
    },
    {
      label: "Databases",
      items: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQLite",
        "NeonDB",
        "Firestore",
        "Google Cloud Datastore",
        "BigQuery",
      ],
    },
    {
      label: "Testing",
      items: [
        "Jest",
        "Vitest",
        "Cypress",
        "Mocha / Chai",
        "PHPUnit",
        "Flutter Test",
      ],
    },
    {
      label: "Cloud & infrastructure",
      items: [
        "Google Cloud Platform",
        "Cloud Run",
        "Cloud Run functions",
        "Firebase Hosting",
        "Load Balancers",
        "Cloud Armor",
        "IAM",
        "Workload Identity Federation",
        "Infrastructure as Code",
        "Terraform",
        "Cloud Foundation Fabric modules",
        "AWS EC2",
        "AWS Lambda",
        "AWS SES",
        "Docker",
        "Kaniko",
        "GitLab CI",
        "Containerization",
      ],
    },
    {
      label: "Tools & practices",
      items: [
        "Git",
        "GitHub",
        "GitHub Actions",
        "GitLab CI/CD",
        "Bitbucket",
        "Jira",
        "Looker Studio",
        "Power BI",
        "Unit testing",
        "Integration testing",
        "Microservices architecture",
        "Caching",
        "System design",
        "Technical presentations",
        "Code review",
        "Scrum",
        "Sprint delivery",
      ],
    },
  ] satisfies SkillGroup[],
  certifications: [
    {
      title: "Google Cloud Generative AI Leader Certification",
      detail: "November 2025",
      description:
        "A Generative AI Leader is a visionary professional with comprehensive knowledge of how gen AI can transform businesses. They influence gen AI-powered initiatives and identify opportunities across business functions and industries, using Google Cloud's enterprise-ready offerings to accelerate innovation.",
    },
  ] satisfies CredentialLine[],
  education: [
    {
      title: "Arkansas State University — BA Computer Science",
      detail: "Jonesboro, AR · Aug 2017 – May 2021",
    },
    {
      title: "Arkansas State University — BS Psychology",
      detail: "Jonesboro, AR · Aug 2014 – May 2017",
    },
  ] satisfies CredentialLine[],
  awards: [
    {
      title:
        "Create@stAte Symposium Dean's Award, College of Engineering and Computer Science",
      detail: "April 2021",
      description:
        "Recognized for contributions to Smart Park, a machine learning-powered mobile application built with Flutter, Python, TensorFlow, and Raspberry Pi camera hardware. The solution used a model trained on more than 600,000 parking spot images across varied lighting and weather conditions.",
    },
  ] satisfies CredentialLine[],
} as const;

export type Resume = typeof resume;
