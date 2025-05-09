import { AboutContent, Project, Achievement, SmallProject } from '../types';

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
    timeline: "2023 - Present",
    process: {
      challenge: "Creating engaging gameplay mechanics that effectively communicate environmental concepts without sacrificing entertainment value.",
      solution: "Implemented a dynamic ecosystem simulation where player actions have visible long-term consequences. Designed intuitive feedback systems to help players understand the impact of their decisions.",
      outcome: "Players reported both high engagement and increased awareness of environmental issues. The game maintains a 4.5/5 rating with over 100,000 downloads."
    },
    imageUrl: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
    links: {
      steam: "https://store.steampowered.com/",
      youtube: "https://youtube.com/"
    }
  },
  {
    id: "project-2",
    title: "ARID",
    description: "A gritty, exploration-survival experience set in the Atacama Desert; the driest place on earth.",
    mainRole: "Game Designer",
    supportingRole: "Technical Designer",
    timeline: "2020 - 2022",
    process: {
      challenge: "Balancing survival mechanics with exploration to create an engaging yet challenging experience.",
      solution: "Developed a dynamic weather system and resource distribution that encourages strategic planning and exploration.",
      outcome: "Successfully launched on Steam with 'Very Positive' reviews. Players particularly praised the atmospheric environment and survival mechanics."
    },
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
    links: {
      steam: "https://store.steampowered.com/"
    }
  },
  {
    id: "project-3",
    title: "Neon Nights",
    description: "A cyberpunk-themed puzzle platformer where players manipulate light and shadow to solve environmental challenges.",
    mainRole: "Technical Designer",
    supportingRole: "Level Designer",
    timeline: "2021 - 2022",
    process: {
      challenge: "Creating an intuitive light manipulation system that feels natural while maintaining challenging puzzle complexity.",
      solution: "Developed a modular light system that allows for dynamic shadow casting and light source manipulation. Created a visual language that helps players understand puzzle mechanics.",
      outcome: "The game received critical acclaim for its innovative mechanics and atmospheric design. Featured in several indie game showcases and won 'Best Puzzle Game' at the Indie Game Awards 2022."
    },
    imageUrl: "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg",
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
    process: {
      challenge: "Making complex quantum mechanics concepts accessible and fun through gameplay.",
      solution: "Created an abstracted version of quantum mechanics that maintains scientific accuracy while being approachable. Designed a progressive learning curve that introduces concepts gradually.",
      outcome: "The game was praised for its educational value and engaging gameplay. Used in several physics education programs and received a special mention at the Games for Learning Awards."
    },
    imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
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