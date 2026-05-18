import Image from "next/image";

const skillGroups = [
  {
    title: "Backend",
    items: ["ASP.NET Core", "C#", "Node.js", "ExpressJS", "NestJS", "REST API", "Microservices"],
  },
  {
    title: "Frontend",
    items: ["Angular", "TypeScript", "JavaScript", "React", "Next.js", "Blazor"],
  },
  {
    title: "Data & Infra",
    items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker"],
  },
];

const highlights = [
  { value: "6+", label: "Years of experience" },
  { value: "10+", label: "Enterprise projects delivered" },
  { value: "3", label: "Companies across career path" },
];

const featuredProjects = [
  {
    title: "Payget Crypto Payment Gateway",
    role: "Software Engineer, SOFTIC",
    summary:
      "Built secure payment initiation, callback handling, provider abstraction, and real-time notifications for cryptocurrency transactions.",
    impact:
      "Strengthened payment reliability through reconciliation, validation, and configurable merchant alerts.",
    stack: ["NestJS", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "Invoice and Billing Management System",
    role: "Software Engineer, SOFTIC",
    summary:
      "Developed a billing platform for customer management, invoice generation, payment tracking, and role-based access control.",
    impact:
      "Delivered performant reporting, filtering, search, and maintainable API architecture for business operations.",
    stack: ["ASP.NET Core Web API", "Angular 16", "SQL Server", "JWT"],
  },
  {
    title: "Support Chat Platform",
    role: "Software Engineer, SOFTIC",
    summary:
      "Created a multi-tenant chatbot and support system for Telegram, WhatsApp, and Facebook Messenger with real-time agent communication.",
    impact:
      "Reduced manual support load through automated workflows and scalable concurrent messaging services.",
    stack: ["ExpressJS", "MongoDB", "Socket.IO", "Redis"],
  },
];

const moreProjects = [
  {
    title: "Confidential Microservice Platform",
    company: "SOFTIC",
    summary:
      "Worked on auth, payment, transaction, rewards, and notification services in a microservice architecture.",
  },
  {
    title: "Accounting System",
    company: "Zaynax Limited",
    summary:
      "Designed ledgers, subledgers, fiscal year logic, transactional consistency, and financial reports.",
  },
  {
    title: "ZHealth",
    company: "Zaynax Limited",
    summary:
      "Contributed to product, order, payment, and communication services including chat and video call capabilities.",
  },
  {
    title: "Zdrop",
    company: "Zaynax Limited",
    summary:
      "Worked on an e-commerce and logistics platform with order flow, payment integration, and notifications.",
  },
  {
    title: "ERP Solution",
    company: "Zaynax Limited",
    summary:
      "Built accounting, HR, and invoicing workflows for business operations using .NET and SQL Server.",
  },
  {
    title: "Human Resource Management",
    company: "Software Arena Ltd",
    summary:
      "Developed payroll, allowance, deduction, and dynamic salary calculation modules with API support.",
  },
];

const experience = [
  "Built enterprise-grade web applications using C#, .NET, Node.js, and modern JavaScript frameworks in fast-paced product teams.",
  "Designed and implemented RESTful APIs, microservices, database schemas, and secure business workflows across payment, health-tech, ERP, and HR systems.",
  "Worked with SQL Server, PostgreSQL, MongoDB, Redis, Kafka, RabbitMQ, and NATS to support scalable and high-performance systems.",
  "Applied SOLID principles, clean architecture, and CI/CD-friendly practices to keep code maintainable and reliable.",
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
    <main className="cv-shell">
      <aside className="cv-sidebar">
        <div className="sidebar-stripe" />
        <div className="sidebar-inner">
          <div className="portrait-frame">
            <Image
              src="/nasrin-akter.png"
              alt="Portrait of Nasrin Akter"
              width={220}
              height={220}
              className="portrait-image"
              priority
            />
          </div>

          <div className="identity-block">
            <h1>Nasrin Akter</h1>
            <p>Software Engineer</p>
          </div>

          <section className="sidebar-section">
            <h2>Profile</h2>
            <p>
              Backend and full-stack engineer with 6+ years of experience building enterprise applications,
              APIs, payment systems, and scalable business workflows.
            </p>
          </section>

          <section className="sidebar-section">
            <h2>Core Focus</h2>
            <div className="focus-list">
              <span>Enterprise Platforms</span>
              <span>Payment Systems</span>
              <span>Microservices</span>
              <span>ERP Workflows</span>
            </div>
          </section>

          <section className="sidebar-section">
            <h2>Skills</h2>
            <div className="skill-meter-list">
              {skillGroups.map((group) => (
                <div key={group.title} className="skill-meter-group">
                  <p>{group.title}</p>
                  {group.items.map((item, index) => (
                    <div key={item} className="skill-meter-row">
                      <span>{item}</span>
                      <div className="meter-track">
                        <div
                          className="meter-fill"
                          style={{ width: `${92 - index * 7}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section className="sidebar-section">
            <h2>Contact</h2>
            <div className="sidebar-contact">
              <a href="mailto:nasrinakter1109@gmail.com">nasrinakter1109@gmail.com</a>
              <a href="tel:+8801929298674">+880 1929-298674</a>
              <a href="https://maps.google.com/?q=Shantibagh,Dhaka-1217" target="_blank" rel="noreferrer">
                Shantibagh, Dhaka-1217
              </a>
              <a href="/resume">View Resume</a>
            </div>
          </section>
        </div>
      </aside>

      <section className="cv-main">
        <div className="main-banner" />

        <header className="main-header">
          <div>
            <p className="eyebrow">Available for Software Engineering Opportunities</p>
            <h2>Building reliable backend systems and business platforms with clean architecture.</h2>
          </div>
          <div className="header-actions">
            <a className="primary-btn" href="/resume">
              View Resume
            </a>
            <a className="secondary-btn" href="mailto:nasrinakter1109@gmail.com">
              Invite Me to Interview
            </a>
          </div>
        </header>

        <section className="summary-card">
          <div>
            <p className="section-tag">Summary</p>
            <p className="summary-copy">
              Dedicated Software Engineer with strong experience in ASP.NET Core Web API, Entity Framework, NestJS microservices,
              RESTful API design, and relational and NoSQL databases. Focused on secure, maintainable, and scalable solutions that solve real business problems.
            </p>
          </div>
          <div className="highlight-strip">
            {highlights.map((item) => (
              <article key={item.label} className="highlight-box">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="main-section">
          <p className="section-tag">What I Bring</p>
          <div className="statement-list">
            {experience.map((item) => (
              <article key={item} className="statement-card">
                <span className="statement-dot" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="main-section">
          <p className="section-tag">Professional Experience</p>
          <div className="timeline-list">
            {roles.map((role) => (
              <article className="timeline-item" key={`${role.company}-${role.period}`}>
                <div className="timeline-meta">
                  <p>{role.period}</p>
                </div>
                <div className="timeline-body">
                  <h3>{role.title}</h3>
                  <h4>{role.company}</h4>
                  <p>{role.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="main-section">
          <p className="section-tag">Featured Projects</p>
          <div className="feature-project-list">
            {featuredProjects.map((project) => (
              <article className="feature-project-card" key={project.title}>
                <div className="feature-project-head">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-role">{project.role}</p>
                  </div>
                </div>
                <p>{project.summary}</p>
                <p className="project-impact">{project.impact}</p>
                <div className="stack-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="main-section">
          <p className="section-tag">Additional Projects</p>
          <div className="compact-project-list">
            {moreProjects.map((project) => (
              <article className="compact-project-card" key={`${project.company}-${project.title}`}>
                <p className="compact-company">{project.company}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="main-footer">
          <p>Open to software engineering roles focused on backend systems, enterprise platforms, and product development.</p>
        </footer>
      </section>
    </main>
  );
}
