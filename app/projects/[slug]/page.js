import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "../../ScrollReveal";
import CardTilt from "../../CardTilt";
import { projectCaseStudies, projectCaseStudyMap, domainMeta } from "../projectData";

export function generateStaticParams() {
  return projectCaseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectCaseStudyMap[slug];

  if (!project) return {};

  return {
    title: `${project.title} | Nasrin Akter`,
    description: project.summary,
  };
}

const companyColors = {
  SOFTIC: "#4da3ff",
  "Zaynax Limited": "#10b981",
  "Software Arena Ltd": "#f59e0b",
  "Personal / Portfolio Project": "#8b5cf6",
};

function MetaPill({ children, color }) {
  return (
    <span
      className="project-story-pill"
      style={{
        background: `${color}18`,
        color,
        border: `1px solid ${color}30`,
      }}
    >
      {children}
    </span>
  );
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectCaseStudyMap[slug];

  if (!project) notFound();

  const capabilityTags = project.showcase.flatMap((item) => item.features || []).slice(0, 6);
  const accentColor = project.domain && domainMeta[project.domain] ? domainMeta[project.domain].color : "var(--accent)";
  const companyColor = companyColors[project.company] || "var(--accent)";

  return (
    <main className="project-story-shell">
      <ScrollReveal />
      <div className="projects-editorial-orb projects-editorial-orb-one" />
      <div className="projects-editorial-orb projects-editorial-orb-two" />

      <section className="project-story-hero project-story-hero-rich" style={{ borderLeft: `3px solid ${accentColor}` }}>
        <div className="project-story-top scale-in" data-reveal data-reveal-type="scale-in" style={{ "--delay": "70ms" }}>
          <Link className="project-back-link" href="/projects">
            Back to All Projects
          </Link>
          <Link className="projects-nav-link" href="/">
            Portfolio Home
          </Link>
        </div>

        <div className="project-story-grid">
          <div className="project-story-copy fade-up" data-reveal style={{ "--delay": "120ms" }}>
            <div className="project-story-pill-row">
              {project.domain && domainMeta[project.domain] ? (
                <MetaPill color={accentColor}>
                  {domainMeta[project.domain].label}
                </MetaPill>
              ) : null}
              <MetaPill color={companyColor}>{project.company}</MetaPill>
            </div>

            <h1>{project.title}</h1>
            <p className="project-story-lead">{project.hero}</p>

            {capabilityTags.length ? (
              <div className="project-story-chip-row">
                {capabilityTags.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ) : null}
          </div>

          <aside className="project-story-meta fade-up" data-reveal style={{ "--delay": "220ms" }}>
            <CardTilt>
              <article className="project-story-meta-card" style={{ borderLeft: `2px solid ${accentColor}` }}>
                <span>Role</span>
                <strong>{project.role}</strong>
              </article>
            </CardTilt>
            <CardTilt>
              <article className="project-story-meta-card" style={{ borderLeft: `2px solid ${companyColor}` }}>
                <span>Period</span>
                <strong>{project.period}</strong>
              </article>
            </CardTilt>
            <CardTilt>
              <article className="project-story-meta-card" style={{ borderLeft: `2px solid ${accentColor}` }}>
                <span>Project Focus</span>
                <strong>{project.domain && domainMeta[project.domain] ? domainMeta[project.domain].label : "Product Engineering"}</strong>
              </article>
            </CardTilt>
          </aside>
        </div>
      </section>

      <section className="project-story-overview">
        <article className="project-story-panel fade-up" data-reveal style={{ "--delay": "110ms" }}>
          <p className="section-kicker">Overview</p>
          <h2>What this product needed to do</h2>
          <p>{project.summary}</p>
        </article>

        <article className="project-story-panel fade-up" data-reveal style={{ "--delay": "190ms" }}>
          <p className="section-kicker">Challenge</p>
          <h2>Why the problem was not trivial</h2>
          <p>{project.challenge}</p>
        </article>
      </section>

      <section className="project-story-section">
        <div className="project-story-heading fade-up" data-reveal style={{ "--delay": "90ms" }}>
          <p className="section-kicker">Contribution</p>
          <h2>Where I contributed across product and engineering.</h2>
        </div>

        <div className="project-story-bullet-grid">
          {project.contribution.map((item, index) => (
            <article
              key={item}
              className="project-story-number-card fade-up"
              data-reveal
              style={{ "--delay": `${150 + index * 90}ms` }}
            >
              <span className="project-story-number" style={{ color: accentColor, background: `${accentColor}18` }}>
                {index + 1}
              </span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      {project.showcase?.length ? (
        <section className="project-story-section">
          <div className="project-story-heading fade-up" data-reveal style={{ "--delay": "90ms" }}>
            <p className="section-kicker">Showcase</p>
            <h2>Interface and workflow highlights.</h2>
          </div>

          <div className="project-story-showcase-grid">
            {project.showcase.map((item, index) => (
              <CardTilt key={item.title}>
                <article
                  className={`showcase-card showcase-${item.tone} project-story-showcase-card fade-up`}
                  data-reveal
                  style={{ "--delay": `${150 + index * 110}ms` }}
                >
                  <div className="showcase-frame project-story-showcase-frame">
                    <div className="showcase-topbar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="showcase-scene">
                      <div className="showcase-rail">
                        <div className="showcase-rail-logo" />
                        <div className="showcase-rail-item" />
                        <div className="showcase-rail-item" />
                        <div className="showcase-rail-item" />
                      </div>
                      <div className="showcase-canvas">
                        <div className="showcase-headerbar">
                          <div className="showcase-header-pill" />
                          <div className="showcase-header-pill showcase-header-pill-short" />
                        </div>
                        <div className="showcase-body">
                          <div className="showcase-block showcase-block-lg" />
                          <div className="showcase-row">
                            <div className="showcase-block" />
                            <div className="showcase-block" />
                          </div>
                          <div className="showcase-row showcase-row-triple">
                            <div className="showcase-block showcase-block-chip" />
                            <div className="showcase-block showcase-block-chip" />
                            <div className="showcase-block showcase-block-chip" />
                          </div>
                          <div className="showcase-block showcase-block-sm" />
                        </div>
                        <div className="showcase-qr" />
                        <div className="showcase-chat-list">
                          <div className="showcase-chat-bubble showcase-chat-bubble-left" />
                          <div className="showcase-chat-bubble showcase-chat-bubble-right" />
                          <div className="showcase-chat-bubble showcase-chat-bubble-left showcase-chat-bubble-sm" />
                        </div>
                        <div className="showcase-table">
                          <div className="showcase-table-head" />
                          <div className="showcase-table-row" />
                          <div className="showcase-table-row" />
                          <div className="showcase-table-row" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="project-story-showcase-copy">
                    <p className="project-label">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.features?.length ? (
                      <div className="showcase-feature-row">
                        {item.features.map((feature) => (
                          <span key={feature}>{feature}</span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              </CardTilt>
            ))}
          </div>
        </section>
      ) : null}

      <section className="project-story-section">
        <div className="project-story-heading fade-up" data-reveal style={{ "--delay": "90ms" }}>
          <p className="section-kicker">Impact</p>
          <h2>What changed for the product or business.</h2>
        </div>

        <div className="project-story-bullet-grid">
          {project.impact.map((item, index) => (
            <article
              key={item}
              className="project-story-number-card project-story-impact-card fade-up"
              data-reveal
              style={{ "--delay": `${150 + index * 90}ms`, "--impact-accent": `${accentColor}14` }}
            >
              <span className="project-story-number" style={{ color: accentColor, background: `${accentColor}18` }}>
                {index + 1}
              </span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-story-footer-grid">
        <article className="project-story-panel fade-up" data-reveal style={{ "--delay": "120ms" }}>
          <p className="section-kicker">Tech Stack</p>
          <h2>Tools and platform choices</h2>
          <div className="project-story-chip-row">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>

        <article className="project-story-panel fade-up" data-reveal style={{ "--delay": "220ms" }}>
          <p className="section-kicker">Links</p>
          <h2>Demo, app, or project references</h2>
          <div className="project-story-link-list">
            {project.links.length ? (
              project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  <span>{link.label}</span>
                  <span className="project-story-link-arrow">↗</span>
                </a>
              ))
            ) : (
              <p>Private product context. The showcase above summarizes the workflow and interface direction.</p>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}
