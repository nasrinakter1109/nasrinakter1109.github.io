import Link from "next/link";
import ScrollReveal from "../ScrollReveal";
import { projectCaseStudies } from "./projectData";

export const metadata = {
  title: "Project Case Studies | Nasrin Akter",
  description: "Selected software engineering projects, demos, and case-study summaries by Nasrin Akter.",
};

export default function ProjectsPage() {
  return (
    <main className="projects-index-shell">
      <ScrollReveal />
      <div className="projects-page-glow projects-page-glow-one" />
      <div className="projects-page-glow projects-page-glow-two" />

      <section className="projects-index-hero fade-up is-visible">
        <p className="section-tag">Case Studies</p>
        <h1>Selected projects with product context, engineering scope, and live references.</h1>
        <p>
          These pages expand beyond the portfolio overview so recruiters can quickly understand the kind of
          systems, workflows, and business problems I have worked on.
        </p>
      </section>

      <section className="projects-index-grid">
        {projectCaseStudies.map((project, index) => (
          <article
            key={project.slug}
            className="projects-index-card fade-up project-lift"
            data-reveal
            style={{ "--delay": `${120 + index * 90}ms` }}
          >
            <p className="compact-company">{project.company}</p>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <div className="stack-row">
              {project.stack.slice(0, 4).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <Link className="case-study-link" href={`/projects/${project.slug}`}>
              View Case Study
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
