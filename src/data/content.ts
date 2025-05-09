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
      alt: "Feiko climbing outdoors"
    },
    {
      url: "https://images.squarespace-cdn.com/content/v1/665f0ae5b7fe1e7c8f450174/b93f7105-8eb4-45cc-adb4-afa4bd71f50b/IMG20231016161926.jpg?format=2500w",
      alt: "Feiko in a creative environment"
    },
    {
      url: "https://images.squarespace-cdn.com/content/v1/665f0ae5b7fe1e7c8f450174/c196bf3b-d27d-4086-9a83-afcd466f065f/GLOW-2024-20-EDIT.jpg?format=2500w",
      alt: "Feiko at a gaming event"
    }
  ],
  skills: [
    "Systems Design",
    "Level Design",
    "Player Experience",
    "Unity",
    "Unreal Engine",
    "Prototyping",
    "User Research"
  ],
  contact: {
    email: "mail@feiko.org",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername"
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
    imageUrl: "/PortfolioProject/assets/Arid2.png",
    quote: { text: "", source: "" },
    projectStats: {
      teamSize: "",
      duration: "",
      platforms: [],
      technologies: []
    },
    keyContributions: [],
    mainNarrative: "",
    bodyTextLeft: "",
    bodyTextRight: "",
    mediaShowcase: [],
    designDocs: [],
    links: {
      steam: "https://store.steampowered.com/",
      youtube: "https://youtube.com/"
    }
  },
  {
    id: "project-2",
    title: "ARID",
    description: "A gritty, exploration-survival experience set in the Atacama Desert; the driest place on earth.",
    mainRole: "Design Lead, Technical Designer",
    supportingRole: "Analytics & Marketing",
    timeline: "2020 - 2022",
    imageUrl: "/PortfolioProject/assets/Arid.png",
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
      steam: "https://store.steampowered.com/",
      youtube: "https://youtube.com/"
    },
    developmentPhases: {
      concepting: {
        videoUrl: "https://www.youtube.com/embed/your-concept-video-id",
        description: "The concepting phase of Arid began with a simple question: 'What if we made a survival game set in the driest place on Earth?' This phase was marked by extensive research into the Atacama Desert, its unique challenges, and the psychological aspects of survival in such an extreme environment. We explored various gameplay mechanics that would emphasize the harsh conditions while maintaining engaging gameplay.",
        screenshots: [
          "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
          "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
        ]
      },
      preProduction: {
        videoUrl: "https://www.youtube.com/embed/your-preprod-video-id",
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
        videoUrl: "https://www.youtube.com/embed/your-release-video-id",
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
    title: "Neon Nights",
    description: "A cyberpunk-themed puzzle platformer where players manipulate light and shadow to solve environmental challenges.",
    mainRole: "Technical Designer",
    supportingRole: "Level Designer",
    timeline: "2021 - 2022",
    imageUrl: "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg",
    quote: { text: "", source: "" },
    projectStats: {
      teamSize: "",
      duration: "",
      platforms: [],
      technologies: []
    },
    keyContributions: [],
    mainNarrative: "",
    bodyTextLeft: "",
    bodyTextRight: "",
    mediaShowcase: [],
    designDocs: [],
    links: {
      steam: "https://store.steampowered.com/",
      youtube: "https://youtube.com/"
    }
  },
  {
    id: "project-4",
    title: "Quantum Quest",
    description: "A physics-based puzzle game where players manipulate quantum states to solve increasingly complex challenges.",
    mainRole: "Game Designer",
    supportingRole: "Technical Designer",
    timeline: "2020 - 2021",
    imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    quote: { text: "", source: "" },
    projectStats: {
      teamSize: "",
      duration: "",
      platforms: [],
      technologies: []
    },
    keyContributions: [],
    mainNarrative: "",
    bodyTextLeft: "",
    bodyTextRight: "",
    mediaShowcase: [],
    designDocs: [],
    links: {
      steam: "https://store.steampowered.com/"
    }
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
    title: "Game Jam: Pixel Adventure",
    description: "A 48-hour game jam project exploring pixel art and retro game mechanics.",
    tags: ["Game Jam", "Pixel Art", "Unity"],
    link: "https://itch.io/",
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
  },
  {
    id: "small-2",
    title: "VR Prototype: Space Explorer",
    description: "Early prototype for a VR space exploration game focusing on zero-gravity movement.",
    tags: ["VR", "Prototype", "Unreal"],
    link: "https://github.com/"
  },
  {
    id: "small-3",
    title: "Mobile Game: Color Match",
    description: "A simple but addictive color-matching puzzle game for mobile platforms.",
    tags: ["Mobile", "Puzzle", "Unity"],
    imageUrl: "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg"
  }
];