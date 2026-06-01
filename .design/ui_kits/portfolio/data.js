/* ============================================================================
   UI KIT DATA: Feiko van Dijk portfolio (rebranded)
   ========================================================================== */

window.KIT = {
  profile: {
    name: "Feiko van Dijk",
    role: "Kubernetes engineer · game designer",
    location: "Netherlands",
    tagline: "I build infrastructure for worlds, real and virtual.",
    bio: "I'm a Kubernetes & DevOps engineer and a game designer from the Netherlands. I've led technical design on Arid, a survival game that hit 200k downloads in its first month, and I bring that same systems thinking to clusters, pipelines and GitOps. I hold an MSc in Games Research and a BSc in Game Development. Below: the worlds I've built, and the engineering behind them.",
    email: "mail@feiko.org",
    links: {
      github: "https://github.com/Feikovandijk",
      linkedin: "https://www.linkedin.com/in/feikovandijk/",
      blog: "https://blog.feikovandijk.com",
      ctftime: "https://ctftime.org/team/165809"
    },
    stats: [
      { k: "downloads · arid", v: "200k+" },
      { k: "shipped titles", v: "6" },
      { k: "years in industry", v: "5+" },
      { k: "clusters in prod", v: "k3s · k8s" }
    ]
  },

  skills: [
    "Kubernetes", "k3s", "GitOps", "Docker", "Terraform", "CI/CD",
    "AWS", "Google Cloud", "Python", "Go", "Technical Design",
    "Systems Design", "Unreal Engine", "Unity", "Perforce", "OSINT"
  ],

  /* ---- Featured game projects (from the live portfolio) ----------------- */
  projects: [
    {
      id: "arid",
      title: "Arid",
      status: { label: "Released", tone: "running" },
      mainRole: "DevOps Engineer & Technical Designer",
      timeline: "2020 – 2022",
      image: "../../assets/Arid2.png",
      summary: "A gritty, exploration-survival experience set in the Atacama Desert, the driest place on earth. Designed core systems: weather, sun damage, buffs & debuffs.",
      tags: ["Released", "Unreal Engine", "Game Design", "Analytics", "CI/CD"],
      quote: {
        text: "The biggest threat to my survival in Arid, apart from the relentless sun, is my own malfunctioning brain.",
        source: "Christopher Livingstone, PCGamer"
      },
      stats: { teamSize: "21 developers", duration: "9 months", platforms: ["Steam", "PlayStation 4"] },
      tech: ["Unreal Engine", "GameAnalytics", "Google Cloud", "Jenkins CI", "Perforce", "Jira", "SteamWorks"],
      contributions: [
        "Directed design of base upgrades, character & equipment, weather & day/night cycle, and status effects.",
        "Supported environment effects, crafting systems and UI/UX across a 21-person team.",
        "Owned analytics implementation and CI/CD pipeline troubleshooting from concept to release."
      ],
      narrative: "Arid started out as a student project but ended up being an unexpected mini-hit. We set a goal of 20,000 downloads, and hit over 200,000 in the first month. It was my first full-cycle development experience, and the project where I first felt like a real developer.\n\nAs Design Lead and Technical Designer, I partnered with the Creative Director on the game vision and translated design intent into reality with the Art and Tech teams. Beyond design, I lived in the build pipeline: gameplay optimization, analytics, and keeping CI/CD green. That pipeline work is exactly what pulled me toward infrastructure engineering.",
      link: "https://store.steampowered.com/app/1463730/Arid/"
    },
    {
      id: "arid-2",
      title: "Arid 2.0",
      status: { label: "Unreleased", tone: "warning" },
      mainRole: "DevOps Engineer & Technical Designer",
      timeline: "2023 – 2025",
      image: "../../assets/Arid2.png",
      summary: "An untitled sequel to Arid, built alongside founding and scaling Viscacha Studios: design, business and pipeline in one role.",
      tags: ["Unreleased", "Unreal Engine", "Business Development", "TeamCity", "AWS"],
      quote: { text: "", source: "" },
      stats: { teamSize: "5 developers", duration: "16 months", platforms: ["Unannounced"] },
      tech: ["Unreal Engine", "Perforce", "Jira", "TeamCity", "Google Analytics", "AWS"],
      contributions: [
        "Designed and implemented new core gameplay systems extending the existing IP.",
        "Established Viscacha Studios' legal and financial structure; led pitch materials and budget forecasts.",
        "Stood up the studio's build & analytics stack on AWS with TeamCity and Perforce.",
        "Represented the studio at GDC, Gamescom and INDIGO."
      ],
      narrative: "This dual role meant designing immersive survival mechanics while also building the business: structure, funding, and industry relationships, all while running the sequel's build and analytics infrastructure on AWS.",
      link: ""
    },
    {
      id: "thesis",
      title: "Master's Thesis",
      status: { label: "Research", tone: "info" },
      mainRole: "User Researcher",
      timeline: "2023 – 2024",
      image: "../../assets/buasthesis.png",
      summary: "A research study on how multiplayer integration impacts solitude and challenge in singleplayer survival games.",
      tags: ["Research", "User Experience", "Academic Writing"],
      quote: {
        text: "Adding multiplayer isn't just about adding features; it's a fundamental design decision that impacts the game's emotional and systemic core.",
        source: "Master's Thesis Research"
      },
      stats: { teamSize: "Individual research", duration: "9 months", platforms: [] },
      tech: ["Qualitative Research", "Semi-Structured Interviews", "Gameplay Analysis", "MaxQDA"],
      contributions: [
        "Investigated how integrating multiplayer impacts the core feeling of solitude in singleplayer survival games.",
        "Designed and ran qualitative research across 14 players and 64+ gameplay sessions.",
        "Analysed player feedback to identify emotional and systemic shifts between solo and co-op play."
      ],
      narrative: "Survival games excel at creating tension through isolation. My thesis asked: what happens to that emotional core when you add co-op? Using Arid, The Long Dark, and Green Hell as case studies, I analysed gameplay recordings and ran in-depth interviews on solitude, risk and immersion.\n\nThe finding: multiplayer is a fundamental design decision, not a feature toggle. It reshapes pacing, challenge and atmosphere through distributed labour and a social safety net. The rigour of that research, refining questions and structuring evidence, is the same discipline I bring to debugging a cluster.",
      link: "https://www.researchgate.net/publication/381547877_Implementing_Multiplayer_in_Single_Player_games_Analysis_of_Multiplayer_Integration_in_Singleplayer_Survival_Games"
    },
    {
      id: "quantum",
      title: "Quantum",
      status: { label: "Archived", tone: "error" },
      mainRole: "Game Designer",
      timeline: "2019 – 2020",
      image: "../../assets/QuantumLogo.png",
      summary: "An immersive VR puzzle game set in an impossible, non-euclidean laboratory. Built the core 'Entanglement Gun' mechanic.",
      tags: ["VR", "Unity", "Puzzle Design", "Technical Design"],
      quote: {
        text: "A mind-bending journey through impossible spaces that challenges perception and rewards clever thinking.",
        source: "VR Gaming Magazine"
      },
      stats: { teamSize: "Team 32 (BUas IGAD Y2)", duration: "2 months", platforms: ["VR"] },
      tech: ["Unity", "VR Development", "Non-Euclidean Geometry", "Physics Simulation"],
      contributions: [
        "Designed and implemented the Entanglement Gun, linking objects to move in unison.",
        "Created non-euclidean spaces that challenge perception while staying navigable.",
        "First project where I acted as vision owner for the overall design."
      ],
      narrative: "Quantum challenges players to navigate an impossible, multi-dimensional laboratory: a 3×3m room whose doors open onto logic-defying spaces. The core mechanic, the Entanglement Gun, links any two objects so they move together, enabling creative spatial puzzles.\n\nIt was the first project where I owned the vision. We eventually shelved it: VR's market was too niche to justify the build. Calling that, killing a project you love on the evidence, is a skill that carries straight into engineering trade-offs.",
      link: ""
    }
  ],

  /* ---- Engineering & infrastructure (Feiko's REAL public repos) -------- */
  infra: [
    {
      id: "arid-async-backend",
      title: "AridAsyncBackend",
      icon: "server",
      desc: "An asynchronous multiplayer backend built to experiment with co-op for Arid: game infrastructure, end to end.",
      tags: ["Multiplayer", "Backend", "Realtime"],
      link: "https://github.com/Feikovandijk/AridAsyncBackend"
    },
    {
      id: "gamebacklog",
      title: "GameBacklog",
      icon: "library",
      desc: "A Steam library management system aimed at game developers: track, organise and make sense of what you're playing and shipping.",
      tags: ["Full-stack", "Steam API", "Game Dev"],
      link: "https://github.com/Feikovandijk/GameBacklog"
    },
    {
      id: "gitops",
      title: "GitOps",
      icon: "git-branch",
      desc: "Declarative GitOps configuration: the source of truth for cluster state, reconciled continuously.",
      tags: ["Flux", "Kubernetes", "IaC"],
      link: "https://github.com/Feikovandijk/GitOps"
    },
    {
      id: "k3s-poc-stack",
      title: "k3s-poc-stack",
      icon: "boxes",
      desc: "A lightweight k3s proof-of-concept stack: homelab-grade Kubernetes for running real workloads on the edge.",
      tags: ["k3s", "Helm", "Self-hosted"],
      link: "https://github.com/Feikovandijk/k3s-poc-stack"
    },
    {
      id: "borg-ui",
      title: "borg-ui",
      icon: "archive",
      desc: "Replaces complex Borg Backup terminal commands with a clean web UI: create, schedule and restore backups in a few clicks.",
      tags: ["Backups", "Web UI", "Ops"],
      link: "https://github.com/Feikovandijk/borg-ui"
    },
    {
      id: "ut-ctf-heatmap",
      title: "UT-CTFHeatmap",
      icon: "map",
      desc: "An Unreal Tournament mutator that captures and visualises Capture-the-Flag movement as heatmaps.",
      tags: ["Unreal", "Data Viz", "Mutator"],
      link: "https://github.com/Feikovandijk/UT-CTFHeatmap"
    }
  ],

  achievements: [
    { title: "Arid: Best Student Game, Dutch Game Awards", desc: "Archived at the Dutch Institute of Sound & Vision.", year: "2021" },
    { title: "Arid: Best Design & Audience Award, BUas", desc: "Won at the yearly award ceremony at Breda University of Applied Sciences.", year: "2021" },
    { title: "Arid: Hobby GOTY nominee, GDWC", desc: "Nominated as Hobby Game of the Year at the Game Development World Championships.", year: "2021" },
    { title: "Streamlined: Best Design & Best Art, BUas", desc: "Streamlined Mastermind won Best Design & Best Art.", year: "2020" }
  ],

  smallProjects: [
    { id: "streamlined", title: "Streamlined Mastermind", image: "../../assets/Streamlined.png", desc: "A modern take on the classic Mastermind board game: sleek UI, sharp gameplay.", tags: ["Game Design", "UI/UX", "Unreal"], link: "https://buas.itch.io/streamlinedmastermind" },
    { id: "aztech", title: "Aztech", image: "../../assets/Aztech.png", desc: "An action-adventure set in an ancient Aztec world, mixing history with modern play.", tags: ["Game Design", "Level Design", "Unreal"], link: "https://feikovandijk.itch.io/aztech" },
    { id: "demons", title: "Demon's Heaven", image: "../../assets/DemonsHeaven.png", desc: "A challenging platformer with unique demonic mechanics and atmospheric levels.", tags: ["Game Design", "Level Design", "Unreal"], link: "" }
  ]
};
