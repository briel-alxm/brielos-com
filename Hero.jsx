/* global React */
function Hero({ eyebrow, title, highlight, lead, children }) {
  // title may include {highlight} marker — render that span in storm-teal italic
  const renderTitle = () => {
    if (highlight && title.includes(highlight)) {
      const parts = title.split(highlight);
      return (
        <>
          {parts[0]}
          <em className="bc-hero-highlight">{highlight}</em>
          {parts[1]}
        </>
      );
    }
    return title;
  };
  return (
    <section className="bc-hero">
      <div className="bc-container bc-hero-inner">
        {eyebrow && <span className="bc-eyebrow">{eyebrow}</span>}
        <h1 className="bc-hero-title">{renderTitle()}</h1>
        {lead && <p className="bc-hero-lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
window.Hero = Hero;
