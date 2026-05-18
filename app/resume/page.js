export const metadata = {
  title: "Nasrin Akter | Resume",
  description: "View the resume of Nasrin Akter directly in the browser.",
};

export default function ResumePage() {
  return (
    <main className="resume-page-shell">
      <section className="resume-header-card">
        <div>
          <p className="section-tag">Resume</p>
          <h1>Nasrin Akter CV</h1>
          <p className="resume-lead">
            You can view the resume directly here in the browser, or download a copy if needed.
          </p>
        </div>
        <div className="resume-actions">
          <a className="primary-btn" href="/Nasrin_Akter_Resume.pdf" target="_blank" rel="noreferrer">
            Open PDF
          </a>
          <a className="secondary-btn" href="/Nasrin_Akter_Resume.pdf" download>
            Download CV
          </a>
          <a className="secondary-btn" href="/">
            Back to Portfolio
          </a>
        </div>
      </section>

      <section className="resume-viewer-card">
        <iframe
          title="Nasrin Akter Resume"
          src="/Nasrin_Akter_Resume.pdf#view=FitH"
          className="resume-frame"
        />
      </section>
    </main>
  );
}
