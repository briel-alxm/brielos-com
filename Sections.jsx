/* global React */
function PhilosophyLaws() {
  const laws = [
    { num: "01", title: "Substrate Primacy", body: "Architecture dictates outcome. You cannot culture your way out of a broken system. Fix the foundation first. Clarity follows." },
    { num: "02", title: "Signal-to-Noise Ratio", body: "Complexity is a mask for distortion. A high-integrity system requires aggressive distillation of noise until only the clear signal remains. If a process requires heroic effort, the architecture is broken." },
    { num: "03", title: "Structural Autonomy", body: "A system is not a solution unless it is autonomous. We build logic that functions independently of personality, motivation, or manual oversight. Zero heroic effort required." }
  ];
  return (
    <section className="bc-section">
      <div className="bc-container">
        <div className="bc-section-rail">
          <div className="bc-section-num">§ 02</div>
          <div className="bc-section-num-label">How we think</div>
        </div>
        <div className="bc-section-body">
          <h2 className="bc-h2">Three Laws of Structural Integrity</h2>
          <p className="bc-lead">Every organisational failure is a structural failure disguised as a human one. We do not intervene at the layer of effort — we rebuild the foundation upon which effort is spent.</p>
          <div className="bc-laws-grid">
            {laws.map(l => (
              <div className="bc-law" key={l.num}>
                <div className="bc-law-num">{l.num}</div>
                <h3 className="bc-law-title">{l.title}</h3>
                <p className="bc-law-body">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodologyGrid() {
  const steps = [
    { num: "01", title: "Diagnosis", body: "Identify the fractured substrate. Map where signal breaks — not surface symptoms, but structural distortion. Where does noise enter the system?" },
    { num: "02", title: "Distillation", body: "Eliminate noise aggressively. Preserve only what matters. Build qualification logic, routing rules, and decision criteria from operational reality, not guesswork." },
    { num: "03", title: "Deployment", body: "Launch autonomous systems. The architecture works independently of personality or manual oversight. Decision-making becomes reliable. Scale happens without heroic effort." }
  ];
  return (
    <section className="bc-section bc-section--alt">
      <div className="bc-container">
        <div className="bc-section-rail">
          <div className="bc-section-num">§ 03</div>
          <div className="bc-section-num-label">How we work</div>
        </div>
        <div className="bc-section-body">
          <h2 className="bc-h2">Clear Signal Design™</h2>
          <p className="bc-lead">Every ARKE system follows the same diagnostic and deployment logic.</p>
          <div className="bc-method-grid">
            {steps.map(s => (
              <div className="bc-method" key={s.num}>
                <div className="bc-method-num">{s.num}</div>
                <h3 className="bc-method-title">{s.title}</h3>
                <p className="bc-method-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABlock({ title, body, primary, secondary, onPrimary, onSecondary }) {
  return (
    <section className="bc-cta">
      <div className="bc-container">
        <h2 className="bc-h2 bc-cta-title">{title}</h2>
        <p className="bc-lead bc-cta-body">{body}</p>
        <div className="bc-btn-group">
          <button className="bc-btn" onClick={onPrimary}>{primary}</button>
          {secondary && <button className="bc-btn bc-btn--sec" onClick={onSecondary}>{secondary}</button>}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bc-footer">
      <div className="bc-container">
        <p>© 2026 BRIEL STRATEGIES LLC  ·  BRIELOS  ·  BUILT ON CLEAR SIGNAL DESIGN™</p>
      </div>
    </footer>
  );
}

window.PhilosophyLaws = PhilosophyLaws;
window.MethodologyGrid = MethodologyGrid;
window.CTABlock = CTABlock;
window.Footer = Footer;
