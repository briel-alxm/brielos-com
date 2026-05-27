/* global React */
function ArkeGlyph({ kind = "law" }) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  if (kind === "law") return (
    <svg className="bc-glyph" viewBox="0 0 52 52">
      <g {...stroke}>
        <line x1="12" y1="18" x2="24" y2="18"/><line x1="28" y1="18" x2="40" y2="18"/>
        <line x1="26" y1="8" x2="26" y2="28"/><line x1="12" y1="18" x2="26" y2="8"/>
        <line x1="40" y1="18" x2="26" y2="8"/><line x1="20" y1="28" x2="32" y2="28"/>
      </g>
    </svg>
  );
  if (kind === "bid") return (
    <svg className="bc-glyph" viewBox="0 0 52 52">
      <g {...stroke}>
        <line x1="26" y1="8" x2="40" y2="20"/><line x1="40" y1="20" x2="40" y2="32"/>
        <line x1="40" y1="32" x2="26" y2="44"/><line x1="26" y1="44" x2="12" y2="32"/>
        <line x1="12" y1="32" x2="12" y2="20"/><line x1="12" y1="20" x2="26" y2="8"/>
        <line x1="26" y1="20" x2="26" y2="32"/>
      </g>
    </svg>
  );
  if (kind === "partner") return (
    <svg className="bc-glyph" viewBox="0 0 52 52">
      <g {...stroke}>
        <path d="M 16 26 L 26 16 L 36 26 L 26 36 Z"/>
        <line x1="6"  y1="26" x2="16" y2="26"/>
        <line x1="36" y1="26" x2="46" y2="26"/>
        <line x1="26" y1="6"  x2="26" y2="16"/>
        <line x1="26" y1="36" x2="26" y2="46"/>
        <circle cx="6"  cy="26" r="1.6" fill="currentColor"/>
        <circle cx="46" cy="26" r="1.6" fill="currentColor"/>
        <circle cx="26" cy="6"  r="1.6" fill="currentColor"/>
        <circle cx="26" cy="46" r="1.6" fill="currentColor"/>
      </g>
    </svg>
  );
  // dispatch (default)
  return (
    <svg className="bc-glyph" viewBox="0 0 52 52">
      <g {...stroke}>
        <path d="M 8 26 Q 18 16, 26 16 T 44 26"/>
        <path d="M 44 26 L 38 22 M 44 26 L 38 30"/>
        <circle cx="8" cy="26" r="1.5" fill="currentColor"/>
        <circle cx="26" cy="16" r="1.5" fill="currentColor"/>
        <circle cx="44" cy="26" r="1.5" fill="currentColor"/>
      </g>
    </svg>
  );
}

function ArkeCard({ glyph, status = "live", title, subtitle, body, cta, onCta }) {
  return (
    <div className="bc-arke-card">
      {status && (
        <span className={"bc-badge bc-badge-" + status}>
          <span className="bc-badge-dot"/>{status === "live" ? "Live" : "Coming Soon"}
        </span>
      )}
      <div className="bc-arke-icon"><ArkeGlyph kind={glyph}/></div>
      <h3 className="bc-arke-title">{title}</h3>
      <div className="bc-arke-sub">{subtitle}</div>
      <p className="bc-arke-desc">{body}</p>
      <a className="bc-arke-link" onClick={onCta}>
        <span>{cta || "Launch System →"}</span>
      </a>
    </div>
  );
}

window.ArkeCard = ArkeCard;
window.ArkeGlyph = ArkeGlyph;
