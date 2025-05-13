import type { AboutContent, Project, Achievement, SmallProject } from '../types/index';

export const aboutContent: AboutContent = {
  name: "Hi! I'm Feiko.",
  title: "Game & Technical Designer",
  bio: `I'm a technical and game designer who loves turning challenges into engaging experiences. I've been lucky enough to have worked on a variety of projects—from coding to crafting gameplay—and each one has taught me something new. As a generalist, I'm quick to learn, adapt, and use my diverse experience to help shape any project into something fantastic.

I'm naturally curious—whether I'm solving tricky software issues or diving into hands-on challenges like car projects and home renovations (and occasionally 'fixing' something that wasn't broken keeps life interesting). Every unconventional project is an opportunity to learn something new.

I also have a deep interest in understanding what makes games truly click. My Master's thesis delved into how singleplayer survival games affect our minds and how multiplayer elements change the way we play, insights that continue to shape my approach to design.

I value collaboration and believe that great games are built by teams who share ideas and support each other. When I'm not immersed in game development, you'll likely find me outdoors, climbing rocks and embracing new adventures.`,
  images: [
    {
      url: "https://images.squarespace-cdn.com/content/v1/665f0ae5b7fe1e7c8f450174/4aed8881-5205-492a-887d-694b9ce8a94b/Snapchat-486029659.jpg?format=2500w",
      alt: ""
    },
    {
      url: "https://images.squarespace-cdn.com/content/v1/665f0ae5b7fe1e7c8f450174/b93f7105-8eb4-45cc-adb4-afa4bd71f50b/IMG20231016161926.jpg?format=2500w",
      alt: ""
    },
    {
      url: "https://images.squarespace-cdn.com/content/v1/665f0ae5b7fe1e7c8f450174/c196bf3b-d27d-4086-9a83-afcd466f065f/GLOW-2024-20-EDIT.jpg?format=2500w",
      alt: ""
    }
  ],
  skills: [
    "Technical Design",
    "Systems Design",
    "Player Experience",
    "Unity",
    "Unreal Engine",
    "P4",
    "Git",
    "Teamcity",
    "Jenkins",
    "AWS",
    "Jira",
    "Google Analytics",
    "C#",
    "Python",
    "User Research",
    "OSINT",
    "CTF Competitions"
  ],
  contact: {
    email: "mail@feiko.org",
    linkedin: "https://www.linkedin.com/in/feikovandijk/",
    github: "https://github.com/Feikovandijk",
    ctftime: "https://ctftime.org/team/165809"
  }
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Arid 2.0",
    description: "Development of an untitled sequel to Arid, alongside founding and expanding Viscacha Studios.",
    mainRole: "Lead Game Design, Business Development",
    supportingRole: "Technical Design",
    timeline: "2023 - 2025",
    imageUrl: "/assets/Arid2.png",
    quote: { text: "", source: "" },
    projectStats: {
      teamSize: "5 Developers",
      duration: "16 Months",
      platforms: ["Unreleased"],
      technologies: [
        "Unreal Engine 5",
        "Perforce",
        "Jira",
        "Teamcity",
        "Google Analytics",
        "AWS"
      ]
    },
    keyContributions: [
      "Designed and implemented new core gameplay systems that enriched the player's sense of immersion and supported dynamic storytelling within the game's existing IP",
      "Established Viscacha Studios' legal and financial structure, securing a strong foundation for sustainable growth",
      "Worked closely with multidisciplinary teams to prototype, refine, and implement new gameplay features, ensuring alignment with project vision across design, art, and engineering departments",
      "Led the development of pitch materials, production schedules, and budget forecasts, securing funding to support ongoing development",
      "Represented Viscacha Studios and Arid 2.0 at major conferences like GDC, Gamescom, and INDIGO, establishing valuable industry connections and expanding the studio's visibility",
      "Utilized tools like Perforce, Asana, Jira, and Jenkins to maintain project momentum and alignment across a distributed team"
    ],
    mainNarrative: "This dual role involved not only designing immersive survival mechanics but also establishing the business structure, securing funding, and building essential industry relationships, all while actively driving the sequel's development.",
    bodyTextLeft: "",
    bodyTextRight: "",
    mediaShowcase: [],
    designDocs: [],
    links: {}
  },
  {
    id: "project-2",
    title: "ARID",
    description: "A gritty, exploration-survival experience set in the Atacama Desert; the driest place on earth.",
    mainRole: "Design Lead, Technical Designer",
    supportingRole: "Analytics & Marketing",
    timeline: "2020 - 2022",
    imageUrl: "/assets/Arid.png",
    quote: { 
      text: "The biggest threat to my survival in Arid, apart from the relentless sun, is my own malfunctioning brain.",
      source: "Christopher Livingstone, PCGamer"
    },
    projectStats: {
      teamSize: "21 Developers",
      duration: "9 Months",
      platforms: ["Steam", "Playstation 4"],
      technologies: [
        "Unreal Engine",
        "GameAnalytics",
        "Adobe CC",
        "Google Cloud Platform",
        "Jenkins CI",
        "Perforce",
        "Jira",
        "SteamWorks",
        "Rider"
      ]
    },
    keyContributions: [
      "Directed design of features such as base upgrades, character & equipment, weather & day/night cycle, status effects (buffs & debuffs)",
      "Supported team on features such as environment effects, crafting systems and UI/UX",
      "So much more! Keep reading for more info."
    ],
    mainNarrative: "Arid started out as a student project but ended up being an unexpected mini-hit. We originally set a goal of 20,000 downloads after release, which we honestly weren't sure we'd hit. To our surprise, the game took off and ended up with over 200,000 downloads in the first month after release.\n\nArid is a gritty, exploration-survival experience that challenges players in surviving the most arid place in the world. By using your skills and adaptation, you must face the loneliness, the extreme temperatures, and mysteries of the Atacama Desert.\n\nArid was the project where I first felt like a real game developer. Over the course of a year, I had the incredible opportunity to work alongside 20 talented and inspiring teammates, bringing a game from concept to release. It was my first full-cycle development experience, and seeing it all come together into a product worth being genuinely proud of was a defining moment in my path as developer.\n\nAs Design Lead and Technical Designer for Arid, my core responsibilities were centered around shaping and guiding the game's development. I partnered with the Creative Director to establish the overall game vision and ensured it was consistently applied. A key part of my role involved regular communication with the Art and Tech teams to translate design intentions into reality.\n\nI also led the design of key gameplay features and supported other designers in their work, aiming for a cohesive and engaging player experience. Beyond core design, I also frequently addressed various development challenges, from gameplay optimization and analytics implementation to CI/CD pipeline troubleshooting, ensuring smooth project progress and a polished final product.",
    bodyTextLeft: "",
    bodyTextRight: "",
    mediaShowcase: [],
    designDocs: [],
    links: {
      steam: "https://store.steampowered.com/app/1463730/Arid/"
    },
    developmentPhases: {
      concepting: {
        videoUrl: "https://www.youtube.com/embed/I-pEr80L0Qg",
        description: "The concepting phase of Arid began with a simple question: 'What if we made a survival game set in the driest place on Earth?' This phase was marked by extensive research into the Atacama Desert, its unique challenges, and the psychological aspects of survival in such an extreme environment. We explored various gameplay mechanics that would emphasize the harsh conditions while maintaining engaging gameplay.",
        screenshots: [
          "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
          "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
        ]
      },
      preProduction: {
        videoUrl: "https://www.youtube.com/embed/L6TzHBb8jGo",
        description: "During pre-production, we focused on establishing the core gameplay loops and technical foundations. This included prototyping the survival mechanics, weather systems, and base building features. We also began developing our art style, aiming for a balance between realism and stylized visuals that would work well with our technical constraints.",
        screenshots: [
          "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
          "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
        ]
      },
      production: {
        videoUrl: "https://www.youtube.com/embed/your-production-video-id",
        description: "The production phase saw the implementation of all major features and systems. We iterated heavily on the survival mechanics, balancing difficulty and player engagement. The team grew significantly during this phase, requiring careful coordination and communication to maintain consistency across all aspects of the game.",
        screenshots: [
          "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
          "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
        ]
      },
      release: {
        videoUrl: "https://www.youtube.com/embed/5OVwWgUvLCo",
        description: "The release phase was marked by intense optimization, bug fixing, and polish. We conducted extensive playtesting sessions and implemented feedback from our community. The launch exceeded our expectations, with over 200,000 downloads in the first month. The success led to opportunities for console ports and additional content updates.",
        screenshots: [
          "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
          "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
        ]
      }
    }
  },
  {
    id: "project-3",
    title: "Master's Thesis",
    description: "A research study investigating how multiplayer integration impacts the core experience of solitude and challenge in singleplayer survival games.",
    mainRole: "User Researcher",
    supportingRole: "Data Analysis & Academic Writing",
    timeline: "2023 - 2024",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/665f0ae5b7fe1e7c8f450174/2db9c798-f40c-4614-b50a-ad618367dda3/Screenshot+2024-10-23+at+13.50.55.png?format=2500w",
    quote: { 
      text: "Adding multiplayer isn't just about adding features; it's a fundamental design decision that impacts the game's emotional and systemic core.",
      source: "Master's Thesis Research"
    },
    projectStats: {
      teamSize: "Individual Research",
      duration: "9 Months",
      platforms: [],
      technologies: [
        "Qualitative Research",
        "Quantitative Research",
        "Semi-Structured Interviews",
        "Gameplay Analysis",
        "MaxQDA",
      ]
    },
    keyContributions: [
      "Investigated how integrating multiplayer impacts the core feeling of solitude in singleplayer survival games",
      "Designed and conducted qualitative research, interviewing 14 players and analyzing their gameplay experiences",
      "Managed participant recruitment and data collection, gathering insights from over 64 gameplay sessions",
      "Analyzed player feedback and gameplay to identify key emotional and systemic shifts between solo and co-op play",
    ],
    mainNarrative: `Survival games excel at creating tension through isolation and vulnerability. As developers, we know the power of solitude in this genre. But what happens when we introduce co-op? How does adding other players change the emotional core and the systemic balance we carefully designed for a solo experience? My Master's thesis dove into this exact question.

Using Arid, The Long Dark, and Green Hell as case studies, I explored how players feel and play differently when shifting from solo to multiplayer survival. Through analyzing gameplay recordings and conducting in-depth interviews, I focused on the player's perception of solitude, risk, and immersion.

The research highlighted a crucial trade-off:
• In Singleplayer: Solitude amplifies immersion, tension, and the satisfaction of overcoming challenges alone. Players often value these intense, personal moments of struggle and triumph, connecting deeply with the game world. Negative emotions like vulnerability aren't necessarily bad; they often deepen engagement, much like the "Sad Film Paradox."
• In Multiplayer: The desire for social interaction is a key driver. Co-op offers shared experiences and camaraderie, reducing feelings of isolation. However, this social safety net often leads players to take more risks and allows teams to overcome systemic challenges (like resource management or progression hurdles) much faster through distributed labor (e.g., "base builders" vs. "explorers" in Green Hell). This can fundamentally alter the game's intended pacing, challenge, and atmospheric tension.

Coming from a hands-on development background (especially on Arid), applying academic research methods was a new challenge. It required a different kind of iteration – refining questions, analyzing subjective data, and structuring arguments rigorously. It reinforced how valuable diverse feedback is, whether from players or academic peers.

Ultimately, the findings suggest that adding multiplayer isn't just about adding features; it's a fundamental design decision that impacts the game's emotional and systemic core. It requires intentional design – whether that means scaling difficulty, forcing temporary isolation in co-op, or even choosing to preserve the unique power of the solitary experience, as seen with The Long Dark. The goal is to ensure multiplayer enhances rather than dilutes the core survival fantasy you aim to deliver.`,
    bodyTextLeft: "Research Institution: Breda University of Applied Sciences\nDegree: Master of Science in Game Technology\nCore Focus: Player Experience, Solitude vs. Social Play, Multiplayer Impact, Survival Genre Mechanics",
    bodyTextRight: "Case Studies: Arid, The Long Dark, Green Hell\nMethods: Qualitative Research, Semi-Structured Interviews, Gameplay Recording & Analysis",
    mediaShowcase: [],
    designDocs: [],
    links: {
      researchgate: "https://www.researchgate.net/publication/381547877_Implementing_Multiplayer_in_Single_Player_games_Analysis_of_Multiplayer_Integration_in_Singleplayer_Survival_Games",
      blog: "https://blog.feikovandijk.com/balancing-solitude-and-social-play-design-implications-for-survival-games/"
    }
  },
  {
    id: "project-4",
    title: "Quantum",
    description: "An immersive VR puzzle game where players navigate an impossible, non-euclidean laboratory to repair a futuristic machine and unravel its secrets.",
    mainRole: "Game Designer",
    supportingRole: "Technical Designer", 
    timeline: "2019 - 2020",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/665f0ae5b7fe1e7c8f450174/e0b0d115-69a0-4037-8d2b-be51bd6cc734/QuantumLogo.png?format=2500w",
    quote: {
      text: "A mind-bending journey through impossible spaces that challenges perception and rewards clever thinking.",
      source: "VR Gaming Magazine"
    },
    projectStats: {
      teamSize: "Team 32 Marmalade 2 (BUas IGAD Y2)",
      duration: "2 Months",
      platforms: ["VR"],
      technologies: [
        "Unity",
        "VR Development",
        "Non-Euclidean Geometry",
        "Physics Simulation"
      ]
    },
    keyContributions: [
      "Designed and implemented the core Entanglement Gun mechanic, allowing players to link objects and manipulate them simultaneously",
      "Created non-Euclidean spaces that challenged player perception while maintaining intuitive navigation",
      "Developed puzzle systems that leveraged VR's physical interaction capabilities",
      "Balanced exploration and puzzle-solving elements to create a rewarding progression system"
    ],
    mainNarrative: `Quantum is an immersive VR puzzle game that challenges players to navigate an impossible, multi-dimensional laboratory. Trapped within a seemingly simple 3x3m room, players discover that doors lead to logic-defying spaces, and everyday objects like drawers can conceal entire new worlds, leveraging TARDIS-like, non-Euclidean geometry.

The game's core mechanic revolves around the Entanglement Gun, a tool that empowers players to link any two objects, causing them to move in unison. This innovative mechanic allows for creative puzzle-solving by manipulating disparate parts of the environment simultaneously.

As the Game Designer, I focused on creating an experience that emphasized physical movement and interaction within mind-bending environments where layouts shift and perception is challenged. The design philosophy centered on three key pillars: engaging movement within VR, fostering exploration and discovery in surreal spaces, and providing players with a powerful sense of agency through the unique entanglement mechanic.

The primary objective is to locate missing components and restore power to a vital machine, requiring players to utilize the entanglement mechanic and their observational skills to overcome environmental challenges. The aim was to make players feel clever and empowered as they unraveled the game's quantum mysteries.

Quantum was the first project where I acted as vision owner, where I was responsible for the overall design of the game. Overall, Quantum was a great experience for me. The combination of being vision holder and working on an experimental VR game opened my eyes to the possibilities of game design, specifically in VR environments.

Eventually we dropped the project because we did not see the VR concept as viable for market, especially considering VR in gaming is limited and a niche for gamers.  `,
    bodyTextLeft: "Project Context: BUas IGAD Year 2 Project\nTeam: Team 32 Marmalade 2\nDuration: December 2019 - January 2020",
    bodyTextRight: "Key Focus: VR Puzzle Design, Non-Euclidean Spaces, Physics-based Interactions",
    mediaShowcase: [],
    designDocs: [],
    links: {}
  }
];

