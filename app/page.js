import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { homepageFeaturedProjects, homepageMoreProjects } from "./projects/projectData";

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

const heroPills = [
  "Backend Architecture",
  "Payment Integrations",
  "Microservice Systems",
  "Business Automation",
];

const signalPoints = [
  {
    title: "Preferred Role",
    value: "Backend or Full-Stack Engineer",
  },
  {
    title: "Best At",
    value: "API design, business logic, scalable systems",
  },
  {
    title: "Based In",
    value: "Dhaka, Bangladesh",
  },
];

const quickLinks = [
  { href: "#summary", label: "Summary" },
  { href: "#experience", label: "Experience" },
  { href: "#featured-projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
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

const featuredProjects = homepageFeaturedProjects;
const moreProjects = homepageMoreProjects;

export default function Home() {
  return (
    <main className="cv-shell">
      <ScrollReveal />
      <aside className="cv-sidebar panel-animate">
        <div className="sidebar-stripe" />
        <div className="sidebar-inner">
          <div className="portrait-frame media-animate">
            <Image
              src="/nasrin-akter.png"
              alt="Portrait of Nasrin Akter"
              width={220}
              height={220}
              className="portrait-image"
              priority
            />
          </div>

          <div className="identity-block fade-up" data-reveal style={{ "--delay": "120ms" }}>
            <h1>Nasrin Akter</h1>
            <p>Software Engineer</p>
          </div>

          <section className="sidebar-section fade-up" data-reveal style={{ "--delay": "220ms" }}>
            <h2>Profile</h2>
            <p>
              Backend and full-stack engineer with 6+ years of experience building enterprise applications,
              APIs, payment systems, and scalable business workflows.
            </p>
          </section>

          <section className="sidebar-section fade-up" data-reveal style={{ "--delay": "320ms" }}>
            <h2>Core Focus</h2>
            <div className="focus-list">
              <span>Enterprise Platforms</span>
              <span>Payment Systems</span>
              <span>Microservices</span>
              <span>ERP Workflows</span>
            </div>
          </section>

          <section className="sidebar-section fade-up" data-reveal style={{ "--delay": "420ms" }}>
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

          <section id="contact" className="sidebar-section fade-up" data-reveal style={{ "--delay": "520ms" }}>
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

          <section className="sidebar-section availability-card fade-up" data-reveal style={{ "--delay": "620ms" }}>
            <p className="availability-kicker">Current Focus</p>
            <h3>Open to product teams building dependable software at scale.</h3>
            <p>
              Especially strong where backend architecture, enterprise workflows, and payment-related logic
              need to stay stable under real business pressure.
            </p>
          </section>
        </div>
      </aside>

      <section className="cv-main">
        <div className="main-glow main-glow-one" />
        <div className="main-glow main-glow-two" />
        <div className="main-banner" />

        <header className="main-header fade-up hero-card" data-reveal style={{ "--delay": "140ms" }}>
          <div className="hero-copy">
            <p className="eyebrow">Available for Software Engineering Opportunities</p>
            <h2>Building reliable backend systems and business platforms with clean architecture.</h2>
            <p className="hero-lead">
              I help teams ship scalable backend products, enterprise workflows, and payment-driven systems
              that stay maintainable as complexity grows.
            </p>
            <div className="hero-pill-row">
              {heroPills.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
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

        <nav className="quick-nav fade-up" data-reveal style={{ "--delay": "180ms" }}>
          {quickLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <section id="summary" className="summary-card fade-up" data-reveal style={{ "--delay": "240ms" }}>
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

        <section className="signal-grid">
          {signalPoints.map((item, index) => (
            <article
              key={item.title}
              className="signal-card fade-up"
              data-reveal
              style={{ "--delay": `${200 + index * 90}ms` }}
            >
              <p>{item.title}</p>
              <h3>{item.value}</h3>
            </article>
          ))}
        </section>

        <section id="experience" className="main-section">
          <div className="section-head fade-up" data-reveal style={{ "--delay": "160ms" }}>
            <p className="section-tag">What I Bring</p>
            <h3>Practical engineering strengths for product teams</h3>
          </div>
          <div className="statement-list">
            {experience.map((item, index) => (
              <article
                key={item}
                className="statement-card lift-card fade-up"
                data-reveal
                style={{ "--delay": `${320 + index * 90}ms` }}
              >
                <span className="statement-dot" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="featured-projects" className="main-section">
          <div className="section-head fade-up" data-reveal style={{ "--delay": "160ms" }}>
            <p className="section-tag">Professional Experience</p>
            <h3>Roles across product, platform, and enterprise software</h3>
          </div>
          <div className="timeline-list">
            {roles.map((role, index) => (
              <article
                className="timeline-item fade-up"
                key={`${role.company}-${role.period}`}
                data-reveal
                style={{ "--delay": `${220 + index * 120}ms` }}
              >
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
          <div className="section-head fade-up" data-reveal style={{ "--delay": "160ms" }}>
            <p className="section-tag">Featured Projects</p>
            <h3>Selected work with strong business and technical impact</h3>
          </div>
          <div className="feature-project-list">
            {featuredProjects.map((project, index) => (
              <article
                className="feature-project-card lift-card fade-up"
                key={project.title}
                data-reveal
                style={{ "--delay": `${220 + index * 120}ms` }}
              >
                <div className="feature-project-head">
                  <div>
                    <p className="project-label">Case Study</p>
                    <h3>{project.title}</h3>
                    <p className="project-role">{project.role}</p>
                  </div>
                </div>
                <div className="project-copy-block">
                  <p>{project.summary}</p>
                  <p className="project-impact">{project.impact}</p>
                </div>
                <div className="stack-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                {project.features?.length ? (
                  <div className="showcase-feature-row homepage-feature-row">
                    {project.features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>
                ) : null}
                <Link className="case-study-link" href={`/projects/${project.slug}`}>
                  View Case Study
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="main-section">
          <div className="section-head fade-up" data-reveal style={{ "--delay": "160ms" }}>
            <p className="section-tag">Additional Projects</p>
            <h3>Broader product exposure across health-tech, ERP, and commerce</h3>
          </div>
          <div className="compact-project-list">
            {moreProjects.map((project, index) => (
              <article
                className="compact-project-card lift-card fade-up"
                key={`${project.company}-${project.title}`}
                data-reveal
                style={{ "--delay": `${220 + index * 80}ms` }}
              >
                <p className="compact-company">{project.company}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                {project.features?.length ? (
                  <div className="showcase-feature-row homepage-feature-row">
                    {project.features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>
                ) : null}
                {project.slug ? (
                  <Link className="case-study-link" href={`/projects/${project.slug}`}>
                    Open Project Page
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <footer className="main-footer fade-up" data-reveal style={{ "--delay": "260ms" }}>
          <p>Open to software engineering roles focused on backend systems, enterprise platforms, and product development.</p>
          <a className="footer-link" href="mailto:nasrinakter1109@gmail.com">
            Let&apos;s talk about backend, platform, or product engineering roles
          </a>
          <Link className="footer-link footer-link-secondary" href="/projects">
            Browse All Project Case Studies
          </Link>
        </footer>
      </section>
    </main>
  );
}
