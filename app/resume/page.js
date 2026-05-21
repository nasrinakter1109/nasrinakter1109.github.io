import ScrollReveal from "../ScrollReveal";
import MagneticButton from "../MagneticButton";
import PDFViewer from "../PDFViewer";

export const metadata = {
  title: "Nasrin Akter | Resume",
  description: "View the resume of Nasrin Akter directly in the browser.",
};

export default function ResumePage() {
  return (
    <main className="resume-page-shell">
      <ScrollReveal />

      <section className="resume-header-card fade-up" data-reveal style={{ "--delay": "120ms" }}>
        <div>
          <p className="section-tag">Resume</p>
          <h1>Nasrin Akter CV</h1>
          <p className="resume-lead">
            View my resume below, or download a copy.
          </p>
        </div>
        <div className="resume-actions">
          <MagneticButton className="secondary-btn" href="/Nasrin_Akter_Resume.pdf" target="_blank" rel="noreferrer">
            Open in new tab
          </MagneticButton>
          <MagneticButton className="secondary-btn" href="/Nasrin_Akter_Resume.pdf" download>
            Download CV
          </MagneticButton>
          <MagneticButton className="secondary-btn" href="/">
            Back to Portfolio
          </MagneticButton>
        </div>
      </section>

      <section className="resume-viewer-card fade-up" data-reveal style={{ "--delay": "200ms" }}>
        <PDFViewer url="/Nasrin_Akter_Resume.pdf" />
      </section>
    </main>
  );
}
