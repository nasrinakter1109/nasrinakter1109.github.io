import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "../../ScrollReveal";
import { projectCaseStudies, projectCaseStudyMap } from "../projectData";

export function generateStaticParams() {
  return projectCaseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectCaseStudyMap[slug];

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Nasrin Akter`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectCaseStudyMap[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="project-case-shell">
      <ScrollReveal />
      <div className="projects-page-glow projects-page-glow-one" />
      <div className="projects-page-glow projects-page-glow-two" />

      <Link className="project-back-link fade-up is-visible" href="/">
        Back to Portfolio
      </Link>

      <section className="project-case-hero fade-up is-visible">
        <div className="project-case-copy">
          <p className="section-tag">Project Case Study</p>
          <h1>{project.title}</h1>
          <p className="project-case-lead">{project.hero}</p>
        </div>

        <aside className="project-case-meta">
          <div className="project-meta-card">
            <span>Company</span>
            <strong>{project.company}</strong>
          </div>
          <div className="project-meta-card">
            <span>Role</span>
            <strong>{project.role}</strong>
          </div>
          <div className="project-meta-card">
            <span>Period</span>
            <strong>{project.period}</strong>
          </div>
        </aside>
      </section>

      <section className="project-case-grid">
        <article className="project-case-card fade-up project-lift" data-reveal style={{ "--delay": "120ms" }}>
          <p className="section-tag">Overview</p>
          <p>{project.summary}</p>
        </article>
        <article className="project-case-card fade-up project-lift" data-reveal style={{ "--delay": "220ms" }}>
          <p className="section-tag">Challenge</p>
          <p>{project.challenge}</p>
        </article>
      </section>

      <section className="project-case-section">
        <div className="section-head fade-up" data-reveal>
          <p className="section-tag">What I Worked On</p>
          <h2>Engineering responsibilities and product-facing contribution</h2>
        </div>
        <div className="project-bullet-grid">
          {project.contribution.map((item, index) => (
            <article
              key={item}
              className="project-bullet-card fade-up project-lift"
              data-reveal
              style={{ "--delay": `${140 + index * 90}ms` }}
            >
              <span className="statement-dot" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-case-section">
        <div className="section-head fade-up" data-reveal>
          <p className="section-tag">Showcase</p>
          <h2>Visual references based on the provided product flows and demo context</h2>
        </div>
        <div className="showcase-grid">
          {project.showcase.map((item, index) => (
            <article
              key={item.title}
              className={`showcase-card showcase-${item.tone} fade-up project-lift`}
              data-reveal
              style={{ "--delay": `${140 + index * 110}ms` }}
            >
              <div className="showcase-frame">
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
            </article>
          ))}
        </div>
      </section>

      <section className="project-case-section">
        <div className="section-head fade-up" data-reveal>
          <p className="section-tag">Impact</p>
          <h2>How the work supported product reliability and business flow</h2>
        </div>
        <div className="project-bullet-grid">
          {project.impact.map((item, index) => (
            <article
              key={item}
              className="project-bullet-card fade-up project-lift"
              data-reveal
              style={{ "--delay": `${140 + index * 90}ms` }}
            >
              <span className="statement-dot" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-case-grid">
        <article className="project-case-card fade-up project-lift" data-reveal style={{ "--delay": "120ms" }}>
          <p className="section-tag">Stack</p>
          <div className="stack-row">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
        <article className="project-case-card fade-up project-lift" data-reveal style={{ "--delay": "220ms" }}>
          <p className="section-tag">Demo and Links</p>
          <div className="project-link-list">
            {project.links.length ? (
              project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))
            ) : (
              <p>Private product context. Visual showcase and implementation summary are included above.</p>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}
