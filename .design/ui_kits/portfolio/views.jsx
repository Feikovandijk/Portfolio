/* ============================================================================
   UI KIT VIEWS: cards, sections, pages
   ========================================================================== */
/* ---- Featured project card -------------------------------------------- */
function ProjectCard({ project, onOpen }) {
  return (
    <article className="card" onClick={() => onOpen(project.id)} style={{ cursor: "pointer" }}>
      <div className="card-media"><img src={project.image} alt={project.title} /></div>
      <div className="card-body">
        <div className="card-kick">{project.mainRole}</div>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.summary}</p>
        <div className="card-tags">
          {project.tags.slice(0, 3).map(t => <Tag key={t}>{t}</Tag>)}
        </div>
        <div className="card-rule"></div>
        <div className="card-foot">
          <span className="card-year">{project.timeline}</span>
          <span className="card-more">View project <Icon name="arrow-right" size={15} /></span>
        </div>
      </div>
    </article>
  );
}

/* ---- Cloud / infrastructure card -------------------------------------- */
function InfraCard({ item }) {
  return (
    <a className="infra" href={item.link} target="_blank" rel="noreferrer">
      <div className="infra-head">
        <div className="infra-ico"><Icon name={item.icon} size={20} /></div>
        <div className="infra-name">{item.title}</div>
      </div>
      <div className="infra-desc">{item.desc}</div>
      <div className="card-tags">{item.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
      <div className="infra-foot">
        <span className="infra-repo"><Icon name="github" size={13} /> View repository</span>
      </div>
    </a>
  );
}

/* ---- Small project card ----------------------------------------------- */
function SmallCard({ project }) {
  const inner = (
    <div className="card" style={{ height: "100%" }}>
      <div className="card-media"><img src={project.image} alt={project.title} /></div>
      <div className="card-body">
        <h3 className="card-title" style={{ fontSize: 18 }}>{project.title}</h3>
        <p className="card-desc">{project.desc}</p>
        <div className="card-tags">{project.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
        {project.link ? (
          <div className="card-foot" style={{ marginTop: 12 }}>
            <span className="card-more" style={{ fontSize: 12.5 }}>Play <Icon name="external-link" size={13} /></span>
          </div>
        ) : null}
      </div>
    </div>
  );
  return project.link
    ? <a href={project.link} target="_blank" rel="noreferrer" style={{ display: "block", height: "100%" }}>{inner}</a>
    : inner;
}

/* ---- Achievement row -------------------------------------------------- */
function AchievementRow({ a }) {
  return (
    <div className="ach">
      <div className="ach-ico"><Icon name="award" size={18} /></div>
      <div>
        <div className="ach-title">{a.title}</div>
        <div className="ach-desc">{a.desc}</div>
        <span className="ach-year">{a.year}</span>
      </div>
    </div>
  );
}

/* ---- Hero ------------------------------------------------------------- */
function Hero({ go }) {
  const p = window.KIT.profile;
  return (
    <section className="hero gridbg">
      <div className="wrap hero-grid">
        <div>
          <div className="kicker">Kubernetes engineer · game designer</div>
          <h1>Hi, I'm <span className="accent">Feiko.</span></h1>
          <p className="hero-tagline">I build infrastructure for worlds, real and virtual.</p>
          <p className="hero-bio">{p.bio}</p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => { document.getElementById("work").scrollIntoView({ behavior: "smooth" }); }}>
              View work <Icon name="arrow-down" size={16} />
            </button>
            <a className="btn btn-secondary" href={p.links.github} target="_blank" rel="noreferrer">
              <Icon name="github" size={16} /> GitHub
            </a>
            <a className="btn btn-ghost" href={p.links.blog} target="_blank" rel="noreferrer">
              <Icon name="pen-line" size={16} /> Blog
            </a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-ring"></div>
          <img className="portrait" src="../../assets/feikohome.png" alt={p.name} />
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = window.KIT.profile.stats;
  return (
    <div className="wrap" style={{ marginTop: -28, position: "relative", zIndex: 2 }}>
      <div className="stats">
        {stats.map(s => (
          <div className="stat" key={s.k}>
            <div className="stat-v">{s.v}</div>
            <div className="stat-k">{s.k}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Home view -------------------------------------------------------- */
function HomeView({ go }) {
  const K = window.KIT;
  return (
    <div>
      <Hero go={go} />

      <section className="section" id="work" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="kicker">Selected work</div>
              <h2 className="sec-title">Game systems</h2>
              <p className="sec-sub">Shipped titles, research, and the teams behind them.</p>
            </div>
          </div>
          <div className="grid-2">
            {K.projects.map(p => <ProjectCard key={p.id} project={p} onOpen={go} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="kicker">Engineering &amp; infrastructure</div>
              <h2 className="sec-title">What I run them on</h2>
              <p className="sec-sub">Kubernetes, backends and the tools I build around games. All open source.</p>
            </div>
          </div>
          <div className="grid-3">
            {K.infra.map(i => <InfraCard key={i.id} item={i} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="kicker">Recognition</div>
              <h2 className="sec-title">Awards</h2>
            </div>
          </div>
          <div className="grid-2">
            {K.achievements.map((a, i) => <AchievementRow key={i} a={a} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="kicker">Also built</div>
              <h2 className="sec-title">Other projects</h2>
            </div>
          </div>
          <div className="grid-3">
            {K.smallProjects.map(p => <SmallCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---- About view ------------------------------------------------------- */
function AboutView() {
  const p = window.KIT.profile;
  const K = window.KIT;
  const bio = [
    "I'm a Kubernetes & DevOps engineer who loves turning hard systems into reliable, legible ones. For years that meant games: leading technical design on Arid and shipping a handful of titles. These days it means clusters, pipelines and GitOps, with the same systems thinking underneath.",
    "I'm naturally curious, whether I'm debugging a failing deploy or diving into hands-on projects like car builds and home renovations (occasionally 'fixing' something that wasn't broken keeps life interesting). Every unconventional project is a chance to learn something new.",
    "My Master's thesis explored how multiplayer integration changes the emotional core of singleplayer survival games: rigorous, qualitative work that sharpened how I reason about complex systems and trade-offs.",
    "I value collaboration and believe good systems, like good games, are built by teams who share ideas and back each other up. When I'm not in a terminal, you'll likely find me outdoors, climbing rocks."
  ];
  return (
    <div className="section wrap">
      <div className="kicker">About</div>
      <h1 className="sec-title" style={{ fontSize: 48, marginBottom: 36 }}>Hello.</h1>
      <div className="about-grid">
        <div>
          <div className="about-bio">{bio.map((para, i) => <p key={i}>{para}</p>)}</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "var(--fg-1)", margin: "10px 0 16px" }}>Skills</h3>
          <div className="skills">{K.skills.map(s => <Tag key={s}>{s}</Tag>)}</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "var(--fg-1)", margin: "32px 0 14px" }}>Contact</h3>
          <div className="footer-links" style={{ marginLeft: -12 }}>
            <a className="footer-link" href={"mailto:" + p.email}><Icon name="mail" size={17} /> {p.email}</a>
            <a className="footer-link" href={p.links.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={17} /> LinkedIn</a>
            <a className="footer-link" href={p.links.github} target="_blank" rel="noreferrer"><Icon name="github" size={17} /> GitHub</a>
          </div>
        </div>
        <div className="about-photos">
          <img src="../../assets/feikoclimb.jpg" alt="Climbing" />
          <img src="../../assets/feikoballs.jpg" alt="" />
          <img src="../../assets/feikofancy.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

/* ---- Project detail view ---------------------------------------------- */
function DetailView({ id, go }) {
  const project = window.KIT.projects.find(p => p.id === id);
  if (!project) return null;
  const s = project.stats;
  return (
    <div className="section wrap">
      <button className="detail-back" onClick={() => go("home")}><Icon name="arrow-left" size={15} /> back to work</button>
      <div className="detail-hero">
        <img src={project.image} alt={project.title} />
        <div className="detail-hero-body">
          <div className="kicker" style={{ color: "rgba(255,255,255,.7)" }}>{project.mainRole}</div>
          <h1 className="detail-title">{project.title}</h1>
        </div>
      </div>

      <div className="detail-grid">
        <div>
          <div className="card-tags" style={{ marginBottom: 24 }}>{project.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
          <div className="detail-narr">{project.narrative}</div>
          {project.quote && project.quote.text ? (
            <blockquote className="quote">
              <p>“{project.quote.text}”</p>
              <cite>{project.quote.source}</cite>
            </blockquote>
          ) : null}
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "var(--fg-1)", margin: "10px 0 0" }}>Key contributions</h3>
          <ul className="contrib">{project.contributions.map((c, i) => <li key={i}>{c}</li>)}</ul>
          {project.link ? (
            <a className="btn btn-primary" href={project.link} target="_blank" rel="noreferrer" style={{ marginTop: 30 }}>
              <Icon name="external-link" size={16} /> Visit project
            </a>
          ) : null}
        </div>
        <aside>
          <div className="statbox">
            <h4>Project spec</h4>
            <div className="statrow"><span className="k">role</span><span className="v">{project.mainRole}</span></div>
            <div className="statrow"><span className="k">years</span><span className="v">{project.timeline}</span></div>
            <div className="statrow"><span className="k">team</span><span className="v">{s.teamSize}</span></div>
            <div className="statrow"><span className="k">duration</span><span className="v">{s.duration}</span></div>
            <div className="statrow"><span className="k">state</span><span className="v">{project.status.label}</span></div>
            {s.platforms && s.platforms.length ? (
              <div className="statrow"><span className="k">platforms</span><span className="v">{s.platforms.join(" · ")}</span></div>
            ) : null}
          </div>
          <div className="statbox" style={{ marginTop: 18 }}>
            <h4>Stack</h4>
            <div className="card-tags">{project.tech.map(t => <Tag key={t}>{t}</Tag>)}</div>
          </div>
        </aside>
      </div>
    </div>
  );
}

Object.assign(window, { ProjectCard, InfraCard, SmallCard, AchievementRow, Hero, StatsStrip, HomeView, AboutView, DetailView });
