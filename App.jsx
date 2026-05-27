/* global React, ReactDOM, Header, Hero, ArkeCard, PhilosophyLaws, MethodologyGrid, CTABlock, Footer */
const { useState } = React;

function HomePage({ onNav }) {
  return (
    <>
      <Hero
        eyebrow="Structural Intelligence"
        title="Eliminate operational friction through systematic design."
        highlight="friction"
        lead="ARKE deploys four specialised systems that restore signal, eliminate noise, and make decision-making reliable at scale. Each system is built on the same structural logic."
      />
      <section className="bc-arke-grid">
        <div className="bc-container">
          <div className="bc-arke-grid-inner">
            <ArkeCard
              glyph="law" status="live"
              title="ARKE | Law"
              subtitle="Case Qualification"
              body="Structured intake transforms high-value cases into a prioritised pipeline. Qualification scoring surfaces urgency and case value instantly. Staff review qualified matters instead of interpreting noise."
              cta="Launch System →"
              onCta={() => onNav("deployments")}
            />
            <ArkeCard
              glyph="bid" status="live"
              title="ARKE | Bid"
              subtitle="Estimate Qualification"
              body="Request qualification scores project value and margin instantly. High-margin work surfaces first for estimator attention. Close rate and project margin improve without adding staff."
              cta="Launch System →"
              onCta={() => onNav("deployments")}
            />
            <ArkeCard
              glyph="dispatch" status="coming"
              title="ARKE | Dispatch"
              subtitle="Job Routing"
              body="Service requests auto-score for urgency and dispatch priority. Tech routing optimises for geography, skill, and availability. Completed jobs per technician increase without adding headcount."
              cta="Join Waitlist →"
              onCta={() => onNav("deployments")}
            />
            <ArkeCard
              glyph="partner" status="live"
              title="ARKE | Partner"
              subtitle="Channel Partner Infrastructure"
              body="Partner dashboards and collaborative intelligence tools for reseller networks. Enables partners to operate autonomously at scale — without expanding central operations."
              cta="Explore Pilot →"
              onCta={() => onNav("deployments")}
            />
          </div>
        </div>
      </section>
      <section className="bc-section">
        <div className="bc-container">
          <div className="bc-section-rail">
            <div className="bc-section-num">§ 01</div>
            <div className="bc-section-num-label">The foundation</div>
          </div>
          <div className="bc-section-body">
            <h2 className="bc-h2">Built on BrielOS methodology.</h2>
            <div className="bc-prose">
              <p>ARKE is not a tool suite. Each system is an implementation of <strong>Clear Signal Design™</strong> — a methodology that turns organisational noise into reliable operational clarity.</p>
              <p>The four ARKE systems demonstrate a singular principle: <strong>when you fix the architecture, clarity follows.</strong> Intake becomes a qualification pipeline. Bidding becomes margin-aware. Dispatch becomes autonomous. Partner networks become sovereign. Different problems. Same thinking.</p>
            </div>
          </div>
        </div>
      </section>
      <CTABlock
        title="Ready to diagnose structural friction?"
        body="Start with a diagnostic conversation. We map your biggest distortion point and show you what's possible when you fix the foundation."
        primary="Book Diagnostic"
        secondary="Explore Deployments"
        onPrimary={() => onNav("contact")}
        onSecondary={() => onNav("deployments")}
      />
    </>
  );
}

function DoctrinePage() {
  return (
    <>
      <section className="bc-section" style={{borderTop: '1px solid var(--rule)'}}>
        <div className="bc-container">
          <div className="bc-section-rail">
            <div className="bc-section-num">§ 01</div>
            <div className="bc-section-num-label">The reality</div>
          </div>
          <div className="bc-section-body">
            <h2 className="bc-h2">Organisational noise is structural, not motivational.</h2>
            <p className="bc-lead">Most organisational dysfunction is framed as a culture problem, a leadership problem, or a talent problem. Often, it is simpler than that — the system was designed for a previous reality.</p>
          </div>
        </div>
      </section>
      <PhilosophyLaws/>
      <MethodologyGrid/>
    </>
  );
}

function DeploymentsPage({ onNav }) {
  return (
    <>
      <Hero
        eyebrow="ARKE Deployments"
        title="Four systems. One architecture."
        highlight="architecture"
        lead="ARKE is deployed across four operational domains — case intake, estimate qualification, service dispatch, and channel partner infrastructure. Each system operates independently. All four share the same structural logic."
      />
      <section className="bc-arke-grid">
        <div className="bc-container">
          <div className="bc-arke-grid-inner">
            <ArkeCard glyph="law" status="live" title="ARKE | Law" subtitle="Case Intake Qualification" body="Transforms raw intake into a prioritised pipeline. Cases auto-score for urgency, complexity, and revenue potential. Staff review qualified matters. Noise is eliminated before human review." cta="Request Demo →" onCta={() => onNav("contact")}/>
            <ArkeCard glyph="partner" status="live" title="ARKE | Partner" subtitle="Channel Partner Infrastructure" body="Partner dashboards and collaborative intelligence tools for reseller networks. Enables partners to operate autonomously at scale — without expanding central operations." cta="Explore Pilot →" onCta={() => onNav("contact")}/>
            <ArkeCard glyph="bid" status="coming" title="ARKE | Bid" subtitle="Estimate Qualification" body="Scores requests for project value and margin at intake. High-margin work surfaces first. Estimators focus on profitable work. Close rate and average project margin improve without headcount increase." cta="Join Waitlist →" onCta={() => onNav("contact")}/>
            <ArkeCard glyph="dispatch" status="coming" title="ARKE | Dispatch" subtitle="Service Request Routing" body="Auto-scores service requests for urgency and dispatch priority. Routes jobs to technicians by geography, skill, and availability. Completed work per technician increases. Dispatch becomes autonomous." cta="Join Waitlist →" onCta={() => onNav("contact")}/>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <section className="bc-section" style={{borderTop: '1px solid var(--rule)', minHeight: '60vh'}}>
      <div className="bc-container">
        <div className="bc-section-rail">
          <div className="bc-section-num">§ —</div>
          <div className="bc-section-num-label">Diagnostic</div>
        </div>
        <div className="bc-section-body">
          <h2 className="bc-h2">Start with a diagnostic.</h2>
          <p className="bc-lead">A 30-minute conversation. We map your biggest distortion point. You leave with structural clarity on what to fix first.</p>
          <p className="bc-prose"><strong>hello@brielstrategies.com</strong></p>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="bc-app" data-screen-label={"brielos.com / " + page}>
      <Header active={page} onNav={setPage}/>
      {page === "home" && <HomePage onNav={setPage}/>}
      {page === "doctrine" && <DoctrinePage/>}
      {page === "deployments" && <DeploymentsPage onNav={setPage}/>}
      {page === "contact" && <ContactPage/>}
      <Footer/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
