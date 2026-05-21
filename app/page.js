import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import CardTilt from "./CardTilt";
import AnimatedCounter from "./AnimatedCounter";
import { homepageFeaturedProjects, homepageMoreProjects } from "./projects/projectData";

const heroStats = [
  { value: 6, suffix: "+", label: "Years shipping production software" },
  { value: 10, suffix: "+", label: "Business platforms and product systems" },
  { value: 4, suffix: "", label: "Core domains: payments, ERP, health, support" },
];

const heroTags = [
  "Backend systems",
  "Payment workflows",
  "Platform APIs",
  "Business automation",
  "Enterprise products",
];

const proofStrip = [
  "SOFTIC",
  "Zaynax Limited",
  "Software Arena Ltd",
  "Payments",
  "ERP",
  "Health-tech",
];

const quickLinks = [
  { href: "#summary", label: "About" },
  { href: "#featured-projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const strengths = [
  {
    title: "System Thinking",
    copy: "I design business logic and backend flows so products stay understandable even when the rules become complex.",
  },
  {
    title: "Real Business Domains",
    copy: "Most of my work sits inside payments, ERP, support, and operational software where reliability matters every day.",
  },
  {
    title: "Delivery Mindset",
    copy: "I like turning broad requirements into maintainable product modules, stable APIs, and cleaner team workflows.",
  },
];

const skillLanes = [
  {
    title: "Backend and Architecture",
    items: ["ASP.NET Core", "NestJS", "Node.js", "REST API Design", "Microservices", "Clean Architecture"],
  },
  {
    title: "Frontend and Product Delivery",
    items: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "Blazor"],
  },
  {
    title: "Data and Infrastructure",
    items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker"],
  },
];

const compactRoles = [
  "SOFTIC - Payment gateway, support chat, backend platform systems",
  "Zaynax Limited - Health-tech, commerce, ERP, accounting products",
  "Software Arena Ltd - HRM, payroll, reports, enterprise workflows",
];

const roles = [
  {
    company: "SOFTIC",
    title: "Software Engineer",
    period: "February 2025 - Present",
    focus: "Payment gateway, invoicing, support chat, and backend platform systems",
  },
  {
    company: "Zaynax Limited",
    title: "Software Engineer",
    period: "October 2021 - January 2025",
    focus: "Accounting, health-tech, e-commerce, ERP, and microservice products",
  },
  {
    company: "Software Arena Ltd",
    title: "Junior Software Engineer",
    period: "September 2019 - September 2021",
    focus: "HRM and ERP applications with payroll, reports, and modular workflows",
  },
];

const projectSpotlights = homepageFeaturedProjects.map((project, index) => ({
  ...project,
  accent: ["ocean", "mist", "steel"][index] || "ocean",
}));

