/* global React */
const { useState } = React;

function Header({ active = "home", onNav }) {
  const items = [
    { id: "home", label: "Home" },
    { id: "doctrine", label: "Doctrine" },
    { id: "deployments", label: "Deployments" },
    { id: "contact", label: "Contact" }
  ];
  return (
    <header className="bc-header">
      <div className="bc-container bc-header-row">
        <a className="bc-logo" onClick={() => onNav && onNav("home")}>
          <span className="bc-logo-mark">◆</span>
          <span className="bc-logo-word">BRIELOS</span>
        </a>
        <nav className="bc-nav">
          {items.map(i => (
            <a
              key={i.id}
              className={"bc-nav-link " + (active === i.id ? "is-active" : "")}
              onClick={() => onNav && onNav(i.id)}
            >
              {i.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

window.Header = Header;
