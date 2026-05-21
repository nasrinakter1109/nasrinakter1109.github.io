import Link from "next/link";
import ScrollReveal from "../ScrollReveal";
import CardTilt from "../CardTilt";
import { projectCaseStudies, domainMeta } from "./projectData";

export const metadata = {
  title: "Project Case Studies | Nasrin Akter",
  description: "Selected software engineering projects, demos, and case-study summaries by Nasrin Akter.",
};

const collectionStats = [
  { value: "5", label: "Detailed case studies" },
  { value: "4", label: "Core product domains" },
  { value: "6+", label: "Years of engineering context" },
];

function DomainBadge({ domain }) {
  const meta = domainMeta[domain];
  if (!meta) return null;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: 999,
        fontSize: "0.72rem",
        fontFamily: "var(--font-ui)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        background: `${meta.color}18`,
        color: meta.color,
        border: `1px solid ${meta.color}30`,
      }}
    >
      {meta.label}
    </span>
  );
}

function CompanyBadge({ company }) {
  const colors = {
    SOFTIC: { bg: "#4da3ff18", text: "#86c5ff", border: "#4da3ff30" },
    "Zaynax Limited": { bg: "#10b98118", text: "#34d399", border: "#10b98130" },
    "Software Arena Ltd": { bg: "#f59e0b18", text: "#fbbf24", border: "#f59e0b30" },
    "Personal / Portfolio Project": { bg: "#8b5cf618", text: "#a78bfa", border: "#8b5cf630" },
  };

  const c = colors[company] || {
    bg: "rgba(77,163,255,0.08)",
    text: "var(--text-secondary)",
    border: "var(--line)",
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: 999,
        fontSize: "0.7rem",
        fontFamily: "var(--font-ui)",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        background: c.bg,
        color: c.text,
        border: `1px solid ${c.border}`,
      }}
    >
      {company}
    </span>
  );
}

export default function ProjectsPage() {
  const allDomains = [...new Set(projectCaseStudies.map((project) => project.domain))];

  return (
    <main className="projects-editorial-shell">
      <ScrollReveal />
      <div className="projects-editorial-orb projects-editorial-orb-one" />
      <div className="projects-editorial-orb projects-editorial-orb-two" />

      <section className="projects-landing-hero">
        <div className="projects-landing-nav scale-in" data-reveal data-reveal-type="scale-in" style={{ "--delay": "80ms" }}>
          <Link className="project-back-link" href="/">
            Back to Portfolio
          </Link>
          <Link className="projects-nav-link" href="/resume">
            View Resume
          </Link>
        </div>

        <div className="projects-landing-grid">
          <div className="projects-landing-copy fade-up" data-reveal style={{ "--delay": "120ms" }}>
            <p className="section-kicker">Project Library</p>
            <h1>Case studies that show how I work inside real product systems.</h1>
            <p>
              These pages go beyond a skills list. They show product context, engineering responsibility,
              business flow, and the kind of delivery work I have done across payments, health-tech, support,
              and finance-oriented software.
            </p>
            <div className="projects-domain-row">
              {allDomains.map((domain) => {
                const meta = domainMeta[domain];
                if (!meta) return null;

                return (
                  <span
                    key={domain}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "6px 12px",
                      borderRadius: 999,
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-ui)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      background: `${meta.color}12`,
                      color: meta.color,
                      border: `1px solid ${meta.color}25`,
                    }}
                  >
                    {meta.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="projects-landing-stats fade-up" data-reveal style={{ "--delay": "220ms" }}>
            {collectionStats.map((item) => (
              <article key={item.label} className="projects-landing-stat">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-editorial-grid">
        {projectCaseStudies.map((project, index) => {
          const meta = domainMeta[project.domain];
          const accentColor = meta?.color || "var(--accent)";

          return (
            <CardTilt key={project.slug}>
              <article
                className="projects-editorial-card fade-up"
                data-reveal
                style={{
                  "--delay": `${140 + index * 90}ms`,
                  borderLeft: `3px solid ${accentColor}`,
                }}
              >
                <div className="projects-editorial-head">
                  <DomainBadge domain={project.domain} />
                  <span>{project.period}</span>
                </div>
                <h2>{project.title}</h2>
                <CompanyBadge company={project.company} />
                <p className="projects-editorial-summary">{project.summary}</p>
                <div className="projects-editorial-feature-row">
                  {project.showcase.flatMap((item) => item.features || []).slice(0, 4).map((feature) => (
                    <span key={`${project.slug}-${feature}`}>{feature}</span>
                  ))}
                </div>
                <div className="projects-editorial-stack-row">
                  {project.stack.slice(0, 5).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <Link className="projects-editorial-link" href={`/projects/${project.slug}`}>
                  Open Case Study
                </Link>
              </article>
            </CardTilt>
          );
        })}
      </section>
    </main>
  );
}