export const achievements: Achievement[] = [
  {
    id: "achievement-1",
    title: "ARID: Best Student Game @ Dutch Game Awards",
    description: "Arid was awarded the Best Student Game at the Dutch Game Awards in 2021. Because of this award, Arid has been archived at the Dutch Institude of Sound & Vision, a digital archiving institute.",
    year: "2021"
  },
  {
    id: "achievement-2",
    title: "ARID: Best Design & Audience Award @ BUas",
    description: "Arid won the Best Design and Audience Awards at the yearly award ceremony at the Breda University of Applied Sciences in 2021.",
    year: "2021"
  },
  {
    id: "achievement-3",
    title: "ARID: Hobby GOTY @ GDWC",
    description: "Arid was nominated as Hobby Game of the Year at the Game Development World Championships in 2021.",
    year: "2021"
  },
  {
    id: "achievement-4",
    title: "Streamlined: Best Design & Best Art @ BUas",
    description: "Streamlined Mastermind won Best Design & Best Art at the yearly award ceremony @ Breda University of Applied Sciences.",
    year: "2020"
  },
  {
    id: "achievement-5",
    title: "Aztech: Best Design @ BUas",
    description: "Aztech received the Best Design award at Breda University of Applied Sciences.",
    year: "2019"
  }
];

export const smallProjects: SmallProject[] = [
  {
    id: "small-1",
    title: "Streamlined Mastermind",
    description: "A modern take on the classic Mastermind board game, featuring sleek UI and challenging gameplay mechanics.",
    tags: ["Game Design", "UI/UX", "Unreal"],
    link: "https://www.youtube.com/watch?v=611cwKZvmVE",
    imageUrl: "/assets/Streamlined.png"
  },
  {
    id: "small-2",
    title: "Aztech",
    description: "An action-adventure game set in an ancient Aztec world, combining historical elements with modern gameplay.",
    tags: ["Game Design", "Level Design", "Unreal"],
    link: "https://github.com/",
    imageUrl: "/assets/Aztech.png"
  },
  {
    id: "small-3",
    title: "Demon's Heaven",
    description: "A challenging platformer with unique demonic mechanics and atmospheric level design.",
    tags: ["Game Design", "Level Design", "Unreal"],
    imageUrl: "/assets/DemonsHeaven.png"
  }
];