export default function Home() {
  return (
    <main className="brand-shell">
      <ScrollReveal />

      <section className="brand-hero">
        <div className="brand-orb brand-orb-one" />
        <div className="brand-orb brand-orb-two" />
        <div className="brand-grid-lines" />

        <nav className="brand-nav scale-in" data-reveal data-reveal-type="scale-in" style={{ "--delay": "60ms" }}>
          <Link href="/" className="brand-mark">
            <span className="brand-mark-dot" />
            Nasrin Akter
          </Link>
          <div className="brand-nav-links">
            {quickLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <Link href="/projects">All Projects</Link>
          </div>
        </nav>

        <div className="hero-stage">
          <div className="hero-main fade-up" data-reveal style={{ "--delay": "120ms" }}>
            <p className="hero-kicker fade-up" data-reveal style={{ "--delay": "180ms" }}>
              Backend and Full-Stack Software Engineer
            </p>
            <h1 data-word-reveal>
              <span className="text-reveal-word">Building</span>{" "}
              <span className="text-reveal-word">product</span>{" "}
              <span className="text-reveal-word">systems</span>{" "}
              <span className="text-reveal-word">that</span>{" "}
              <span className="text-reveal-word">stay</span>{" "}
              <span className="text-reveal-word">dependable</span>
              <br />
              <span className="text-reveal-word">when</span>{" "}
              <span className="text-reveal-word">business</span>{" "}
              <span className="text-reveal-word">logic</span>{" "}
              <span className="text-reveal-word">gets</span>{" "}
              <span className="text-reveal-word">hard.</span>
            </h1>
            <p className="hero-summary fade-up" data-reveal style={{ "--delay": "320ms" }}>
              I work across backend architecture, payment flows, enterprise modules, and modern product delivery.
              My best work lives where APIs, business rules, and real operational pressure all meet.
            </p>

            <div className="hero-cta-row fade-up" data-reveal style={{ "--delay": "400ms" }}>
              <Link className="hero-secondary" href="/resume">
                View Resume
              </Link>
              <Link className="hero-secondary" href="/projects">
                Open Case Studies
              </Link>
            </div>

            <div className="hero-tag-row fade-up" data-reveal style={{ "--delay": "460ms" }}>
              {heroTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <aside className="hero-side fade-up" data-reveal style={{ "--delay": "260ms" }}>
            <div className="hero-portrait-card">
              <div className="hero-portrait-frame">
                <Image
                  src="/nasrin-akter.png"
                  alt="Portrait of Nasrin Akter"
                  width={220}
                  height={220}
                  className="hero-portrait-image"
                  priority
                />
              </div>
              <div className="hero-portrait-copy">
                <p>Based in Dhaka</p>
                <h2>Open to backend, platform, and full-stack engineering roles.</h2>
              </div>
            </div>

            <div className="hero-note-card">
              <span>Current Focus</span>
              <p>Payment systems, enterprise workflows, operational dashboards, and maintainable API-first products.</p>
            </div>
          </aside>
        </div>

        <div className="hero-stats fade-up" data-reveal style={{ "--delay": "380ms" }}>
          {heroStats.map((item) => (
            <article key={item.label} className="hero-stat-card">
              <AnimatedCounter value={item.value} suffix={item.suffix} />
              <span>{item.label}</span>
            </article>
          ))}
        </div>

        <div className="proof-strip fade-up" data-reveal style={{ "--delay": "420ms" }}>
          <p>Worked across</p>
          <div className="proof-strip-row">
            {proofStrip.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="summary" className="brand-section intro-section">
        <div className="section-heading fade-up" data-reveal style={{ "--delay": "120ms" }}>
          <p className="section-kicker">Why Me</p>
          <h2>A product-minded engineer, not just a resume.</h2>
        </div>

        <div className="intro-layout">
          <article className="intro-story fade-up" data-reveal style={{ "--delay": "180ms" }}>
            <p>
              I have spent the last several years building business software where stability matters: payment gateways,
              accounting flows, support tooling, ERP modules, and service platforms. I enjoy translating real-world
              operational mess into cleaner systems that teams can actually scale.
            </p>
            <p>
              My strongest contribution usually sits between architecture and delivery: shaping modules, designing APIs,
              organizing workflows, and helping products feel less fragile as they grow.
            </p>
          </article>

          <div className="intro-rail">
            {strengths.map((item, index) => (
              <CardTilt key={item.title}>
                <article className="intro-card fade-up" data-reveal style={{ "--delay": `${220 + index * 90}ms` }}>
                  <p>{item.title}</p>
                  <h3>{item.copy}</h3>
                </article>
              </CardTilt>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-section compact-overview-section">
        <div className="compact-overview-grid">
          <article className="compact-overview-card fade-up" data-reveal style={{ "--delay": "120ms" }}>
            <p className="section-kicker">Experience Snapshot</p>
            <h2>Built across teams where software needs to survive real business pressure.</h2>
            <div className="compact-role-list">
              {compactRoles.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>

          <article className="compact-overview-card fade-up" data-reveal style={{ "--delay": "200ms" }}>
            <p className="section-kicker">Core Toolkit</p>
            <div className="compact-skill-groups">
              {skillLanes.map((lane) => (
                <div key={lane.title} className="compact-skill-group">
                  <h3>{lane.title}</h3>
                  <div className="compact-skill-row">
                    {lane.items.slice(0, 4).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="featured-projects" className="brand-section project-section">
        <div className="section-heading fade-up" data-reveal style={{ "--delay": "120ms" }}>
          <p className="section-kicker">Selected Work</p>
          <h2>Projects that show how I think, build, and ship.</h2>
          <Link className="section-link" href="/projects">
            Browse all case studies
          </Link>
        </div>

        <div className="project-editorial-grid">
          {projectSpotlights.map((project, index) => (
            <div
              key={project.slug}
              className={
                index === 0
                  ? "project-editorial-span-7"
                  : index === 1
                    ? "project-editorial-span-5"
                    : "project-editorial-span-12"
              }
            >
              <CardTilt>
                <article
                  className={`project-editorial-card accent-${project.accent} fade-up`}
                  data-reveal
                  style={{ "--delay": `${180 + index * 120}ms` }}
                >
                  <div className="project-editorial-top">
                    <p className="project-editorial-label">Featured Case Study</p>
                    <span className="project-editorial-role">{project.role}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-editorial-summary">{project.summary}</p>
                  <p className="project-editorial-impact">{project.impact}</p>
                  <div className="project-editorial-tags">
                    {project.features?.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>
                  <div className="project-editorial-stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <p className="project-entry-note">Opens a dedicated project detail page</p>
                  <Link className="project-editorial-link" href={`/projects/${project.slug}`}>
                    View Project Story
                  </Link>
                </article>
              </CardTilt>
            </div>
          ))}
        </div>

        <div className="project-marquee fade-up" data-reveal style={{ "--delay": "220ms" }}>
          {homepageMoreProjects.slice(0, 4).map((project) => (
            <article key={`${project.company}-${project.title}`} className="project-marquee-card">
              <p>{project.company}</p>
              <h3>{project.title}</h3>
              <span>{project.features?.join(" / ") || "Business platform work"}</span>
              {project.slug ? (
                <>
                  <p className="project-entry-note project-entry-note-compact">Has its own case study page</p>
                  <Link className="project-marquee-link" href={`/projects/${project.slug}`}>
                    Open case study page
                  </Link>
                </>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="brand-section experience-section">
        <div className="section-heading fade-up" data-reveal style={{ "--delay": "120ms" }}>
          <p className="section-kicker">Experience</p>
          <h2>Career path in one quick view.</h2>
        </div>

        <div className="experience-layout">
          <div className="experience-timeline">
            {roles.map((role, index) => (
              <article
                key={`${role.company}-${role.period}`}
                className="experience-card fade-up"
                data-reveal
                style={{ "--delay": `${180 + index * 120}ms` }}
              >
                <span>{role.period}</span>
                <h3>{role.title}</h3>
                <h4>{role.company}</h4>
                <p>{role.focus}</p>
              </article>
            ))}
          </div>
          <div className="experience-side-note fade-up" data-reveal style={{ "--delay": "260ms" }}>
            <p className="section-kicker">What Stays Consistent</p>
            <h3>Most of my work sits at the intersection of product delivery, API design, and structured business logic.</h3>
            <p>
              If a team needs someone to own backend-heavy modules without losing product clarity, that is usually where I add the most value.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="brand-section closing-section">
        <div className="closing-card fade-up" data-reveal style={{ "--delay": "140ms" }}>
          <div>
            <p className="section-kicker">Let&apos;s Connect</p>
            <h2>Looking for someone who can own backend complexity and still ship clean product experiences?</h2>
            <p>
              I&apos;m most valuable on teams building serious systems: payments, internal platforms, business software,
              customer operations, and API-heavy products.
            </p>
          </div>

          <div className="closing-actions">
            <MagneticButton className="hero-primary" href="mailto:nasrinakter1109@gmail.com">
              nasrinakter1109@gmail.com
            </MagneticButton>
            <a className="closing-link" href="tel:+8801929298674">
              +880 1929-298674
            </a>
            <a className="closing-link" href="https://maps.google.com/?q=Shantibagh,Dhaka-1217" target="_blank" rel="noreferrer">
              Shantibagh, Dhaka-1217
            </a>
            <Link className="closing-link" href="/projects">
              See full case studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
