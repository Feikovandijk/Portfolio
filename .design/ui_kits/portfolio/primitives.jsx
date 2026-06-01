/* ============================================================================
   UI KIT PRIMITIVES: atoms + chrome
   Globals exported at the bottom for cross-file use.
   ========================================================================== */
const { useState, useEffect, useRef } = React;

/* Lucide icon: renders an <i data-lucide>; App calls lucide.createIcons() */
function Icon({ name, size = 18, className = "" }) {
  return <i data-lucide={name} className={className} style={{ width: size, height: size, display: "inline-flex" }}></i>;
}

function StatusPill({ status, onMedia = false }) {
  if (!status) return null;
  return (
    <span className={"pill" + (onMedia ? " on-media" : "")}>
      <span className={"dot tone-" + status.tone}></span>{status.label}
    </span>
  );
}

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function Hex({ size = 38 }) {
  return (
    <div className="hex" style={{ width: size * 0.9, height: size }}>
      <span style={{ fontSize: size * 0.37 }}>FV</span>
    </div>
  );
}

function Nav({ view, go, theme, toggleTheme }) {
  const p = window.KIT.profile;
  const navItem = (id, label) => (
    <button className={"nav-link" + (view === id ? " active" : "")} onClick={() => go(id)}>{label}</button>
  );
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <button className="brand" onClick={() => go("home")} style={{ background: "none", border: "none", padding: 0 }}>
          <div style={{ textAlign: "left" }}>
            <div className="brand-name">{p.name}</div>
            <div className="brand-role">kubernetes engineer · game designer</div>
          </div>
        </button>
        <div className="nav-links">
          {navItem("home", "Work")}
          <a className="nav-link" href={p.links.blog} target="_blank" rel="noreferrer">Blog</a>
          {navItem("about", "About")}
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme" style={{ marginLeft: 6 }}>
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  const p = window.KIT.profile;
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-name">{p.name} · kubernetes engineer · game designer</div>
        <div className="footer-links">
          <a className="footer-link" href={"mailto:" + p.email}><Icon name="mail" size={17} /> Email</a>
          <a className="footer-link" href={p.links.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={17} /> LinkedIn</a>
          <a className="footer-link" href={p.links.ctftime} target="_blank" rel="noreferrer"><Icon name="flag" size={17} /> CTFTime</a>
          <a className="footer-link" href={p.links.github} target="_blank" rel="noreferrer"><Icon name="github" size={17} /> GitHub</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Icon, StatusPill, Tag, Hex, Nav, Footer });
