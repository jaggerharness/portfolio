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
    "Senior Full-Stack Engineer with 4+ years building and modernizing web, mobile, and cloud-native systems, including enterprise conversational AI and multi-tenant client platforms.",
    "Deep experience in TypeScript, React, Node.js, Flutter, Laravel, and Google Cloud Platform (GCP), plus system design, Terraform, containerized workloads, and CI/CD.",
    "Known for architecture ownership, clear stakeholder communication, and raising standards in testing, developer tooling, and AI-assisted development.",
  ],
  contact: {
    email: "jagger.dev@gmail.com",
    phone: "870-483-3725",
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
      range: "January 2025 - Present",
      bullets: [
        "Lead backend and infrastructure development for enterprise Dialogflow CX chatbot platforms, building distributed TypeScript microservices on Google Cloud Run and Cloud Run functions with a React frontend.",
        "Led modernization from Dialogflow ES to Dialogflow CX, delivering the majority of backend services and Terraform-provisioned infrastructure for the production architecture.",
        "Upgraded 160+ Google Cloud Run function microservices to the latest Node.js runtime and later consolidated them into approximately eight to ten Google Cloud Run services, reducing cold starts and operational overhead; met internal SLO targets during the transition through query optimization, targeted redesigns, and expanded caching.",
        "Designed and implemented a universal client and proxy layer so internal teams integrate Dialogflow CX agents or live-agent providers through a single shared interface.",
        "Provisioned and operated Google Cloud Platform (GCP) infrastructure with Terraform for containerized workloads, including IAM and workload identity federation; raised automated test coverage above 90% on priority services; improved GitLab CI/CD pipelines for testing, deployments, accessibility validation, and Node.js runtime upgrades.",
        "Architected systems to satisfy Cloud Architecture Review Board requirements and represented engineering in principal-level technical forums; partnered with business stakeholders from planning through launch; served as a Cursor Champion for AI-assisted development with shared documentation and practices; presented regularly on architecture, tooling, and delivery to engineering and leadership audiences.",
      ],
    },
    {
      company: "AceOne Technologies",
      title: "Full Stack Software Developer",
      range: "July 2021 - January 2025",
      bullets: [
        "Owned full-stack delivery for multiple client engagements from discovery through production, coordinating 5-6 onsite and 10-12 offshore developers, unblocking work, promoting stronger implementation and testing practices, and keeping releases on schedule.",
        "Improved a legacy API by 50-70% average response time through tooling upgrades, query optimization, and database-focused refactors.",
        "Led a multi-month migration of a 10+ year PHP monolith to Laravel, preserving core business logic while restructuring around Laravel conventions, improving maintainability, security, and performance.",
        "Built a city-scale traffic-camera analytics web application (four cities, scheduled email ingestion every twelve hours, 1M+ database records), owning architecture and implementation end-to-end with selective delegation.",
        "Shipped a Flutter fuel-delivery app to both major app stores with Stripe billing and a Laravel admin interface for operations; implemented subscription sync and feature gating so entitlements stayed consistent with Stripe state.",
        "Delivered a conveyor and IoT operator app integrating with hardware; implemented Bluetooth Low Energy in C/C++ on the device module alongside an electrical engineer, reducing reliance on traditional PLC programming for standard workflows.",
      ],
    },
    {
      company: "AceOne Technologies",
      title: "Junior Software Development Intern",
      range: "June 2021 - July 2021",
      bullets: [
        "Investigated and resolved client-reported defects across multiple websites and applications while performing routine maintenance on varied technology stacks.",
        "Collaborated with project management and engineering to estimate work and ship features according to specifications.",
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
        "Tensorflow",
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
        "Google Cloud Fabric Foundation modules",
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
        "SCRUM",
        "Sprint delivery",
      ],
    },
  ] satisfies SkillGroup[],
  certifications: [
    {
      title: "Google Cloud Generative AI Leader Certification",
      detail: "Issued November 22, 2025",
    },
  ] satisfies CredentialLine[],
  education: [
    {
      title: "Arkansas State University",
      detail: "Jonesboro, AR",
      description: "BA Computer Science (Aug 2017 - May 2021); BS Psychology (Aug 2014 - May 2017)",
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
