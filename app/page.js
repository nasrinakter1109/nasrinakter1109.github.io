import Image from "next/image";

const skills = [
  "ASP.NET Core",
  "C#",
  "Node.js",
  "NestJS",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Blazor",
  "React",
  "Next.js",
  "SQL Server",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "Docker",
  "Entity Framework",
  "Prisma ORM",
  "REST API",
  "Microservices",
  "Crystal Reports",
];

const highlights = [
  {
    value: "6+",
    label: "Years of experience",
  },
  {
    value: "10+",
    label: "Enterprise projects delivered",
  },
  {
    value: "3",
    label: "Companies across career path",
  },
];

const focusAreas = [
  "Enterprise Platforms",
  "Payment Systems",
  "Microservices",
  "ERP Workflows",
];

const projects = [
  {
    title: "Payget Crypto Payment Gateway",
    summary:
      "Developed a cryptocurrency payment gateway at SOFTIC with unified provider integrations, secure transaction handling, and real-time merchant notifications.",
    impact:
      "Improved payment reliability through callback validation, reconciliation, and configurable SMS and email alerts.",
    stack: ["NestJS", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "Invoice and Billing Management System",
    summary:
      "Built a billing and invoicing platform with customer management, invoice generation, payment tracking, and role-based access control.",
    impact:
      "Delivered performant reporting, filtering, pagination, and maintainable API architecture for business use.",
    stack: ["ASP.NET Core Web API", "Angular 16", "SQL Server", "JWT"],
  },
  {
    title: "Support Chat Platform",
    summary:
      "Developed a multi-tenant chatbot and support system for Telegram, WhatsApp, and Facebook Messenger with real-time communication.",
    impact:
      "Reduced manual support workload with automated workflows and scalable backend services for concurrent user interactions.",
    stack: ["ExpressJS", "MongoDB", "Socket.IO", "Redis"],
  },
];

const moreProjects = [
  {
    title: "Confidential Microservice Platform",
    company: "SOFTIC",
    summary:
      "Worked on a confidential microservice-based platform with auth, payment, transaction, rewards, and notification services.",
    stack: ["NestJS", "Kafka", "PostgreSQL", "Prisma ORM", "Docker", "Elasticsearch"],
  },
  {
    title: "Accounting System",
    company: "Zaynax Limited",
    summary:
      "Designed core accounting modules including ledgers, subledgers, fiscal year logic, transactional consistency, and financial reports.",
    stack: ["ASP.NET Core Blazor", "SQL Server", "Entity Framework", "Crystal Reports"],
  },
  {
    title: "ZHealth",
    company: "Zaynax Limited",
    summary:
      "Contributed to a health-tech platform with product, order, payment, and communication services including chat and video call features.",
    stack: ["NestJS", "Redis", "MongoDB", "Docker", "Bkash", "Nagad"],
  },
  {
    title: "Zdrop",
    company: "Zaynax Limited",
    summary:
      "Worked on an e-commerce and logistics-oriented platform with product, order, payment gateway integration, and notification services.",
    stack: ["NestJS", "Redis", "NATS", "MongoDB", "Docker"],
  },
  {
    title: "ERP Solution",
    company: "Zaynax Limited",
    summary:
      "Built ERP-focused backend modules covering accounting, HR, and invoicing workflows for business operations.",
    stack: ["ASP.NET Core Web API", "SQL Server", "ERP Modules"],
  },
  {
    title: "Human Resource Management",
    company: "Software Arena Ltd",
    summary:
      "Developed payroll-related modules such as salary, allowance, deduction, and dynamic payroll calculation with API support.",
    stack: ["Angular 6", "ASP.NET Core Web API", "SQL Server"],
  },
  {
    title: "ERP Solution",
    company: "Software Arena Ltd",
    summary:
      "Worked on accounting, sales and purchase, payroll, HR, and marketing modules with business reporting and complex SQL queries.",
    stack: ["Angular 6", "ASP.NET Core Web API", "SQL", "Crystal Reports"],
  },
];

const experience = [
  "Built enterprise-grade web applications using C#, .NET, Node.js, and modern JavaScript frameworks in fast-paced product teams.",
  "Designed and implemented RESTful APIs, microservices, database schemas, and secure business workflows across payment, health-tech, ERP, and HR systems.",
  "Worked with SQL Server, PostgreSQL, MongoDB, Redis, Kafka, RabbitMQ, and NATS to support scalable and high-performance application behavior.",
  "Applied SOLID principles, clean architecture, unit-testing mindset, and CI/CD-friendly development practices to keep code maintainable and reliable.",
];

const roles = [
  {
    company: "SOFTIC",
    title: "Software Engineer",
    period: "February 2025 - Present",
    details:
      "Working on payment gateway, invoicing, support chat, and microservice-based backend systems using NestJS, ASP.NET Core, PostgreSQL, SQL Server, Redis, Docker, and modern API design.",
  },
  {
    company: "Zaynax Limited",
    title: "Software Engineer",
    period: "October 2021 - January 2025",
    details:
      "Delivered accounting, health-tech, e-commerce, and ERP solutions with ASP.NET Core, Blazor, NestJS microservices, SQL Server, MongoDB, Redis, NATS, and payment integrations.",
  },
  {
    company: "Software Arena Ltd",
    title: "Junior Software Engineer",
    period: "September 2019 - September 2021",
    details:
      "Worked on HRM and ERP applications with Angular, ASP.NET Core Web API, SQL Server, Crystal Reports, payroll logic, reporting, and modular enterprise workflows.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <nav className="top-nav" aria-label="Primary">
        <a className="brand-mark" href="#top">
          Nasrin Akter
        </a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="top-ribbon">
        <p>Software Engineer focused on enterprise applications, backend APIs, and scalable business systems.</p>
      </section>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Available for Software Engineering Opportunities</p>
          <h1>Nasrin Akter</h1>
          <p className="hero-kicker">
            Backend and full-stack engineer delivering clean architecture, secure APIs, and production-ready business platforms.
          </p>
          <p className="hero-lead">
            Software Engineer with 6+ years of experience building enterprise-grade web applications using ASP.NET Core,
            Node.js, NestJS, Angular, SQL, and microservice architecture across payment, ERP, HRM, chat, and health-tech domains.
          </p>
          <div className="focus-row">
            {focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-btn" href="/resume">
              View Resume
            </a>
            <a className="secondary-btn" href="#projects">
              View Projects
            </a>
          </div>
          <div className="hero-meta">
            <span>Dhaka, Bangladesh</span>
            <span>Open to full-time roles</span>
            <span>Backend and full-stack focus</span>
          </div>
        </div>

        <aside className="hero-card">
          <div className="profile-photo-wrap">
            <Image
              src="/nasrin-akter.png"
              alt="Portrait of Nasrin Akter"
              width={320}
              height={320}
              className="profile-photo"
              priority
            />
          </div>
          <p className="card-label">Profile Snapshot</p>
          <ul>
            <li>6+ years of professional experience</li>
            <li>Strong background in .NET, NestJS, Angular, and SQL</li>
            <li>Hands-on work in payment, ERP, HRM, health-tech, and chat systems</li>
            <li>Experienced with microservices, Redis, Kafka, Docker, and CI/CD-friendly delivery</li>
          </ul>
        </aside>
      </section>

      <section className="stats-grid" aria-label="Experience highlights">
        {highlights.map((item) => (
          <article className="stat-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="section-divider" aria-hidden="true">
        <span />
      </section>

      <section className="content-grid">
        <article className="panel">
          <p className="section-tag">About</p>
          <h2>Professional Summary</h2>
          <p>
            Dedicated Software Engineer with over 6 years of experience in
            designing, developing, and deploying enterprise-grade web
            applications. I have strong experience in ASP.NET Core Web API,
            Entity Framework, NestJS microservices, RESTful API design, and
            relational and NoSQL databases. My focus is on clean code,
            performance, security, and building scalable solutions that solve
            real business problems.
          </p>
        </article>

        <article className="panel">
          <p className="section-tag">Skills</p>
          <h2>Core Technologies</h2>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="panel wide-panel" id="experience">
        <p className="section-tag">Experience</p>
        <h2>What I Bring</h2>
        <div className="bullet-grid">
          {experience.map((item) => (
            <div className="bullet-card" key={item}>
              <span className="bullet-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel wide-panel">
        <p className="section-tag">Career Path</p>
        <h2>Professional Experience</h2>
        <div className="project-grid">
          {roles.map((role) => (
            <article className="project-card" key={`${role.company}-${role.period}`}>
              <h3>{role.title}</h3>
              <p className="impact">{role.company}</p>
              <p>{role.period}</p>
              <p>{role.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel wide-panel" id="projects">
        <p className="section-tag">Featured Projects</p>
        <h2>Selected Work That Reflects My Strongest Delivery</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p className="impact">{project.impact}</p>
              <div className="stack-row">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel wide-panel">
        <p className="section-tag">More Projects</p>
        <h2>Additional Professional Work Across Multiple Domains</h2>
        <div className="more-projects-grid">
          {moreProjects.map((project) => (
            <article className="mini-project-card" key={`${project.company}-${project.title}`}>
              <p className="mini-project-company">{project.company}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="stack-row">
                {project.stack.map((item) => (
                  <span key={`${project.title}-${item}`}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel contact-panel" id="contact">
        <p className="section-tag">Contact</p>
        <h2>Let&apos;s Connect</h2>
        <p>
          I am open to software engineering opportunities and would be glad to discuss how my backend and full-stack experience can help your team build reliable products faster.
        </p>
        <div className="contact-list">
          <a href="mailto:nasrinakter1109@gmail.com">nasrinakter1109@gmail.com</a>
          <a href="tel:+8801929298674">+880 1929-298674</a>
          <a href="https://maps.google.com/?q=Shantibagh,Dhaka-1217" target="_blank" rel="noreferrer">
            Shantibagh, Dhaka-1217
          </a>
          <a href="/Nasrin_Akter_Resume.pdf" target="_blank" rel="noreferrer">
            Download CV
          </a>
        </div>
        <div className="contact-cta">
          <a className="primary-btn" href="mailto:nasrinakter1109@gmail.com">
            Invite Me to Interview
          </a>
        </div>
      </section>

      <footer className="footer-note">
        <p>Open to software engineering roles focused on backend systems, enterprise platforms, and product development.</p>
      </footer>
    </main>
  );
}
